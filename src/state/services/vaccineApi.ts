import {baseApi as api} from './baseApi';
export const addTagTypes = ['Vaccine'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppVaccineGetallGet: build.query<
        ApiServicesAppVaccineGetallGetApiResponse,
        ApiServicesAppVaccineGetallGetApiArg
      >({
        query: () => ({url: `/api/services/app/Vaccine/GetAll`}),
        providesTags: ['Vaccine'],
      }),
      apiServicesAppVaccineGetvaccineGet: build.query<
        ApiServicesAppVaccineGetvaccineGetApiResponse,
        ApiServicesAppVaccineGetvaccineGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Vaccine/GetVaccine`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Vaccine'],
      }),
      apiServicesAppVaccineGetallvaccinegroupsGet: build.query<
        ApiServicesAppVaccineGetallvaccinegroupsGetApiResponse,
        ApiServicesAppVaccineGetallvaccinegroupsGetApiArg
      >({
        query: () => ({url: `/api/services/app/Vaccine/GetAllVaccineGroups`}),
        providesTags: ['Vaccine'],
      }),
      apiServicesAppVaccineGetvaccinegroupGet: build.query<
        ApiServicesAppVaccineGetvaccinegroupGetApiResponse,
        ApiServicesAppVaccineGetvaccinegroupGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Vaccine/GetVaccineGroup`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Vaccine'],
      }),
      apiServicesAppVaccineCreatevaccinationPost: build.mutation<
        ApiServicesAppVaccineCreatevaccinationPostApiResponse,
        ApiServicesAppVaccineCreatevaccinationPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Vaccine/CreateVaccination`,
          method: 'POST',
          body: queryArg.createMultipleVaccinationDto,
        }),
        invalidatesTags: ['Vaccine'],
      }),
      apiServicesAppVaccineCreatevaccinationhistoryPost: build.mutation<
        ApiServicesAppVaccineCreatevaccinationhistoryPostApiResponse,
        ApiServicesAppVaccineCreatevaccinationhistoryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Vaccine/CreateVaccinationHistory`,
          method: 'POST',
          body: queryArg.createMultipleVaccinationHistoryDto,
        }),
        invalidatesTags: ['Vaccine'],
      }),
      apiServicesAppVaccineGetpatientvaccinationGet: build.query<
        ApiServicesAppVaccineGetpatientvaccinationGetApiResponse,
        ApiServicesAppVaccineGetpatientvaccinationGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Vaccine/GetPatientVaccination`,
          params: {Id: queryArg.id, procedureId: queryArg.procedureId},
        }),
        providesTags: ['Vaccine'],
      }),
      apiServicesAppVaccineGetpatientvaccinationhistoryGet: build.query<
        ApiServicesAppVaccineGetpatientvaccinationhistoryGetApiResponse,
        ApiServicesAppVaccineGetpatientvaccinationhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Vaccine/GetPatientVaccinationHistory`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Vaccine'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as vaccineApi};
export type ApiServicesAppVaccineGetallGetApiResponse =
  /** status 200 Success */ GetAllVaccinesResponse[];
export type ApiServicesAppVaccineGetallGetApiArg = void;
export type ApiServicesAppVaccineGetvaccineGetApiResponse =
  /** status 200 Success */ GetVaccineResponse;
export type ApiServicesAppVaccineGetvaccineGetApiArg = {
  id?: number;
};
export type ApiServicesAppVaccineGetallvaccinegroupsGetApiResponse =
  /** status 200 Success */ GetAllVaccineGroupsResponse[];
export type ApiServicesAppVaccineGetallvaccinegroupsGetApiArg = void;
export type ApiServicesAppVaccineGetvaccinegroupGetApiResponse =
  /** status 200 Success */ GetVaccineGroupResponse;
export type ApiServicesAppVaccineGetvaccinegroupGetApiArg = {
  id?: number;
};
export type ApiServicesAppVaccineCreatevaccinationPostApiResponse = unknown;
export type ApiServicesAppVaccineCreatevaccinationPostApiArg = {
  createMultipleVaccinationDto: CreateMultipleVaccinationDto;
};
export type ApiServicesAppVaccineCreatevaccinationhistoryPostApiResponse =
  unknown;
