import {ApiServicesAppAppointmentGetappointmentlistfortodayGetApiResponse} from '@/state/services/appointmentApi';
import {HttpResponse, http} from 'msw';

const getAppointmentListForToday = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Appointment/GetAppointmentListForToday`,
  () => {
    return HttpResponse.json({
      result: getAppointmentsForTodayResult,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const appointmentApiHandler = [getAppointmentListForToday];

const getAppointmentsForTodayResult = {
  totalCount: 1,
  items: [
    {
      title: 'Walk-in',
      duration: 0,
      startTime: '2024-01-24T11:52:00',
      isRepeat: true,
      notes: null,
      repeatType: 'Daily',
      status: 'Not arrived',
      scanningStatus: 'No scanned record',
      type: 'Walk-in',
      appointmentPatient: {
        id: 2758,
        fullName: 'Danilo zhe',
        patientCode: 'M-0000057-T',
        dateOfBirth: '2024-01-12T00:00:00',
        genderType: 'Male',
        pictureUrl:
          'https://plateaumedstoragev1.blob.core.windows.net/publicplateaumedehr241/83281f43-e18b-4ae6-82dd-84f771d029e6',
        isNewToHospital: false,
      },
      referralDocument: undefined,
      attendingPhysician: undefined,
      referringClinic: '',
      attendingClinic: {
        id: 35820,
        displayName: 'Cardiology',
      },
      appointmentCount: 1,
      scannedDocument: undefined,
      id: 3114,
    },
  ],
} as ApiServicesAppAppointmentGetappointmentlistfortodayGetApiResponse;
