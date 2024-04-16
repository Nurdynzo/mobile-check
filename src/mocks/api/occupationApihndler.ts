import {ApiServicesAppOccupationGetoccupationsGetApiResponse} from '@/state/services/occupationApi';
import {HttpResponse, http} from 'msw';

const getOccupations = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Occupation/GetOccupations`,
  () => {
    return HttpResponse.json({
      result: [
        {name: 'Nurse', id: 1},
        {name: 'Doctor', id: 2},
      ] as ApiServicesAppOccupationGetoccupationsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const occupationApiHandler = [getOccupations];
