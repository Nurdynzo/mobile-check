import {baseApi as api} from './baseApi';
export const addTagTypes = ['Discharge', 'PlanItems'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppDischargeGetdischargeplanitemsGet: build.query<
        ApiServicesAppDischargeGetdischargeplanitemsGetApiResponse,
        ApiServicesAppDischargeGetdischargeplanitemsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Discharge/GetDischargePlanItems`,
          params: {dischargeId: queryArg.dischargeId},
        }),
        providesTags: ['Discharge'],
      }),
      apiServicesAppPlanitemsCreateplanitemsPost: build.mutation<
        ApiServicesAppPlanitemsCreateplanitemsPostApiResponse,
        ApiServicesAppPlanitemsCreateplanitemsPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PlanItems/CreatePlanItems`,
          method: 'POST',
          body: queryArg.createPlanItemsDto,
        }),
        invalidatesTags: ['PlanItems'],
      }),
      apiServicesAppPlanitemsGetpatientplanitemsGet: build.query<
        ApiServicesAppPlanitemsGetpatientplanitemsGetApiResponse,
        ApiServicesAppPlanitemsGetpatientplanitemsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PlanItems/GetPatientPlanItems`,
          params: {
            PatientId: queryArg.patientId,
            ProcedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['PlanItems'],
      }),
      apiServicesAppPlanitemsDeletecreateplanitemsDelete: build.mutation<
        ApiServicesAppPlanitemsDeletecreateplanitemsDeleteApiResponse,
        ApiServicesAppPlanitemsDeletecreateplanitemsDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PlanItems/DeleteCreatePlanItems`,
          method: 'DELETE',
          params: {planItemsId: queryArg.planItemsId},
        }),
        invalidatesTags: ['PlanItems'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as planItemsApi};
export type ApiServicesAppDischargeGetdischargeplanitemsGetApiResponse =
  /** status 200 Success */ DischargePlanItemDto[];
export type ApiServicesAppDischargeGetdischargeplanitemsGetApiArg = {
  dischargeId?: number;
};
export type ApiServicesAppPlanitemsCreateplanitemsPostApiResponse = unknown;
export type ApiServicesAppPlanitemsCreateplanitemsPostApiArg = {
  createPlanItemsDto: CreatePlanItemsDto;
};
export type ApiServicesAppPlanitemsGetpatientplanitemsGetApiResponse =
  /** status 200 Success */ PlanItemsSummaryForReturnDto[];
export type ApiServicesAppPlanitemsGetpatientplanitemsGetApiArg = {
  patientId?: number;
  procedureId?: number;
};
export type ApiServicesAppPlanitemsDeletecreateplanitemsDeleteApiResponse =
  unknown;
export type ApiServicesAppPlanitemsDeletecreateplanitemsDeleteApiArg = {
  planItemsId?: number;
};
export type DischargePlanItemDto = {
  planItemId?: number;
  patientId?: number;
  dischargeId?: number;
  description?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
};
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type CreatePlanItemsDto = {
  patientId?: number;
  procedureId?: number | null;
  stamp?: number | null;
  planItemsSnowmedIds?: string[] | null;
  encounterId?: number;
  description?: string | null;
  procedureEntryType?: ProcedureEntryType;
};
export type PlanItemsSummaryForReturnDto = {
  id?: number;
  description?: string | null;
  procedureId?: number | null;
  procedureEntryType?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export const {
  useApiServicesAppDischargeGetdischargeplanitemsGetQuery,
  useApiServicesAppPlanitemsCreateplanitemsPostMutation,
  useApiServicesAppPlanitemsGetpatientplanitemsGetQuery,
  useApiServicesAppPlanitemsDeletecreateplanitemsDeleteMutation,
} = injectedRtkApi;
