import {baseApi as api} from './baseApi';
export const addTagTypes = ['BloodGroup', 'PatientProfile'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppBloodgroupGetbloodgroupsGet: build.query<
        ApiServicesAppBloodgroupGetbloodgroupsGetApiResponse,
        ApiServicesAppBloodgroupGetbloodgroupsGetApiArg
      >({
        query: () => ({url: `/api/services/app/BloodGroup/GetBloodGroups`}),
        providesTags: ['BloodGroup'],
      }),
      apiServicesAppBloodgroupGetbloodgroupsbysearchGet: build.query<
        ApiServicesAppBloodgroupGetbloodgroupsbysearchGetApiResponse,
        ApiServicesAppBloodgroupGetbloodgroupsbysearchGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BloodGroup/GetBloodGroupsBySearch`,
          params: {searchText: queryArg.searchText},
        }),
        providesTags: ['BloodGroup'],
      }),
      apiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPost:
        build.mutation<
          ApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostApiResponse,
          ApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/SavePatientGenotypeAndBloodGroup`,
            method: 'POST',
            body: queryArg.updatePatientGenotypeAndBloodGroupCommandRequest,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGet:
        build.query<
          ApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetApiResponse,
          ApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/GetPatientBloodGroupAndGenotype`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['PatientProfile'],
        }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as bloodGroupApi};
export type ApiServicesAppBloodgroupGetbloodgroupsGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppBloodgroupGetbloodgroupsGetApiArg = void;
export type ApiServicesAppBloodgroupGetbloodgroupsbysearchGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppBloodgroupGetbloodgroupsbysearchGetApiArg = {
  searchText?: string;
};
export type ApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostApiArg =
  {
    updatePatientGenotypeAndBloodGroupCommandRequest: UpdatePatientGenotypeAndBloodGroupCommandRequest;
  };
export type ApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetApiResponse =
  /** status 200 Success */ GetPatientBloodGroupAndGenotypeResponseDto;
export type ApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetApiArg =
  {
    patientId?: number;
  };
export type BloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'O+'
  | 'O-'
  | 'AB+'
  | 'AB-';
export type BloodGenotype = 'AA' | 'AS' | 'AC' | 'SS' | 'SC';
export type BloodGroupAndGenotypeSource =
  | 'ClinicalInvestigation'
  | 'SelfReport';
export type UpdatePatientGenotypeAndBloodGroupCommandRequest = {
  bloodGroup: BloodGroup;
  bloodGenotype: BloodGenotype;
  bloodGroupSource: BloodGroupAndGenotypeSource;
  genotypeSource: BloodGroupAndGenotypeSource;
  patientId: number;
};
export type GetPatientBloodGroupAndGenotypeResponseDto = {
  patientId: number;
  bloodGroup?: string | null;
  genotype?: string | null;
  bloodGroupSource?: string | null;
  genotypeSource?: string | null;
};
export const {
  useApiServicesAppBloodgroupGetbloodgroupsGetQuery,
  useApiServicesAppBloodgroupGetbloodgroupsbysearchGetQuery,
  useApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostMutation,
  useApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetQuery,
} = injectedRtkApi;
