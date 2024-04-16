import {baseApi as api} from './baseApi';
export const addTagTypes = ['PhysicalExaminations'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPost:
        build.mutation<
          ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostApiResponse,
          ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/CreatePatientPhysicalExamination`,
            method: 'POST',
            body: queryArg.createPatientPhysicalExaminationDto,
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPost:
        build.mutation<
          ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiResponse,
          ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/CreatePatientPhysicalExaminationAndUpload`,
            method: 'POST',
            body: queryArg.body,
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPost:
        build.mutation<
          ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiResponse,
          ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/UploadPatientPhysicalExamImages`,
            method: 'POST',
            body: queryArg.body,
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGet:
        build.query<
          ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiResponse,
          ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/GetPatientPhysicalExaminationSummary`,
            params: {
              patientId: queryArg.patientId,
              procedureId: queryArg.procedureId,
            },
          }),
          providesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDelete:
        build.mutation<
          ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiResponse,
          ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/DeletePatientPhysicalExamination`,
            method: 'DELETE',
            body: queryArg.patientPhysicalExaminationRequest,
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGet:
        build.query<
          ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiResponse,
          ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/GetPatientPhysicalExaminationUploadedImages`,
            params: {
              patientPhysicalExaminationId:
                queryArg.patientPhysicalExaminationId,
            },
          }),
          providesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDelete:
        build.mutation<
          ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiResponse,
          ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/DeletePatientPhysicalExaminationImage`,
            method: 'DELETE',
            params: {
              patientPhysicalExaminationImageFileId:
                queryArg.patientPhysicalExaminationImageFileId,
            },
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGet:
        build.query<
          ApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetApiResponse,
          ApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PhysicalExaminations/GetPhysicalExaminationTypes`,
          }),
          providesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsGetheadersGet: build.query<
        ApiServicesAppPhysicalexaminationsGetheadersGetApiResponse,
        ApiServicesAppPhysicalexaminationsGetheadersGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PhysicalExaminations/GetHeaders`,
          params: {
            PhysicalExaminationTypeId: queryArg.physicalExaminationTypeId,
          },
        }),
        providesTags: ['PhysicalExaminations'],
      }),
      apiServicesAppPhysicalexaminationsGetlistGet: build.query<
        ApiServicesAppPhysicalexaminationsGetlistGetApiResponse,
        ApiServicesAppPhysicalexaminationsGetlistGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PhysicalExaminations/GetList`,
          params: {Header: queryArg.header, PatientId: queryArg.patientId},
        }),
        providesTags: ['PhysicalExaminations'],
      }),
      apiServicesAppPhysicalexaminationsGetGet: build.query<
        ApiServicesAppPhysicalexaminationsGetGetApiResponse,
        ApiServicesAppPhysicalexaminationsGetGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PhysicalExaminations/Get`,
          params: {id: queryArg.id},
        }),
        providesTags: ['PhysicalExaminations'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as physicalExaminationsApi};
export type ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostApiResponse =
  /** status 200 Success */ number;
export type ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostApiArg =
  {
    createPatientPhysicalExaminationDto: CreatePatientPhysicalExaminationDto;
  };
export type ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiResponse =
  /** status 200 Success */ number;
export type ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiArg =
  {
    body: {
      PhysicalExaminationEntryType: string;
      PhysicalExaminationTypeId: number;
      PatientId: number;
      TypeNotes?: CreatePatientPhysicalExamTypeNoteDto[];
      Suggestions?: CreatePatientPhysicalExamSuggestionQuestionDto[];
      OtherNote?: string;
      EncounterId?: number;
      ProcedureId?: number;
      ProcedureEntryType?: ProcedureEntryType;
      ImageFiles?: Blob[];
      'vitalSign.PatientId'?: number;
      'vitalSign.ProcedureId'?: number;
      'vitalSign.ProcedureEntryType'?: ProcedureEntryType;
      'vitalSign.EncounterId'?: number;
      'vitalSign.PatientVitals'?: CreatePatientVitalDto[];
    };
  };
export type ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiResponse =
  unknown;
export type ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiArg =
  {
    body: {
      PatientPhysicalExaminationId: number;
      ImageFiles: Blob[];
    };
  };
export type ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiResponse =
  /** status 200 Success */ PatientPhysicalExaminationResponseDto[];
export type ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiArg =
  {
    patientId: number;
    procedureId?: number;
  };
export type ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiResponse =
  unknown;
export type ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiArg =
  {
    patientPhysicalExaminationRequest: PatientPhysicalExaminationRequest;
  };
export type ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiResponse =
  /** status 200 Success */ PatientPhysicalExaminationImageFileResponseDto[];
export type ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiArg =
  {
    patientPhysicalExaminationId: number;
  };
export type ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiResponse =
  unknown;
export type ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiArg =
  {
    patientPhysicalExaminationImageFileId: number;
  };
export type ApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetApiResponse =
  /** status 200 Success */ GetPhysicalExaminationTypeResponseDto[];
export type ApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetApiArg =
  void;
export type ApiServicesAppPhysicalexaminationsGetheadersGetApiResponse =
  /** status 200 Success */ GetPhysicalExaminationHeadersResponse;
export type ApiServicesAppPhysicalexaminationsGetheadersGetApiArg = {
  physicalExaminationTypeId: number;
};
export type ApiServicesAppPhysicalexaminationsGetlistGetApiResponse =
  /** status 200 Success */ GetPhysicalExaminationListResponse[];
export type ApiServicesAppPhysicalexaminationsGetlistGetApiArg = {
  header: string;
  patientId: number;
};
export type ApiServicesAppPhysicalexaminationsGetGetApiResponse =
  /** status 200 Success */ GetPhysicalExaminationResponse;
export type ApiServicesAppPhysicalexaminationsGetGetApiArg = {
  id: number;
};
export type CreatePatientPhysicalExamTypeNoteDto = {
  type?: string | null;
  note?: string | null;
};
export type CreatePatientPhysicalExamSuggestionQualifierDto = {
  qualifierId?: number | null;
  name?: string | null;
};
export type CreatePatientPhysicalExamSuggestionAnswerDto = {
  snowmedId?: string | null;
  description?: string | null;
  isAbsent?: boolean;
  sites?: CreatePatientPhysicalExamSuggestionQualifierDto[] | null;
  planes?: CreatePatientPhysicalExamSuggestionQualifierDto[] | null;
  qualifiers?: CreatePatientPhysicalExamSuggestionQualifierDto[] | null;
};
export type CreatePatientPhysicalExamSuggestionQuestionDto = {
  headerName?: string | null;
  patientPhysicalExamSuggestionAnswers?:
    | CreatePatientPhysicalExamSuggestionAnswerDto[]
    | null;
};
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type CreatePatientVitalDto = {
  vitalSignId?: number;
  measurementSiteId?: number | null;
  measurementRangeId?: number | null;
  vitalReading?: number;
  position?: string | null;
};
export type CreateMultiplePatientVitalDto = {
  patientId?: number;
  procedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
  encounterId?: number;
  patientVitals?: CreatePatientVitalDto[] | null;
};
export type CreatePatientPhysicalExaminationDto = {
  physicalExaminationEntryType: string;
  physicalExaminationTypeId: number;
  patientId: number;
  typeNotes?: CreatePatientPhysicalExamTypeNoteDto[] | null;
  suggestions?: CreatePatientPhysicalExamSuggestionQuestionDto[] | null;
  otherNote?: string | null;
  encounterId?: number;
  procedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
  imageFiles?: Blob[] | null;
  vitalSign?: CreateMultiplePatientVitalDto;
};
export type PhysicalExaminationEntryType = 0 | 1;
export type GetPhysicalExaminationTypeResponseDto = {
  id?: number;
  name?: string | null;
  type?: string | null;
};
export type PatientPhysicalExamTypeNoteResponseDto = {
  id?: number;
  type?: string | null;
  note?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  deletedDate?: string | null;
};
export type PatientPhysicalExamSuggestionQualifierResponseDto = {
  id?: number;
  qualifierId?: number | null;
  name?: string | null;
  isDeleted?: boolean;
};
export type PatientPhysicalExamSuggestionAnswerResponseDto = {
  id?: number;
  snowmedId?: string | null;
  description?: string | null;
  isAbsent?: boolean;
  isDeleted?: boolean;
  deletedUser?: string | null;
  deletedDate?: string | null;
  sites?: PatientPhysicalExamSuggestionQualifierResponseDto[] | null;
  planes?: PatientPhysicalExamSuggestionQualifierResponseDto[] | null;
  qualifiers?: PatientPhysicalExamSuggestionQualifierResponseDto[] | null;
};
export type PatientPhysicalExamSuggestionQuestionResponseDto = {
  id?: number;
  headerName?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  deletedDate?: string | null;
  patientPhysicalExamSuggestionAnswers?:
    | PatientPhysicalExamSuggestionAnswerResponseDto[]
    | null;
};
export type PatientPhysicalExaminationResponseDto = {
  id?: number;
  physicalExaminationEntryType?: PhysicalExaminationEntryType;
  physicalExaminationEntryTypeName?: string | null;
  physicalExaminationTypeId?: number;
  physicalExaminationType?: GetPhysicalExaminationTypeResponseDto;
  patientId?: number;
  otherNote?: string | null;
  creatorUserId?: number;
  creationTime?: string;
  deletionTime?: string | null;
  typeNotes?: PatientPhysicalExamTypeNoteResponseDto[] | null;
  suggestions?: PatientPhysicalExamSuggestionQuestionResponseDto[] | null;
  procedureEntryType?: string | null;
  imageUploaded?: boolean;
  encounterId?: number;
  procedureId?: number | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type PatientPhysicalExamSuggestionAnswerDeleteRequest = {
  id: number;
  isDeleted: boolean;
};
export type PatientPhysicalExamSuggestionQuestionDeleteRequest = {
  id: number;
  patientPhysicalExamSuggestionAnswers?:
    | PatientPhysicalExamSuggestionAnswerDeleteRequest[]
    | null;
};
export type PatientPhysicalExaminationRequest = {
  id: number;
  suggestions?: PatientPhysicalExamSuggestionQuestionDeleteRequest[] | null;
  isDeleted?: boolean;
};
export type PatientPhysicalExaminationImageFileResponseDto = {
  id?: number;
  patientPhysicalExaminationId?: number;
  fileId?: string | null;
  fileName?: string | null;
  fileUrl?: string | null;
  creationTime?: string;
};
export type GetPhysicalExaminationHeadersResponse = {
  headers?: string[] | null;
};
export type GetPhysicalExaminationListResponse = {
  id?: number;
  type?: string | null;
  header?: string | null;
  presentTerms?: string | null;
  snomedId?: string | null;
  absentTerms?: string | null;
  absentTermsSnomedId?: string | null;
  hasQualifiers?: boolean;
};
export type ExaminationQualifierDto = {
  subQualifier?: string | null;
  subDivision?: string | null;
  qualifier?: string | null;
  snomedId?: string | null;
};
export type GetPhysicalExaminationResponse = {
  type?: string | null;
  header?: string | null;
  presentTerms?: string | null;
  snomedId?: string | null;
  absentTerms?: string | null;
  absentTermsSnomedId?: string | null;
  site?: boolean;
  plane?: boolean;
  qualifiers?: ExaminationQualifierDto[] | null;
  planeTypes?: string[] | null;
  unit?: string | null;
};
export const {
  useApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostMutation,
  useApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostMutation,
  useApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostMutation,
  useApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetQuery,
  useApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteMutation,
  useApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetQuery,
  useApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteMutation,
  useApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetQuery,
  useApiServicesAppPhysicalexaminationsGetheadersGetQuery,
  useApiServicesAppPhysicalexaminationsGetlistGetQuery,
  useApiServicesAppPhysicalexaminationsGetGetQuery,
} = injectedRtkApi;
