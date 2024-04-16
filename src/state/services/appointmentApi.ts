import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'Appointment',
  'Invoices',
  'MockData',
  'NextAppointment',
  'PatientAppointments',
  'Patients',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppAppointmentGetappointmentlistfortodayGet: build.query<
        ApiServicesAppAppointmentGetappointmentlistfortodayGetApiResponse,
        ApiServicesAppAppointmentGetappointmentlistfortodayGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Appointment/GetAppointmentListForToday`,
          params: {
            FacilityId: queryArg.facilityId,
            PatientCode: queryArg.patientCode,
            AppointmentType: queryArg.appointmentType,
            Status: queryArg.status,
            AttendingClinic: queryArg.attendingClinic,
            AttendingPhysicianStaffCode: queryArg.attendingPhysicianStaffCode,
            StartTime: queryArg.startTime,
            EndTime: queryArg.endTime,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Appointment'],
      }),
      apiServicesAppAppointmentGetmostrecentappointmentforpatientGet:
        build.query<
          ApiServicesAppAppointmentGetmostrecentappointmentforpatientGetApiResponse,
          ApiServicesAppAppointmentGetmostrecentappointmentforpatientGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Appointment/GetMostRecentAppointmentForPatient`,
            params: {PatientId: queryArg.patientId},
          }),
          providesTags: ['Appointment'],
        }),
      apiServicesAppAppointmentCreateoreditPost: build.mutation<
        ApiServicesAppAppointmentCreateoreditPostApiResponse,
        ApiServicesAppAppointmentCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Appointment/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditPatientAppointmentDto,
        }),
        invalidatesTags: ['Appointment'],
      }),
      apiServicesAppAppointmentDeleteDelete: build.mutation<
        ApiServicesAppAppointmentDeleteDeleteApiResponse,
        ApiServicesAppAppointmentDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Appointment/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['Appointment'],
      }),
      apiServicesAppInvoicesGetallpatientappointmentforlookuptableGet:
        build.query<
          ApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetApiResponse,
          ApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Invoices/GetAllPatientAppointmentForLookupTable`,
            params: {
              Filter: queryArg.filter,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['Invoices'],
        }),
      apiServicesAppMockdataCreatemockpatientandappointmentsfortodayPost:
        build.mutation<
          ApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostApiResponse,
          ApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/MockData/CreateMockPatientAndAppointmentsForToday`,
            method: 'POST',
            params: {
              count: queryArg.count,
              staffMemberOrAttendingPhysicianId:
                queryArg.staffMemberOrAttendingPhysicianId,
              orgUnitOrAttendingClinicId: queryArg.orgUnitOrAttendingClinicId,
            },
          }),
          invalidatesTags: ['MockData'],
        }),
      apiServicesAppNextappointmentCreateoreditPost: build.mutation<
        ApiServicesAppNextappointmentCreateoreditPostApiResponse,
        ApiServicesAppNextappointmentCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NextAppointment/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createNextAppointmentDto,
        }),
        invalidatesTags: ['NextAppointment'],
      }),
      apiServicesAppNextappointmentGetpatientnextappointmentsGet: build.query<
        ApiServicesAppNextappointmentGetpatientnextappointmentsGetApiResponse,
        ApiServicesAppNextappointmentGetpatientnextappointmentsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NextAppointment/GetPatientNextAppointments`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['NextAppointment'],
      }),
      apiServicesAppNextappointmentGetavailableunitandclinicsGet: build.query<
        ApiServicesAppNextappointmentGetavailableunitandclinicsGetApiResponse,
        ApiServicesAppNextappointmentGetavailableunitandclinicsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NextAppointment/GetAvailableUnitAndClinics`,
          params: {encounterId: queryArg.encounterId},
        }),
        providesTags: ['NextAppointment'],
      }),
      apiServicesAppNextappointmentGetdoctornextappointmentsGet: build.query<
        ApiServicesAppNextappointmentGetdoctornextappointmentsGetApiResponse,
        ApiServicesAppNextappointmentGetdoctornextappointmentsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/NextAppointment/GetDoctorNextAppointments`,
        }),
        providesTags: ['NextAppointment'],
      }),
      apiServicesAppNextappointmentGetdoctorpatientnextappointmentsGet:
        build.query<
          ApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetApiResponse,
          ApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/NextAppointment/GetDoctorPatientNextAppointments`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['NextAppointment'],
        }),
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
        providesTags: ['PatientAppointments'],
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
          providesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsGetconsultingroomsGet: build.query<
        ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse,
        ApiServicesAppPatientappointmentsGetconsultingroomsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientAppointments/GetConsultingRooms`,
        }),
        providesTags: ['PatientAppointments'],
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
          providesTags: ['PatientAppointments'],
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
          providesTags: ['PatientAppointments'],
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
          providesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsUpdateappointmentstatusPut:
        build.mutation<
          ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiResponse,
          ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/UpdateAppointmentStatus`,
            method: 'PUT',
            body: queryArg.editAppointmentStatusDto,
          }),
          invalidatesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsGetappointmentsbypatientidGet:
        build.query<
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
          providesTags: ['PatientAppointments'],
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
          invalidatesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPut:
        build.mutation<
          ApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutApiResponse,
          ApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Patients/UpdatedAppointmentStatusFromAwaitingVitals`,
            method: 'PUT',
            params: {encounterId: queryArg.encounterId},
          }),
          invalidatesTags: ['Patients'],
        }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as appointmentApi};
export type ApiServicesAppAppointmentGetappointmentlistfortodayGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfAppointmentListResponse;
export type ApiServicesAppAppointmentGetappointmentlistfortodayGetApiArg = {
  facilityId?: number;
  patientCode?: string;
  appointmentType?: string;
  status?: string;
  attendingClinic?: string;
  attendingPhysicianStaffCode?: string;
  startTime?: string;
  endTime?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppAppointmentGetmostrecentappointmentforpatientGetApiResponse =
  /** status 200 Success */ AppointmentListResponse;
export type ApiServicesAppAppointmentGetmostrecentappointmentforpatientGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppAppointmentCreateoreditPostApiResponse =
  /** status 200 Success */ CreateOrEditPatientAppointmentDto;
export type ApiServicesAppAppointmentCreateoreditPostApiArg = {
  createOrEditPatientAppointmentDto: CreateOrEditPatientAppointmentDto;
};
export type ApiServicesAppAppointmentDeleteDeleteApiResponse = unknown;
export type ApiServicesAppAppointmentDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfInvoicePatientAppointmentLookupTableDto;
export type ApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetApiArg =
  {
    filter?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostApiResponse =
  unknown;
export type ApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostApiArg =
  {
    count?: number;
    staffMemberOrAttendingPhysicianId?: number;
    orgUnitOrAttendingClinicId?: number;
  };
export type ApiServicesAppNextappointmentCreateoreditPostApiResponse =
  /** status 200 Success */ CreateNextAppointmentDto;
export type ApiServicesAppNextappointmentCreateoreditPostApiArg = {
  createNextAppointmentDto: CreateNextAppointmentDto;
};
export type ApiServicesAppNextappointmentGetpatientnextappointmentsGetApiResponse =
  /** status 200 Success */ NextAppointmentReturnDto[];
export type ApiServicesAppNextappointmentGetpatientnextappointmentsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppNextappointmentGetavailableunitandclinicsGetApiResponse =
  /** status 200 Success */ NextAppointmentUnitReturnDto[];
export type ApiServicesAppNextappointmentGetavailableunitandclinicsGetApiArg = {
  encounterId?: number;
};
export type ApiServicesAppNextappointmentGetdoctornextappointmentsGetApiResponse =
  /** status 200 Success */ NextAppointmentReturnDto[];
export type ApiServicesAppNextappointmentGetdoctornextappointmentsGetApiArg =
  void;
export type ApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetApiResponse =
  /** status 200 Success */ NextAppointmentReturnDto[];
export type ApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetApiArg =
  {
    patientId?: number;
  };
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
export type ApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutApiArg =
  {
    encounterId?: number;
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
export type ScanningStatusType =
  | 'No scanned record'
  | 'Scanning in progress'
  | 'Scanned record available';
export type AppointmentType =
  | 'Walk-in'
  | 'Referral'
  | 'Consultation'
  | 'Follow-up'
  | 'Medical-exam';
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
export type InvoicePatientAppointmentLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfInvoicePatientAppointmentLookupTableDto = {
  totalCount?: number;
  items?: InvoicePatientAppointmentLookupTableDto[] | null;
};
export type DateTypes = 'Day' | 'Week' | 'Month' | 'Date';
export type CreateNextAppointmentDto = {
  id?: number | null;
  patientId: number;
  unitId: number;
  encounterId: number;
  dateType: DateTypes;
  seenIn?: number | null;
  isToSeeSameDoctor?: boolean | null;
  appointmentDate?: string | null;
};
export type DaysOfTheWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
export type NextAppointmentReturnDto = {
  id?: number;
  patientId: number;
  userId: number;
  staffId: number;
  unitId: number;
  dateType: DateTypes;
  seenIn?: number | null;
  isToSeeSameDoctor?: boolean | null;
  dayOfTheWeek?: DaysOfTheWeek;
  appointmentDate?: string | null;
  title?: string | null;
  duration?: number;
};
export type OperationTimeDto = {
  id?: number;
  dayOfTheWeek?: DaysOfTheWeek;
  dayOfTheWeekNo?: number;
  openingTime?: string | null;
  closingTime?: string | null;
};
export type NextAppointmentUnitReturnDto = {
  id: number;
  name?: string | null;
  operatingTimes?: OperationTimeDto[] | null;
  isClinic?: boolean;
};
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
export type ReassignPatientAppointmentDto = {
  encounterId?: number;
  newAttendingPhysicianId?: number;
};
export const {
  useApiServicesAppAppointmentGetappointmentlistfortodayGetQuery,
  useApiServicesAppAppointmentGetmostrecentappointmentforpatientGetQuery,
  useApiServicesAppAppointmentCreateoreditPostMutation,
  useApiServicesAppAppointmentDeleteDeleteMutation,
  useApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetQuery,
  useApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostMutation,
  useApiServicesAppNextappointmentCreateoreditPostMutation,
  useApiServicesAppNextappointmentGetpatientnextappointmentsGetQuery,
  useApiServicesAppNextappointmentGetavailableunitandclinicsGetQuery,
  useApiServicesAppNextappointmentGetdoctornextappointmentsGetQuery,
  useApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetQuery,
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
  useApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutMutation,
} = injectedRtkApi;
