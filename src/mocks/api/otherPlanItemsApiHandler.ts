import {
  ApiServicesAppPlanitemsCreateplanitemsPostApiResponse,
  ApiServicesAppPlanitemsDeletecreateplanitemsDeleteApiResponse,
  ApiServicesAppPlanitemsGetpatientplanitemsGetApiResponse,
} from '@/state/services/planItemsApi';
import {http, HttpResponse} from 'msw';

const deleteOtherPlanItems = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/PlanItems/DeleteCreatePlanItems`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppPlanitemsDeletecreateplanitemsDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const saveOtherPlanItems = http.post(
  `${process.env.API_BASE_URL}/api/services/app/PlanItems/CreatePlanItems`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppPlanitemsCreateplanitemsPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getOtherPlanItems = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PlanItems/GetPatientPlanItems`,
  () => {
    return HttpResponse.json({
      result: [
        {
          id: 1,
          description: 'Very Good',
          creationTime: new Date().toString(),
          deletionTime: null,
        },
        {
          id: 2,
          description: 'Very Bad',
          creationTime: new Date().toString(),
          deletionTime: null,
        },
      ] as ApiServicesAppPlanitemsGetpatientplanitemsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const otherPlanItemsApiHandler = [
  deleteOtherPlanItems,
  saveOtherPlanItems,
  getOtherPlanItems,
];
