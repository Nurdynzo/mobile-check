import {baseApi as api} from './baseApi';
export const addTagTypes = ['PatientAppointments', 'Room'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppPatientappointmentsGetconsultingroomsGet: build.query<
        ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse,
        ApiServicesAppPatientappointmentsGetconsultingroomsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientAppointments/GetConsultingRooms`,
        }),
        providesTags: ['PatientAppointments'],
      }),
      apiServicesAppRoomCreateoreditPost: build.mutation<
        ApiServicesAppRoomCreateoreditPostApiResponse,
        ApiServicesAppRoomCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Room/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditRoomsDto,
        }),
        invalidatesTags: ['Room'],
      }),
      apiServicesAppRoomDeleteDelete: build.mutation<
        ApiServicesAppRoomDeleteDeleteApiResponse,
        ApiServicesAppRoomDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Room/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['Room'],
      }),
      apiServicesAppRoomDeleteroomavailabilityDelete: build.mutation<
        ApiServicesAppRoomDeleteroomavailabilityDeleteApiResponse,
        ApiServicesAppRoomDeleteroomavailabilityDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Room/DeleteRoomAvailability`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['Room'],
      }),
      apiServicesAppRoomCreateoreditroomsavailabilityPost: build.mutation<
        ApiServicesAppRoomCreateoreditroomsavailabilityPostApiResponse,
        ApiServicesAppRoomCreateoreditroomsavailabilityPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Room/CreateOrEditRoomsAvailability`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['Room'],
      }),
      apiServicesAppRoomGetconsultingroomsGet: build.query<
        ApiServicesAppRoomGetconsultingroomsGetApiResponse,
        ApiServicesAppRoomGetconsultingroomsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Room/GetConsultingRooms`,
          params: {
            Filter: queryArg.filter,
            FacilityIdFilter: queryArg.facilityIdFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Room'],
      }),
      apiServicesAppRoomGetoperatingroomsGet: build.query<
        ApiServicesAppRoomGetoperatingroomsGetApiResponse,
        ApiServicesAppRoomGetoperatingroomsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Room/GetOperatingRooms`,
          params: {
            Filter: queryArg.filter,
            FacilityIdFilter: queryArg.facilityIdFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Room'],
      }),
      apiServicesAppRoomActivateordeactivateroomPost: build.mutation<
        ApiServicesAppRoomActivateordeactivateroomPostApiResponse,
        ApiServicesAppRoomActivateordeactivateroomPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Room/ActivateOrDeactivateRoom`,
          method: 'POST',
          body: queryArg.activateOrDeactivateRoom,
        }),
        invalidatesTags: ['Room'],
      }),
      apiServicesAppRoomGetroomforeditoutputGet: build.query<
        ApiServicesAppRoomGetroomforeditoutputGetApiResponse,
        ApiServicesAppRoomGetroomforeditoutputGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Room/GetRoomForEditOutput`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Room'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as roomApi};
export type ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse =
  /** status 200 Success */ GetPatientConsultingRooms;
export type ApiServicesAppPatientappointmentsGetconsultingroomsGetApiArg = void;
export type ApiServicesAppRoomCreateoreditPostApiResponse = unknown;
export type ApiServicesAppRoomCreateoreditPostApiArg = {
  createOrEditRoomsDto: CreateOrEditRoomsDto;
};
export type ApiServicesAppRoomDeleteDeleteApiResponse = unknown;
export type ApiServicesAppRoomDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppRoomDeleteroomavailabilityDeleteApiResponse = unknown;
export type ApiServicesAppRoomDeleteroomavailabilityDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppRoomCreateoreditroomsavailabilityPostApiResponse =
  unknown;
export type ApiServicesAppRoomCreateoreditroomsavailabilityPostApiArg = {
  body: CreateOrEditRoomsAvailabilityDto[];
};
export type ApiServicesAppRoomGetconsultingroomsGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetFacilityConsultingRoomsForViewDto;
export type ApiServicesAppRoomGetconsultingroomsGetApiArg = {
  filter?: string;
  facilityIdFilter?: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppRoomGetoperatingroomsGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetFacilityOperatingRoomsForViewDto;
export type ApiServicesAppRoomGetoperatingroomsGetApiArg = {
  filter?: string;
  facilityIdFilter?: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppRoomActivateordeactivateroomPostApiResponse = unknown;
export type ApiServicesAppRoomActivateordeactivateroomPostApiArg = {
  activateOrDeactivateRoom: ActivateOrDeactivateRoom;
};
export type ApiServicesAppRoomGetroomforeditoutputGetApiResponse =
  /** status 200 Success */ GetRoomForEditOutputDto;
export type ApiServicesAppRoomGetroomforeditoutputGetApiArg = {
  id?: number;
};
export type GetPatientConsultingRooms = {
  rooms?: string[] | null;
};
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type RoomAvailabilityDto = {
  dayOfWeek?: DayOfWeek;
  startTime?: string | null;
  endTime?: string | null;
  id?: number | null;
};
export type RoomType = 0 | 1;
export type CreateOrEditRoomsDto = {
  name?: string | null;
  isActive?: boolean;
  facilityId?: number;
  roomAvailability?: RoomAvailabilityDto[] | null;
  minTimeInterval?: number | null;
  type?: RoomType;
  id?: number | null;
};
export type CreateOrEditRoomsAvailabilityDto = {
  roomId?: number;
  dayOfWeek?: DayOfWeek;
  startTime?: string | null;
  endTime?: string | null;
  id?: number | null;
};
export type ConsultingRoomDto = {
  roomId?: number;
  roomName?: string | null;
  isActive?: boolean;
};
export type ConsultingRoomResponseDto = {
  consultingRooms?: ConsultingRoomDto[] | null;
};
export type GetFacilityConsultingRoomsForViewDto = {
  consultingRoomResponseDto?: ConsultingRoomResponseDto;
  facilityName?: string | null;
};
export type PagedResultDtoOfGetFacilityConsultingRoomsForViewDto = {
  totalCount?: number;
  items?: GetFacilityConsultingRoomsForViewDto[] | null;
};
export type OperatingRoomDto = {
  roomId?: number;
  roomName?: string | null;
  isActive?: boolean;
  availabilities?: RoomAvailabilityDto[] | null;
};
export type OperatingRoomResponseDto = {
  operatingRoomDtos?: OperatingRoomDto[] | null;
};
export type GetFacilityOperatingRoomsForViewDto = {
  operatingRoomResponseDto?: OperatingRoomResponseDto;
  facilityName?: string | null;
};
export type PagedResultDtoOfGetFacilityOperatingRoomsForViewDto = {
  totalCount?: number;
  items?: GetFacilityOperatingRoomsForViewDto[] | null;
};
export type ActivateOrDeactivateRoom = {
  isActive?: boolean;
  id?: number | null;
};
export type GetRoomForEditOutputDto = {
  roomOutput?: CreateOrEditRoomsDto;
};
export const {
  useApiServicesAppPatientappointmentsGetconsultingroomsGetQuery,
  useApiServicesAppRoomCreateoreditPostMutation,
  useApiServicesAppRoomDeleteDeleteMutation,
  useApiServicesAppRoomDeleteroomavailabilityDeleteMutation,
  useApiServicesAppRoomCreateoreditroomsavailabilityPostMutation,
  useApiServicesAppRoomGetconsultingroomsGetQuery,
  useApiServicesAppRoomGetoperatingroomsGetQuery,
  useApiServicesAppRoomActivateordeactivateroomPostMutation,
  useApiServicesAppRoomGetroomforeditoutputGetQuery,
} = injectedRtkApi;
