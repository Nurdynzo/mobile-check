import {baseApi as api} from './baseApi';
export const addTagTypes = ['MaritalStatus'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppMaritalstatusGetmaritalstatusesGet: build.query<
        ApiServicesAppMaritalstatusGetmaritalstatusesGetApiResponse,
        ApiServicesAppMaritalstatusGetmaritalstatusesGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/MaritalStatus/GetMaritalStatuses`,
        }),
        providesTags: ['MaritalStatus'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as maritalStatusApi};
export type ApiServicesAppMaritalstatusGetmaritalstatusesGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppMaritalstatusGetmaritalstatusesGetApiArg = void;
export const {useApiServicesAppMaritalstatusGetmaritalstatusesGetQuery} =
  injectedRtkApi;
