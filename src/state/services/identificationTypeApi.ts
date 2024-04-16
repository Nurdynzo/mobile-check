import {baseApi as api} from './baseApi';
export const addTagTypes = ['IdentificationType'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppIdentificationtypeGetidentificationtypesGet: build.query<
        ApiServicesAppIdentificationtypeGetidentificationtypesGetApiResponse,
        ApiServicesAppIdentificationtypeGetidentificationtypesGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/IdentificationType/GetIdentificationTypes`,
        }),
        providesTags: ['IdentificationType'],
      }),
      apiServicesAppIdentificationtypeGetidentificationtypeswithlabelGet:
        build.query<
          ApiServicesAppIdentificationtypeGetidentificationtypeswithlabelGetApiResponse,
          ApiServicesAppIdentificationtypeGetidentificationtypeswithlabelGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/IdentificationType/GetIdentificationTypesWithLabel`,
          }),
          providesTags: ['IdentificationType'],
        }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as identificationTypeApi};
export type ApiServicesAppIdentificationtypeGetidentificationtypesGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppIdentificationtypeGetidentificationtypesGetApiArg =
  void;
export type ApiServicesAppIdentificationtypeGetidentificationtypeswithlabelGetApiResponse =
  /** status 200 Success */ IdentificationTypeDto[];
export type ApiServicesAppIdentificationtypeGetidentificationtypeswithlabelGetApiArg =
  void;
export type IdentificationTypeDto = {
  label?: string | null;
  value?: string | null;
};
export const {
  useApiServicesAppIdentificationtypeGetidentificationtypesGetQuery,
  useApiServicesAppIdentificationtypeGetidentificationtypeswithlabelGetQuery,
} = injectedRtkApi;
