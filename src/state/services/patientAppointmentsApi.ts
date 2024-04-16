import {baseApi as api} from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiServicesAppPatientappointmentsGetallGet: build.query<
      ApiServicesAppPatientappointmentsGetallGetApiResponse,
      ApiServicesAppPatientappointmentsGetallGetApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/PatientAppointments/GetAll`,
        params: {
          Filter: queryArg.filter,
          TitleFilter: queryArg.titleFilter,
          MaxDurationFilter: queryArg.maxDurationFilter,
          MinDurationFilter: queryArg.minDurationFilter,
          MaxStartTimeFilter: queryArg.maxStartTimeFilter,
          MinStartTimeFilter: queryArg.minStartTimeFilter,
          IsRepeatFilter: queryArg.isRepeatFilter,
          NotesFilter: queryArg.notesFilter,
          StatusFilter: queryArg.statusFilter,
          TypeFilter: queryArg.typeFilter,
          PatientPatientCodeFilter: queryArg.patientPatientCodeFilter,
          PatientReferralReferringHospitalFilter:
            queryArg.patientReferralReferringHospitalFilter,
          StaffMemberStaffCodeFilter: queryArg.staffMemberStaffCodeFilter,
          OrganizationUnitDisplayNameFilter:
            queryArg.organizationUnitDisplayNameFilter,
          OrganizationUnitDisplayName2Filter:
            queryArg.organizationUnitDisplayName2Filter,
          Sorting: queryArg.sorting,
          SkipCount: queryArg.skipCount,
          MaxResultCount: queryArg.maxResultCount,
        },
      }),
    }),
    apiServicesAppPatientappointmentsGetpatientappointmentforeditGet:
      build.query<
        ApiServicesAppPatientappointmentsGetpatientappointmentforeditGetApiResponse,
        ApiServicesAppPatientappointmentsGetpatientappointmentforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientAppointments/GetPatientAppointmentForEdit`,
          params: {Id: queryArg.id},
        }),
      }),
    apiServicesAppPatientappointmentsGetconsultingroomsGet: build.query<
      ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse,
      ApiServicesAppPatientappointmentsGetconsultingroomsGetApiArg
    >({
      query: () => ({
        url: `/api/services/app/PatientAppointments/GetConsultingRooms`,
      }),
    }),
    apiServicesAppPatientappointmentsGetallpatientforlookuptableGet:
      build.query<
        ApiServicesAppPatientappointmentsGetallpatientforlookuptableGetApiResponse,
        ApiServicesAppPatientappointmentsGetallpatientforlookuptableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientAppointments/GetAllPatientForLookupTable`,
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
    apiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGet:
      build.query<
        ApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetApiResponse,
        ApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientAppointments/GetAllPatientReferralForLookupTable`,
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
    apiServicesAppPatientappointmentsUpdateappointmentstatusPut: build.mutation<
      ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiResponse,
      ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/PatientAppointments/UpdateAppointmentStatus`,
        method: 'PUT',
        body: queryArg.editAppointmentStatusDto,
      }),
    }),
    apiServicesAppPatientappointmentsGetappointmentsbypatientidGet: build.query<
      ApiServicesAppPatientappointmentsGetappointmentsbypatientidGetApiResponse,
      ApiServicesAppPatientappointmentsGetappointmentsbypatientidGetApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/PatientAppointments/GetAppointmentsByPatientId`,
        params: {
          PatientId: queryArg.patientId,
          StartDate: queryArg.startDate,
          EndDate: queryArg.endDate,
          SkipCount: queryArg.skipCount,
          MaxResultCount: queryArg.maxResultCount,
        },
      }),
    }),
    apiServicesAppPatientappointmentsReassignepatientappointmentPost:
      build.mutation<
        ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiResponse,
        ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientAppointments/ReassignePatientAppointment`,
          method: 'POST',
          body: queryArg.reassignPatientAppointmentDto,
        }),
      }),
  }),
  overrideExisting: false,
});
export {injectedRtkApi as patientAppointmentsApi};
export type ApiServicesAppPatientappointmentsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientAppointmentForViewDto;
export type ApiServicesAppPatientappointmentsGetallGetApiArg = {
  filter?: string;
  titleFilter?: string;
  maxDurationFilter?: number;
  minDurationFilter?: number;
  maxStartTimeFilter?: string;
  minStartTimeFilter?: string;
  isRepeatFilter?: number;
  notesFilter?: string;
  statusFilter?: number;
  typeFilter?: number;
  patientPatientCodeFilter?: string;
  patientReferralReferringHospitalFilter?: string;
  staffMemberStaffCodeFilter?: string;
  organizationUnitDisplayNameFilter?: string;
  organizationUnitDisplayName2Filter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientappointmentsGetpatientappointmentforeditGetApiResponse =
  /** status 200 Success */ GetPatientAppointmentForEditOutput;
export type ApiServicesAppPatientappointmentsGetpatientappointmentforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse =
  /** status 200 Success */ GetPatientConsultingRooms;
export type ApiServicesAppPatientappointmentsGetconsultingroomsGetApiArg = void;
export type ApiServicesAppPatientappointmentsGetallpatientforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientAppointmentPatientLookupTableDto;
export type ApiServicesAppPatientappointmentsGetallpatientforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientAppointmentPatientReferralLookupTableDto;
export type ApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
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
export type ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiResponse =
  unknown;
export type ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiArg =
  {
    editAppointmentStatusDto: EditAppointmentStatusDto;
  };
export type ApiServicesAppPatientappointmentsGetappointmentsbypatientidGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfAppointmentListResponse;
export type ApiServicesAppPatientappointmentsGetappointmentsbypatientidGetApiArg =
  {
    patientId?: number;
    startDate?: string;
    endDate?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiArg =
  {
    reassignPatientAppointmentDto: ReassignPatientAppointmentDto;
  };
export type AppointmentRepeatType =
  | 'Daily'
  | 'Weekly'
  | 'Weekends'
  | 'Weekdays'
  | 'Monthly'
  | 'Annually'
  | 'Custom';
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
export type AppointmentType =
  | 'Walk-in'
  | 'Referral'
  | 'Consultation'
  | 'Follow-up'
  | 'Medical-exam';
export type PatientAppointmentDto = {
  title?: string | null;
  duration?: number;
  startTime?: string;
  isRepeat?: boolean;
  notes?: string | null;
  repeatType?: AppointmentRepeatType;
  status?: AppointmentStatusType;
  type?: AppointmentType;
  patientId?: number;
  patientReferralId?: number | null;
  attendingPhysician?: number | null;
  referringClinic?: number | null;
  attendingClinic?: number | null;
  id?: number;
};
export type GetPatientAppointmentForViewDto = {
  patientAppointment?: PatientAppointmentDto;
  patientPatientCode?: string | null;
  patientReferralReferringHospital?: string | null;
  staffMemberStaffCode?: string | null;
  organizationUnitDisplayName?: string | null;
  organizationUnitDisplayName2?: string | null;
};
export type PagedResultDtoOfGetPatientAppointmentForViewDto = {
  totalCount?: number;
  items?: GetPatientAppointmentForViewDto[] | null;
};
export type CreateOrEditPatientAppointmentDto = {
  title?: string | null;
  duration?: number;
  startTime?: string;
  isRepeat?: boolean;
  notes?: string | null;
  repeatType?: AppointmentRepeatType;
  status?: AppointmentStatusType;
  type?: AppointmentType;
  patientId?: number;
  patientReferralId?: number | null;
  attendingPhysicianId?: number | null;
  referringClinicId?: number | null;
  attendingClinicId?: number | null;
  transferredClinic?: string | null;
  diagnosisSummary?: string | null;
  id?: number | null;
};
export type GetPatientAppointmentForEditOutput = {
  patientAppointment?: CreateOrEditPatientAppointmentDto;
  patientPatientCode?: string | null;
  patientReferralReferringHospital?: string | null;
  staffMemberStaffCode?: string | null;
  organizationUnitDisplayName?: string | null;
  organizationUnitDisplayName2?: string | null;
};
export type GetPatientConsultingRooms = {
  rooms?: string[] | null;
};
export type PatientAppointmentPatientLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentPatientLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentPatientLookupTableDto[] | null;
};
export type OutPatientListingType = 'AttendingPhysician' | 'AttendingClinic';
export type PatientAppointmentPatientReferralLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentPatientReferralLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentPatientReferralLookupTableDto[] | null;
};
export type PatientAppointmentStaffMemberLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentStaffMemberLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentStaffMemberLookupTableDto[] | null;
};
export type PatientAppointmentOrganizationUnitLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentOrganizationUnitLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentOrganizationUnitLookupTableDto[] | null;
};
export type EditAppointmentStatusDto = {
  id?: number;
  status?: AppointmentStatusType;
};
export type ScanningStatusType =
  | 'No scanned record'
  | 'Scanning in progress'
  | 'Scanned record available';
export type GenderType = 'Male' | 'Female' | 'Other';
export type AppointmentPatientDto = {
  id?: number;
  fullName?: string | null;
  patientCode?: string | null;
  dateOfBirth?: string;
  genderType?: GenderType;
  pictureUrl?: string | null;
  isNewToHospital?: boolean;
};
export type ReferralDocumentDto = {
  id?: number;
  referringHealthCareProvider?: string | null;
  diagnosisSummary?: string | null;
  referralDocument?: string | null;
};
export type AttendingPhysicianDto = {
  id?: number;
  staffCode?: string | null;
  fullName?: string | null;
};
export type AttendingClinicDto = {
  id?: number;
  displayName?: string | null;
};
export type ScannedDocumentDto = {
  id?: number;
  isApproved?: boolean | null;
  reviewerId?: number | null;
};
export type AppointmentListResponse = {
  title?: string | null;
  duration?: number;
  startTime?: string;
  isRepeat?: boolean;
  notes?: string | null;
  repeatType?: AppointmentRepeatType;
  status?: AppointmentStatusType;
  scanningStatus?: ScanningStatusType;
  type?: AppointmentType;
  appointmentPatient?: AppointmentPatientDto;
  referralDocument?: ReferralDocumentDto;
  attendingPhysician?: AttendingPhysicianDto;
  referringClinic?: string | null;
  attendingClinic?: AttendingClinicDto;
  appointmentCount?: number;
  scannedDocument?: ScannedDocumentDto;
  id?: number;
};
export type PagedResultDtoOfAppointmentListResponse = {
  totalCount?: number;
  items?: AppointmentListResponse[] | null;
};
export type ReassignPatientAppointmentDto = {
  encounterId?: number;
  newAttendingPhysicianId?: number;
};
export const {
  useApiServicesAppPatientappointmentsGetallGetQuery,
  useApiServicesAppPatientappointmentsGetpatientappointmentforeditGetQuery,
  useApiServicesAppPatientappointmentsGetconsultingroomsGetQuery,
  useApiServicesAppPatientappointmentsGetallpatientforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsUpdateappointmentstatusPutMutation,
  useApiServicesAppPatientappointmentsGetappointmentsbypatientidGetQuery,
  useApiServicesAppPatientappointmentsReassignepatientappointmentPostMutation,
} = injectedRtkApi;
