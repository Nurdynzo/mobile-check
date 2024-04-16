import {baseApi as api} from './baseApi';
export const addTagTypes = ['Countries', 'DemoUiComponents'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppCountriesGetallGet: build.query<
        ApiServicesAppCountriesGetallGetApiResponse,
        ApiServicesAppCountriesGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Countries/GetAll`,
          params: {
            Filter: queryArg.filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Countries'],
      }),
      apiServicesAppCountriesGetcountryforeditGet: build.query<
        ApiServicesAppCountriesGetcountryforeditGetApiResponse,
        ApiServicesAppCountriesGetcountryforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Countries/GetCountryForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Countries'],
      }),
      apiServicesAppCountriesCreateoreditPost: build.mutation<
        ApiServicesAppCountriesCreateoreditPostApiResponse,
        ApiServicesAppCountriesCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Countries/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditCountryDto,
        }),
        invalidatesTags: ['Countries'],
      }),
      apiServicesAppCountriesDeleteDelete: build.mutation<
        ApiServicesAppCountriesDeleteDeleteApiResponse,
        ApiServicesAppCountriesDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Countries/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['Countries'],
      }),
      apiServicesAppCountriesGetcountriesGet: build.query<
        ApiServicesAppCountriesGetcountriesGetApiResponse,
        ApiServicesAppCountriesGetcountriesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Countries/GetCountries`,
          params: {Filter: queryArg.filter},
        }),
        providesTags: ['Countries'],
      }),
      apiServicesAppCountriesGetcountryphonecodesGet: build.query<
        ApiServicesAppCountriesGetcountryphonecodesGetApiResponse,
        ApiServicesAppCountriesGetcountryphonecodesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Countries/GetCountryPhoneCodes`,
          params: {Filter: queryArg.filter},
        }),
        providesTags: ['Countries'],
      }),
      apiServicesAppCountriesGetnationalitiesGet: build.query<
        ApiServicesAppCountriesGetnationalitiesGetApiResponse,
        ApiServicesAppCountriesGetnationalitiesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Countries/GetNationalities`,
          params: {Filter: queryArg.filter},
        }),
        providesTags: ['Countries'],
      }),
      apiServicesAppDemouicomponentsGetcountriesGet: build.query<
        ApiServicesAppDemouicomponentsGetcountriesGetApiResponse,
        ApiServicesAppDemouicomponentsGetcountriesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/DemoUiComponents/GetCountries`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['DemoUiComponents'],
      }),
      apiServicesAppDemouicomponentsSendandgetselectedcountriesPost:
        build.mutation<
          ApiServicesAppDemouicomponentsSendandgetselectedcountriesPostApiResponse,
          ApiServicesAppDemouicomponentsSendandgetselectedcountriesPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/DemoUiComponents/SendAndGetSelectedCountries`,
            method: 'POST',
            body: queryArg.body,
          }),
          invalidatesTags: ['DemoUiComponents'],
        }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as countriesApi};
export type ApiServicesAppCountriesGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetCountryForViewDto;
export type ApiServicesAppCountriesGetallGetApiArg = {
  filter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppCountriesGetcountryforeditGetApiResponse =
  /** status 200 Success */ GetCountryForEditOutput;
export type ApiServicesAppCountriesGetcountryforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppCountriesCreateoreditPostApiResponse = unknown;
export type ApiServicesAppCountriesCreateoreditPostApiArg = {
  createOrEditCountryDto: CreateOrEditCountryDto;
};
export type ApiServicesAppCountriesDeleteDeleteApiResponse = unknown;
export type ApiServicesAppCountriesDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppCountriesGetcountriesGetApiResponse =
  /** status 200 Success */ ListResultDtoOfGetCountriesForListDto;
export type ApiServicesAppCountriesGetcountriesGetApiArg = {
  filter?: string;
};
export type ApiServicesAppCountriesGetcountryphonecodesGetApiResponse =
  /** status 200 Success */ ListResultDtoOfGetCountryPhoneCodesForListDto;
export type ApiServicesAppCountriesGetcountryphonecodesGetApiArg = {
  filter?: string;
};
export type ApiServicesAppCountriesGetnationalitiesGetApiResponse =
  /** status 200 Success */ GetNationalitiesOutput[];
export type ApiServicesAppCountriesGetnationalitiesGetApiArg = {
  filter?: string;
};
export type ApiServicesAppDemouicomponentsGetcountriesGetApiResponse =
  /** status 200 Success */ NameValueOfString[];
export type ApiServicesAppDemouicomponentsGetcountriesGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppDemouicomponentsSendandgetselectedcountriesPostApiResponse =
  /** status 200 Success */ NameValueOfString[];
export type ApiServicesAppDemouicomponentsSendandgetselectedcountriesPostApiArg =
  {
    body: NameValueOfString[];
  };
export type CountryDto = {
  name?: string | null;
  nationality?: string | null;
  code?: string | null;
  phoneCode?: string | null;
  currencySymbol?: string | null;
  currency?: string | null;
  currencyCode?: string | null;
  id?: number;
};
export type GetCountryForViewDto = {
  country?: CountryDto;
};
export type PagedResultDtoOfGetCountryForViewDto = {
  totalCount?: number;
  items?: GetCountryForViewDto[] | null;
};
export type CreateOrEditCountryDto = {
  name: string;
  nationality: string;
  code: string;
  phoneCode: string;
  id?: number | null;
};
export type GetCountryForEditOutput = {
  country?: CreateOrEditCountryDto;
};
export type GetCountriesForListDto = {
  id?: number;
  countryCode?: string | null;
  countryName?: string | null;
};
export type ListResultDtoOfGetCountriesForListDto = {
  items?: GetCountriesForListDto[] | null;
};
export type GetCountryPhoneCodesForListDto = {
  countryCode?: string | null;
  phoneCode?: string | null;
};
export type ListResultDtoOfGetCountryPhoneCodesForListDto = {
  items?: GetCountryPhoneCodesForListDto[] | null;
};
export type GetNationalitiesOutput = {
  id?: number;
  name?: string | null;
};
export type NameValueOfString = {
  name?: string | null;
  value?: string | null;
};
export const {
  useApiServicesAppCountriesGetallGetQuery,
  useApiServicesAppCountriesGetcountryforeditGetQuery,
  useApiServicesAppCountriesCreateoreditPostMutation,
  useApiServicesAppCountriesDeleteDeleteMutation,
  useApiServicesAppCountriesGetcountriesGetQuery,
  useApiServicesAppCountriesGetcountryphonecodesGetQuery,
  useApiServicesAppCountriesGetnationalitiesGetQuery,
  useApiServicesAppDemouicomponentsGetcountriesGetQuery,
  useApiServicesAppDemouicomponentsSendandgetselectedcountriesPostMutation,
} = injectedRtkApi;
