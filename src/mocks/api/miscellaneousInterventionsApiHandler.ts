import {ApiServicesAppWardemergenciesCreatepatientinterventionPostApiResponse} from '@/state/services/WardEmergenciesApi';

import {http, HttpResponse} from 'msw';

const saveMiscellaneousInterventions = http.post(
  `${process.env.API_BASE_URL}/api/services/app/WardEmergencies/CreatePatientIntervention`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppWardemergenciesCreatepatientinterventionPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const miscellaneousInterventionsApiHandler = [
  saveMiscellaneousInterventions,
];
