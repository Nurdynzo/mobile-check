import {baseApi as api} from './baseApi';
export const addTagTypes = ['GenoType', 'PatientProfile'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppGenotypeGetgenotypesGet: build.query<
        ApiServicesAppGenotypeGetgenotypesGetApiResponse,
        ApiServicesAppGenotypeGetgenotypesGetApiArg
      >({
        query: () => ({url: `/api/services/app/GenoType/GetGenotypes`}),
        providesTags: ['GenoType'],
      }),
      apiServicesAppGenotypeGetgenotypesbysearchGet: build.query<
        ApiServicesAppGenotypeGetgenotypesbysearchGetApiResponse,
        ApiServicesAppGenotypeGetgenotypesbysearchGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/GenoType/GetGenotypesBySearch`,
          params: {searchText: queryArg.searchText},
        }),
        providesTags: ['GenoType'],
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
export {injectedRtkApi as genoTypeApi};
export type ApiServicesAppGenotypeGetgenotypesGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppGenotypeGetgenotypesGetApiArg = void;
export type ApiServicesAppGenotypeGetgenotypesbysearchGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppGenotypeGetgenotypesbysearchGetApiArg = {
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
  useApiServicesAppGenotypeGetgenotypesGetQuery,
  useApiServicesAppGenotypeGetgenotypesbysearchGetQuery,
  useApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostMutation,
  useApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetQuery,
} = injectedRtkApi;
