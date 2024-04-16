import {baseApi as api} from './baseApi';
export const addTagTypes = ['WardEmergencies'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
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
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as WardEmergenciesApi};
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
export const {
  useApiServicesAppWardemergenciesGetallGetQuery,
  useApiServicesAppWardemergenciesGetnursinginterventionsGetQuery,
  useApiServicesAppWardemergenciesCreatepatientinterventionPostMutation,
  useApiServicesAppWardemergenciesGetpatientinterventionsGetQuery,
} = injectedRtkApi;
