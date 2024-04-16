import {ApiServicesAppInvestigationGetinvestigationsrequestsGetApiArg} from '@/state/services/investigationApi';
import {HttpResponse, http} from 'msw';

const saveRadiologyAndPulmTestForm = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Investigation/RecordInvestigationResultForElectroRadAndPulm`,
  () => {
    return HttpResponse.json({
      result: {} as unknown,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const recordInvestigations = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Investigation/GetInvestigationsRequests`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppInvestigationGetinvestigationsrequestsGetApiArg,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const recordInvestigationApiHandler = [
  saveRadiologyAndPulmTestForm,
  recordInvestigations,
];
