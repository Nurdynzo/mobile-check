import {baseApi as api} from './baseApi';
export const addTagTypes = ['JobTitles', 'Titles'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppJobtitlesGetallGet: build.query<
        ApiServicesAppJobtitlesGetallGetApiResponse,
        ApiServicesAppJobtitlesGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/JobTitles/GetAll`,
          params: {
            Filter: queryArg.filter,
            NameFilter: queryArg.nameFilter,
            ShortNameFilter: queryArg.shortNameFilter,
            FacilityId: queryArg.facilityId,
            IncludeLevels: queryArg.includeLevels,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['JobTitles'],
      }),
      apiServicesAppJobtitlesGetjobtitleforeditGet: build.query<
        ApiServicesAppJobtitlesGetjobtitleforeditGetApiResponse,
        ApiServicesAppJobtitlesGetjobtitleforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/JobTitles/GetJobTitleForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['JobTitles'],
      }),
      apiServicesAppJobtitlesCreateoreditPost: build.mutation<
        ApiServicesAppJobtitlesCreateoreditPostApiResponse,
        ApiServicesAppJobtitlesCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/JobTitles/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditJobTitleDto,
        }),
        invalidatesTags: ['JobTitles'],
      }),
      apiServicesAppJobtitlesDeleteDelete: build.mutation<
        ApiServicesAppJobtitlesDeleteDeleteApiResponse,
        ApiServicesAppJobtitlesDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/JobTitles/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['JobTitles'],
      }),
      apiServicesAppTitlesGettitlesGet: build.query<
        ApiServicesAppTitlesGettitlesGetApiResponse,
        ApiServicesAppTitlesGettitlesGetApiArg
      >({
        query: () => ({url: `/api/services/app/Titles/GetTitles`}),
        providesTags: ['Titles'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as titlesApi};
export type ApiServicesAppJobtitlesGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfJobTitleDto;
export type ApiServicesAppJobtitlesGetallGetApiArg = {
  filter?: string;
  nameFilter?: string;
  shortNameFilter?: string;
  facilityId?: number;
  includeLevels?: boolean;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppJobtitlesGetjobtitleforeditGetApiResponse =
  /** status 200 Success */ GetJobTitleForEditOutput;
export type ApiServicesAppJobtitlesGetjobtitleforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppJobtitlesCreateoreditPostApiResponse = unknown;
export type ApiServicesAppJobtitlesCreateoreditPostApiArg = {
  createOrEditJobTitleDto: CreateOrEditJobTitleDto;
};
export type ApiServicesAppJobtitlesDeleteDeleteApiResponse = unknown;
export type ApiServicesAppJobtitlesDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppTitlesGettitlesGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppTitlesGettitlesGetApiArg = void;
export type TitleType =
  | 'Mr'
  | 'Mrs'
  | 'Miss'
  | 'Ms'
  | 'Dr'
  | 'Prof'
  | 'Hon'
  | 'Rev'
  | 'Pr'
  | 'Fr'
  | 'Other'
  | 'CM'
  | 'DNS'
  | 'ADNS'
  | 'CNO'
  | 'ACNO'
  | 'PNO'
  | 'SNO'
  | 'NO'
  | 'Pharm'
  | 'Pharm Tech';
export type JobLevelDto = {
  name?: string | null;
  rank?: number | null;
  shortName?: string | null;
  jobTitleId?: number | null;
  isActive?: boolean;
  isStatic?: boolean;
  titleOfAddress?: TitleType;
  id?: number;
};
export type JobTitleDto = {
  name?: string | null;
  shortName?: string | null;
  isActive?: boolean;
  facilityId?: number;
  jobLevels?: JobLevelDto[] | null;
  isStatic?: boolean;
  id?: number;
};
export type PagedResultDtoOfJobTitleDto = {
  totalCount?: number;
  items?: JobTitleDto[] | null;
};
export type CreateOrEditJobLevelDto = {
  name: string;
  rank?: number;
  shortName?: string | null;
  jobTitleId?: number;
  isActive?: boolean | null;
  id?: number | null;
};
export type CreateOrEditJobTitleDto = {
  name: string;
  shortName?: string | null;
  isActive?: boolean | null;
  facilityId?: number;
  jobLevels?: CreateOrEditJobLevelDto[] | null;
  id?: number | null;
};
export type GetJobTitleForEditOutput = {
  jobTitle?: CreateOrEditJobTitleDto;
};
export const {
  useApiServicesAppJobtitlesGetallGetQuery,
  useApiServicesAppJobtitlesGetjobtitleforeditGetQuery,
  useApiServicesAppJobtitlesCreateoreditPostMutation,
  useApiServicesAppJobtitlesDeleteDeleteMutation,
  useApiServicesAppTitlesGettitlesGetQuery,
} = injectedRtkApi;
