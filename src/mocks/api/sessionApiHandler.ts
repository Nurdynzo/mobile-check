import {ApiServicesAppSessionGetcurrentlogininformationsGetApiResponse} from '@/state/services/sessionApi';
import {http, HttpResponse} from 'msw';

const getCurrentLoggedInUser = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Session/GetCurrentLoginInformations`,
  () => {
    return HttpResponse.json({
      result: {
        user: {
          name: 'Sam',
          surname: 'Newman',
        },
        tenant: {
          name: 'Liveth Medical Group',
          tenancyName: 'liveth',
        },
      } as ApiServicesAppSessionGetcurrentlogininformationsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const sessionApiHandler = [getCurrentLoggedInUser];
