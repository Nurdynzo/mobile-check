import {baseApi as api} from './baseApi';
export const addTagTypes = ['IntakeOutput'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppIntakeoutputCreateoreditintakePost: build.mutation<
        ApiServicesAppIntakeoutputCreateoreditintakePostApiResponse,
        ApiServicesAppIntakeoutputCreateoreditintakePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/IntakeOutput/CreateOrEditIntake`,
          method: 'POST',
          body: queryArg.createIntakeOutputDto,
        }),
        invalidatesTags: ['IntakeOutput'],
      }),
      apiServicesAppIntakeoutputCreateoreditoutputPost: build.mutation<
        ApiServicesAppIntakeoutputCreateoreditoutputPostApiResponse,
        ApiServicesAppIntakeoutputCreateoreditoutputPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/IntakeOutput/CreateOrEditOutput`,
          method: 'POST',
          body: queryArg.createIntakeOutputDto,
        }),
        invalidatesTags: ['IntakeOutput'],
      }),
      apiServicesAppIntakeoutputDeleteintakeoroutputDelete: build.mutation<
        ApiServicesAppIntakeoutputDeleteintakeoroutputDeleteApiResponse,
        ApiServicesAppIntakeoutputDeleteintakeoroutputDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/IntakeOutput/DeleteIntakeOrOutput`,
          method: 'DELETE',
          body: queryArg.deleteIntakeOutputDto,
        }),
        invalidatesTags: ['IntakeOutput'],
      }),
      apiServicesAppIntakeoutputGetintakesuggestionsGet: build.query<
        ApiServicesAppIntakeoutputGetintakesuggestionsGetApiResponse,
        ApiServicesAppIntakeoutputGetintakesuggestionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/IntakeOutput/GetIntakeSuggestions`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['IntakeOutput'],
      }),
      apiServicesAppIntakeoutputGetoutputsuggestionsGet: build.query<
        ApiServicesAppIntakeoutputGetoutputsuggestionsGetApiResponse,
        ApiServicesAppIntakeoutputGetoutputsuggestionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/IntakeOutput/GetOutputSuggestions`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['IntakeOutput'],
      }),
      apiServicesAppIntakeoutputGetintakeoutputsavedhistoryGet: build.query<
        ApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetApiResponse,
        ApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/IntakeOutput/GetIntakeOutputSavedHistory`,
          params: {
            patientId: queryArg.patientId,
            procedureId: queryArg.procedureId,
            encounterId: queryArg.encounterId,
          },
        }),
        providesTags: ['IntakeOutput'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as intakeOutputApi};
export type ApiServicesAppIntakeoutputCreateoreditintakePostApiResponse =
  /** status 200 Success */ CreateIntakeOutputDto;
export type ApiServicesAppIntakeoutputCreateoreditintakePostApiArg = {
  createIntakeOutputDto: CreateIntakeOutputDto;
};
export type ApiServicesAppIntakeoutputCreateoreditoutputPostApiResponse =
  /** status 200 Success */ CreateIntakeOutputDto;
export type ApiServicesAppIntakeoutputCreateoreditoutputPostApiArg = {
  createIntakeOutputDto: CreateIntakeOutputDto;
};
export type ApiServicesAppIntakeoutputDeleteintakeoroutputDeleteApiResponse =
  unknown;
export type ApiServicesAppIntakeoutputDeleteintakeoroutputDeleteApiArg = {
  deleteIntakeOutputDto: DeleteIntakeOutputDto;
};
export type ApiServicesAppIntakeoutputGetintakesuggestionsGetApiResponse =
  /** status 200 Success */ PatientIntakeOutputDto;
export type ApiServicesAppIntakeoutputGetintakesuggestionsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppIntakeoutputGetoutputsuggestionsGetApiResponse =
  /** status 200 Success */ PatientIntakeOutputDto;
export type ApiServicesAppIntakeoutputGetoutputsuggestionsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetApiResponse =
  /** status 200 Success */ {
    INTAKE?: PatientIntakeOutputDto[];
    OUTPUT?: PatientIntakeOutputDto[];
    UNKNOWN?: PatientIntakeOutputDto[];
  };
export type ApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetApiArg = {
  patientId?: number;
  procedureId?: number;
  encounterId?: number;
};
export type ChartingType = 1 | 2 | 3;
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type SelectedIntakeOutputDto = {
  id?: number | null;
  suggestedText: string;
};
export type CreateIntakeOutputDto = {
  id?: number | null;
  patientId: number;
  type?: ChartingType;
  volumeInMls: number;
  encounterId?: number;
  procedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
  selectedIntakeOutputCharting?: SelectedIntakeOutputDto[] | null;
};
export type SelectedDeleteIntakeOutputDto = {
  id?: number;
  isDeleted?: boolean;
};
export type DeleteIntakeOutputDto = {
  id: number;
  isDeleted?: boolean;
  selectedIntakeOutput?: SelectedDeleteIntakeOutputDto[] | null;
};
export type SuggestedTextDto = {
  id?: number | null;
  suggestedText: string;
  volumeInMls: number;
  frequency?: string | null;
  procedureId?: number | null;
  encounterId?: number | null;
  procedureEntryType?: ProcedureEntryType;
  createdAt?: string;
  isDeleted?: boolean;
  deletedUser?: string | null;
  deletedTime?: string | null;
};
export type PatientIntakeOutputDto = {
  patientId: number;
  type: ChartingType;
  chartingTypeText?: string | null;
  suggestedText?: SuggestedTextDto[] | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  deletedTime?: string | null;
  id?: number;
  createdAt?: string;
};
export const {
  useApiServicesAppIntakeoutputCreateoreditintakePostMutation,
  useApiServicesAppIntakeoutputCreateoreditoutputPostMutation,
  useApiServicesAppIntakeoutputDeleteintakeoroutputDeleteMutation,
  useApiServicesAppIntakeoutputGetintakesuggestionsGetQuery,
  useApiServicesAppIntakeoutputGetoutputsuggestionsGetQuery,
  useApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetQuery,
} = injectedRtkApi;
