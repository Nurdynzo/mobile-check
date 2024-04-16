import {
  ApiServicesAppInputnotesCreateinputnotesPostApiResponse,
  ApiServicesAppInputnotesDeletecreateinputnotesDeleteApiResponse,
  ApiServicesAppInputnotesGetpatientinputnotesGetApiResponse,
} from '@/state/services/inputNotesApi';
import {http, HttpResponse} from 'msw';

const deleteBedMaking = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/BedMaking/DeleteCreateBedMaking`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppInputnotesDeletecreateinputnotesDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const saveBedMaking = http.post(
  `${process.env.API_BASE_URL}/api/services/app/BedMaking/CreateBedMaking`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppInputnotesCreateinputnotesPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getBedMakingHistory = http.get(
  `${process.env.API_BASE_URL}/api/services/app/BedMaking/GetPatientSummary`,
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
      ] as ApiServicesAppInputnotesGetpatientinputnotesGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const bedMakingApiHandler = [
  deleteBedMaking,
  saveBedMaking,
  getBedMakingHistory,
];