export type ApiServicesAppVaccineCreatevaccinationhistoryPostApiArg = {
  createMultipleVaccinationHistoryDto: CreateMultipleVaccinationHistoryDto;
};
export type ApiServicesAppVaccineGetpatientvaccinationGetApiResponse =
  /** status 200 Success */ VaccinationResponseDto[];
export type ApiServicesAppVaccineGetpatientvaccinationGetApiArg = {
  id?: number;
  procedureId?: number;
};
export type ApiServicesAppVaccineGetpatientvaccinationhistoryGetApiResponse =
  /** status 200 Success */ VaccinationHistoryResponseDto[];
export type ApiServicesAppVaccineGetpatientvaccinationhistoryGetApiArg = {
  id?: number;
};
export type GetAllVaccinesResponse = {
  id?: number;
  name?: string | null;
  fullName?: string | null;
};
export type UnitOfTime = 'Day' | 'Week' | 'Month' | 'Year';
export type VaccineScheduleDto = {
  id?: number;
  dosage?: string | null;
  doses?: number;
  routeOfAdministration?: string | null;
  ageMin?: number | null;
  ageMinUnit?: UnitOfTime;
  ageMax?: number | null;
  ageMaxUnit?: UnitOfTime;
  notes?: string | null;
};
export type GetVaccineResponse = {
  id?: number;
  name?: string | null;
  fullName?: string | null;
  schedules?: VaccineScheduleDto[] | null;
};
export type GetAllVaccineGroupsResponse = {
  id?: number;
  name?: string | null;
  fullName?: string | null;
};
export type GetVaccineGroupResponse = {
  id?: number;
  name?: string | null;
  fullName?: string | null;
  vaccines?: GetVaccineResponse[] | null;
};
export type CreateVaccinationDto = {
  dueDate?: string | null;
  patientId?: number;
  vaccineId?: number;
  vaccineScheduleId?: number;
  isAdministered?: boolean;
  dateAdministered?: string | null;
  hasComplication?: boolean;
  vaccineBrand?: string | null;
  vaccineBatchNo?: string | null;
  note?: string | null;
};
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type CreateMultipleVaccinationDto = {
  vaccinations?: CreateVaccinationDto[] | null;
  encounterId?: number;
  procedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
};
export type CreateVaccinationHistoryDto = {
  patientId?: number;
  vaccineId?: number;
  hasComplication?: boolean;
  lastVaccineDuration?: string | null;
  note?: string | null;
  id?: number | null;
  numberOfDoses?: number;
};
export type CreateMultipleVaccinationHistoryDto = {
  vaccinationHistory?: CreateVaccinationHistoryDto[] | null;
  encounterId?: number;
};
export type VaccinationResponseDto = {
  patientId?: number;
  vaccineId?: number;
  vaccine?: GetVaccineResponse;
  vaccineScheduleId?: number;
  vaccineSchedule?: VaccineScheduleDto;
  isAdministered?: boolean;
  dueDate?: string | null;
  dateAdministered?: string | null;
  hasComplication?: boolean;
  vaccineBrand?: string | null;
  vaccineBatchNo?: string | null;
  note?: string | null;
  procedureId?: number | null;
  procedureEntryType?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type VaccinationHistoryResponseDto = {
  id?: number;
  patientId?: number;
  vaccineId?: number;
  vaccine?: GetVaccineResponse;
  numberOfDoses?: number;
  hasComplication?: boolean;
  lastVaccineDuration?: string | null;
  note?: string | null;
};
export const {
  useApiServicesAppVaccineGetallGetQuery,
  useApiServicesAppVaccineGetvaccineGetQuery,
  useApiServicesAppVaccineGetallvaccinegroupsGetQuery,
  useApiServicesAppVaccineGetvaccinegroupGetQuery,
  useApiServicesAppVaccineCreatevaccinationPostMutation,
  useApiServicesAppVaccineCreatevaccinationhistoryPostMutation,
  useApiServicesAppVaccineGetpatientvaccinationGetQuery,
  useApiServicesAppVaccineGetpatientvaccinationhistoryGetQuery,
} = injectedRtkApi;
