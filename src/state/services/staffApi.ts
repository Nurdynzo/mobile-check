import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'FacilityStaff',
  'MockData',
  'PatientAppointments',
  'Procedure',
  'StaffCodeTemplates',
  'StaffMembers',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppFacilitystaffGetallGet: build.query<
        ApiServicesAppFacilitystaffGetallGetApiResponse,
        ApiServicesAppFacilitystaffGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/FacilityStaff/GetAll`,
          params: {
            Filter: queryArg.filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['FacilityStaff'],
      }),
      apiServicesAppFacilitystaffGetfacilitystaffforeditGet: build.query<
        ApiServicesAppFacilitystaffGetfacilitystaffforeditGetApiResponse,
        ApiServicesAppFacilitystaffGetfacilitystaffforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/FacilityStaff/GetFacilityStaffForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['FacilityStaff'],
      }),
      apiServicesAppFacilitystaffCreateoreditPost: build.mutation<
        ApiServicesAppFacilitystaffCreateoreditPostApiResponse,
        ApiServicesAppFacilitystaffCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/FacilityStaff/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditFacilityStaffDto,
        }),
        invalidatesTags: ['FacilityStaff'],
      }),
      apiServicesAppFacilitystaffDeleteDelete: build.mutation<
        ApiServicesAppFacilitystaffDeleteDeleteApiResponse,
        ApiServicesAppFacilitystaffDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/FacilityStaff/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['FacilityStaff'],
      }),
      apiServicesAppFacilitystaffGetallfacilityforlookuptableGet: build.query<
        ApiServicesAppFacilitystaffGetallfacilityforlookuptableGetApiResponse,
        ApiServicesAppFacilitystaffGetallfacilityforlookuptableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/FacilityStaff/GetAllFacilityForLookupTable`,
          params: {
            Filter: queryArg.filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['FacilityStaff'],
      }),
      apiServicesAppFacilitystaffGetallstaffmemberforlookuptableGet:
        build.query<
          ApiServicesAppFacilitystaffGetallstaffmemberforlookuptableGetApiResponse,
          ApiServicesAppFacilitystaffGetallstaffmemberforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/FacilityStaff/GetAllStaffMemberForLookupTable`,
            params: {
              Filter: queryArg.filter,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['FacilityStaff'],
        }),
      apiServicesAppMockdataCreatemockstaffmembersPost: build.mutation<
        ApiServicesAppMockdataCreatemockstaffmembersPostApiResponse,
        ApiServicesAppMockdataCreatemockstaffmembersPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/MockData/CreateMockStaffMembers`,
          method: 'POST',
          body: queryArg.body,
          params: {count: queryArg.count},
        }),
        invalidatesTags: ['MockData'],
      }),
      apiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGet:
        build.query<
          ApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetApiResponse,
          ApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/GetAllStaffMemberForLookupTable`,
            params: {
              Filter: queryArg.filter,
              OutPatientListingType: queryArg.outPatientListingType,
              Status: queryArg.status,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['PatientAppointments'],
        }),
      apiServicesAppProcedureGetstaffmemberbysearchfilterGet: build.query<
        ApiServicesAppProcedureGetstaffmemberbysearchfilterGetApiResponse,
        ApiServicesAppProcedureGetstaffmemberbysearchfilterGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetStaffMemberBySearchFilter`,
          params: {
            filter: queryArg.filter,
            isAnaethetist: queryArg.isAnaethetist,
          },
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppStaffcodetemplatesGetstaffcodetemplateforeditGet:
        build.query<
          ApiServicesAppStaffcodetemplatesGetstaffcodetemplateforeditGetApiResponse,
          ApiServicesAppStaffcodetemplatesGetstaffcodetemplateforeditGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/StaffCodeTemplates/GetStaffCodeTemplateForEdit`,
            params: {Id: queryArg.id},
          }),
          providesTags: ['StaffCodeTemplates'],
        }),
      apiServicesAppStaffcodetemplatesCreateoreditPost: build.mutation<
        ApiServicesAppStaffcodetemplatesCreateoreditPostApiResponse,
        ApiServicesAppStaffcodetemplatesCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/StaffCodeTemplates/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditStaffCodeTemplateDto,
        }),
        invalidatesTags: ['StaffCodeTemplates'],
      }),
      apiServicesAppStaffcodetemplatesDeleteDelete: build.mutation<
        ApiServicesAppStaffcodetemplatesDeleteDeleteApiResponse,
        ApiServicesAppStaffcodetemplatesDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/StaffCodeTemplates/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['StaffCodeTemplates'],
      }),
      apiServicesAppStaffmembersGetallGet: build.query<
        ApiServicesAppStaffmembersGetallGetApiResponse,
        ApiServicesAppStaffmembersGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/StaffMembers/GetAll`,
          params: {
            Filter: queryArg.filter,
            StaffCodeFilter: queryArg.staffCodeFilter,
            MaxContractStartDateFilter: queryArg.maxContractStartDateFilter,
            MinContractStartDateFilter: queryArg.minContractStartDateFilter,
            MaxContractEndDateFilter: queryArg.maxContractEndDateFilter,
            MinContractEndDateFilter: queryArg.minContractEndDateFilter,
            JobTitleIdFilter: queryArg.jobTitleIdFilter,
            JobLevelIdFilter: queryArg.jobLevelIdFilter,
            FacilityIdFilter: queryArg.facilityIdFilter,
            Permissions: queryArg.permissions,
            Role: queryArg.role,
            OnlyLockedUsers: queryArg.onlyLockedUsers,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['StaffMembers'],
      }),
      apiServicesAppStaffmembersGetallstaffwithjobsGet: build.query<
        ApiServicesAppStaffmembersGetallstaffwithjobsGetApiResponse,
        ApiServicesAppStaffmembersGetallstaffwithjobsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/StaffMembers/GetAllStaffWithJobs`,
          params: {
            Filter: queryArg.filter,
            StaffCodeFilter: queryArg.staffCodeFilter,
            StaffNameFilter: queryArg.staffNameFilter,
            StaffCodeOrStaffNameFilter: queryArg.staffCodeOrStaffNameFilter,
            FacilityIdFilter: queryArg.facilityIdFilter,
            RoleNameFilter: queryArg.roleNameFilter,
            JobTitleIdFilter: queryArg.jobTitleIdFilter,
            JobLevelIdFilter: queryArg.jobLevelIdFilter,
            Role: queryArg.role,
            IsActive: queryArg.isActive,
            MaxContractStartDateFilter: queryArg.maxContractStartDateFilter,
            MinContractStartDateFilter: queryArg.minContractStartDateFilter,
            MaxContractEndDateFilter: queryArg.maxContractEndDateFilter,
            MinContractEndDateFilter: queryArg.minContractEndDateFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['StaffMembers'],
      }),
      apiServicesAppStaffmembersGetstaffmemberGet: build.query<
        ApiServicesAppStaffmembersGetstaffmemberGetApiResponse,
        ApiServicesAppStaffmembersGetstaffmemberGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/StaffMembers/GetStaffMember`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['StaffMembers'],
      }),
      apiServicesAppStaffmembersCreateoreditPost: build.mutation<
        ApiServicesAppStaffmembersCreateoreditPostApiResponse,
        ApiServicesAppStaffmembersCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/StaffMembers/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditStaffMemberRequest,
        }),
        invalidatesTags: ['StaffMembers'],
      }),
      apiServicesAppStaffmembersActivateordeactivatestaffmemberPost:
        build.mutation<
          ApiServicesAppStaffmembersActivateordeactivatestaffmemberPostApiResponse,
          ApiServicesAppStaffmembersActivateordeactivatestaffmemberPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/StaffMembers/ActivateOrDeactivateStaffMember`,
            method: 'POST',
            body: queryArg.activateOrDeactivateStaffMemberRequest,
          }),
          invalidatesTags: ['StaffMembers'],
        }),
      apiServicesAppStaffmembersDeleteDelete: build.mutation<
        ApiServicesAppStaffmembersDeleteDeleteApiResponse,
        ApiServicesAppStaffmembersDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/StaffMembers/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['StaffMembers'],
      }),
      apiServicesAppStaffmembersGetstaffmembersbyroleGet: build.query<
        ApiServicesAppStaffmembersGetstaffmembersbyroleGetApiResponse,
        ApiServicesAppStaffmembersGetstaffmembersbyroleGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/StaffMembers/GetStaffMembersByRole`,
          params: {roleName: queryArg.roleName},
        }),
        providesTags: ['StaffMembers'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as staffApi};
export type ApiServicesAppFacilitystaffGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetFacilityStaffForViewDto;
export type ApiServicesAppFacilitystaffGetallGetApiArg = {
  filter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppFacilitystaffGetfacilitystaffforeditGetApiResponse =
  /** status 200 Success */ GetFacilityStaffForEditOutput;
export type ApiServicesAppFacilitystaffGetfacilitystaffforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppFacilitystaffCreateoreditPostApiResponse = unknown;
export type ApiServicesAppFacilitystaffCreateoreditPostApiArg = {
  createOrEditFacilityStaffDto: CreateOrEditFacilityStaffDto;
};
export type ApiServicesAppFacilitystaffDeleteDeleteApiResponse = unknown;
export type ApiServicesAppFacilitystaffDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppFacilitystaffGetallfacilityforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfFacilityStaffFacilityLookupTableDto;
export type ApiServicesAppFacilitystaffGetallfacilityforlookuptableGetApiArg = {
  filter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppFacilitystaffGetallstaffmemberforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfFacilityStaffStaffMemberLookupTableDto;
export type ApiServicesAppFacilitystaffGetallstaffmemberforlookuptableGetApiArg =
  {
    filter?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppMockdataCreatemockstaffmembersPostApiResponse =
  unknown;
export type ApiServicesAppMockdataCreatemockstaffmembersPostApiArg = {
  count?: number;
  body: string[];
};
export type ApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientAppointmentStaffMemberLookupTableDto;
export type ApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppProcedureGetstaffmemberbysearchfilterGetApiResponse =
  /** status 200 Success */ GetStaffMembersSimpleResponseDto[];
export type ApiServicesAppProcedureGetstaffmemberbysearchfilterGetApiArg = {
  filter?: string;
  isAnaethetist?: boolean;
};
export type ApiServicesAppStaffcodetemplatesGetstaffcodetemplateforeditGetApiResponse =
  /** status 200 Success */ GetStaffCodeTemplateForEditOutput;
export type ApiServicesAppStaffcodetemplatesGetstaffcodetemplateforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppStaffcodetemplatesCreateoreditPostApiResponse =
  unknown;
export type ApiServicesAppStaffcodetemplatesCreateoreditPostApiArg = {
  createOrEditStaffCodeTemplateDto: CreateOrEditStaffCodeTemplateDto;
};
export type ApiServicesAppStaffcodetemplatesDeleteDeleteApiResponse = unknown;
export type ApiServicesAppStaffcodetemplatesDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppStaffmembersGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetStaffMembersResponse;
export type ApiServicesAppStaffmembersGetallGetApiArg = {
  filter?: string;
  staffCodeFilter?: string;
  maxContractStartDateFilter?: string;
  minContractStartDateFilter?: string;
  maxContractEndDateFilter?: string;
  minContractEndDateFilter?: string;
  jobTitleIdFilter?: number;
  jobLevelIdFilter?: number;
  facilityIdFilter?: number;
  permissions?: string[];
  role?: number;
  onlyLockedUsers?: boolean;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppStaffmembersGetallstaffwithjobsGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetStaffMembersWithJobsResponse;
export type ApiServicesAppStaffmembersGetallstaffwithjobsGetApiArg = {
  filter?: string;
  staffCodeFilter?: string;
  staffNameFilter?: string;
  staffCodeOrStaffNameFilter?: string;
  facilityIdFilter?: number;
  roleNameFilter?: string;
  jobTitleIdFilter?: number;
  jobLevelIdFilter?: number;
  role?: number;
  isActive?: boolean;
  maxContractStartDateFilter?: string;
  minContractStartDateFilter?: string;
  maxContractEndDateFilter?: string;
  minContractEndDateFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppStaffmembersGetstaffmemberGetApiResponse =
  /** status 200 Success */ GetStaffMemberForEditResponse;
export type ApiServicesAppStaffmembersGetstaffmemberGetApiArg = {
  id?: number;
};
export type ApiServicesAppStaffmembersCreateoreditPostApiResponse = unknown;
export type ApiServicesAppStaffmembersCreateoreditPostApiArg = {
  createOrEditStaffMemberRequest: CreateOrEditStaffMemberRequest;
};
export type ApiServicesAppStaffmembersActivateordeactivatestaffmemberPostApiResponse =
  unknown;
export type ApiServicesAppStaffmembersActivateordeactivatestaffmemberPostApiArg =
  {
    activateOrDeactivateStaffMemberRequest: ActivateOrDeactivateStaffMemberRequest;
  };
export type ApiServicesAppStaffmembersDeleteDeleteApiResponse = unknown;
export type ApiServicesAppStaffmembersDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppStaffmembersGetstaffmembersbyroleGetApiResponse =
  /** status 200 Success */ StaffMemberForReturnDto[];
export type ApiServicesAppStaffmembersGetstaffmembersbyroleGetApiArg = {
  roleName?: string;
};
export type TitleType =
  | 'Mr'
  | 'Mrs'
  | 'Miss'
  | 'Ms'
  | 'Dr'
  | 'Prof'
  | 'Hon'
  | 'Rev'
  | 'Pr'
  | 'Fr'
  | 'Other'
  | 'CM'
  | 'DNS'
  | 'ADNS'
  | 'CNO'
  | 'ACNO'
  | 'PNO'
  | 'SNO'
  | 'NO'
  | 'Pharm'
  | 'Pharm Tech';
export type FacilityStaffDto = {
  facilityId?: number;
  staffMemberId?: number;
  jobTitleId?: number | null;
  staffCode?: string | null;
  title?: TitleType;
  name?: string | null;
  surname?: string | null;
  middleName?: string | null;
  id?: number;
};
export type GetFacilityStaffForViewDto = {
  facilityStaff?: FacilityStaffDto;
  facilityName?: string | null;
  staffMemberStaffCode?: string | null;
};
export type PagedResultDtoOfGetFacilityStaffForViewDto = {
  totalCount?: number;
  items?: GetFacilityStaffForViewDto[] | null;
};
export type CreateOrEditFacilityStaffDto = {
  facilityId?: number;
  staffMemberId?: number;
  id?: number | null;
};
export type GetFacilityStaffForEditOutput = {
  facilityStaff?: CreateOrEditFacilityStaffDto;
  facilityName?: string | null;
  staffMemberStaffCode?: string | null;
};
export type FacilityStaffFacilityLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfFacilityStaffFacilityLookupTableDto = {
  totalCount?: number;
  items?: FacilityStaffFacilityLookupTableDto[] | null;
};
export type FacilityStaffStaffMemberLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfFacilityStaffStaffMemberLookupTableDto = {
  totalCount?: number;
  items?: FacilityStaffStaffMemberLookupTableDto[] | null;
};
export type PatientAppointmentStaffMemberLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentStaffMemberLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentStaffMemberLookupTableDto[] | null;
};
export type OutPatientListingType = 'AttendingPhysician' | 'AttendingClinic';
export type AppointmentStatusType =
  | 'Pending'
  | 'Executed'
  | 'Missed'
  | 'Rescheduled'
  | 'Upcoming'
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
export type GetStaffMembersSimpleResponseDto = {
  id?: number;
  staffMemberId?: number | null;
  title?: TitleType;
  name?: string | null;
  middleName?: string | null;
  surname?: string | null;
  staffCode?: string | null;
};
export type CreateOrEditStaffCodeTemplateDto = {
  length?: number;
  startingIndex?: number;
  prefix?: string | null;
  suffix?: string | null;
  id?: number | null;
};
export type GetStaffCodeTemplateForEditOutput = {
  staffCodeTemplate?: CreateOrEditStaffCodeTemplateDto;
};
export type GetStaffMembersResponse = {
  id?: number;
  staffMemberId?: number;
  title?: TitleType;
  name?: string | null;
  middleName?: string | null;
  surname?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  jobTitle?: string | null;
  jobLevel?: string | null;
  staffCode?: string | null;
  department?: string | null;
  unit?: string | null;
  unitId?: number | null;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  isActive?: boolean;
};
export type PagedResultDtoOfGetStaffMembersResponse = {
  totalCount?: number;
  items?: GetStaffMembersResponse[] | null;
};
export type UserDetailsDto = {
  id?: number;
  title?: TitleType;
  name?: string | null;
  middleName?: string | null;
  surname?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  profilePictureId?: string | null;
  isActive?: boolean;
};
export type JobLevelDto = {
  name?: string | null;
  rank?: number | null;
  shortName?: string | null;
  jobTitleId?: number | null;
  isActive?: boolean;
  isStatic?: boolean;
  titleOfAddress?: TitleType;
  id?: number;
};
export type JobTitleDto = {
  name?: string | null;
  shortName?: string | null;
  isActive?: boolean;
  facilityId?: number;
  jobLevels?: JobLevelDto[] | null;
  isStatic?: boolean;
  id?: number;
};
export type StaffMemberJobResponseDto = {
  id?: number | null;
  isPrimary?: boolean;
  department?: string | null;
  unit?: string | null;
  teamRole?: string | null;
  jobTitle?: JobTitleDto;
};
export type GetStaffMembersWithJobsResponse = {
  user?: UserDetailsDto;
  staffMemberId?: number;
  staffCode?: string | null;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  adminRole?: string | null;
  jobs?: StaffMemberJobResponseDto[] | null;
  jobCount?: number;
};
export type PagedResultDtoOfGetStaffMembersWithJobsResponse = {
  totalCount?: number;
  items?: GetStaffMembersWithJobsResponse[] | null;
};
export type GenderType = 'Male' | 'Female' | 'Other';
export type IdentificationType =
  | 'State ID Card'
  | 'State Driver License'
  | 'Military ID Card'
  | 'Social Security Card'
  | 'Birth Certificate'
  | 'Voter Registration Card';
export type UserMinimalEditDto = {
  id?: number | null;
  title: TitleType;
  name: string;
  middleName?: string | null;
  surname: string;
  userName: string;
  fullName?: string | null;
  gender?: GenderType;
  dateOfBirth?: string | null;
  identificationCode?: string | null;
  identificationType?: IdentificationType;
  emailAddress: string;
  altEmailAddress?: string | null;
  countryId?: number | null;
  phoneNumber?: string | null;
  isActive?: boolean;
};
export type FacilityLevel = 'Primary' | 'Secondary' | 'Tertiary';
export type FacilityDto = {
  name?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  website?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postCode?: string | null;
  level?: FacilityLevel;
  facilityGroup?: string | null;
  facilityType?: string | null;
  hasPharmacy?: boolean | null;
  hasLaboratory?: boolean | null;
  logoId?: string | null;
  id?: number;
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
export type WardBedDto = {
  bedNumber?: string | null;
  isActive?: boolean;
  bedTypeId?: number;
  wardId?: number;
  bedTypeName?: string | null;
  id?: number;
};
export type WardDto = {
  name?: string | null;
  description?: string | null;
  isActive?: boolean;
  facilityId?: number;
  wardBeds?: WardBedDto[] | null;
  id?: number;
};
export type GetStaffJob = {
  id?: number | null;
  isPrimary?: boolean;
  isActive?: boolean;
  facilityId?: number | null;
  facility?: FacilityDto;
  jobTitleId?: number | null;
  jobTitle?: JobTitleDto;
  jobLevelId?: number | null;
  jobLevel?: JobLevelDto;
  teamRole?: string | null;
  departmentId?: number | null;
  department?: OrganizationUnitDto;
  unitId?: number | null;
  unit?: OrganizationUnitDto;
  wards?: number[] | null;
  staffWards?: WardDto[] | null;
  serviceCentres?: ServiceCentreType[] | null;
};
export type GetStaffMemberForEditResponse = {
  user?: UserMinimalEditDto;
  staffMemberId?: number;
  phoneCode?: string | null;
  staffCode?: string | null;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  adminRole?: string | null;
  jobs?: GetStaffJob[] | null;
};
export type UserEditDto = {
  id?: number | null;
  title: TitleType;
  name: string;
  middleName?: string | null;
  surname: string;
  userName: string;
  displayName?: string | null;
  fullName?: string | null;
  gender?: GenderType;
  dateOfBirth?: string | null;
  identificationCode?: string | null;
  identificationType?: IdentificationType;
  streetAddress?: string | null;
  city?: string | null;
  district?: string | null;
  state?: string | null;
  postCode?: string | null;
  countryId?: number | null;
  emailAddress: string;
  altEmailAddress?: string | null;
  phoneNumber?: string | null;
  password?: string | null;
  isActive?: boolean;
  shouldChangePasswordOnNextLogin?: boolean;
  isTwoFactorEnabled?: boolean;
  isLockoutEnabled?: boolean;
};
export type JobDto = {
  id?: number | null;
  isPrimary?: boolean;
  isActive?: boolean;
  facilityId?: number | null;
  facility?: FacilityDto;
  jobTitleId?: number | null;
  jobTitle?: JobTitleDto;
  jobLevelId?: number | null;
  jobLevel?: JobLevelDto;
  teamRole?: string | null;
  departmentId?: number | null;
  department?: OrganizationUnitDto;
  unitId?: number | null;
  unit?: OrganizationUnitDto;
  wards?: number[] | null;
  serviceCentres?: ServiceCentreType[] | null;
};
export type CreateOrEditStaffMemberRequest = {
  staffCode?: string | null;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  adminRole?: string | null;
  user?: UserEditDto;
  job?: JobDto;
};
export type ActivateOrDeactivateStaffMemberRequest = {
  isActive?: boolean;
  id?: number | null;
};
export type StaffMemberForReturnDto = {
  userId?: number;
  staffMemberId?: number;
  staffCode?: string | null;
  title?: TitleType;
  name?: string | null;
  middleName?: string | null;
  surname?: string | null;
  userName?: string | null;
  gender?: GenderType;
};
export const {
  useApiServicesAppFacilitystaffGetallGetQuery,
  useApiServicesAppFacilitystaffGetfacilitystaffforeditGetQuery,
  useApiServicesAppFacilitystaffCreateoreditPostMutation,
  useApiServicesAppFacilitystaffDeleteDeleteMutation,
  useApiServicesAppFacilitystaffGetallfacilityforlookuptableGetQuery,
  useApiServicesAppFacilitystaffGetallstaffmemberforlookuptableGetQuery,
  useApiServicesAppMockdataCreatemockstaffmembersPostMutation,
  useApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetQuery,
  useApiServicesAppProcedureGetstaffmemberbysearchfilterGetQuery,
  useApiServicesAppStaffcodetemplatesGetstaffcodetemplateforeditGetQuery,
  useApiServicesAppStaffcodetemplatesCreateoreditPostMutation,
  useApiServicesAppStaffcodetemplatesDeleteDeleteMutation,
  useApiServicesAppStaffmembersGetallGetQuery,
  useApiServicesAppStaffmembersGetallstaffwithjobsGetQuery,
  useApiServicesAppStaffmembersGetstaffmemberGetQuery,
  useApiServicesAppStaffmembersCreateoreditPostMutation,
  useApiServicesAppStaffmembersActivateordeactivatestaffmemberPostMutation,
  useApiServicesAppStaffmembersDeleteDeleteMutation,
  useApiServicesAppStaffmembersGetstaffmembersbyroleGetQuery,
} = injectedRtkApi;
