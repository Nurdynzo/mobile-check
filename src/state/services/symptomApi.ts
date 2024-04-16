import {baseApi as api} from './baseApi';
export const addTagTypes = ['PatientProfile', 'Snowstorm', 'Symptom'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppPatientprofileGetpostmenopausalsymptomsGet: build.query<
        ApiServicesAppPatientprofileGetpostmenopausalsymptomsGetApiResponse,
        ApiServicesAppPatientprofileGetpostmenopausalsymptomsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetPostmenopausalSymptoms`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppSnowstormGetsymptombytermGet: build.query<
        ApiServicesAppSnowstormGetsymptombytermGetApiResponse,
        ApiServicesAppSnowstormGetsymptombytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetSymptomByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
      }),
      apiServicesAppSnowstormGetsymptomsuggestionGet: build.query<
        ApiServicesAppSnowstormGetsymptomsuggestionGetApiResponse,
        ApiServicesAppSnowstormGetsymptomsuggestionGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetSymptomSuggestion`,
          params: {
            snowmedId: queryArg.snowmedId,
            inputType: queryArg.inputType,
            searchTerm: queryArg.searchTerm,
          },
        }),
        providesTags: ['Snowstorm'],
      }),
      apiServicesAppSymptomCreatesymptomPost: build.mutation<
        ApiServicesAppSymptomCreatesymptomPostApiResponse,
        ApiServicesAppSymptomCreatesymptomPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Symptom/CreateSymptom`,
          method: 'POST',
          body: queryArg.createSymptomDto,
        }),
        invalidatesTags: ['Symptom'],
      }),
      apiServicesAppSymptomGetpatientsummaryGet: build.query<
        ApiServicesAppSymptomGetpatientsummaryGetApiResponse,
        ApiServicesAppSymptomGetpatientsummaryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Symptom/GetPatientSummary`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Symptom'],
      }),
      apiServicesAppSymptomDeletesymptomDelete: build.mutation<
        ApiServicesAppSymptomDeletesymptomDeleteApiResponse,
        ApiServicesAppSymptomDeletesymptomDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Symptom/DeleteSymptom`,
          method: 'DELETE',
          params: {symptomId: queryArg.symptomId},
        }),
        invalidatesTags: ['Symptom'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as symptomApi};
export type ApiServicesAppPatientprofileGetpostmenopausalsymptomsGetApiResponse =
  /** status 200 Success */ PostmenopausalSymptomSuggestionResponse[];
export type ApiServicesAppPatientprofileGetpostmenopausalsymptomsGetApiArg =
  void;
export type ApiServicesAppSnowstormGetsymptombytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetsymptombytermGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppSnowstormGetsymptomsuggestionGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetsymptomsuggestionGetApiArg = {
  snowmedId?: number;
  inputType?: string;
  searchTerm?: string;
};
export type ApiServicesAppSymptomCreatesymptomPostApiResponse = unknown;
export type ApiServicesAppSymptomCreatesymptomPostApiArg = {
  createSymptomDto: CreateSymptomDto;
};
export type ApiServicesAppSymptomGetpatientsummaryGetApiResponse =
  /** status 200 Success */ PatientSymptomSummaryForReturnDto[];
export type ApiServicesAppSymptomGetpatientsummaryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppSymptomDeletesymptomDeleteApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppSymptomDeletesymptomDeleteApiArg = {
  symptomId?: number;
};
export type PostmenopausalSymptomSuggestionResponse = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type SnowstormSimpleResponseDto = {
  id?: string | null;
  name?: string | null;
};
export type SymptomTypeNoteRequestDto = {
  type?: string | null;
  note?: string | null;
};
export type SymptomSuggestionAnswerDto = {
  symptomSnowmedId?: string | null;
  description?: string | null;
  whenOrHowLongAgo?: string | null;
  cyclicality?: string | null;
  isAbsent?: boolean;
  frequency?: string | null;
  howLongDidItLast?: string | null;
  exacerbatingOrRelievingType?: string | null;
  severityScale?: number;
};
export type SuggestionQuestionForCreationDto = {
  suggestionQuestionType?: string | null;
  symptomSuggestionAnswer: SymptomSuggestionAnswerDto;
};
export type CreateSymptomDto = {
  symptomEntryType?: string | null;
  patientId?: number;
  stamp?: number | null;
  symptomSnowmedId?: string | null;
  encounterId?: number;
  description?: string | null;
  otherNote?: string | null;
  typeNotes?: SymptomTypeNoteRequestDto[] | null;
  suggestions?: SuggestionQuestionForCreationDto[] | null;
};
export type SymptomEntryType = 0 | 1;
export type PatientSymptomSummaryForReturnDto = {
  id?: number;
  symptomEntryTypeName?: string | null;
  symptomEntryType?: SymptomEntryType;
  description?: string | null;
  suggestionSummary?: string | null;
  typeNotes?: SymptomTypeNoteRequestDto[] | null;
  creatorUserId?: number;
  creationTime?: string;
  deletionTime?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  encounterId?: number | null;
  appointmentId?: number | null;
};
export const {
  useApiServicesAppPatientprofileGetpostmenopausalsymptomsGetQuery,
  useApiServicesAppSnowstormGetsymptombytermGetQuery,
  useApiServicesAppSnowstormGetsymptomsuggestionGetQuery,
  useApiServicesAppSymptomCreatesymptomPostMutation,
  useApiServicesAppSymptomGetpatientsummaryGetQuery,
  useApiServicesAppSymptomDeletesymptomDeleteMutation,
} = injectedRtkApi;
