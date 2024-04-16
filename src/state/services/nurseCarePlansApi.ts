import {baseApi as api} from './baseApi';
export const addTagTypes = ['NurseCarePlans'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppNursecareplansGetallGet: build.query<
        ApiServicesAppNursecareplansGetallGetApiResponse,
        ApiServicesAppNursecareplansGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NurseCarePlans/GetAll`,
          params: {
            PatientId: queryArg.patientId,
            EncounterId: queryArg.encounterId,
          },
        }),
        providesTags: ['NurseCarePlans'],
      }),
      apiServicesAppNursecareplansGetnursingdiagnosisGet: build.query<
        ApiServicesAppNursecareplansGetnursingdiagnosisGetApiResponse,
        ApiServicesAppNursecareplansGetnursingdiagnosisGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/NurseCarePlans/GetNursingDiagnosis`,
        }),
        providesTags: ['NurseCarePlans'],
      }),
      apiServicesAppNursecareplansGetnursingoutcomesGet: build.query<
        ApiServicesAppNursecareplansGetnursingoutcomesGetApiResponse,
        ApiServicesAppNursecareplansGetnursingoutcomesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NurseCarePlans/GetNursingOutcomes`,
          params: {diagnosisId: queryArg.diagnosisId},
        }),
        providesTags: ['NurseCarePlans'],
      }),
      apiServicesAppNursecareplansGetnursingcareinterventionsGet: build.query<
        ApiServicesAppNursecareplansGetnursingcareinterventionsGetApiResponse,
        ApiServicesAppNursecareplansGetnursingcareinterventionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NurseCarePlans/GetNursingCareInterventions`,
          params: {outcomesIds: queryArg.outcomesIds},
        }),
        providesTags: ['NurseCarePlans'],
      }),
      apiServicesAppNursecareplansGetnursingactivitiesGet: build.query<
        ApiServicesAppNursecareplansGetnursingactivitiesGetApiResponse,
        ApiServicesAppNursecareplansGetnursingactivitiesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NurseCarePlans/GetNursingActivities`,
          params: {careInterventionIds: queryArg.careInterventionIds},
        }),
        providesTags: ['NurseCarePlans'],
      }),
      apiServicesAppNursecareplansGetnursingevaluationGet: build.query<
        ApiServicesAppNursecareplansGetnursingevaluationGetApiResponse,
        ApiServicesAppNursecareplansGetnursingevaluationGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/NurseCarePlans/GetNursingEvaluation`,
        }),
        providesTags: ['NurseCarePlans'],
      }),
      apiServicesAppNursecareplansCreatenursecareplanPost: build.mutation<
        ApiServicesAppNursecareplansCreatenursecareplanPostApiResponse,
        ApiServicesAppNursecareplansCreatenursecareplanPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NurseCarePlans/CreateNurseCarePlan`,
          method: 'POST',
          body: queryArg.createNurseCarePlanRequest,
        }),
        invalidatesTags: ['NurseCarePlans'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as nurseCarePlansApi};
export type ApiServicesAppNursecareplansGetallGetApiResponse =
  /** status 200 Success */ GetNurseCareSummaryResponse[];
export type ApiServicesAppNursecareplansGetallGetApiArg = {
  patientId: number;
  encounterId: number;
};
export type ApiServicesAppNursecareplansGetnursingdiagnosisGetApiResponse =
  /** status 200 Success */ GetNurseCarePlansResponse[];
export type ApiServicesAppNursecareplansGetnursingdiagnosisGetApiArg = void;
export type ApiServicesAppNursecareplansGetnursingoutcomesGetApiResponse =
  /** status 200 Success */ GetNurseCarePlansResponse[];
export type ApiServicesAppNursecareplansGetnursingoutcomesGetApiArg = {
  diagnosisId?: number;
};
export type ApiServicesAppNursecareplansGetnursingcareinterventionsGetApiResponse =
  /** status 200 Success */ GetNurseCarePlansResponse[];
export type ApiServicesAppNursecareplansGetnursingcareinterventionsGetApiArg = {
  outcomesIds?: number[];
};
export type ApiServicesAppNursecareplansGetnursingactivitiesGetApiResponse =
  /** status 200 Success */ GetNurseCarePlansResponse[];
export type ApiServicesAppNursecareplansGetnursingactivitiesGetApiArg = {
  careInterventionIds?: number[];
};
export type ApiServicesAppNursecareplansGetnursingevaluationGetApiResponse =
  /** status 200 Success */ GetNurseCarePlansResponse[];
export type ApiServicesAppNursecareplansGetnursingevaluationGetApiArg = void;
export type ApiServicesAppNursecareplansCreatenursecareplanPostApiResponse =
  unknown;
export type ApiServicesAppNursecareplansCreatenursecareplanPostApiArg = {
  createNurseCarePlanRequest: CreateNurseCarePlanRequest;
};
export type GetNurseCareSummaryResponse = {
  id?: number;
  diagnosis?: string | null;
  outcomes?: string[] | null;
  interventions?: string[] | null;
  activities?: string[] | null;
  evaluation?: string | null;
  time?: string;
};
export type GetNurseCarePlansResponse = {
  id?: number;
  name?: string | null;
  code?: string | null;
};
export type CreateNurseCarePlanRequest = {
  patientId?: number;
  encounterId?: number;
  diagnosisId?: number | null;
  outcomesId?: number[] | null;
  interventionsId?: number[] | null;
  activitiesId?: number[] | null;
  evaluationId?: number | null;
  diagnosisText?: string | null;
  outcomesText?: string[] | null;
  interventionsText?: string[] | null;
  activitiesText?: string[] | null;
  evaluationText?: string | null;
};
export const {
  useApiServicesAppNursecareplansGetallGetQuery,
  useApiServicesAppNursecareplansGetnursingdiagnosisGetQuery,
  useApiServicesAppNursecareplansGetnursingoutcomesGetQuery,
  useApiServicesAppNursecareplansGetnursingcareinterventionsGetQuery,
  useApiServicesAppNursecareplansGetnursingactivitiesGetQuery,
  useApiServicesAppNursecareplansGetnursingevaluationGetQuery,
  useApiServicesAppNursecareplansCreatenursecareplanPostMutation,
} = injectedRtkApi;
