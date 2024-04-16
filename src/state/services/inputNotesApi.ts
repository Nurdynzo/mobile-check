import {baseApi as api} from './baseApi';
export const addTagTypes = ['InputNotes'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppInputnotesCreateinputnotesPost: build.mutation<
        ApiServicesAppInputnotesCreateinputnotesPostApiResponse,
        ApiServicesAppInputnotesCreateinputnotesPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InputNotes/CreateInputNotes`,
          method: 'POST',
          body: queryArg.createInputNotesDto,
        }),
        invalidatesTags: ['InputNotes'],
      }),
      apiServicesAppInputnotesGetpatientinputnotesGet: build.query<
        ApiServicesAppInputnotesGetpatientinputnotesGetApiResponse,
        ApiServicesAppInputnotesGetpatientinputnotesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InputNotes/GetPatientInputNotes`,
          params: {
            PatientId: queryArg.patientId,
            EncounterId: queryArg.encounterId,
            EntryType: queryArg.entryType,
            ProcedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['InputNotes'],
      }),
      apiServicesAppInputnotesDeletecreateinputnotesDelete: build.mutation<
        ApiServicesAppInputnotesDeletecreateinputnotesDeleteApiResponse,
        ApiServicesAppInputnotesDeletecreateinputnotesDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InputNotes/DeleteCreateInputNotes`,
          method: 'DELETE',
          params: {inputNotesId: queryArg.inputNotesId},
        }),
        invalidatesTags: ['InputNotes'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as inputNotesApi};
export type ApiServicesAppInputnotesCreateinputnotesPostApiResponse = unknown;
export type ApiServicesAppInputnotesCreateinputnotesPostApiArg = {
  createInputNotesDto: CreateInputNotesDto;
};
export type ApiServicesAppInputnotesGetpatientinputnotesGetApiResponse =
  /** status 200 Success */ InputNotesSummaryForReturnDto[];
export type ApiServicesAppInputnotesGetpatientinputnotesGetApiArg = {
  patientId?: number;
  encounterId?: number;
  entryType?: ProcedureEntryType;
  procedureId?: number;
};
export type ApiServicesAppInputnotesDeletecreateinputnotesDeleteApiResponse =
  unknown;
export type ApiServicesAppInputnotesDeletecreateinputnotesDeleteApiArg = {
  inputNotesId?: number;
};
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type CreateInputNotesDto = {
  patientId?: number;
  stamp?: number | null;
  inputNotesSnowmedIds?: string[] | null;
  encounterId?: number;
  description?: string | null;
  entryType?: ProcedureEntryType;
  procedureId?: number | null;
};
export type InputNotesSummaryForReturnDto = {
  id?: number;
  description?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  entryType?: ProcedureEntryType;
  procedureId?: number | null;
};
export const {
  useApiServicesAppInputnotesCreateinputnotesPostMutation,
  useApiServicesAppInputnotesGetpatientinputnotesGetQuery,
  useApiServicesAppInputnotesDeletecreateinputnotesDeleteMutation,
} = injectedRtkApi;
