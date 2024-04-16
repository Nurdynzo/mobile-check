import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'Diagnosis',
  'Investigation',
  'NurseCarePlans',
  'PatientProfile',
  'Snowstorm',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppDiagnosisCreatediagnosisPost: build.mutation<
        ApiServicesAppDiagnosisCreatediagnosisPostApiResponse,
        ApiServicesAppDiagnosisCreatediagnosisPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Diagnosis/CreateDiagnosis`,
          method: 'POST',
          body: queryArg.createDiagnosisDto,
        }),
        invalidatesTags: ['Diagnosis'],
      }),
      apiServicesAppDiagnosisGetpatientdiagnosisGet: build.query<
        ApiServicesAppDiagnosisGetpatientdiagnosisGetApiResponse,
        ApiServicesAppDiagnosisGetpatientdiagnosisGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Diagnosis/GetPatientDiagnosis`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Diagnosis'],
      }),
      apiServicesAppInvestigationLinktodiagnosisPost: build.mutation<
        ApiServicesAppInvestigationLinktodiagnosisPostApiResponse,
        ApiServicesAppInvestigationLinktodiagnosisPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/LinkToDiagnosis`,
          method: 'POST',
          body: queryArg.linkInvestigationToDiagnosisRequest,
        }),
        invalidatesTags: ['Investigation'],
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
      apiServicesAppPatientprofileGetdiagnosissuggestionsGet: build.query<
        ApiServicesAppPatientprofileGetdiagnosissuggestionsGetApiResponse,
        ApiServicesAppPatientprofileGetdiagnosissuggestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetDiagnosisSuggestions`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppSnowstormGetdiagnosisbytermGet: build.query<
        ApiServicesAppSnowstormGetdiagnosisbytermGetApiResponse,
        ApiServicesAppSnowstormGetdiagnosisbytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetDiagnosisByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as diagnosisApi};
export type ApiServicesAppDiagnosisCreatediagnosisPostApiResponse = unknown;
export type ApiServicesAppDiagnosisCreatediagnosisPostApiArg = {
  createDiagnosisDto: CreateDiagnosisDto;
};
export type ApiServicesAppDiagnosisGetpatientdiagnosisGetApiResponse =
  /** status 200 Success */ PatientDiagnosisReturnDto[];
export type ApiServicesAppDiagnosisGetpatientdiagnosisGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppInvestigationLinktodiagnosisPostApiResponse = unknown;
export type ApiServicesAppInvestigationLinktodiagnosisPostApiArg = {
  linkInvestigationToDiagnosisRequest: LinkInvestigationToDiagnosisRequest;
};
export type ApiServicesAppNursecareplansGetnursingdiagnosisGetApiResponse =
  /** status 200 Success */ GetNurseCarePlansResponse[];
export type ApiServicesAppNursecareplansGetnursingdiagnosisGetApiArg = void;
export type ApiServicesAppPatientprofileGetdiagnosissuggestionsGetApiResponse =
  /** status 200 Success */ GetDiagnosisSuggestionResponseDto[];
export type ApiServicesAppPatientprofileGetdiagnosissuggestionsGetApiArg = void;
export type ApiServicesAppSnowstormGetdiagnosisbytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetdiagnosisbytermGetApiArg = {
  searchTerm?: string;
};
export type DiagnosisType = 0 | 1;
export type DiagnosisItemDto = {
  name?: string | null;
  type?: DiagnosisType;
};
export type CreateDiagnosisDto = {
  patientId?: number;
  sctid?: number;
  notes?: string | null;
  selectedDiagnoses?: DiagnosisItemDto[] | null;
  encounterId?: number;
};
export type PatientDiagnosisReturnDto = {
  id?: number;
  tenantId?: number;
  patientId?: number;
  sctid?: number;
  description?: string | null;
  notes?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type LinkInvestigationToDiagnosisRequest = {
  investigationRequestId?: number;
  diagnosisId?: number;
};
export type GetNurseCarePlansResponse = {
  id?: number;
  name?: string | null;
  code?: string | null;
};
export type GetDiagnosisSuggestionResponseDto = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type SnowstormSimpleResponseDto = {
  id?: string | null;
  name?: string | null;
};
export const {
  useApiServicesAppDiagnosisCreatediagnosisPostMutation,
  useApiServicesAppDiagnosisGetpatientdiagnosisGetQuery,
  useApiServicesAppInvestigationLinktodiagnosisPostMutation,
  useApiServicesAppNursecareplansGetnursingdiagnosisGetQuery,
  useApiServicesAppPatientprofileGetdiagnosissuggestionsGetQuery,
  useApiServicesAppSnowstormGetdiagnosisbytermGetQuery,
} = injectedRtkApi;
