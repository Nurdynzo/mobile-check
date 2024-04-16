import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'PatientProfile',
  'Procedure',
  'Snowstorm',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGet:
        build.query<
          ApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetApiResponse,
          ApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PatientProfile/GetPatientGynaecologicProcedureSuggestion`,
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetproceduresuggestionsGet: build.query<
        ApiServicesAppPatientprofileGetproceduresuggestionsGetApiResponse,
        ApiServicesAppPatientprofileGetproceduresuggestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetProcedureSuggestions`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppProcedureGetcheckedsafetylistGet: build.query<
        ApiServicesAppProcedureGetcheckedsafetylistGetApiResponse,
        ApiServicesAppProcedureGetcheckedsafetylistGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetCheckedSafetyList`,
          params: {
            patientId: queryArg.patientId,
            procedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetspecializedproceduresafetychecklistGet:
        build.query<
          ApiServicesAppProcedureGetspecializedproceduresafetychecklistGetApiResponse,
          ApiServicesAppProcedureGetspecializedproceduresafetychecklistGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/GetSpecializedProcedureSafetyCheckList`,
            params: {
              patientId: queryArg.patientId,
              procedureId: queryArg.procedureId,
            },
          }),
          providesTags: ['Procedure'],
        }),
      apiServicesAppProcedureUpdatespecializedprocedurechecklistPut:
        build.mutation<
          ApiServicesAppProcedureUpdatespecializedprocedurechecklistPutApiResponse,
          ApiServicesAppProcedureUpdatespecializedprocedurechecklistPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/UpdateSpecializedProcedureCheckList`,
            method: 'PUT',
            body: queryArg.specializedProcedureSafetyCheckListDto,
          }),
          invalidatesTags: ['Procedure'],
        }),
      apiServicesAppProcedureDeleteprocedureDelete: build.mutation<
        ApiServicesAppProcedureDeleteprocedureDeleteApiResponse,
        ApiServicesAppProcedureDeleteprocedureDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/DeleteProcedure`,
          method: 'DELETE',
          params: {input: queryArg.input},
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureCreateproceduresPost: build.mutation<
        ApiServicesAppProcedureCreateproceduresPostApiResponse,
        ApiServicesAppProcedureCreateproceduresPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/CreateProcedures`,
          method: 'POST',
          body: queryArg.createProcedureDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureUpdateprocedurestatusPut: build.mutation<
        ApiServicesAppProcedureUpdateprocedurestatusPutApiResponse,
        ApiServicesAppProcedureUpdateprocedurestatusPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/UpdateProcedureStatus`,
          method: 'PUT',
          body: queryArg.updateProcedureStatusDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureCreateprocedurenotePost: build.mutation<
        ApiServicesAppProcedureCreateprocedurenotePostApiResponse,
        ApiServicesAppProcedureCreateprocedurenotePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/CreateProcedureNote`,
          method: 'POST',
          body: queryArg.createProcedureNoteDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureCreateanaesthesianotePost: build.mutation<
        ApiServicesAppProcedureCreateanaesthesianotePostApiResponse,
        ApiServicesAppProcedureCreateanaesthesianotePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/CreateAnaesthesiaNote`,
          method: 'POST',
          body: queryArg.createAnaesthesiaNoteDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureCreatenotetemplatePost: build.mutation<
        ApiServicesAppProcedureCreatenotetemplatePostApiResponse,
        ApiServicesAppProcedureCreatenotetemplatePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/CreateNoteTemplate`,
          method: 'POST',
          body: queryArg.createNoteTemplateDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetnotelistGet: build.query<
        ApiServicesAppProcedureGetnotelistGetApiResponse,
        ApiServicesAppProcedureGetnotelistGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetNoteList`,
          params: {
            procedureId: queryArg.procedureId,
            noteRequestType: queryArg.noteRequestType,
          },
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetnotetemplateslistGet: build.query<
        ApiServicesAppProcedureGetnotetemplateslistGetApiResponse,
        ApiServicesAppProcedureGetnotetemplateslistGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetNoteTemplatesList`,
          params: {noteRequestType: queryArg.noteRequestType},
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetproceduresuggestionsGet: build.query<
        ApiServicesAppProcedureGetproceduresuggestionsGetApiResponse,
        ApiServicesAppProcedureGetproceduresuggestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/Procedure/GetProcedureSuggestions`,
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetpatientproceduresGet: build.query<
        ApiServicesAppProcedureGetpatientproceduresGetApiResponse,
        ApiServicesAppProcedureGetpatientproceduresGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetPatientProcedures`,
          params: {
            patientId: queryArg.patientId,
            procedureType: queryArg.procedureType,
            parentProcedureId: queryArg.parentProcedureId,
          },
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureCreatestatementofhealthprofessionalPost:
        build.mutation<
          ApiServicesAppProcedureCreatestatementofhealthprofessionalPostApiResponse,
          ApiServicesAppProcedureCreatestatementofhealthprofessionalPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/CreateStatementOfHealthProfessional`,
            method: 'POST',
            body: queryArg.createStatementOfHealthProfessionalDto,
          }),
          invalidatesTags: ['Procedure'],
        }),
      apiServicesAppProcedureGetstatementofhealthprofessionalGet: build.query<
        ApiServicesAppProcedureGetstatementofhealthprofessionalGetApiResponse,
        ApiServicesAppProcedureGetstatementofhealthprofessionalGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetStatementOfHealthProfessional`,
          params: {procedureId: queryArg.procedureId},
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureEmailstatementPost: build.mutation<
        ApiServicesAppProcedureEmailstatementPostApiResponse,
        ApiServicesAppProcedureEmailstatementPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/EmailStatement`,
          method: 'POST',
          body: queryArg.emailStatementDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPost:
        build.mutation<
          ApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostApiResponse,
          ApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/CreateStatementOfPatientOrNextOfKinOrGuardian`,
            method: 'POST',
            body: queryArg.createStatementOfPatientOrNextOfKinOrGuardianDto,
          }),
          invalidatesTags: ['Procedure'],
        }),
      apiServicesAppProcedureCreatespecializedprocedurenursedetailPost:
        build.mutation<
          ApiServicesAppProcedureCreatespecializedprocedurenursedetailPostApiResponse,
          ApiServicesAppProcedureCreatespecializedprocedurenursedetailPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/CreateSpecializedProcedureNurseDetail`,
            method: 'POST',
            body: queryArg.createSpecializedProcedureNurseDetailCommand,
          }),
          invalidatesTags: ['Procedure'],
        }),
      apiServicesAppProcedureDeletespecializedprocedurenursedetailDelete:
        build.mutation<
          ApiServicesAppProcedureDeletespecializedprocedurenursedetailDeleteApiResponse,
          ApiServicesAppProcedureDeletespecializedprocedurenursedetailDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/DeleteSpecializedProcedureNurseDetail`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['Procedure'],
        }),
      apiServicesAppProcedureGetspecializedprocedurenursedetailGet: build.query<
        ApiServicesAppProcedureGetspecializedprocedurenursedetailGetApiResponse,
        ApiServicesAppProcedureGetspecializedprocedurenursedetailGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetSpecializedProcedureNurseDetail`,
          params: {procedureId: queryArg.procedureId},
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetstatementofpatientornextofkinorguardianGet:
        build.query<
          ApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetApiResponse,
          ApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/GetStatementOfPatientOrNextOfKinOrGuardian`,
            params: {procedureId: queryArg.procedureId},
          }),
          providesTags: ['Procedure'],
        }),
      apiServicesAppProcedureSignconfirmationofconsentPost: build.mutation<
        ApiServicesAppProcedureSignconfirmationofconsentPostApiResponse,
        ApiServicesAppProcedureSignconfirmationofconsentPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/SignConfirmationOfConsent`,
          method: 'POST',
          body: queryArg.signConfirmationOfConsentDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetsignconfirmationofconsentGet: build.query<
        ApiServicesAppProcedureGetsignconfirmationofconsentGetApiResponse,
        ApiServicesAppProcedureGetsignconfirmationofconsentGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetSignConfirmationOfConsent`,
          params: {procedureId: queryArg.procedureId},
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureMarkprocedureasspecializedPost: build.mutation<
        ApiServicesAppProcedureMarkprocedureasspecializedPostApiResponse,
        ApiServicesAppProcedureMarkprocedureasspecializedPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/MarkProcedureAsSpecialized`,
          method: 'POST',
          body: queryArg.createSpecializedProcedureDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureScheduleprocedurePost: build.mutation<
        ApiServicesAppProcedureScheduleprocedurePostApiResponse,
        ApiServicesAppProcedureScheduleprocedurePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/ScheduleProcedure`,
          method: 'POST',
          body: queryArg.scheduleProcedureDto,
        }),
        invalidatesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetstaffmemberbysearchfilterGet: build.query<
        ApiServicesAppProcedureGetstaffmemberbysearchfilterGetApiResponse,
        ApiServicesAppProcedureGetstaffmemberbysearchfilterGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetStaffMemberBySearchFilter`,
          params: {
            filter: queryArg.filter,
            isAnaethetist: queryArg.isAnaethetist,
          },
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetlocationsGet: build.query<
        ApiServicesAppProcedureGetlocationsGetApiResponse,
        ApiServicesAppProcedureGetlocationsGetApiArg
      >({
        query: () => ({url: `/api/services/app/Procedure/GetLocations`}),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetpatientinterventionsGet: build.query<
        ApiServicesAppProcedureGetpatientinterventionsGetApiResponse,
        ApiServicesAppProcedureGetpatientinterventionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetPatientInterventions`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureGetspecializedprocedureoverviewGet: build.query<
        ApiServicesAppProcedureGetspecializedprocedureoverviewGetApiResponse,
        ApiServicesAppProcedureGetspecializedprocedureoverviewGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetSpecializedProcedureOverview`,
          params: {
            patientId: queryArg.patientId,
            encounterId: queryArg.encounterId,
          },
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppSnowstormGetprocedurebytermGet: build.query<
        ApiServicesAppSnowstormGetprocedurebytermGetApiResponse,
        ApiServicesAppSnowstormGetprocedurebytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetProcedureByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as procedureApi};
export type ApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetApiResponse =
  /** status 200 Success */ PatientGynaecologicProcedureSuggestionResponse[];
export type ApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileGetproceduresuggestionsGetApiResponse =
  /** status 200 Success */ GetProcedureSuggestionResponseDto[];
export type ApiServicesAppPatientprofileGetproceduresuggestionsGetApiArg = void;
export type ApiServicesAppProcedureGetcheckedsafetylistGetApiResponse =
  /** status 200 Success */ SpecializedProcedureSafetyCheckListDto;
export type ApiServicesAppProcedureGetcheckedsafetylistGetApiArg = {
  patientId?: number;
  procedureId?: number;
};
export type ApiServicesAppProcedureGetspecializedproceduresafetychecklistGetApiResponse =
  /** status 200 Success */ SpecializedProcedureSafetyCheckListDto;
export type ApiServicesAppProcedureGetspecializedproceduresafetychecklistGetApiArg =
  {
    patientId?: number;
    procedureId?: number;
  };
export type ApiServicesAppProcedureUpdatespecializedprocedurechecklistPutApiResponse =
  unknown;
export type ApiServicesAppProcedureUpdatespecializedprocedurechecklistPutApiArg =
  {
    specializedProcedureSafetyCheckListDto: SpecializedProcedureSafetyCheckListDto;
  };
export type ApiServicesAppProcedureDeleteprocedureDeleteApiResponse = unknown;
export type ApiServicesAppProcedureDeleteprocedureDeleteApiArg = {
  input?: number;
};
export type ApiServicesAppProcedureCreateproceduresPostApiResponse = unknown;
export type ApiServicesAppProcedureCreateproceduresPostApiArg = {
  createProcedureDto: CreateProcedureDto;
};
export type ApiServicesAppProcedureUpdateprocedurestatusPutApiResponse =
  unknown;
export type ApiServicesAppProcedureUpdateprocedurestatusPutApiArg = {
  updateProcedureStatusDto: UpdateProcedureStatusDto;
};
export type ApiServicesAppProcedureCreateprocedurenotePostApiResponse = unknown;
export type ApiServicesAppProcedureCreateprocedurenotePostApiArg = {
  createProcedureNoteDto: CreateProcedureNoteDto;
};
export type ApiServicesAppProcedureCreateanaesthesianotePostApiResponse =
  unknown;
export type ApiServicesAppProcedureCreateanaesthesianotePostApiArg = {
  createAnaesthesiaNoteDto: CreateAnaesthesiaNoteDto;
};
export type ApiServicesAppProcedureCreatenotetemplatePostApiResponse = unknown;
export type ApiServicesAppProcedureCreatenotetemplatePostApiArg = {
  createNoteTemplateDto: CreateNoteTemplateDto;
};
export type ApiServicesAppProcedureGetnotelistGetApiResponse =
  /** status 200 Success */ NoteResponseDto[];
export type ApiServicesAppProcedureGetnotelistGetApiArg = {
  procedureId?: number;
  noteRequestType?: string;
};
export type ApiServicesAppProcedureGetnotetemplateslistGetApiResponse =
  /** status 200 Success */ NoteTemplateResponseDto[];
export type ApiServicesAppProcedureGetnotetemplateslistGetApiArg = {
  noteRequestType?: string;
};
export type ApiServicesAppProcedureGetproceduresuggestionsGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppProcedureGetproceduresuggestionsGetApiArg = void;
export type ApiServicesAppProcedureGetpatientproceduresGetApiResponse =
  /** status 200 Success */ PatientProcedureResponseDto[];
export type ApiServicesAppProcedureGetpatientproceduresGetApiArg = {
  patientId?: number;
  procedureType?: string;
  parentProcedureId?: number;
};
export type ApiServicesAppProcedureCreatestatementofhealthprofessionalPostApiResponse =
  unknown;
export type ApiServicesAppProcedureCreatestatementofhealthprofessionalPostApiArg =
  {
    createStatementOfHealthProfessionalDto: CreateStatementOfHealthProfessionalDto;
  };
export type ApiServicesAppProcedureGetstatementofhealthprofessionalGetApiResponse =
  /** status 200 Success */ StatementOfHealthProfessionalResponseDto;
export type ApiServicesAppProcedureGetstatementofhealthprofessionalGetApiArg = {
  procedureId?: number;
};
export type ApiServicesAppProcedureEmailstatementPostApiResponse = unknown;
export type ApiServicesAppProcedureEmailstatementPostApiArg = {
  emailStatementDto: EmailStatementDto;
};
export type ApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostApiResponse =
  unknown;
export type ApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostApiArg =
  {
    createStatementOfPatientOrNextOfKinOrGuardianDto: CreateStatementOfPatientOrNextOfKinOrGuardianDto;
  };
export type ApiServicesAppProcedureCreatespecializedprocedurenursedetailPostApiResponse =
  unknown;
export type ApiServicesAppProcedureCreatespecializedprocedurenursedetailPostApiArg =
  {
    createSpecializedProcedureNurseDetailCommand: CreateSpecializedProcedureNurseDetailCommand;
  };
export type ApiServicesAppProcedureDeletespecializedprocedurenursedetailDeleteApiResponse =
  unknown;
export type ApiServicesAppProcedureDeletespecializedprocedurenursedetailDeleteApiArg =
  {
    id?: number;
  };
export type ApiServicesAppProcedureGetspecializedprocedurenursedetailGetApiResponse =
  /** status 200 Success */ GetSpecializedProcedureNurseDetailResponse;
export type ApiServicesAppProcedureGetspecializedprocedurenursedetailGetApiArg =
  {
    procedureId?: number;
  };
export type ApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetApiResponse =
  /** status 200 Success */ StatementOfPatientOrNextOfKinOrGuardianResponseDto;
export type ApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetApiArg =
  {
    procedureId?: number;
  };
export type ApiServicesAppProcedureSignconfirmationofconsentPostApiResponse =
  unknown;
export type ApiServicesAppProcedureSignconfirmationofconsentPostApiArg = {
  signConfirmationOfConsentDto: SignConfirmationOfConsentDto;
};
export type ApiServicesAppProcedureGetsignconfirmationofconsentGetApiResponse =
  /** status 200 Success */ SignConfirmationOfConsentDto;
export type ApiServicesAppProcedureGetsignconfirmationofconsentGetApiArg = {
  procedureId?: number;
};
export type ApiServicesAppProcedureMarkprocedureasspecializedPostApiResponse =
  unknown;
export type ApiServicesAppProcedureMarkprocedureasspecializedPostApiArg = {
  createSpecializedProcedureDto: CreateSpecializedProcedureDto;
};
export type ApiServicesAppProcedureScheduleprocedurePostApiResponse = unknown;
export type ApiServicesAppProcedureScheduleprocedurePostApiArg = {
  scheduleProcedureDto: ScheduleProcedureDto;
};
export type ApiServicesAppProcedureGetstaffmemberbysearchfilterGetApiResponse =
  /** status 200 Success */ GetStaffMembersSimpleResponseDto[];
export type ApiServicesAppProcedureGetstaffmemberbysearchfilterGetApiArg = {
  filter?: string;
  isAnaethetist?: boolean;
};
export type ApiServicesAppProcedureGetlocationsGetApiResponse =
  /** status 200 Success */ OperatingRoomDto[];
export type ApiServicesAppProcedureGetlocationsGetApiArg = void;
export type ApiServicesAppProcedureGetpatientinterventionsGetApiResponse =
  /** status 200 Success */ GetPatientInterventionsResponseDto;
export type ApiServicesAppProcedureGetpatientinterventionsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppProcedureGetspecializedprocedureoverviewGetApiResponse =
  /** status 200 Success */ GetSpecializedProcedureOverviewQueryResponse;
export type ApiServicesAppProcedureGetspecializedprocedureoverviewGetApiArg = {
  patientId?: number;
  encounterId?: number;
};
export type ApiServicesAppSnowstormGetprocedurebytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetprocedurebytermGetApiArg = {
  searchTerm?: string;
};
export type PatientGynaecologicProcedureSuggestionResponse = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type GetProcedureSuggestionResponseDto = {
  name?: string | null;
  snomedId?: number;
  id?: number;
};
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type SafetyCheckList = {
  name?: string | null;
  checked?: boolean;
  type?: ProcedureEntryType;
  dateChecked?: string | null;
};
export type SpecializedProcedureSafetyCheckListDto = {
  checkLists?: SafetyCheckList[] | null;
  procedureId?: number;
  patientId?: number;
};
export type SelectedProcedureDto = {
  snowmedId?: number | null;
  procedureName: string;
};
export type CreateProcedureDto = {
  snowmedId?: number | null;
  patientId: number;
  selectedProcedures?: SelectedProcedureDto[] | null;
  note?: string | null;
  procedureType: string;
  procedureEntryType?: ProcedureEntryType;
  encounterId?: number;
  parentProcedureId?: number | null;
};
export type ProcedureStatus = 0 | 1;
export type UpdateProcedureStatusDto = {
  procedureId?: number;
  procedureStatus?: ProcedureStatus;
};
export type NoteType = 'ProcedureNote' | 'AnaesthesiaNote' | 'NurseNote';
export type CreateProcedureNoteDto = {
  templateId?: number | null;
  procedureId?: number;
  note?: string | null;
  noteType?: NoteType;
};
export type CreateAnaesthesiaNoteDto = {
  templateId?: number | null;
  procedureId?: number;
  note?: string | null;
};
export type CreateNoteTemplateDto = {
  noteType?: string | null;
  noteTitle?: string | null;
  note?: string | null;
};
export type NoteResponseDto = {
  id?: number;
  procedureId?: number;
  note?: string | null;
  creationTime?: string;
};
export type NoteTemplateResponseDto = {
  id?: number;
  noteType?: NoteType;
  noteTypeName?: string | null;
  noteTitle?: string | null;
  note?: string | null;
  creationTime?: string;
};
export type SnowstormSimpleResponseDto = {
  id?: string | null;
  name?: string | null;
};
export type SpecializedProcedureResponseDto = {
  id?: number;
  procedureId?: number;
  snowmedId?: number | null;
  procedureName?: string | null;
  requireAnaesthetist?: boolean;
  isProcedureInSameSession?: boolean;
  anaesthetistUserId?: number | null;
  roomId?: number | null;
  roomName?: string | null;
  duration?: string | null;
  proposedDate?: string | null;
  time?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
};
export type ScheduledProcedureResponseDto = {
  id?: number;
  procedureId?: number;
  snowmedId?: number | null;
  procedureName?: string | null;
  requireAnaesthetist?: boolean;
  isProcedureInSameSession?: boolean;
  anaesthetistUserId?: number | null;
  roomId?: number | null;
  roomName?: string | null;
  duration?: string | null;
  proposedDate?: string | null;
  time?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
};
export type PatientProcedureResponseDto = {
  id?: number;
  snowmedId?: number | null;
  patientId?: number;
  selectedProcedures?: SelectedProcedureDto[] | null;
  note?: string | null;
  procedureType?: string | null;
  specializedProcedures?: SpecializedProcedureResponseDto[] | null;
  scheduledProcedures?: ScheduledProcedureResponseDto[] | null;
  creationTime?: string;
  procedureEntryType?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  procedureStatus?: ProcedureStatus;
};
export type CreateStatementOfHealthProfessionalDto = {
  procedureId?: number;
  patientId?: number;
  intendedBenefits?: string | null;
  frequentlyOccuringRisks?: string[] | null;
  extraProcedures?: string[] | null;
  informationProvidedToPatient?: boolean;
  isRegionalAnaesthesia?: boolean;
  isLocalAnaesthesia?: boolean;
  isSedationAnaesthesia?: boolean;
  consultantName?: string | null;
  primarySpecialistName?: string | null;
};
export type GenderType = 'Male' | 'Female' | 'Other';
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
export type SimplePatientInfoResponseDto = {
  id?: number;
  genderType?: GenderType;
  firstName?: string | null;
  lastName?: string | null;
  title?: TitleType;
  middleName?: string | null;
  emailAddress?: string | null;
};
export type StatementOfHealthProfessionalResponseDto = {
  id?: number;
  patient?: SimplePatientInfoResponseDto;
  creationTime?: string;
  procedureId?: number;
  patientId?: number;
  intendedBenefits?: string | null;
  frequentlyOccuringRisks?: string[] | null;
  extraProcedures?: string[] | null;
  informationProvidedToPatient?: boolean;
  isRegionalAnaesthesia?: boolean;
  isLocalAnaesthesia?: boolean;
  isSedationAnaesthesia?: boolean;
  consultantName?: string | null;
  primarySpecialistName?: string | null;
};
export type EmailStatementDto = {
  procedureId?: number;
  patientId?: number;
  recipientEmails?: string[] | null;
};
export type AddtionalProcedure = {
  name?: string | null;
  requested?: boolean;
};
export type IdentificationType =
  | 'State_Id_Card'
  | 'State_Driver_License'
  | 'Military_Id_Card'
  | 'Social_Security_Card'
  | 'Birth_Certificate'
  | 'Voter_Registration_Card';
export type CreateStatementOfPatientOrNextOfKinOrGuardianDto = {
  procedureId?: number;
  patientId?: number;
  additionalProcedures?: AddtionalProcedure[] | null;
  usePatientAuthorizedNextOfKinOrGuardian?: boolean;
  signatureOfNextOfKinOrGuardian?: string | null;
  nextOfKinOrGuardianGovIssuedId?: IdentificationType;
  nextOfKinOrGuardianGovIssuedIdNumber?: string | null;
  signatureOfWitness?: string | null;
  signatureOfWitnessGovIssuedId?: IdentificationType;
  signatureOfWitnessGovIssuedIdNumber?: string | null;
  secondaryLanguageOfInterpretation?: string | null;
  interpretedByStaffUserId?: number | null;
  secondarySignatureOfNextOfKinOrGuardian?: string | null;
  secondaryNextOfKinOrGuardianGovIssuedId?: IdentificationType;
  secondaryNextOfKinOrGuardianGovIssuedIdNumber?: string | null;
  secondarySignatureOfWitness?: string | null;
  secondarySignatureOfWitnessGovIssuedId?: IdentificationType;
  secondarySignatureOfWitnessGovIssuedIdNumber?: string | null;
};
export type CreateSpecializedProcedureNurseDetailCommand = {
  timePatientReceived: string;
  procedureId: number;
  scrubStaffMemberId?: number | null;
  circulatingStaffMemberId?: number | null;
};
export type GetSpecializedProcedureNurseDetailResponse = {
  id?: number;
  scrubNurseName?: string | null;
  circulatingNurseName?: string | null;
  timePatientReceived?: string;
  procedureId?: number;
};
export type GetStaffMembersSimpleResponseDto = {
  id?: number;
  staffMemberId?: number | null;
  title?: TitleType;
  name?: string | null;
  middleName?: string | null;
  surname?: string | null;
  staffCode?: string | null;
};
export type StatementOfPatientOrNextOfKinOrGuardianResponseDto = {
  id?: number;
  patient?: SimplePatientInfoResponseDto;
  interpretedByStaffUser?: GetStaffMembersSimpleResponseDto;
  facilityName?: string | null;
  facilityLevel?: string | null;
  creationTime?: string;
  procedureId?: number;
  patientId?: number;
  additionalProcedures?: AddtionalProcedure[] | null;
  usePatientAuthorizedNextOfKinOrGuardian?: boolean;
  signatureOfNextOfKinOrGuardian?: string | null;
  nextOfKinOrGuardianGovIssuedId?: IdentificationType;
  nextOfKinOrGuardianGovIssuedIdNumber?: string | null;
  signatureOfWitness?: string | null;
  signatureOfWitnessGovIssuedId?: IdentificationType;
  signatureOfWitnessGovIssuedIdNumber?: string | null;
  secondaryLanguageOfInterpretation?: string | null;
  interpretedByStaffUserId?: number | null;
  secondarySignatureOfNextOfKinOrGuardian?: string | null;
  secondaryNextOfKinOrGuardianGovIssuedId?: IdentificationType;
  secondaryNextOfKinOrGuardianGovIssuedIdNumber?: string | null;
  secondarySignatureOfWitness?: string | null;
  secondarySignatureOfWitnessGovIssuedId?: IdentificationType;
  secondarySignatureOfWitnessGovIssuedIdNumber?: string | null;
};
export type SignConfirmationOfConsentDto = {
  procedureId?: number;
  patientId?: number;
  confirmedByConsultantName?: string | null;
  confirmedByPrimarySpecialistName?: string | null;
};
export type CreateSpecializedProcedureDto = {
  procedureId?: number;
  procedures?: SelectedProcedureDto[] | null;
  requireAnaesthetist?: boolean;
  isProcedureInSameSession?: boolean;
  anaesthetistUserId?: number | null;
  roomId?: number | null;
  duration?: string | null;
  proposedDate?: string | null;
  time?: string | null;
};
export type ScheduleProcedureDto = {
  procedureId?: number;
  procedures?: SelectedProcedureDto[] | null;
  isProcedureInSameSession?: boolean;
  roomId?: number | null;
  duration?: string | null;
  proposedDate?: string | null;
  time?: string | null;
};
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type RoomAvailabilityDto = {
  dayOfWeek?: DayOfWeek;
  startTime?: string | null;
  endTime?: string | null;
  id?: number | null;
};
export type OperatingRoomDto = {
  roomId?: number;
  roomName?: string | null;
  isActive?: boolean;
  availabilities?: RoomAvailabilityDto[] | null;
};
export type SelectedProcedureListDto = {
  snowmedId?: number;
  procedureName?: string | null;
};
export type SelectedProceduresDto = {
  procedureId?: number;
  selectedProcedure?: SelectedProcedureListDto[] | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type GetPatientInterventionsResponseDto = {
  patientId?: number;
  pictureUrl?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  gender?: string | null;
  age?: string | null;
  patientCode?: string | null;
  interventions?: SelectedProceduresDto[] | null;
  isDeleted?: boolean;
};
export type SpecializedProcedureDetails = {
  procedureName?: string | null;
  anaesthetist?: string | null;
  anaesthesia?: string | null;
};
export type AdmissionDetails = {
  name?: string | null;
  dateAdmitted?: string;
  lengthStayed?: number;
};
export type GetSpecializedProcedureOverviewQueryResponse = {
  procedure?: SpecializedProcedureDetails[] | null;
  specialist?: string | null;
  specialistAssistant?: string | null;
  scrubNurse?: string | null;
  bloodUnits?: string | null;
  admissionDetails?: AdmissionDetails;
};
export const {
  useApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetQuery,
  useApiServicesAppPatientprofileGetproceduresuggestionsGetQuery,
  useApiServicesAppProcedureGetcheckedsafetylistGetQuery,
  useApiServicesAppProcedureGetspecializedproceduresafetychecklistGetQuery,
  useApiServicesAppProcedureUpdatespecializedprocedurechecklistPutMutation,
  useApiServicesAppProcedureDeleteprocedureDeleteMutation,
  useApiServicesAppProcedureCreateproceduresPostMutation,
  useApiServicesAppProcedureUpdateprocedurestatusPutMutation,
  useApiServicesAppProcedureCreateprocedurenotePostMutation,
  useApiServicesAppProcedureCreateanaesthesianotePostMutation,
  useApiServicesAppProcedureCreatenotetemplatePostMutation,
  useApiServicesAppProcedureGetnotelistGetQuery,
  useApiServicesAppProcedureGetnotetemplateslistGetQuery,
  useApiServicesAppProcedureGetproceduresuggestionsGetQuery,
  useApiServicesAppProcedureGetpatientproceduresGetQuery,
  useApiServicesAppProcedureCreatestatementofhealthprofessionalPostMutation,
  useApiServicesAppProcedureGetstatementofhealthprofessionalGetQuery,
  useApiServicesAppProcedureEmailstatementPostMutation,
  useApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostMutation,
  useApiServicesAppProcedureCreatespecializedprocedurenursedetailPostMutation,
  useApiServicesAppProcedureDeletespecializedprocedurenursedetailDeleteMutation,
  useApiServicesAppProcedureGetspecializedprocedurenursedetailGetQuery,
  useApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetQuery,
  useApiServicesAppProcedureSignconfirmationofconsentPostMutation,
  useApiServicesAppProcedureGetsignconfirmationofconsentGetQuery,
  useApiServicesAppProcedureMarkprocedureasspecializedPostMutation,
  useApiServicesAppProcedureScheduleprocedurePostMutation,
  useApiServicesAppProcedureGetstaffmemberbysearchfilterGetQuery,
  useApiServicesAppProcedureGetlocationsGetQuery,
  useApiServicesAppProcedureGetpatientinterventionsGetQuery,
  useApiServicesAppProcedureGetspecializedprocedureoverviewGetQuery,
  useApiServicesAppSnowstormGetprocedurebytermGetQuery,
} = injectedRtkApi;
