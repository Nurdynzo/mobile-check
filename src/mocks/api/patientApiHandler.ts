import {
  ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiResponse,
  ApiServicesAppPatientsCreateoreditPostApiResponse,
  ApiServicesAppPatientsGetinpatientlandinglistGetApiResponse,
  ApiServicesAppPatientsGetoutpatientlandinglistGetApiResponse,
  ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiResponse,
} from '@/state/services/patientApi';
import {HttpResponse, http} from 'msw';

const createEditPatient = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Patients/CreateOrEdit`,
  () => {
    return HttpResponse.json({
      result: patientDetails,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const reassignPatient = http.post(
  `${process.env.API_BASE_URL}/api/services/app/PatientAppointments/ReassignePatientAppointment`,
  () => {
    return HttpResponse.json({
      result:
        'Success' as ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPatientForEdit = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Patients/GetPatientForEdit`,
  () => {
    return HttpResponse.json({
      result: patientDetails,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPatientWardRoundAndClinicNotes = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Patients/GetPatientWardRoundAndClinicNotes`,
  () => {
    return HttpResponse.json({
      result: {
        totalCount: 1,
        items: [
          {
            clinic: 'Neurology',
            patientId: 1,
            ward: 'B',
            dateTime: '2024-03-03T05:10:10',
            notes: 'Patient had headache',
          },
        ],
      } as ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getInpatientLandingList = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Patients/GetInpatientLandingList`,
  () => {
    return HttpResponse.json({
      result: getDoctorInPatientResult,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);
const getOutpatientLandingList = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Patients/GetOutPatientLandingList`,
  () => {
    return HttpResponse.json({
      result: getDoctorOutPatientResult,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const patientApiHandler = [
  reassignPatient,
  createEditPatient,
  getPatientForEdit,
  getPatientWardRoundAndClinicNotes,
  getInpatientLandingList,
  getOutpatientLandingList,
];

const patientDetails = {
  genderType: 'Male',
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: '555-1234',
  dateOfBirth: '1980-04-23',
  title: 'Mr',
  middleName: 'Alexander',
  emailAddress: 'john.doe@example.com',
  address: '123 Maple Street, Hometown, HT',
  isNewToHospital: true,
  stateOfOriginId: 1,
  countryId: 1,
  districtId: 1,
  userId: 42,
  patientCode: 'P123456',
} as ApiServicesAppPatientsCreateoreditPostApiResponse;

const getDoctorInPatientResult = {
  totalCount: 3,
  items: [
    {
      lastSeenAt: '2024-01-24T10:52:00',
      status: 'Admission',
      patientId: 2758,
      fullName: 'Danilo Zhe',
      birthDate: '2020-01-12T00:00:00',
      gender: 'Male',
      imageUrl:
        'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
      attendingPhysician: undefined,
      bedNumber: '555',
      encounterId: 123,
    },
    {
      lastSeenAt: '2024-01-24T09:52:00',
      status: 'Awaiting Doctor',
      patientId: 2759,
      fullName: 'Jon Snows',
      birthDate: '2021-01-12T00:00:00',
      gender: 'Female',
      imageUrl:
        'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
      attendingPhysician: undefined,
      bedNumber: '333',
      encounterId: 124,
    },
    {
      lastSeenAt: '2024-01-24T04:52:00',
      status: 'Awaiting Vitals',
      patientId: 2760,
      fullName: 'Fina Miles',
      birthDate: '2019-01-12T00:00:00',
      gender: 'Others',
      imageUrl:
        'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
      attendingPhysician: undefined,
      bedNumber: '222',
      encounterId: 125,
    },
  ],
} as ApiServicesAppPatientsGetinpatientlandinglistGetApiResponse;

const getDoctorOutPatientResult = {
  totalCount: 3,
  items: [
    {
      startTime: '2024-01-24T10:52:00',
      status: 'Arrived',
      patientId: 2758,
      name: 'Danilo Zhe',
      patientCode: 'M-0000057-T',
      dateOfBirth: '2020-01-12T00:00:00',
      gender: 'Male',
      attendingPhysician: undefined,
      encounterId: 123,
    },
    {
      startTime: '2024-01-24T09:52:00',
      status: 'Awaiting Doctor',
      patientId: 2759,
      name: 'Jon Snows',
      patientCode: 'M-0000058-T',
      dateOfBirth: '2021-01-12T00:00:00',
      gender: 'Female',
      attendingPhysician: undefined,
      bedNumber: '333',
      encounterId: 124,
    },
    {
      startTime: '2024-01-24T04:52:00',
      status: 'Awaiting Vitals',
      patientId: 2760,
      name: 'Fina Miles',
      patientCode: 'M-0000060-T',
      dateOfBirth: '2019-01-12T00:00:00',
      gender: 'Others',
      attendingPhysician: undefined,
      encounterId: 125,
    },
  ],
} as ApiServicesAppPatientsGetoutpatientlandinglistGetApiResponse;
