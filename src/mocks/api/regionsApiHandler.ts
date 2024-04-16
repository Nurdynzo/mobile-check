import {ApiServicesAppRegionsGetregionforeditGetApiResponse} from '@/state/services/regionsApi';
import {HttpResponse, http} from 'msw';

const getRegionsForEdit = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Regions/GetRegionForEdit`,
  () => {
    return HttpResponse.json({
      result: {
        region: {
          countryId: '2',
          name: 'Lagos',
          id: 2,
          shortName: 'LG',
        },
      } as ApiServicesAppRegionsGetregionforeditGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const regionsApiHandler = [getRegionsForEdit];
