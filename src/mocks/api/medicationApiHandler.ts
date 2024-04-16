import {
  ApiServicesAppMedicationCreatemedicationPostApiResponse,
  ApiServicesAppMedicationDeletemedicationDeleteApiResponse,
  ApiServicesAppMedicationGetmedicationsuggestionsGetApiResponse,
} from '@/state/services/medicationApi';
import {HttpResponse, http} from 'msw';

const createMedication = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Medication/CreateMedication`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppMedicationCreatemedicationPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getMedicationSuggestions = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Medication/GetMedicationSuggestions`,
  () => {
    return HttpResponse.json({
      result:
        medicationSuggestionsMockData as ApiServicesAppMedicationGetmedicationsuggestionsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const deleteMedication = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/Medication/DeleteMedication`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppMedicationDeletemedicationDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const medicationApiHandler = [
  createMedication,
  deleteMedication,
  getMedicationSuggestions,
];

const medicationSuggestionsMockData = {
  dose: ['1', '2', '3', '4'],
  unit: ['mg', 'ml', 'g'],
  frequency: ['X times per hour', 'X times per day', 'X times per week'],
  direction: [
    'in the morning',
    'in the afternoon',
    'in the evening',
    'at bedtime',
  ],
  duration: ['X doses', 'X days', 'X weeks', 'X month'],
};
