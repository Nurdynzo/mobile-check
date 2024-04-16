import {ApiServicesAppDiagnosisCreatediagnosisPostApiResponse} from '@/state/services/diagnosisApi';
import {ApiServicesAppDiagnosisGetpatientdiagnosisGetApiResponse} from '@/state/services/patientApi';
import {HttpResponse, http} from 'msw';

const createPatientDiagnosis = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Diagnosis/CreateDiagnosis`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppDiagnosisCreatediagnosisPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);
const getPatientDiagnosis = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Diagnosis/GetPatientDiagnosis`,
  () => {
    return HttpResponse.json({
      result: [
        {
          creationTime: new Date().toDateString(),
          description: 'Malaria, R/0 Typhoid',
          id: 1,
          notes: '',
          patientId: 12,
          sctid: 1,
        },
      ] as ApiServicesAppDiagnosisGetpatientdiagnosisGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const disgnosisApiHandler = [
  createPatientDiagnosis,
  getPatientDiagnosis,
];
