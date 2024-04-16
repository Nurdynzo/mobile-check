import {ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse} from '@/state/services/patientApi';
import {HttpResponse, http} from 'msw';

const getConsultingRooms = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PatientAppointments/GetConsultingRooms`,
  () => {
    return HttpResponse.json({
      result: mockGetPatientConsultingRooms,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const roomApiHandler = [getConsultingRooms];

export const mockGetPatientConsultingRooms = {
  rooms: ['Room1', 'Room2', 'Room3'],
} as ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse;
