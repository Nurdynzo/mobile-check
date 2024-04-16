import {
  ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiResponse,
  ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiResponse,
  ApiServicesAppPatientprofileSaveoccupationhistoryPostApiResponse,
  ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiResponse,
} from '@/state/services/patientApi';
import {HttpResponse, http} from 'msw';
const createPatientOccupation = http.post(
  `${process.env.API_BASE_URL}/api/services/app/PatientProfile/SaveOccupationHistory`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppPatientprofileSaveoccupationhistoryPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);
const deletePatientOccupation = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/PatientProfile/DeletePatientOccupation`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);
const updatePatientOccupation = http.put(
  `${process.env.API_BASE_URL}/api/services/app/PatientProfile/UpdatePatientOccupationHistory`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);
const getSavedPatientOccupations = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PatientProfile/GetPatientOccupationalHistory`,
  () => {
    return HttpResponse.json({
      result: [
        {
          patientId: 123,
          from: '',
          id: 1,
          isCurrent: true,
          note: 'i love plateaumed',
          occupation: 'Doctor',
          workLocation: 'Lekki, Lagos',
        },
      ] as ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const patientOccupationApiHandler = [
  getSavedPatientOccupations,
  createPatientOccupation,
  deletePatientOccupation,
  updatePatientOccupation,
];
