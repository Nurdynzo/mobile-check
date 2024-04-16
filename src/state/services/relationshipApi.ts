import {baseApi as api} from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiServicesAppRelationshipGetrelationshipsGet: build.query<
      ApiServicesAppRelationshipGetrelationshipsGetApiResponse,
      ApiServicesAppRelationshipGetrelationshipsGetApiArg
    >({
      query: () => ({url: `/api/services/app/Relationship/GetRelationships`}),
    }),
  }),
  overrideExisting: false,
});
export {injectedRtkApi as relationshipApi};
export type ApiServicesAppRelationshipGetrelationshipsGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppRelationshipGetrelationshipsGetApiArg = void;
export const {useApiServicesAppRelationshipGetrelationshipsGetQuery} =
  injectedRtkApi;
