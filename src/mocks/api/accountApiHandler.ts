import {ApiServicesAppAccountGettenantsGetApiResponse} from '@/state/services/accountApi';
import {http, HttpResponse} from 'msw';

const getTenants = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Account/GetTenants`,
  () => {
    return HttpResponse.json({
      result: [
        {
          name: 'Liveth Medical Group',
          uniqueBusinessCode: 'liveth',
        },
        {
          name: 'Crest Hospitals',
          uniqueBusinessCode: 'crest',
        },
      ] as ApiServicesAppAccountGettenantsGetApiResponse,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const accountApiHandler = [getTenants];
