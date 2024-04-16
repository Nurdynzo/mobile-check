import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'Discharge',
  'Medication',
  'Patients',
  'Snowstorm',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppDischargeGetdischargemedicationsGet: build.query<
        ApiServicesAppDischargeGetdischargemedicationsGetApiResponse,
        ApiServicesAppDischargeGetdischargemedicationsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Discharge/GetDischargeMedications`,
          params: {dischargeId: queryArg.dischargeId},
        }),
        providesTags: ['Discharge'],
      }),
      apiServicesAppMedicationCreatemedicationPost: build.mutation<
        ApiServicesAppMedicationCreatemedicationPostApiResponse,
        ApiServicesAppMedicationCreatemedicationPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/CreateMedication`,
          method: 'POST',
          body: queryArg.createMultipleMedicationsDto,
        }),
        invalidatesTags: ['Medication'],
      }),
      apiServicesAppMedicationGetsearchedmedicationsGet: build.query<
        ApiServicesAppMedicationGetsearchedmedicationsGetApiResponse,
        ApiServicesAppMedicationGetsearchedmedicationsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/GetSearchedMedications`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Medication'],
      }),
      apiServicesAppMedicationGetmedicationsuggestionsGet: build.query<
        ApiServicesAppMedicationGetmedicationsuggestionsGetApiResponse,
        ApiServicesAppMedicationGetmedicationsuggestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/Medication/GetMedicationSuggestions`,
        }),
        providesTags: ['Medication'],
      }),
      apiServicesAppMedicationGetviewmedicationGet: build.query<
        ApiServicesAppMedicationGetviewmedicationGetApiResponse,
        ApiServicesAppMedicationGetviewmedicationGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/GetViewMedication`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Medication'],
      }),
      apiServicesAppMedicationGetpatientprescriptionsGet: build.query<
        ApiServicesAppMedicationGetpatientprescriptionsGetApiResponse,
        ApiServicesAppMedicationGetpatientprescriptionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/GetPatientPrescriptions`,
          params: {
            patientId: queryArg.patientId,
            procedureId: queryArg.procedureId,
            encounterId: queryArg.encounterId,
          },
        }),
        providesTags: ['Medication'],
      }),
      apiServicesAppMedicationGetmedicationfordiscontinueGet: build.query<
        ApiServicesAppMedicationGetmedicationfordiscontinueGetApiResponse,
        ApiServicesAppMedicationGetmedicationfordiscontinueGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/GetMedicationForDiscontinue`,
          params: {
            patientId: queryArg.patientId,
            encounterId: queryArg.encounterId,
          },
        }),
        providesTags: ['Medication'],
      }),
      apiServicesAppMedicationGetmedicationformarkasadministeredGet:
        build.query<
          ApiServicesAppMedicationGetmedicationformarkasadministeredGetApiResponse,
          ApiServicesAppMedicationGetmedicationformarkasadministeredGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Medication/GetMedicationForMarkAsAdministered`,
            params: {
              patientId: queryArg.patientId,
              encounterId: queryArg.encounterId,
            },
          }),
          providesTags: ['Medication'],
        }),
      apiServicesAppMedicationMarkmedicationfordiscontinuePost: build.mutation<
        ApiServicesAppMedicationMarkmedicationfordiscontinuePostApiResponse,
        ApiServicesAppMedicationMarkmedicationfordiscontinuePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/MarkMedicationForDiscontinue`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['Medication'],
      }),
      apiServicesAppMedicationMarkmedicationforadministerPost: build.mutation<
        ApiServicesAppMedicationMarkmedicationforadministerPostApiResponse,
        ApiServicesAppMedicationMarkmedicationforadministerPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/MarkMedicationForAdminister`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['Medication'],
      }),
      apiServicesAppMedicationDeletemedicationDelete: build.mutation<
        ApiServicesAppMedicationDeletemedicationDeleteApiResponse,
        ApiServicesAppMedicationDeletemedicationDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/DeleteMedication`,
          method: 'DELETE',
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['Medication'],
      }),
      apiServicesAppMedicationAdministermedicationPost: build.mutation<
        ApiServicesAppMedicationAdministermedicationPostApiResponse,
        ApiServicesAppMedicationAdministermedicationPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/AdministerMedication`,
          method: 'POST',
          body: queryArg.medicationAdministrationActivityRequest,
        }),
        invalidatesTags: ['Medication'],
      }),
      apiServicesAppMedicationGetadministeredmedicationGet: build.query<
        ApiServicesAppMedicationGetadministeredmedicationGetApiResponse,
        ApiServicesAppMedicationGetadministeredmedicationGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/GetAdministeredMedication`,
          params: {encounterId: queryArg.encounterId},
        }),
        providesTags: ['Medication'],
      }),
      apiServicesAppMedicationGetmedicationsugguestionsGet: build.query<
        ApiServicesAppMedicationGetmedicationsugguestionsGetApiResponse,
        ApiServicesAppMedicationGetmedicationsugguestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/Medication/GetMedicationSugguestions`,
        }),
        providesTags: ['Medication'],
      }),
      apiServicesAppPatientsGetpatientmedicationsGet: build.query<
        ApiServicesAppPatientsGetpatientmedicationsGetApiResponse,
        ApiServicesAppPatientsGetpatientmedicationsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetPatientMedications`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppSnowstormGetmedicationbytermGet: build.query<
        ApiServicesAppSnowstormGetmedicationbytermGetApiResponse,
        ApiServicesAppSnowstormGetmedicationbytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetMedicationByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as medicationApi};
export type ApiServicesAppDischargeGetdischargemedicationsGetApiResponse =
  /** status 200 Success */ PatientMedicationForReturnDto[];
export type ApiServicesAppDischargeGetdischargemedicationsGetApiArg = {
  dischargeId?: number;
};
export type ApiServicesAppMedicationCreatemedicationPostApiResponse = unknown;
export type ApiServicesAppMedicationCreatemedicationPostApiArg = {
  createMultipleMedicationsDto: CreateMultipleMedicationsDto;
};
export type ApiServicesAppMedicationGetsearchedmedicationsGetApiResponse =
  /** status 200 Success */ SearchMedicationForReturnDto[];
export type ApiServicesAppMedicationGetsearchedmedicationsGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppMedicationGetmedicationsuggestionsGetApiResponse =
  /** status 200 Success */ MedicationSuggestionForReturnDto;
export type ApiServicesAppMedicationGetmedicationsuggestionsGetApiArg = void;
export type ApiServicesAppMedicationGetviewmedicationGetApiResponse =
  /** status 200 Success */ MedicalViewResponse[];
export type ApiServicesAppMedicationGetviewmedicationGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppMedicationGetpatientprescriptionsGetApiResponse =
  /** status 200 Success */ PatientMedicationForReturnDto[];
export type ApiServicesAppMedicationGetpatientprescriptionsGetApiArg = {
  patientId?: number;
  procedureId?: number;
  encounterId?: number;
};
export type ApiServicesAppMedicationGetmedicationfordiscontinueGetApiResponse =
  /** status 200 Success */ MedicationSummaryQueryResponse[];
export type ApiServicesAppMedicationGetmedicationfordiscontinueGetApiArg = {
  patientId?: number;
  encounterId?: number;
};
export type ApiServicesAppMedicationGetmedicationformarkasadministeredGetApiResponse =
  /** status 200 Success */ MedicationSummaryQueryResponse[];
export type ApiServicesAppMedicationGetmedicationformarkasadministeredGetApiArg =
  {
    patientId?: number;
    encounterId?: number;
  };
export type ApiServicesAppMedicationMarkmedicationfordiscontinuePostApiResponse =
  unknown;
export type ApiServicesAppMedicationMarkmedicationfordiscontinuePostApiArg = {
  body: number[];
};
export type ApiServicesAppMedicationMarkmedicationforadministerPostApiResponse =
  unknown;
export type ApiServicesAppMedicationMarkmedicationforadministerPostApiArg = {
  body: number[];
};
export type ApiServicesAppMedicationDeletemedicationDeleteApiResponse = unknown;
export type ApiServicesAppMedicationDeletemedicationDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppMedicationAdministermedicationPostApiResponse =
  unknown;
export type ApiServicesAppMedicationAdministermedicationPostApiArg = {
  medicationAdministrationActivityRequest: MedicationAdministrationActivityRequest;
};
export type ApiServicesAppMedicationGetadministeredmedicationGetApiResponse =
  /** status 200 Success */ MedicationAdministrationActivityResponse[];
export type ApiServicesAppMedicationGetadministeredmedicationGetApiArg = {
  encounterId?: number;
};
export type ApiServicesAppMedicationGetmedicationsugguestionsGetApiResponse =
  /** status 200 Success */ SearchMedicationForReturnDto[];
export type ApiServicesAppMedicationGetmedicationsugguestionsGetApiArg = void;
export type ApiServicesAppPatientsGetpatientmedicationsGetApiResponse =
  /** status 200 Success */ GetPatientsMedicationsResponse;
export type ApiServicesAppPatientsGetpatientmedicationsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppSnowstormGetmedicationbytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetmedicationbytermGetApiArg = {
  searchTerm?: string;
};
export type PatientMedicationForReturnDto = {
  id?: number;
  patientId?: number;
  productId?: number;
  productName?: string | null;
  productSource?: string | null;
  doseUnit?: string | null;
  frequency?: string | null;
  duration?: string | null;
  direction?: string | null;
  note?: string | null;
  procedureId?: number | null;
  procedureEntryType?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
  deletedUser?: string | null;
  isAdministered?: boolean;
  isDiscontinued?: boolean;
  discontinueUser?: string | null;
};
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type CreateMedicationDto = {
  patientId?: number;
  productId?: number;
  productName?: string | null;
  productSource?: string | null;
  doseUnit?: string | null;
  doseValue?: number | null;
  frequencyUnit?: string | null;
  frequencyValue?: number | null;
  durationUnit?: string | null;
  durationValue?: number | null;
  direction?: string | null;
  note?: string | null;
};
export type CreateMultipleMedicationsDto = {
  procedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
  prescriptions?: CreateMedicationDto[] | null;
  encounterId?: number;
};
export type SearchMedicationForReturnDto = {
  id?: number;
  productName?: string | null;
  genericName?: string | null;
  activeIngredient?: string | null;
  brandName?: string | null;
  categoryName?: string | null;
  doseForm?: string | null;
  doseStrength?: string | null;
  source?: string | null;
};
export type MedicationSuggestionForReturnDto = {
  dose?: string[] | null;
  unit?: string[] | null;
  frequency?: string[] | null;
  direction?: string[] | null;
  duration?: string[] | null;
};
export type MedicalViewResponse = {
  id?: number;
  productName?: string | null;
  description?: string | null;
};
export type MedicationSummaryQueryResponse = {
  id?: number;
  productName?: string | null;
  description?: string | null;
};
export type MedicationAdministrationActivityRequest = {
  medicationId: number;
  patientEncounterId: number;
  isAvailable?: boolean;
  direction?: string | null;
  note?: string | null;
  doseUnit?: string | null;
  doseValue?: number | null;
  frequencyUnit?: string | null;
  frequencyValue?: number | null;
  durationUnit?: string | null;
  durationValue?: number | null;
  productName?: string | null;
};
export type MedicationAdministrationActivityResponse = {
  id?: number;
  medicationId?: number;
  patientEncounterId?: number;
  isAvailable?: boolean;
  direction?: string | null;
  note?: string | null;
  doseUnit?: string | null;
  doseValue?: number | null;
  frequencyUnit?: string | null;
  frequencyValue?: number | null;
  durationUnit?: string | null;
  durationValue?: number | null;
  productName?: string | null;
  createdDate?: string;
};
export type MedicationsListDto = {
  productName?: string | null;
  doseUnit?: string | null;
  frequency?: string | null;
  duration?: string | null;
  direction?: string | null;
};
export type GetPatientsMedicationsResponse = {
  patientId?: number;
  pictureUrl?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  gender?: string | null;
  age?: string | null;
  patientCode?: string | null;
  patientMedications?: MedicationsListDto[] | null;
};
export type SnowstormSimpleResponseDto = {
  id?: string | null;
  name?: string | null;
};
export const {
  useApiServicesAppDischargeGetdischargemedicationsGetQuery,
  useApiServicesAppMedicationCreatemedicationPostMutation,
  useApiServicesAppMedicationGetsearchedmedicationsGetQuery,
  useApiServicesAppMedicationGetmedicationsuggestionsGetQuery,
  useApiServicesAppMedicationGetviewmedicationGetQuery,
  useApiServicesAppMedicationGetpatientprescriptionsGetQuery,
  useApiServicesAppMedicationGetmedicationfordiscontinueGetQuery,
  useApiServicesAppMedicationGetmedicationformarkasadministeredGetQuery,
  useApiServicesAppMedicationMarkmedicationfordiscontinuePostMutation,
  useApiServicesAppMedicationMarkmedicationforadministerPostMutation,
  useApiServicesAppMedicationDeletemedicationDeleteMutation,
  useApiServicesAppMedicationAdministermedicationPostMutation,
  useApiServicesAppMedicationGetadministeredmedicationGetQuery,
  useApiServicesAppMedicationGetmedicationsugguestionsGetQuery,
  useApiServicesAppPatientsGetpatientmedicationsGetQuery,
  useApiServicesAppSnowstormGetmedicationbytermGetQuery,
} = injectedRtkApi;
