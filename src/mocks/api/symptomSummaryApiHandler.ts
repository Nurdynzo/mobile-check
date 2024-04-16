import {
  ApiServicesAppSymptomCreatesymptomPostApiResponse,
  ApiServicesAppSymptomDeletesymptomDeleteApiResponse,
  ApiServicesAppSymptomGetpatientsummaryGetApiResponse,
} from '@/state/services/symptomApi';
import {HttpResponse, http} from 'msw';

const deleteSymptomSummary = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/Symptom/DeleteSymptom`,
  () => {
    return HttpResponse.json({
      result: '' as ApiServicesAppSymptomDeletesymptomDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const saveSymptomSummary = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Symptom/CreateSymptom`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppSymptomCreatesymptomPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getSymptomSummary = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Symptom/GetPatientSummary`,
  () => {
    return HttpResponse.json({
      result: [] as ApiServicesAppSymptomGetpatientsummaryGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const symptomSummaryApiHandler = [
  deleteSymptomSummary,
  saveSymptomSummary,
  getSymptomSummary,
];
