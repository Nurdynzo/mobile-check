import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import * as z from 'zod';
import {localStorage, localStorageKeys} from '@/utils/localStorage';
import {logOut} from '../slices/auth/auth';
import AuthPayload from '@/types/authPayload';
import {RefreshTokenResult} from './tokenAuthApi';

const abpApiResponseSchema = z.object({
  result: z.any().optional(),
  targetUrl: z.union([z.string(), z.null()]),
  success: z.boolean(),
  error: z
    .object({
      code: z.number().optional(),
      message: z.string(),
      details: z.string().optional(),
      validationErrors: z.any().optional(),
    })
    .optional()
    .nullable(),
  unAuthorizedRequest: z.boolean(),
  __abp: z.boolean(),
});

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_BASE_URL,
  prepareHeaders(headers) {
    const authPayload = localStorage.get<AuthPayload>(
      localStorageKeys.ACCESS_TOKEN,
    );
    if (authPayload && authPayload.accessToken !== null) {
      headers.set('Authorization', `Bearer ${authPayload.accessToken}`);
    }
    return headers;
  },
});

const initializeApiCall: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.data) {
    const validatedResult = abpApiResponseSchema.parse(result.data);
    return {...result, data: validatedResult.result};
  }

  return result;
};

const getRefreshToken = async (
  authPayload: AuthPayload | null,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  const tokenRefreshResult = await baseQuery(
    {
      url: '/api/TokenAuth/RefreshToken',
      params: {refreshToken: `${authPayload?.refreshToken}`},
      method: 'POST',
    },
    api,
    extraOptions,
  );

  if (tokenRefreshResult.data) {
    const refreshData = abpApiResponseSchema.parse(tokenRefreshResult.data)
      .result as RefreshTokenResult;

    const accessTokenExpirationTimeInMs =
      (refreshData.expireInSeconds ?? 0) * 1000;

    const newAuthPayload: AuthPayload = {
      accessToken: refreshData.accessToken as string,
      refreshToken: authPayload?.refreshToken,
      expiresAt: new Date(Date.now() + accessTokenExpirationTimeInMs).getTime(),
    };

    localStorage.store(localStorageKeys.ACCESS_TOKEN, newAuthPayload);
  }

  return tokenRefreshResult;
};

const abpBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const authPayload = localStorage.get<AuthPayload>(
    localStorageKeys.ACCESS_TOKEN,
  );

  const currentDateTime = new Date(Date.now()).getTime();

  if (authPayload && authPayload.expiresAt < currentDateTime) {
    const tokenRefreshResult = await getRefreshToken(
      authPayload,
      api,
      extraOptions,
    );

    if (tokenRefreshResult.data) {
      return await initializeApiCall(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
      return tokenRefreshResult;
    }
  }

  return await initializeApiCall(args, api, extraOptions);
};

export const baseApi = createApi({
  baseQuery: abpBaseQuery,
  endpoints: () => ({}),
  tagTypes: ['Appointment', 'Investigation', 'PhysicalExaminations'],
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
});
