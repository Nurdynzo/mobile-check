import {baseApi as api} from './baseApi';
export const addTagTypes = ['District'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppDistrictGetallGet: build.query<
        ApiServicesAppDistrictGetallGetApiResponse,
        ApiServicesAppDistrictGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/District/GetAll`,
          params: {
            Filter: queryArg.filter,
            RegionIdFilter: queryArg.regionIdFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['District'],
      }),
      apiServicesAppDistrictGetdistrictforeditGet: build.query<
        ApiServicesAppDistrictGetdistrictforeditGetApiResponse,
        ApiServicesAppDistrictGetdistrictforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/District/GetDistrictForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['District'],
      }),
      apiServicesAppDistrictCreateoreditPost: build.mutation<
        ApiServicesAppDistrictCreateoreditPostApiResponse,
        ApiServicesAppDistrictCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/District/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditDistrictDto,
        }),
        invalidatesTags: ['District'],
      }),
      apiServicesAppDistrictDeleteDelete: build.mutation<
        ApiServicesAppDistrictDeleteDeleteApiResponse,
        ApiServicesAppDistrictDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/District/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['District'],
      }),
      apiServicesAppDistrictGetdistrictsGet: build.query<
        ApiServicesAppDistrictGetdistrictsGetApiResponse,
        ApiServicesAppDistrictGetdistrictsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/District/GetDistricts`,
          params: {Filter: queryArg.filter},
        }),
        providesTags: ['District'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as districtApi};
export type ApiServicesAppDistrictGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetDistrictForViewDto;
export type ApiServicesAppDistrictGetallGetApiArg = {
  filter?: string;
  regionIdFilter?: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppDistrictGetdistrictforeditGetApiResponse =
  /** status 200 Success */ GetDistrictForEditOutput;
export type ApiServicesAppDistrictGetdistrictforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppDistrictCreateoreditPostApiResponse = unknown;
export type ApiServicesAppDistrictCreateoreditPostApiArg = {
  createOrEditDistrictDto: CreateOrEditDistrictDto;
};
export type ApiServicesAppDistrictDeleteDeleteApiResponse = unknown;
export type ApiServicesAppDistrictDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppDistrictGetdistrictsGetApiResponse =
  /** status 200 Success */ ListResultDtoOfGetDistrictsForListDto;
export type ApiServicesAppDistrictGetdistrictsGetApiArg = {
  filter?: string;
};
export type DistrictDto = {
  name?: string | null;
  regionId?: number;
  id?: number;
};
export type GetDistrictForViewDto = {
  district?: DistrictDto;
};
export type PagedResultDtoOfGetDistrictForViewDto = {
  totalCount?: number;
  items?: GetDistrictForViewDto[] | null;
};
export type CreateOrEditDistrictDto = {
  name: string;
  regionId: string;
  id?: number | null;
};
export type GetDistrictForEditOutput = {
  district?: CreateOrEditDistrictDto;
};
export type GetDistrictsForListDto = {
  id?: number;
  name?: string | null;
};
export type ListResultDtoOfGetDistrictsForListDto = {
  items?: GetDistrictsForListDto[] | null;
};
export const {
  useApiServicesAppDistrictGetallGetQuery,
  useApiServicesAppDistrictGetdistrictforeditGetQuery,
  useApiServicesAppDistrictCreateoreditPostMutation,
  useApiServicesAppDistrictDeleteDeleteMutation,
  useApiServicesAppDistrictGetdistrictsGetQuery,
} = injectedRtkApi;
