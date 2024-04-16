import {
  ApiServicesAppInvestigationGetallGetApiResponse,
  ApiServicesAppInvestigationGetinvestigationsrequestsGetApiResponse,
  ApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostApiResponse,
  ApiServicesAppInvestigationRequestinvestigationPostApiResponse,
} from '@/state/services/investigationApi';

import {HttpResponse, http} from 'msw';

const saveRadiologyAndPulm = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Investigation/RecordInvestigationResultForElectroRadAndPulm`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getInvestigationsRequests = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Investigation/GetInvestigationsRequests`,
  () => {
    return HttpResponse.json({
      result: [
        {
          id: 248,
          investigationId: 1021,
          name: 'Stool MCS/culture',
          type: 'Microbiology',
          specimen: 'Faecal sample',
          specificOrganism: null,
          urgent: false,
          withContrast: false,
          creationTime: '2024-03-13T13:23:46.391172',
          procedureId: null,
        },
      ] as ApiServicesAppInvestigationGetinvestigationsrequestsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const requestInvestigation = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Investigation/RequestInvestigation`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppInvestigationRequestinvestigationPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

// TODO(Zucci): You can add a mock reponse if your tests require it, I have just mocked it to be a success response only
const getAllInvestigations = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Investigation/GetAll`,
  () => {
    return HttpResponse.json({
      result: [] as ApiServicesAppInvestigationGetallGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const investigationApiHandler = [
  requestInvestigation,
  getAllInvestigations,
  getInvestigationsRequests,
  saveRadiologyAndPulm,
];
