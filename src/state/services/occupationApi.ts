import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'Occupation',
  'PatientOccupations',
  'PatientProfile',
  'Patients',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppOccupationGetoccupationsGet: build.query<
        ApiServicesAppOccupationGetoccupationsGetApiResponse,
        ApiServicesAppOccupationGetoccupationsGetApiArg
      >({
        query: () => ({url: `/api/services/app/Occupation/GetOccupations`}),
        providesTags: ['Occupation'],
      }),
      apiServicesAppPatientoccupationsGetallGet: build.query<
        ApiServicesAppPatientoccupationsGetallGetApiResponse,
        ApiServicesAppPatientoccupationsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientOccupations/GetAll`,
          params: {
            Filter: queryArg.filter,
            NameFilter: queryArg.nameFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PatientOccupations'],
      }),
      apiServicesAppPatientoccupationsGetpatientoccupationforeditGet:
        build.query<
          ApiServicesAppPatientoccupationsGetpatientoccupationforeditGetApiResponse,
          ApiServicesAppPatientoccupationsGetpatientoccupationforeditGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientOccupations/GetPatientOccupationForEdit`,
            params: {Id: queryArg.id},
          }),
          providesTags: ['PatientOccupations'],
        }),
      apiServicesAppPatientoccupationsCreateoreditPost: build.mutation<
        ApiServicesAppPatientoccupationsCreateoreditPostApiResponse,
        ApiServicesAppPatientoccupationsCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientOccupations/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditPatientOccupationDto,
        }),
        invalidatesTags: ['PatientOccupations'],
      }),
      apiServicesAppPatientoccupationsDeleteDelete: build.mutation<
        ApiServicesAppPatientoccupationsDeleteDeleteApiResponse,
        ApiServicesAppPatientoccupationsDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientOccupations/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['PatientOccupations'],
      }),
      apiServicesAppPatientprofileSaveoccupationhistoryPost: build.mutation<
        ApiServicesAppPatientprofileSaveoccupationhistoryPostApiResponse,
        ApiServicesAppPatientprofileSaveoccupationhistoryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/SaveOccupationHistory`,
          method: 'POST',
          body: queryArg.createOccupationalHistoryDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientoccupationalhistoryGet: build.query<
        ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiResponse,
        ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientOccupationalHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletepatientoccupationDelete: build.mutation<
        ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiResponse,
        ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/DeletePatientOccupation`,
          method: 'DELETE',
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdatepatientoccupationhistoryPut:
        build.mutation<
          ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiResponse,
          ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/UpdatePatientOccupationHistory`,
            method: 'PUT',
            body: queryArg.createOccupationalHistoryDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientsGetallpatientoccupationforlookuptableGet:
        build.query<
          ApiServicesAppPatientsGetallpatientoccupationforlookuptableGetApiResponse,
          ApiServicesAppPatientsGetallpatientoccupationforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Patients/GetAllPatientOccupationForLookupTable`,
            params: {
              Filter: queryArg.filter,
              OutPatientListingType: queryArg.outPatientListingType,
              Status: queryArg.status,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['Patients'],
        }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as occupationApi};
export type ApiServicesAppOccupationGetoccupationsGetApiResponse =
  /** status 200 Success */ OccupationDto[];
export type ApiServicesAppOccupationGetoccupationsGetApiArg = void;
export type ApiServicesAppPatientoccupationsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientOccupationForViewDto;
export type ApiServicesAppPatientoccupationsGetallGetApiArg = {
  filter?: string;
  nameFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientoccupationsGetpatientoccupationforeditGetApiResponse =
  /** status 200 Success */ GetPatientOccupationForEditOutput;
export type ApiServicesAppPatientoccupationsGetpatientoccupationforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientoccupationsCreateoreditPostApiResponse =
  unknown;
export type ApiServicesAppPatientoccupationsCreateoreditPostApiArg = {
  createOrEditPatientOccupationDto: CreateOrEditPatientOccupationDto;
};
export type ApiServicesAppPatientoccupationsDeleteDeleteApiResponse = unknown;
export type ApiServicesAppPatientoccupationsDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileSaveoccupationhistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileSaveoccupationhistoryPostApiArg = {
  createOccupationalHistoryDto: CreateOccupationalHistoryDto;
};
export type ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiResponse =
  /** status 200 Success */ CreateOccupationalHistoryDto[];
export type ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiArg =
  {
    createOccupationalHistoryDto: CreateOccupationalHistoryDto;
  };
export type ApiServicesAppPatientsGetallpatientoccupationforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientPatientOccupationLookupTableDto;
export type ApiServicesAppPatientsGetallpatientoccupationforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type OccupationDto = {
  name?: string | null;
  id?: number;
};
export type PatientOccupationDto = {
  occupationId?: number;
  startDate?: string | null;
  endDate?: string | null;
  isCurrent?: boolean;
  location?: string | null;
  notes?: string | null;
  id?: number;
};
export type GetPatientOccupationForViewDto = {
  patientOccupation?: PatientOccupationDto;
  patientOccupationCategoryName?: string | null;
};
export type PagedResultDtoOfGetPatientOccupationForViewDto = {
  totalCount?: number;
  items?: GetPatientOccupationForViewDto[] | null;
};
export type CreateOrEditPatientOccupationDto = {
  name: string;
  patientOccupationCategoryId?: number;
  isCurrent?: boolean;
  id?: number | null;
};
export type GetPatientOccupationForEditOutput = {
  patientOccupation?: CreateOrEditPatientOccupationDto;
  patientOccupationCategoryName?: string | null;
};
export type CreateOccupationalHistoryDto = {
  workLocation?: string | null;
  from?: string;
  to?: string;
  occupation?: string | null;
  note?: string | null;
  patientId: number;
  isCurrent?: boolean;
  id?: number | null;
};
export type PatientPatientOccupationLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientPatientOccupationLookupTableDto = {
  totalCount?: number;
  items?: PatientPatientOccupationLookupTableDto[] | null;
};
export type OutPatientListingType = 'AttendingPhysician' | 'AttendingClinic';
export type AppointmentStatusType =
  | 'Pending'
  | 'Executed'
  | 'Missed'
  | 'Rescheduled'
  | 'Not arrived'
  | 'Arrived'
  | 'Processing'
  | 'Awaiting vitals'
  | 'Awaiting clinician'
  | 'Awaiting doctor'
  | 'Seen doctor'
  | 'Seen clinician'
  | 'Admitted to ward'
  | 'Tranferred'
  | 'Awaiting admission';
export const {
  useApiServicesAppOccupationGetoccupationsGetQuery,
  useApiServicesAppPatientoccupationsGetallGetQuery,
  useApiServicesAppPatientoccupationsGetpatientoccupationforeditGetQuery,
  useApiServicesAppPatientoccupationsCreateoreditPostMutation,
  useApiServicesAppPatientoccupationsDeleteDeleteMutation,
  useApiServicesAppPatientprofileSaveoccupationhistoryPostMutation,
  useApiServicesAppPatientprofileGetpatientoccupationalhistoryGetQuery,
  useApiServicesAppPatientprofileDeletepatientoccupationDeleteMutation,
  useApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutMutation,
  useApiServicesAppPatientsGetallpatientoccupationforlookuptableGetQuery,
} = injectedRtkApi;
