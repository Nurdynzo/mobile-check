import {baseApi as api} from './baseApi';
export const addTagTypes = ['Religion'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppReligionGetreligionsGet: build.query<
        ApiServicesAppReligionGetreligionsGetApiResponse,
        ApiServicesAppReligionGetreligionsGetApiArg
      >({
        query: () => ({url: `/api/services/app/Religion/GetReligions`}),
        providesTags: ['Religion'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as religionApi};
export type ApiServicesAppReligionGetreligionsGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppReligionGetreligionsGetApiArg = void;
export const {useApiServicesAppReligionGetreligionsGetQuery} = injectedRtkApi;
