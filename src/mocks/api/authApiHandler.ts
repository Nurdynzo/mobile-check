import {ApiServicesAppSessionGetcurrentlogininformationsGetApiResponse} from '@/state/services/sessionApi';
import {ApiTokenauthAuthenticatePostApiResponse} from '@/state/services/tokenAuthApi';
import {http, HttpResponse} from 'msw';

const tokenAuth = http.post(
  `${process.env.API_BASE_URL}/api/TokenAuth/Authenticate`,
  () => {
    return HttpResponse.json({
      result: {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk5OSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJJenVjaGlTYSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im9raGFlcGhpbGlwMisyQGdtYWlsLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiVk5EV0JJWUVMN0laTlhRVU40TDNYVU8yT0JVUUdRNVIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiRG9jdG9yIiwiVXNlciJdLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIyNDEiLCJ1c2VyX2xvZ2luX25hbWUiOiJNci4gSXp1Y2hpIiwic3ViIjoiOTk5IiwicHJpbWFyeV9yb2xlIjoiRG9jdG9yIiwiZmFjaWxpdHlfaWQiOiI4MjkiLCJqdGkiOiIzNmE4M2MyZC00MTgxLTRiZDgtOGRiZC00MmFhOTRiOWJlNGQiLCJpYXQiOjE3MDEwODUwNDUsInRva2VuX3ZhbGlkaXR5X2tleSI6IjlkOGY4YmEyLWFlNzktNDhkOS1iNzU5LTkxNTc4NTVhMGQwNSIsInVzZXJfaWRlbnRpZmllciI6Ijk5OUAyNDEiLCJ0b2tlbl90eXBlIjoiMCIsInJlZnJlc2hfdG9rZW5fdmFsaWRpdHlfa2V5IjoiMjUwNzgwODgtNzljZi00MTI4LTgyMzUtYzE0YmI3OGRiMmI4IiwibmJmIjoxNzAxMDg1MDQ1LCJleHAiOjE3MDExNzE0NDUsImlzcyI6IkVIUiIsImF1ZCI6IkVIUiJ9.qZuLyzd9zaWfmBfqe0G9fvdx8kwgqVCx5MHXMNV29fU',
        expireInSeconds: 1000,
        refreshToken: 'refreshToken',
        refreshTokenExpireInSeconds: 1000,
        userId: 1,
      } as ApiTokenauthAuthenticatePostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getCurrentLoggedInUser = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Session/GetCurrentLoginInformations`,
  () => {
    return HttpResponse.json({
      result: {
        user: {title: 'Mr', surname: 'Aladdin'},
        tenant: undefined,
        impersonatorTenant: undefined,
        application: undefined,
        impersonatorUser: undefined,
        theme: undefined,
      } as ApiServicesAppSessionGetcurrentlogininformationsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const authApiHandler = [tokenAuth, getCurrentLoggedInUser];
