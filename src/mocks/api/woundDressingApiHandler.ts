import {ApiServicesAppWounddressingGetpatientwounddressingGetApiResponse} from '@/state/services/patientApi';
import {
  ApiServicesAppWounddressingCreatewounddressingPostApiResponse,
  ApiServicesAppWounddressingDeletecreatewounddressingDeleteApiResponse,
} from '@/state/services/woundDressingApi';

import {http, HttpResponse} from 'msw';

const createWoundDressing = http.post(
  `${process.env.API_BASE_URL}/api/services/app/WoundDressing/CreateWoundDressing`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppWounddressingCreatewounddressingPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPatientWoundDressing = http.get(
  `${process.env.API_BASE_URL}/api/services/app/WoundDressing/GetPatientWoundDressing`,
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
      ] as ApiServicesAppWounddressingGetpatientwounddressingGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const deleteWoundDressing = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/WoundDressing/DeleteCreateWoundDressing`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppWounddressingDeletecreatewounddressingDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const woundDressingApiHandler = [
  createWoundDressing,
  getPatientWoundDressing,
  deleteWoundDressing,
];
