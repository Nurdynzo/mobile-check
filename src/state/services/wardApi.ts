import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'BedTypes',
  'Patients',
  'PriceSettings',
  'WardBeds',
  'WardEmergencies',
  'Wards',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppBedtypesGetallGet: build.query<
        ApiServicesAppBedtypesGetallGetApiResponse,
        ApiServicesAppBedtypesGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BedTypes/GetAll`,
          params: {
            Filter: queryArg.filter,
            FacilityId: queryArg.facilityId,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['BedTypes'],
      }),
      apiServicesAppBedtypesGetbedtypeforeditGet: build.query<
        ApiServicesAppBedtypesGetbedtypeforeditGetApiResponse,
        ApiServicesAppBedtypesGetbedtypeforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BedTypes/GetBedTypeForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['BedTypes'],
      }),
      apiServicesAppBedtypesCreateoreditPost: build.mutation<
        ApiServicesAppBedtypesCreateoreditPostApiResponse,
        ApiServicesAppBedtypesCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BedTypes/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditBedTypeDto,
        }),
        invalidatesTags: ['BedTypes'],
      }),
      apiServicesAppBedtypesDeleteDelete: build.mutation<
        ApiServicesAppBedtypesDeleteDeleteApiResponse,
        ApiServicesAppBedtypesDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BedTypes/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['BedTypes'],
      }),
      apiServicesAppPatientsGetpatientwardroundandclinicnotesGet: build.query<
        ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiResponse,
        ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetPatientWardRoundAndClinicNotes`,
          params: {
            PatientId: queryArg.patientId,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPricesettingsGetwardadmissionpricesettingsGet: build.query<
        ApiServicesAppPricesettingsGetwardadmissionpricesettingsGetApiResponse,
        ApiServicesAppPricesettingsGetwardadmissionpricesettingsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PriceSettings/GetWardAdmissionPriceSettings`,
          params: {facilityId: queryArg.facilityId},
        }),
        providesTags: ['PriceSettings'],
      }),
      apiServicesAppWardbedsGetallGet: build.query<
        ApiServicesAppWardbedsGetallGetApiResponse,
        ApiServicesAppWardbedsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WardBeds/GetAll`,
          params: {
            Filter: queryArg.filter,
            IsActiveFilter: queryArg.isActiveFilter,
            BedTypeNameFilter: queryArg.bedTypeNameFilter,
            WardNameFilter: queryArg.wardNameFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['WardBeds'],
      }),
      apiServicesAppWardbedsGetwardbedforeditGet: build.query<
        ApiServicesAppWardbedsGetwardbedforeditGetApiResponse,
        ApiServicesAppWardbedsGetwardbedforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WardBeds/GetWardBedForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['WardBeds'],
      }),
      apiServicesAppWardbedsCreateoreditPost: build.mutation<
        ApiServicesAppWardbedsCreateoreditPostApiResponse,
        ApiServicesAppWardbedsCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WardBeds/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditWardBedDto,
        }),
        invalidatesTags: ['WardBeds'],
      }),
      apiServicesAppWardbedsDeleteDelete: build.mutation<
        ApiServicesAppWardbedsDeleteDeleteApiResponse,
        ApiServicesAppWardbedsDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WardBeds/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['WardBeds'],
      }),
      apiServicesAppWardbedsGetwardbedcountGet: build.query<
        ApiServicesAppWardbedsGetwardbedcountGetApiResponse,
        ApiServicesAppWardbedsGetwardbedcountGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WardBeds/GetWardBedCount`,
          params: {FacilityId: queryArg.facilityId, WardId: queryArg.wardId},
        }),
        providesTags: ['WardBeds'],
      }),
      apiServicesAppWardemergenciesGetallGet: build.query<
        ApiServicesAppWardemergenciesGetallGetApiResponse,
        ApiServicesAppWardemergenciesGetallGetApiArg
      >({
        query: () => ({url: `/api/services/app/WardEmergencies/GetAll`}),
        providesTags: ['WardEmergencies'],
      }),
      apiServicesAppWardemergenciesGetnursinginterventionsGet: build.query<
        ApiServicesAppWardemergenciesGetnursinginterventionsGetApiResponse,
        ApiServicesAppWardemergenciesGetnursinginterventionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WardEmergencies/GetNursingInterventions`,
          params: {wardEmergencyId: queryArg.wardEmergencyId},
        }),
        providesTags: ['WardEmergencies'],
      }),
      apiServicesAppWardemergenciesCreatepatientinterventionPost:
        build.mutation<
          ApiServicesAppWardemergenciesCreatepatientinterventionPostApiResponse,
          ApiServicesAppWardemergenciesCreatepatientinterventionPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/WardEmergencies/CreatePatientIntervention`,
            method: 'POST',
            body: queryArg.createPatientInterventionRequest,
          }),
          invalidatesTags: ['WardEmergencies'],
        }),
      apiServicesAppWardemergenciesGetpatientinterventionsGet: build.query<
        ApiServicesAppWardemergenciesGetpatientinterventionsGetApiResponse,
        ApiServicesAppWardemergenciesGetpatientinterventionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WardEmergencies/GetPatientInterventions`,
          params: {PatientId: queryArg.patientId},
        }),
        providesTags: ['WardEmergencies'],
      }),
      apiServicesAppWardsGetallwardsGet: build.query<
        ApiServicesAppWardsGetallwardsGetApiResponse,
        ApiServicesAppWardsGetallwardsGetApiArg
      >({
        query: () => ({url: `/api/services/app/Wards/GetAllWards`}),
        providesTags: ['Wards'],
      }),
      apiServicesAppWardsGetallGet: build.query<
        ApiServicesAppWardsGetallGetApiResponse,
        ApiServicesAppWardsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Wards/GetAll`,
          params: {
            Filter: queryArg.filter,
            NameFilter: queryArg.nameFilter,
            FacilityNameFilter: queryArg.facilityNameFilter,
            FacilityIds: queryArg.facilityIds,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Wards'],
      }),
      apiServicesAppWardsGetwardforeditGet: build.query<
        ApiServicesAppWardsGetwardforeditGetApiResponse,
        ApiServicesAppWardsGetwardforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Wards/GetWardForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Wards'],
      }),
      apiServicesAppWardsCreateoreditPost: build.mutation<
        ApiServicesAppWardsCreateoreditPostApiResponse,
        ApiServicesAppWardsCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Wards/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditWardDto,
        }),
        invalidatesTags: ['Wards'],
      }),
      apiServicesAppWardsActivateordeactivatewardPost: build.mutation<
        ApiServicesAppWardsActivateordeactivatewardPostApiResponse,
        ApiServicesAppWardsActivateordeactivatewardPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Wards/ActivateOrDeactivateWard`,
          method: 'POST',
          body: queryArg.activateOrDeactivateWardRequest,
        }),
        invalidatesTags: ['Wards'],
      }),
      apiServicesAppWardsDeleteDelete: build.mutation<
        ApiServicesAppWardsDeleteDeleteApiResponse,
        ApiServicesAppWardsDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Wards/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['Wards'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as wardApi};
export type ApiServicesAppBedtypesGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfBedTypeDto;
export type ApiServicesAppBedtypesGetallGetApiArg = {
  filter?: string;
  facilityId?: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppBedtypesGetbedtypeforeditGetApiResponse =
  /** status 200 Success */ GetBedTypeForEditOutput;
export type ApiServicesAppBedtypesGetbedtypeforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppBedtypesCreateoreditPostApiResponse = unknown;
export type ApiServicesAppBedtypesCreateoreditPostApiArg = {
  createOrEditBedTypeDto: CreateOrEditBedTypeDto;
};
export type ApiServicesAppBedtypesDeleteDeleteApiResponse = unknown;
export type ApiServicesAppBedtypesDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientWardRoundAndClinicNotesResponse;
export type ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiArg = {
  patientId?: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPricesettingsGetwardadmissionpricesettingsGetApiResponse =
  /** status 200 Success */ GetWardAdmissionPriceSettingsResponse;
export type ApiServicesAppPricesettingsGetwardadmissionpricesettingsGetApiArg =
  {
    facilityId?: number;
  };
export type ApiServicesAppWardbedsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetWardBedForViewDto;
export type ApiServicesAppWardbedsGetallGetApiArg = {
  filter?: string;
  isActiveFilter?: number;
  bedTypeNameFilter?: string;
  wardNameFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppWardbedsGetwardbedforeditGetApiResponse =
  /** status 200 Success */ GetWardBedForEditOutput;
export type ApiServicesAppWardbedsGetwardbedforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppWardbedsCreateoreditPostApiResponse = unknown;
export type ApiServicesAppWardbedsCreateoreditPostApiArg = {
  createOrEditWardBedDto: CreateOrEditWardBedDto;
};
export type ApiServicesAppWardbedsDeleteDeleteApiResponse = unknown;
export type ApiServicesAppWardbedsDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppWardbedsGetwardbedcountGetApiResponse =
  /** status 200 Success */ GetWardBedCountResponse[];
export type ApiServicesAppWardbedsGetwardbedcountGetApiArg = {
  facilityId?: number;
  wardId?: number;
};
export type ApiServicesAppWardemergenciesGetallGetApiResponse =
  /** status 200 Success */ GetWardEmergenciesResponse[];
export type ApiServicesAppWardemergenciesGetallGetApiArg = void;
export type ApiServicesAppWardemergenciesGetnursinginterventionsGetApiResponse =
  /** status 200 Success */ GetNursingInterventionsResponse[];
export type ApiServicesAppWardemergenciesGetnursinginterventionsGetApiArg = {
  wardEmergencyId?: number;
};
export type ApiServicesAppWardemergenciesCreatepatientinterventionPostApiResponse =
  unknown;
export type ApiServicesAppWardemergenciesCreatepatientinterventionPostApiArg = {
  createPatientInterventionRequest: CreatePatientInterventionRequest;
};
export type ApiServicesAppWardemergenciesGetpatientinterventionsGetApiResponse =
  /** status 200 Success */ GetPatientInterventionsResponse[];
export type ApiServicesAppWardemergenciesGetpatientinterventionsGetApiArg = {
  patientId: number;
};
export type ApiServicesAppWardsGetallwardsGetApiResponse =
  /** status 200 Success */ WardDto[];
export type ApiServicesAppWardsGetallwardsGetApiArg = void;
export type ApiServicesAppWardsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetWardForViewDto;
export type ApiServicesAppWardsGetallGetApiArg = {
  filter?: string;
  nameFilter?: string;
  facilityNameFilter?: string;
  facilityIds?: number[];
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppWardsGetwardforeditGetApiResponse =
  /** status 200 Success */ GetWardForEditOutput;
export type ApiServicesAppWardsGetwardforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppWardsCreateoreditPostApiResponse = unknown;
export type ApiServicesAppWardsCreateoreditPostApiArg = {
  createOrEditWardDto: CreateOrEditWardDto;
};
export type ApiServicesAppWardsActivateordeactivatewardPostApiResponse =
  unknown;
export type ApiServicesAppWardsActivateordeactivatewardPostApiArg = {
  activateOrDeactivateWardRequest: ActivateOrDeactivateWardRequest;
};
export type ApiServicesAppWardsDeleteDeleteApiResponse = unknown;
export type ApiServicesAppWardsDeleteDeleteApiArg = {
  id?: number;
};
export type BedTypeDto = {
  name?: string | null;
  id?: number;
};
export type PagedResultDtoOfBedTypeDto = {
  totalCount?: number;
  items?: BedTypeDto[] | null;
};
export type CreateOrEditBedTypeDto = {
  name: string;
  id?: number | null;
};
export type GetBedTypeForEditOutput = {
  bedType?: CreateOrEditBedTypeDto;
};
export type GetPatientWardRoundAndClinicNotesResponse = {
  patientId?: number;
  clinic?: string | null;
  dateTime?: string;
  notes?: string | null;
  ward?: string | null;
};
export type PagedResultDtoOfGetPatientWardRoundAndClinicNotesResponse = {
  totalCount?: number;
  items?: GetPatientWardRoundAndClinicNotesResponse[] | null;
};
export type PriceTimeFrequency = 'Day' | 'Week' | 'Visit';
export type GetWardAdmissionPriceSettingsResponse = {
  defaultInitialPeriodValue?: number;
  defaultInitialPeriodUnit?: PriceTimeFrequency;
  defaultContinuePeriodUnit?: PriceTimeFrequency;
  defaultContinuePeriodValue?: number;
  admissionChargeTime?: string;
  followUpVisitPercentage?: number;
  facilityId?: number;
  id?: number;
};
export type WardBedDto = {
  bedNumber?: string | null;
  isActive?: boolean;
  bedTypeId?: number;
  wardId?: number;
  bedTypeName?: string | null;
  id?: number;
};
export type GetWardBedForViewDto = {
  wardBed?: WardBedDto;
  bedTypeName?: string | null;
  wardName?: string | null;
};
export type PagedResultDtoOfGetWardBedForViewDto = {
  totalCount?: number;
  items?: GetWardBedForViewDto[] | null;
};
export type CreateOrEditWardBedDto = {
  count?: number;
  isActive?: boolean;
  bedTypeId?: number | null;
  bedTypeName?: string | null;
  wardId?: number | null;
  id?: number | null;
};
export type GetWardBedForEditOutput = {
  wardBed?: CreateOrEditWardBedDto;
  bedTypeName?: string | null;
  wardName?: string | null;
};
export type GetWardBedCountResponse = {
  bedTypeId?: number;
  bedTypeName?: string | null;
  count?: number;
  wardBeds?: WardBedDto[] | null;
};
export type GetWardEmergenciesResponse = {
  id?: number;
  event?: string | null;
  shortName?: string | null;
};
export type GetNursingInterventionsResponse = {
  id?: number;
  name?: string | null;
};
export type CreatePatientInterventionRequest = {
  patientId?: number;
  encounterId?: number;
  eventId?: number | null;
  interventionIds?: number[] | null;
  eventText?: string | null;
  interventionTexts?: string[] | null;
};
export type GetPatientInterventionsResponse = {
  id?: number;
  event?: string | null;
  interventions?: string[] | null;
  time?: string;
};
export type WardDto = {
  name?: string | null;
  description?: string | null;
  isActive?: boolean;
  facilityId?: number;
  wardBeds?: WardBedDto[] | null;
  id?: number;
};
export type GetWardForViewDto = {
  ward?: WardDto;
  facilityId?: number;
  facilityName?: string | null;
};
export type PagedResultDtoOfGetWardForViewDto = {
  totalCount?: number;
  items?: GetWardForViewDto[] | null;
};
export type CreateOrEditWardDto = {
  facilityId: number;
  name: string;
  description?: string | null;
  isActive?: boolean;
  wardBeds?: CreateOrEditWardBedDto[] | null;
  id?: number | null;
};
export type GetWardForEditOutput = {
  ward?: CreateOrEditWardDto;
  facilityName?: string | null;
};
export type ActivateOrDeactivateWardRequest = {
  isActive?: boolean;
  id?: number | null;
};
export const {
  useApiServicesAppBedtypesGetallGetQuery,
  useApiServicesAppBedtypesGetbedtypeforeditGetQuery,
  useApiServicesAppBedtypesCreateoreditPostMutation,
  useApiServicesAppBedtypesDeleteDeleteMutation,
  useApiServicesAppPatientsGetpatientwardroundandclinicnotesGetQuery,
  useApiServicesAppPricesettingsGetwardadmissionpricesettingsGetQuery,
  useApiServicesAppWardbedsGetallGetQuery,
  useApiServicesAppWardbedsGetwardbedforeditGetQuery,
  useApiServicesAppWardbedsCreateoreditPostMutation,
  useApiServicesAppWardbedsDeleteDeleteMutation,
  useApiServicesAppWardbedsGetwardbedcountGetQuery,
  useApiServicesAppWardemergenciesGetallGetQuery,
  useApiServicesAppWardemergenciesGetnursinginterventionsGetQuery,
  useApiServicesAppWardemergenciesCreatepatientinterventionPostMutation,
  useApiServicesAppWardemergenciesGetpatientinterventionsGetQuery,
  useApiServicesAppWardsGetallwardsGetQuery,
  useApiServicesAppWardsGetallGetQuery,
  useApiServicesAppWardsGetwardforeditGetQuery,
  useApiServicesAppWardsCreateoreditPostMutation,
  useApiServicesAppWardsActivateordeactivatewardPostMutation,
  useApiServicesAppWardsDeleteDeleteMutation,
} = injectedRtkApi;
