import {baseApi as api} from './baseApi';
export const addTagTypes = ['BedMaking'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppBedmakingCreatebedmakingPost: build.mutation<
        ApiServicesAppBedmakingCreatebedmakingPostApiResponse,
        ApiServicesAppBedmakingCreatebedmakingPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BedMaking/CreateBedMaking`,
          method: 'POST',
          body: queryArg.createBedMakingDto,
        }),
        invalidatesTags: ['BedMaking'],
      }),
      apiServicesAppBedmakingGetpatientsummaryGet: build.query<
        ApiServicesAppBedmakingGetpatientsummaryGetApiResponse,
        ApiServicesAppBedmakingGetpatientsummaryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BedMaking/GetPatientSummary`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['BedMaking'],
      }),
      apiServicesAppBedmakingDeletecreatebedmakingDelete: build.mutation<
        ApiServicesAppBedmakingDeletecreatebedmakingDeleteApiResponse,
        ApiServicesAppBedmakingDeletecreatebedmakingDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BedMaking/DeleteCreateBedMaking`,
          method: 'DELETE',
          params: {bedMakingId: queryArg.bedMakingId},
        }),
        invalidatesTags: ['BedMaking'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as bedMakingApi};
export type ApiServicesAppBedmakingCreatebedmakingPostApiResponse = unknown;
export type ApiServicesAppBedmakingCreatebedmakingPostApiArg = {
  createBedMakingDto: CreateBedMakingDto;
};
export type ApiServicesAppBedmakingGetpatientsummaryGetApiResponse =
  /** status 200 Success */ PatientBedMakingSummaryForReturnDto[];
export type ApiServicesAppBedmakingGetpatientsummaryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppBedmakingDeletecreatebedmakingDeleteApiResponse =
  unknown;
export type ApiServicesAppBedmakingDeletecreatebedmakingDeleteApiArg = {
  bedMakingId?: number;
};
export type CreateBedMakingDto = {
  patientId?: number;
  stamp?: number | null;
  bedMakingSnowmedIds?: string[] | null;
  note?: string | null;
  encounterId?: number;
};
export type PatientBedMakingSummaryForReturnDto = {
  id?: number;
  note?: string | null;
  bedMakingSnowmedIds?: string[] | null;
  creationTime?: string;
  deletionTime?: string | null;
};
export const {
  useApiServicesAppBedmakingCreatebedmakingPostMutation,
  useApiServicesAppBedmakingGetpatientsummaryGetQuery,
  useApiServicesAppBedmakingDeletecreatebedmakingDeleteMutation,
} = injectedRtkApi;
