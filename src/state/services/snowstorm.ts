import {baseApi as api} from './baseApi';
export const addTagTypes = ['Snowstorm'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppSnowstormGetdiagnosisbytermGet: build.query<
        ApiServicesAppSnowstormGetdiagnosisbytermGetApiResponse,
        ApiServicesAppSnowstormGetdiagnosisbytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetDiagnosisByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
      }),
      apiServicesAppSnowstormGetsymptombytermGet: build.query<
        ApiServicesAppSnowstormGetsymptombytermGetApiResponse,
        ApiServicesAppSnowstormGetsymptombytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetSymptomByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
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
      apiServicesAppSnowstormGetbodypartsbytermGet: build.query<
        ApiServicesAppSnowstormGetbodypartsbytermGetApiResponse,
        ApiServicesAppSnowstormGetbodypartsbytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetBodyPartsByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
      }),
      apiServicesAppSnowstormGetspecimenbytermGet: build.query<
        ApiServicesAppSnowstormGetspecimenbytermGetApiResponse,
        ApiServicesAppSnowstormGetspecimenbytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetSpecimenByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
      }),
      apiServicesAppSnowstormGetorganismbytermGet: build.query<
        ApiServicesAppSnowstormGetorganismbytermGetApiResponse,
        ApiServicesAppSnowstormGetorganismbytermGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetOrganismByTerm`,
          params: {searchTerm: queryArg.searchTerm},
        }),
        providesTags: ['Snowstorm'],
      }),
      apiServicesAppSnowstormGetsymptomsuggestionGet: build.query<
        ApiServicesAppSnowstormGetsymptomsuggestionGetApiResponse,
        ApiServicesAppSnowstormGetsymptomsuggestionGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Snowstorm/GetSymptomSuggestion`,
          params: {
            snowmedId: queryArg.snowmedId,
            inputType: queryArg.inputType,
            searchTerm: queryArg.searchTerm,
          },
        }),
        providesTags: ['Snowstorm'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as snowstormApi};
export type ApiServicesAppSnowstormGetdiagnosisbytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetdiagnosisbytermGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppSnowstormGetsymptombytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetsymptombytermGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppSnowstormGetprocedurebytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetprocedurebytermGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppSnowstormGetmedicationbytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetmedicationbytermGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppSnowstormGetbodypartsbytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetbodypartsbytermGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppSnowstormGetspecimenbytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetspecimenbytermGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppSnowstormGetorganismbytermGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetorganismbytermGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppSnowstormGetsymptomsuggestionGetApiResponse =
  /** status 200 Success */ SnowstormSimpleResponseDto[];
export type ApiServicesAppSnowstormGetsymptomsuggestionGetApiArg = {
  snowmedId?: number;
  inputType?: string;
  searchTerm?: string;
};
export type SnowstormSimpleResponseDto = {
  id?: string | null;
  name?: string | null;
};
export const {
  useApiServicesAppSnowstormGetdiagnosisbytermGetQuery,
  useApiServicesAppSnowstormGetsymptombytermGetQuery,
  useApiServicesAppSnowstormGetprocedurebytermGetQuery,
  useApiServicesAppSnowstormGetmedicationbytermGetQuery,
  useApiServicesAppSnowstormGetbodypartsbytermGetQuery,
  useApiServicesAppSnowstormGetspecimenbytermGetQuery,
  useApiServicesAppSnowstormGetorganismbytermGetQuery,
  useApiServicesAppSnowstormGetsymptomsuggestionGetQuery,
} = injectedRtkApi;
