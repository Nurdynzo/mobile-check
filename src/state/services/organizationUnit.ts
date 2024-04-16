import {baseApi as api} from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiServicesAppMockdataGetorganizationunitsGet: build.query<
      ApiServicesAppMockdataGetorganizationunitsGetApiResponse,
      ApiServicesAppMockdataGetorganizationunitsGetApiArg
    >({
      query: () => ({url: `/api/services/app/MockData/GetOrganizationUnits`}),
    }),
    apiServicesAppMockdataCreateandmaporganizationunitPost: build.mutation<
      ApiServicesAppMockdataCreateandmaporganizationunitPostApiResponse,
      ApiServicesAppMockdataCreateandmaporganizationunitPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/MockData/CreateAndMapOrganizationUnit`,
        method: 'POST',
        params: {
          userId: queryArg.userId,
          existingOrganizationUnitId: queryArg.existingOrganizationUnitId,
        },
      }),
    }),
    apiServicesAppNotificationGetallorganizationunitforlookuptableGet:
      build.query<
        ApiServicesAppNotificationGetallorganizationunitforlookuptableGetApiResponse,
        ApiServicesAppNotificationGetallorganizationunitforlookuptableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Notification/GetAllOrganizationUnitForLookupTable`,
          params: {
            Filter: queryArg.filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
      }),
    apiServicesAppOrganizationunitGetorganizationunitsGet: build.query<
      ApiServicesAppOrganizationunitGetorganizationunitsGetApiResponse,
      ApiServicesAppOrganizationunitGetorganizationunitsGetApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/GetOrganizationUnits`,
        params: {
          FacilityId: queryArg.facilityId,
          IncludeClinics: queryArg.includeClinics,
          UnitId: queryArg.unitId,
          MaxResultCount: queryArg.maxResultCount,
          SkipCount: queryArg.skipCount,
          Filter: queryArg.filter,
        },
      }),
    }),
    apiServicesAppOrganizationunitGetorganizationunitusersGet: build.query<
      ApiServicesAppOrganizationunitGetorganizationunitusersGetApiResponse,
      ApiServicesAppOrganizationunitGetorganizationunitusersGetApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/GetOrganizationUnitUsers`,
        params: {
          Id: queryArg.id,
          Sorting: queryArg.sorting,
          MaxResultCount: queryArg.maxResultCount,
          SkipCount: queryArg.skipCount,
        },
      }),
    }),
    apiServicesAppOrganizationunitGetorganizationunitrolesGet: build.query<
      ApiServicesAppOrganizationunitGetorganizationunitrolesGetApiResponse,
      ApiServicesAppOrganizationunitGetorganizationunitrolesGetApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/GetOrganizationUnitRoles`,
        params: {
          Id: queryArg.id,
          Sorting: queryArg.sorting,
          MaxResultCount: queryArg.maxResultCount,
          SkipCount: queryArg.skipCount,
        },
      }),
    }),
    apiServicesAppOrganizationunitCreateorganizationunitPost: build.mutation<
      ApiServicesAppOrganizationunitCreateorganizationunitPostApiResponse,
      ApiServicesAppOrganizationunitCreateorganizationunitPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/CreateOrganizationUnit`,
        method: 'POST',
        body: queryArg.createOrganizationUnitInput,
      }),
    }),
    apiServicesAppOrganizationunitUpdateorganizationunitPut: build.mutation<
      ApiServicesAppOrganizationunitUpdateorganizationunitPutApiResponse,
      ApiServicesAppOrganizationunitUpdateorganizationunitPutApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/UpdateOrganizationUnit`,
        method: 'PUT',
        body: queryArg.updateOrganizationUnitInput,
      }),
    }),
    apiServicesAppOrganizationunitMoveorganizationunitPost: build.mutation<
      ApiServicesAppOrganizationunitMoveorganizationunitPostApiResponse,
      ApiServicesAppOrganizationunitMoveorganizationunitPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/MoveOrganizationUnit`,
        method: 'POST',
        body: queryArg.moveOrganizationUnitInput,
      }),
    }),
    apiServicesAppOrganizationunitDeleteorganizationunitDelete: build.mutation<
      ApiServicesAppOrganizationunitDeleteorganizationunitDeleteApiResponse,
      ApiServicesAppOrganizationunitDeleteorganizationunitDeleteApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/DeleteOrganizationUnit`,
        method: 'DELETE',
        params: {Id: queryArg.id},
      }),
    }),
    apiServicesAppOrganizationunitRemoveuserfromorganizationunitDelete:
      build.mutation<
        ApiServicesAppOrganizationunitRemoveuserfromorganizationunitDeleteApiResponse,
        ApiServicesAppOrganizationunitRemoveuserfromorganizationunitDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit`,
          method: 'DELETE',
          params: {
            UserId: queryArg.userId,
            OrganizationUnitId: queryArg.organizationUnitId,
          },
        }),
      }),
    apiServicesAppOrganizationunitRemoverolefromorganizationunitDelete:
      build.mutation<
        ApiServicesAppOrganizationunitRemoverolefromorganizationunitDeleteApiResponse,
        ApiServicesAppOrganizationunitRemoverolefromorganizationunitDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/OrganizationUnit/RemoveRoleFromOrganizationUnit`,
          method: 'DELETE',
          params: {
            RoleId: queryArg.roleId,
            OrganizationUnitId: queryArg.organizationUnitId,
          },
        }),
      }),
    apiServicesAppOrganizationunitAdduserstoorganizationunitPost:
      build.mutation<
        ApiServicesAppOrganizationunitAdduserstoorganizationunitPostApiResponse,
        ApiServicesAppOrganizationunitAdduserstoorganizationunitPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit`,
          method: 'POST',
          body: queryArg.usersToOrganizationUnitInput,
        }),
      }),
    apiServicesAppOrganizationunitAddrolestoorganizationunitPost:
      build.mutation<
        ApiServicesAppOrganizationunitAddrolestoorganizationunitPostApiResponse,
        ApiServicesAppOrganizationunitAddrolestoorganizationunitPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/OrganizationUnit/AddRolesToOrganizationUnit`,
          method: 'POST',
          body: queryArg.rolesToOrganizationUnitInput,
        }),
      }),
    apiServicesAppOrganizationunitFindusersPost: build.mutation<
      ApiServicesAppOrganizationunitFindusersPostApiResponse,
      ApiServicesAppOrganizationunitFindusersPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/FindUsers`,
        method: 'POST',
        body: queryArg.findOrganizationUnitUsersInput,
      }),
    }),
    apiServicesAppOrganizationunitFindrolesPost: build.mutation<
      ApiServicesAppOrganizationunitFindrolesPostApiResponse,
      ApiServicesAppOrganizationunitFindrolesPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnit/FindRoles`,
        method: 'POST',
        body: queryArg.findOrganizationUnitRolesInput,
      }),
    }),
    apiServicesAppOrganizationunitGetallGet: build.query<
      ApiServicesAppOrganizationunitGetallGetApiResponse,
      ApiServicesAppOrganizationunitGetallGetApiArg
    >({
      query: () => ({url: `/api/services/app/OrganizationUnit/GetAll`}),
    }),
    apiServicesAppOrganizationunitGetclinicsGet: build.query<
      ApiServicesAppOrganizationunitGetclinicsGetApiResponse,
      ApiServicesAppOrganizationunitGetclinicsGetApiArg
    >({
      query: () => ({url: `/api/services/app/OrganizationUnit/GetClinics`}),
    }),
    apiServicesAppOrganizationunittimesGetallGet: build.query<
      ApiServicesAppOrganizationunittimesGetallGetApiResponse,
      ApiServicesAppOrganizationunittimesGetallGetApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnitTimes/GetAll`,
        params: {
          Filter: queryArg.filter,
          DayOfTheWeekFilter: queryArg.dayOfTheWeekFilter,
          MaxOpeningTimeFilter: queryArg.maxOpeningTimeFilter,
          MinOpeningTimeFilter: queryArg.minOpeningTimeFilter,
          MaxClosingTimeFilter: queryArg.maxClosingTimeFilter,
          MinClosingTimeFilter: queryArg.minClosingTimeFilter,
          IsActiveFilter: queryArg.isActiveFilter,
          OrganizationUnitDisplayNameFilter:
            queryArg.organizationUnitDisplayNameFilter,
          Sorting: queryArg.sorting,
          SkipCount: queryArg.skipCount,
          MaxResultCount: queryArg.maxResultCount,
        },
      }),
    }),
    apiServicesAppOrganizationunittimesGetorganizationunittimeforeditGet:
      build.query<
        ApiServicesAppOrganizationunittimesGetorganizationunittimeforeditGetApiResponse,
        ApiServicesAppOrganizationunittimesGetorganizationunittimeforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/OrganizationUnitTimes/GetOrganizationUnitTimeForEdit`,
          params: {Id: queryArg.id},
        }),
      }),
    apiServicesAppOrganizationunittimesCreateoreditPost: build.mutation<
      ApiServicesAppOrganizationunittimesCreateoreditPostApiResponse,
      ApiServicesAppOrganizationunittimesCreateoreditPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnitTimes/CreateOrEdit`,
        method: 'POST',
        body: queryArg.createOrEditOrganizationUnitTimeDto,
      }),
    }),
    apiServicesAppOrganizationunittimesDeleteDelete: build.mutation<
      ApiServicesAppOrganizationunittimesDeleteDeleteApiResponse,
      ApiServicesAppOrganizationunittimesDeleteDeleteApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/OrganizationUnitTimes/Delete`,
        method: 'DELETE',
        params: {Id: queryArg.id},
      }),
    }),
    apiServicesAppOrganizationunittimesGetallorganizationunitforlookuptableGet:
      build.query<
        ApiServicesAppOrganizationunittimesGetallorganizationunitforlookuptableGetApiResponse,
        ApiServicesAppOrganizationunittimesGetallorganizationunitforlookuptableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/OrganizationUnitTimes/GetAllOrganizationUnitForLookupTable`,
          params: {
            Filter: queryArg.filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
      }),
    apiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGet:
      build.query<
        ApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetApiResponse,
        ApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientAppointments/GetAllOrganizationUnitForLookupTable`,
          params: {
            Filter: queryArg.filter,
            OutPatientListingType: queryArg.outPatientListingType,
            Status: queryArg.status,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
      }),
  }),
  overrideExisting: false,
});
export {injectedRtkApi as organizationUnit};
export type ApiServicesAppMockdataGetorganizationunitsGetApiResponse = unknown;
export type ApiServicesAppMockdataGetorganizationunitsGetApiArg = void;
export type ApiServicesAppMockdataCreateandmaporganizationunitPostApiResponse =
  unknown;
export type ApiServicesAppMockdataCreateandmaporganizationunitPostApiArg = {
  userId?: number;
  existingOrganizationUnitId?: number;
};
export type ApiServicesAppNotificationGetallorganizationunitforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfMassNotificationOrganizationUnitLookupTableDto;
export type ApiServicesAppNotificationGetallorganizationunitforlookuptableGetApiArg =
  {
    filter?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppOrganizationunitGetorganizationunitsGetApiResponse =
  /** status 200 Success */ ListResultDtoOfOrganizationUnitDto;
export type ApiServicesAppOrganizationunitGetorganizationunitsGetApiArg = {
  facilityId: number;
  includeClinics?: boolean;
  unitId?: number;
  maxResultCount?: number;
  skipCount?: number;
  filter?: string;
};
export type ApiServicesAppOrganizationunitGetorganizationunitusersGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfOrganizationUnitUserListDto;
export type ApiServicesAppOrganizationunitGetorganizationunitusersGetApiArg = {
  id?: number;
  sorting?: string;
  maxResultCount?: number;
  skipCount?: number;
};
export type ApiServicesAppOrganizationunitGetorganizationunitrolesGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfOrganizationUnitRoleListDto;
export type ApiServicesAppOrganizationunitGetorganizationunitrolesGetApiArg = {
  id?: number;
  sorting?: string;
  maxResultCount?: number;
  skipCount?: number;
};
export type ApiServicesAppOrganizationunitCreateorganizationunitPostApiResponse =
  /** status 200 Success */ OrganizationUnitDto;
export type ApiServicesAppOrganizationunitCreateorganizationunitPostApiArg = {
  createOrganizationUnitInput: CreateOrganizationUnitInput;
};
export type ApiServicesAppOrganizationunitUpdateorganizationunitPutApiResponse =
  /** status 200 Success */ OrganizationUnitDto;
export type ApiServicesAppOrganizationunitUpdateorganizationunitPutApiArg = {
  updateOrganizationUnitInput: UpdateOrganizationUnitInput;
};
export type ApiServicesAppOrganizationunitMoveorganizationunitPostApiResponse =
  /** status 200 Success */ OrganizationUnitDto;
export type ApiServicesAppOrganizationunitMoveorganizationunitPostApiArg = {
  moveOrganizationUnitInput: MoveOrganizationUnitInput;
};
export type ApiServicesAppOrganizationunitDeleteorganizationunitDeleteApiResponse =
  unknown;
export type ApiServicesAppOrganizationunitDeleteorganizationunitDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppOrganizationunitRemoveuserfromorganizationunitDeleteApiResponse =
  unknown;
export type ApiServicesAppOrganizationunitRemoveuserfromorganizationunitDeleteApiArg =
  {
    userId?: number;
    organizationUnitId?: number;
  };
export type ApiServicesAppOrganizationunitRemoverolefromorganizationunitDeleteApiResponse =
  unknown;
export type ApiServicesAppOrganizationunitRemoverolefromorganizationunitDeleteApiArg =
  {
    roleId?: number;
    organizationUnitId?: number;
  };
export type ApiServicesAppOrganizationunitAdduserstoorganizationunitPostApiResponse =
  unknown;
export type ApiServicesAppOrganizationunitAdduserstoorganizationunitPostApiArg =
  {
    usersToOrganizationUnitInput: UsersToOrganizationUnitInput;
  };
export type ApiServicesAppOrganizationunitAddrolestoorganizationunitPostApiResponse =
  unknown;
export type ApiServicesAppOrganizationunitAddrolestoorganizationunitPostApiArg =
  {
    rolesToOrganizationUnitInput: RolesToOrganizationUnitInput;
  };
export type ApiServicesAppOrganizationunitFindusersPostApiResponse =
  /** status 200 Success */ PagedResultDtoOfNameValueDto;
export type ApiServicesAppOrganizationunitFindusersPostApiArg = {
  findOrganizationUnitUsersInput: FindOrganizationUnitUsersInput;
};
export type ApiServicesAppOrganizationunitFindrolesPostApiResponse =
  /** status 200 Success */ PagedResultDtoOfNameValueDto;
export type ApiServicesAppOrganizationunitFindrolesPostApiArg = {
  findOrganizationUnitRolesInput: FindOrganizationUnitRolesInput;
};
export type ApiServicesAppOrganizationunitGetallGetApiResponse =
  /** status 200 Success */ OrganizationUnitDto[];
export type ApiServicesAppOrganizationunitGetallGetApiArg = void;
export type ApiServicesAppOrganizationunitGetclinicsGetApiResponse =
  /** status 200 Success */ ClinicListDto[];
export type ApiServicesAppOrganizationunitGetclinicsGetApiArg = void;
export type ApiServicesAppOrganizationunittimesGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetOrganizationUnitTimeForViewDto;
export type ApiServicesAppOrganizationunittimesGetallGetApiArg = {
  filter?: string;
  dayOfTheWeekFilter?: number;
  maxOpeningTimeFilter?: string;
  minOpeningTimeFilter?: string;
  maxClosingTimeFilter?: string;
  minClosingTimeFilter?: string;
  isActiveFilter?: number;
  organizationUnitDisplayNameFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppOrganizationunittimesGetorganizationunittimeforeditGetApiResponse =
  /** status 200 Success */ GetOrganizationUnitTimeForEditOutput;
export type ApiServicesAppOrganizationunittimesGetorganizationunittimeforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppOrganizationunittimesCreateoreditPostApiResponse =
  unknown;
export type ApiServicesAppOrganizationunittimesCreateoreditPostApiArg = {
  createOrEditOrganizationUnitTimeDto: CreateOrEditOrganizationUnitTimeDto;
};
export type ApiServicesAppOrganizationunittimesDeleteDeleteApiResponse =
  unknown;
export type ApiServicesAppOrganizationunittimesDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppOrganizationunittimesGetallorganizationunitforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfOrganizationUnitTimeOrganizationUnitLookupTableDto;
export type ApiServicesAppOrganizationunittimesGetallorganizationunitforlookuptableGetApiArg =
  {
    filter?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientAppointmentOrganizationUnitLookupTableDto;
export type ApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type MassNotificationOrganizationUnitLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfMassNotificationOrganizationUnitLookupTableDto = {
  totalCount?: number;
  items?: MassNotificationOrganizationUnitLookupTableDto[] | null;
};
export type ServiceCentreType =
  | 'OutPatient'
  | 'InPatient'
  | 'AccidentAndEmergency'
  | 'Pharmacy'
  | 'Laboratory'
  | 'Others';
export type DaysOfTheWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
export type OrganizationUnitTimeDto = {
  dayOfTheWeek?: DaysOfTheWeek;
  openingTime?: string | null;
  closingTime?: string | null;
  isActive?: boolean;
  organizationUnitExtendedId?: number | null;
  id?: number | null;
};
export type OrganizationUnitDto = {
  parentId?: number | null;
  code?: string | null;
  displayName?: string | null;
  shortName?: string | null;
  isActive?: boolean | null;
  isStatic?: boolean;
  type?: string | null;
  serviceCentre?: ServiceCentreType;
  facilityId?: number | null;
  memberCount?: number;
  roleCount?: number;
  operatingTimes?: OrganizationUnitTimeDto[] | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type ListResultDtoOfOrganizationUnitDto = {
  items?: OrganizationUnitDto[] | null;
};
export type OrganizationUnitUserListDto = {
  name?: string | null;
  surname?: string | null;
  userName?: string | null;
  emailAddress?: string | null;
  profilePictureId?: string | null;
  addedTime?: string;
  id?: number;
};
export type PagedResultDtoOfOrganizationUnitUserListDto = {
  totalCount?: number;
  items?: OrganizationUnitUserListDto[] | null;
};
export type OrganizationUnitRoleListDto = {
  displayName?: string | null;
  name?: string | null;
  addedTime?: string;
  id?: number;
};
export type PagedResultDtoOfOrganizationUnitRoleListDto = {
  totalCount?: number;
  items?: OrganizationUnitRoleListDto[] | null;
};
export type CreateOrganizationUnitInput = {
  parentId?: number | null;
  facilityId: number;
  displayName: string;
  shortName?: string | null;
  isActive?: boolean | null;
  type: string;
  operatingTimes?: OrganizationUnitTimeDto[] | null;
};
export type UpdateOrganizationUnitInput = {
  id?: number;
  displayName: string;
  shortName?: string | null;
  isActive?: boolean | null;
  operatingTimes?: OrganizationUnitTimeDto[] | null;
};
export type MoveOrganizationUnitInput = {
  id?: number;
  newParentId?: number | null;
};
export type UsersToOrganizationUnitInput = {
  userIds?: number[] | null;
  organizationUnitId?: number;
};
export type RolesToOrganizationUnitInput = {
  roleIds?: number[] | null;
  organizationUnitId?: number;
};
export type NameValueDto = {
  name?: string | null;
  value?: string | null;
};
export type PagedResultDtoOfNameValueDto = {
  totalCount?: number;
  items?: NameValueDto[] | null;
};
export type FindOrganizationUnitUsersInput = {
  organizationUnitId?: number;
  maxResultCount?: number;
  skipCount?: number;
  filter?: string | null;
};
export type FindOrganizationUnitRolesInput = {
  organizationUnitId?: number;
  maxResultCount?: number;
  skipCount?: number;
  filter?: string | null;
};
export type ClinicListDto = {
  id?: number;
  displayName?: string | null;
  isActive?: boolean;
};
export type GetOrganizationUnitTimeForViewDto = {
  organizationUnitTime?: OrganizationUnitTimeDto;
  organizationUnitDisplayName?: string | null;
};
export type PagedResultDtoOfGetOrganizationUnitTimeForViewDto = {
  totalCount?: number;
  items?: GetOrganizationUnitTimeForViewDto[] | null;
};
export type CreateOrEditOrganizationUnitTimeDto = {
  dayOfTheWeek?: DaysOfTheWeek;
  openingTime?: string | null;
  closingTime?: string | null;
  isActive?: boolean;
  organizationUnitId?: number | null;
  id?: number | null;
};
export type GetOrganizationUnitTimeForEditOutput = {
  organizationUnitTime?: CreateOrEditOrganizationUnitTimeDto;
  organizationUnitDisplayName?: string | null;
};
export type OrganizationUnitTimeOrganizationUnitLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfOrganizationUnitTimeOrganizationUnitLookupTableDto =
  {
    totalCount?: number;
    items?: OrganizationUnitTimeOrganizationUnitLookupTableDto[] | null;
  };
export type PatientAppointmentOrganizationUnitLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentOrganizationUnitLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentOrganizationUnitLookupTableDto[] | null;
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
  useApiServicesAppMockdataGetorganizationunitsGetQuery,
  useApiServicesAppMockdataCreateandmaporganizationunitPostMutation,
  useApiServicesAppNotificationGetallorganizationunitforlookuptableGetQuery,
  useApiServicesAppOrganizationunitGetorganizationunitsGetQuery,
  useApiServicesAppOrganizationunitGetorganizationunitusersGetQuery,
  useApiServicesAppOrganizationunitGetorganizationunitrolesGetQuery,
  useApiServicesAppOrganizationunitCreateorganizationunitPostMutation,
  useApiServicesAppOrganizationunitUpdateorganizationunitPutMutation,
  useApiServicesAppOrganizationunitMoveorganizationunitPostMutation,
  useApiServicesAppOrganizationunitDeleteorganizationunitDeleteMutation,
  useApiServicesAppOrganizationunitRemoveuserfromorganizationunitDeleteMutation,
  useApiServicesAppOrganizationunitRemoverolefromorganizationunitDeleteMutation,
  useApiServicesAppOrganizationunitAdduserstoorganizationunitPostMutation,
  useApiServicesAppOrganizationunitAddrolestoorganizationunitPostMutation,
  useApiServicesAppOrganizationunitFindusersPostMutation,
  useApiServicesAppOrganizationunitFindrolesPostMutation,
  useApiServicesAppOrganizationunitGetallGetQuery,
  useApiServicesAppOrganizationunitGetclinicsGetQuery,
  useApiServicesAppOrganizationunittimesGetallGetQuery,
  useApiServicesAppOrganizationunittimesGetorganizationunittimeforeditGetQuery,
  useApiServicesAppOrganizationunittimesCreateoreditPostMutation,
  useApiServicesAppOrganizationunittimesDeleteDeleteMutation,
  useApiServicesAppOrganizationunittimesGetallorganizationunitforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetQuery,
} = injectedRtkApi;
