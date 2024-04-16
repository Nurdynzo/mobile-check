import {baseApi as api} from './baseApi';
export const addTagTypes = ['VitalSigns'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppVitalsignsGetallGet: build.query<
        ApiServicesAppVitalsignsGetallGetApiResponse,
        ApiServicesAppVitalsignsGetallGetApiArg
      >({
        query: () => ({url: `/api/services/app/VitalSigns/GetAll`}),
        providesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsCreatepatientvitalPost: build.mutation<
        ApiServicesAppVitalsignsCreatepatientvitalPostApiResponse,
        ApiServicesAppVitalsignsCreatepatientvitalPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/CreatePatientVital`,
          method: 'POST',
          body: queryArg.createMultiplePatientVitalDto,
        }),
        invalidatesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsGetpatientvitalssummaryGet: build.query<
        ApiServicesAppVitalsignsGetpatientvitalssummaryGetApiResponse,
        ApiServicesAppVitalsignsGetpatientvitalssummaryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/GetPatientVitalsSummary`,
          params: {
            patientId: queryArg.patientId,
            procedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsGetpatientvitalsGet: build.query<
        ApiServicesAppVitalsignsGetpatientvitalsGetApiResponse,
        ApiServicesAppVitalsignsGetpatientvitalsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/GetPatientVitals`,
          params: {
            patientId: queryArg.patientId,
            procedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsRecheckpatientvitalPost: build.mutation<
        ApiServicesAppVitalsignsRecheckpatientvitalPostApiResponse,
        ApiServicesAppVitalsignsRecheckpatientvitalPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/RecheckPatientVital`,
          method: 'POST',
          body: queryArg.recheckPatientVitalDto,
        }),
        invalidatesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsDeletepatientvitalDelete: build.mutation<
        ApiServicesAppVitalsignsDeletepatientvitalDeleteApiResponse,
        ApiServicesAppVitalsignsDeletepatientvitalDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/DeletePatientVital`,
          method: 'DELETE',
          params: {patientVitalIds: queryArg.patientVitalIds},
        }),
        invalidatesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsGetgcsscoringGet: build.query<
        ApiServicesAppVitalsignsGetgcsscoringGetApiResponse,
        ApiServicesAppVitalsignsGetgcsscoringGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/GetGCSScoring`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsGetapgarscoringGet: build.query<
        ApiServicesAppVitalsignsGetapgarscoringGetApiResponse,
        ApiServicesAppVitalsignsGetapgarscoringGetApiArg
      >({
        query: () => ({url: `/api/services/app/VitalSigns/GetApgarScoring`}),
        providesTags: ['VitalSigns'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as vitalSignsApi};
export type ApiServicesAppVitalsignsGetallGetApiResponse =
  /** status 200 Success */ GetAllVitalSignsResponse[];
export type ApiServicesAppVitalsignsGetallGetApiArg = void;
export type ApiServicesAppVitalsignsCreatepatientvitalPostApiResponse = unknown;
export type ApiServicesAppVitalsignsCreatepatientvitalPostApiArg = {
  createMultiplePatientVitalDto: CreateMultiplePatientVitalDto;
};
export type ApiServicesAppVitalsignsGetpatientvitalssummaryGetApiResponse =
  /** status 200 Success */ PatientVitalsSummaryResponseDto[];
export type ApiServicesAppVitalsignsGetpatientvitalssummaryGetApiArg = {
  patientId?: number;
  procedureId?: number;
};
export type ApiServicesAppVitalsignsGetpatientvitalsGetApiResponse =
  /** status 200 Success */ PatientVitalResponseDto[];
export type ApiServicesAppVitalsignsGetpatientvitalsGetApiArg = {
  patientId?: number;
  procedureId?: number;
};
export type ApiServicesAppVitalsignsRecheckpatientvitalPostApiResponse =
  unknown;
export type ApiServicesAppVitalsignsRecheckpatientvitalPostApiArg = {
  recheckPatientVitalDto: RecheckPatientVitalDto;
};
export type ApiServicesAppVitalsignsDeletepatientvitalDeleteApiResponse =
  unknown;
export type ApiServicesAppVitalsignsDeletepatientvitalDeleteApiArg = {
  patientVitalIds?: number[];
};
export type ApiServicesAppVitalsignsGetgcsscoringGetApiResponse =
  /** status 200 Success */ GetGcsScoringResponse[];
export type ApiServicesAppVitalsignsGetgcsscoringGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppVitalsignsGetapgarscoringGetApiResponse =
  /** status 200 Success */ GetApgarScoringResponse[];
export type ApiServicesAppVitalsignsGetapgarscoringGetApiArg = void;
export type MeasurementSiteDto = {
  id?: number;
  site?: string | null;
  default?: boolean;
};
export type MeasurementRangeDto = {
  id?: number;
  lower?: number | null;
  upper?: number | null;
  unit?: string | null;
  decimalPlaces?: number | null;
  maxLength?: number | null;
};
export type GetAllVitalSignsResponse = {
  id?: number;
  sign?: string | null;
  sites?: MeasurementSiteDto[] | null;
  ranges?: MeasurementRangeDto[] | null;
  leftRight?: boolean;
  decimalPlaces?: number;
  isPreset?: boolean;
  maxLength?: number;
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
export type GetSimpleVitalSignsResponse = {
  id?: number;
  sign?: string | null;
  leftRight?: boolean;
  decimalPlaces?: number;
  isPreset?: boolean;
  maxLength?: number;
};
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
export type GetStaffMembersSimpleResponseDto = {
  id?: number;
  staffMemberId?: number | null;
  title?: TitleType;
  name?: string | null;
  middleName?: string | null;
  surname?: string | null;
  staffCode?: string | null;
};
export type PatientVitalType = 'NormalVital' | 'OldVital' | 'NewRecheckedVital';
export type PatientVitalPosition = 'LEFT' | 'RIGHT';
export type PatientVitalResponseDto = {
  id?: number;
  patientId?: number;
  painScale?: number;
  vitalSignId?: number;
  vitalSign?: GetSimpleVitalSignsResponse;
  measurementSiteId?: number | null;
  measurementSite?: MeasurementSiteDto;
  measurementRangeId?: number | null;
  measurementRange?: MeasurementRangeDto;
  vitalReading?: number;
  vitalReadingSummary?: string | null;
  procedureId?: number | null;
  creatorUserId?: number;
  creationTime?: string;
  creatorUser?: GetStaffMembersSimpleResponseDto;
  lastModificationTime?: string | null;
  lastModifierUser?: GetStaffMembersSimpleResponseDto;
  deletionTime?: string | null;
  patientVitalType?: PatientVitalType;
  overThreshold?: boolean;
  position?: string | null;
  vitalPosition?: PatientVitalPosition;
  procedureEntryType?: ProcedureEntryType;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type PatientVitalsSummaryResponseDto = {
  date?: string;
  patientVitals?: PatientVitalResponseDto[] | null;
  time?: string;
  isDeleted?: boolean;
};
export type RecheckPatientVitalDto = {
  deleteMostRecentRecord?: boolean;
  patientId?: number;
  procedureId?: number | null;
  id?: number;
  vitalSignId?: number | null;
  measurementSiteId?: number | null;
  measurementRangeId?: number | null;
  vitalReading?: number;
  position?: string | null;
  encounterId?: number;
};
export type GcsScoringRangeDto = {
  score?: number;
  ageMin?: number;
  ageMax?: number | null;
  response?: string | null;
};
export type GetGcsScoringResponse = {
  name?: string | null;
  ranges?: GcsScoringRangeDto[] | null;
};
export type ApgarScoringRangeDto = {
  score?: number;
  result?: string | null;
};
export type GetApgarScoringResponse = {
  name?: string | null;
  ranges?: ApgarScoringRangeDto[] | null;
};
export const {
  useApiServicesAppVitalsignsGetallGetQuery,
  useApiServicesAppVitalsignsCreatepatientvitalPostMutation,
  useApiServicesAppVitalsignsGetpatientvitalssummaryGetQuery,
  useApiServicesAppVitalsignsGetpatientvitalsGetQuery,
  useApiServicesAppVitalsignsRecheckpatientvitalPostMutation,
  useApiServicesAppVitalsignsDeletepatientvitalDeleteMutation,
  useApiServicesAppVitalsignsGetgcsscoringGetQuery,
  useApiServicesAppVitalsignsGetapgarscoringGetQuery,
} = injectedRtkApi;
