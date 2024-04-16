import {ApiServicesAppDistrictGetdistrictforeditGetApiResponse} from '@/state/services/districtApi';
import {HttpResponse, http} from 'msw';

const getDistrictForEdit = http.get(
  `${process.env.API_BASE_URL}/api/services/app/District/GetDistrictForEdit`,
  () => {
    return HttpResponse.json({
      result: {
        district: {
          name: 'Lekki',
          regionId: '13',
          id: 1,
        },
      } as ApiServicesAppDistrictGetdistrictforeditGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const districtApiHandler = [getDistrictForEdit];
