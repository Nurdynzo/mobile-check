import {baseApi as api} from './baseApi';
export const addTagTypes = ['InsuranceProviders'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppInsuranceprovidersGetallGet: build.query<
        ApiServicesAppInsuranceprovidersGetallGetApiResponse,
        ApiServicesAppInsuranceprovidersGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InsuranceProviders/GetAll`,
          params: {
            Filter: queryArg.filter,
            TypeFilter: queryArg.typeFilter,
            CountryIdFilter: queryArg.countryIdFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['InsuranceProviders'],
      }),
      apiServicesAppInsuranceprovidersGetinsuranceprovidertypesGet: build.query<
        ApiServicesAppInsuranceprovidersGetinsuranceprovidertypesGetApiResponse,
        ApiServicesAppInsuranceprovidersGetinsuranceprovidertypesGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/InsuranceProviders/GetInsuranceProviderTypes`,
        }),
        providesTags: ['InsuranceProviders'],
      }),
      apiServicesAppInsuranceprovidersGetinsuranceproviderforeditGet:
        build.query<
          ApiServicesAppInsuranceprovidersGetinsuranceproviderforeditGetApiResponse,
          ApiServicesAppInsuranceprovidersGetinsuranceproviderforeditGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/InsuranceProviders/GetInsuranceProviderForEdit`,
            params: {Id: queryArg.id},
          }),
          providesTags: ['InsuranceProviders'],
        }),
      apiServicesAppInsuranceprovidersCreateoreditPost: build.mutation<
        ApiServicesAppInsuranceprovidersCreateoreditPostApiResponse,
        ApiServicesAppInsuranceprovidersCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InsuranceProviders/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditInsuranceProviderDto,
        }),
        invalidatesTags: ['InsuranceProviders'],
      }),
      apiServicesAppInsuranceprovidersDeleteDelete: build.mutation<
        ApiServicesAppInsuranceprovidersDeleteDeleteApiResponse,
        ApiServicesAppInsuranceprovidersDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InsuranceProviders/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['InsuranceProviders'],
      }),
      apiServicesAppInsuranceprovidersGetallinsuranceprovidersforlookuptableGet:
        build.query<
          ApiServicesAppInsuranceprovidersGetallinsuranceprovidersforlookuptableGetApiResponse,
          ApiServicesAppInsuranceprovidersGetallinsuranceprovidersforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/InsuranceProviders/GetAllInsuranceProvidersForLookupTable`,
            params: {
              Filter: queryArg.filter,
              TypeFilter: queryArg.typeFilter,
              CountryIdFilter: queryArg.countryIdFilter,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['InsuranceProviders'],
        }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as insuranceProvidersApi};
export type ApiServicesAppInsuranceprovidersGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetInsuranceProviderForViewDto;
export type ApiServicesAppInsuranceprovidersGetallGetApiArg = {
  filter?: string;
  typeFilter?: InsuranceProviderType;
  countryIdFilter?: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInsuranceprovidersGetinsuranceprovidertypesGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppInsuranceprovidersGetinsuranceprovidertypesGetApiArg =
  void;
export type ApiServicesAppInsuranceprovidersGetinsuranceproviderforeditGetApiResponse =
  /** status 200 Success */ GetInsuranceProviderForEditOutput;
export type ApiServicesAppInsuranceprovidersGetinsuranceproviderforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppInsuranceprovidersCreateoreditPostApiResponse =
  unknown;
export type ApiServicesAppInsuranceprovidersCreateoreditPostApiArg = {
  createOrEditInsuranceProviderDto: CreateOrEditInsuranceProviderDto;
};
export type ApiServicesAppInsuranceprovidersDeleteDeleteApiResponse = unknown;
export type ApiServicesAppInsuranceprovidersDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppInsuranceprovidersGetallinsuranceprovidersforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfInsuranceProviderForLookupTableDto;
export type ApiServicesAppInsuranceprovidersGetallinsuranceprovidersforlookuptableGetApiArg =
  {
    filter?: string;
    typeFilter?: InsuranceProviderType;
    countryIdFilter?: number;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type InsuranceProviderType = 'National' | 'State' | 'Private';
export type InsuranceProviderDto = {
  name?: string | null;
  isActive?: boolean;
  type?: InsuranceProviderType;
  id?: number;
};
export type GetInsuranceProviderForViewDto = {
  insuranceProvider?: InsuranceProviderDto;
  country?: string | null;
};
export type PagedResultDtoOfGetInsuranceProviderForViewDto = {
  totalCount?: number;
  items?: GetInsuranceProviderForViewDto[] | null;
};
export type CreateOrEditInsuranceProviderDto = {
  name: string;
  isActive?: boolean;
  type?: InsuranceProviderType;
  id?: number | null;
};
export type GetInsuranceProviderForEditOutput = {
  insuranceProvider?: CreateOrEditInsuranceProviderDto;
};
export type InsuranceProviderForLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfInsuranceProviderForLookupTableDto = {
  totalCount?: number;
  items?: InsuranceProviderForLookupTableDto[] | null;
};
export const {
  useApiServicesAppInsuranceprovidersGetallGetQuery,
  useApiServicesAppInsuranceprovidersGetinsuranceprovidertypesGetQuery,
  useApiServicesAppInsuranceprovidersGetinsuranceproviderforeditGetQuery,
  useApiServicesAppInsuranceprovidersCreateoreditPostMutation,
  useApiServicesAppInsuranceprovidersDeleteDeleteMutation,
  useApiServicesAppInsuranceprovidersGetallinsuranceprovidersforlookuptableGetQuery,
} = injectedRtkApi;
