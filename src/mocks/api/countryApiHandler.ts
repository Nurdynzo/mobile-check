import {ApiServicesAppCountriesGetcountryforeditGetApiResponse} from '@/state/services/countryApi';
import {HttpResponse, http} from 'msw';

const getCountryForEdit = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Countries/GetCountryForEdit`,
  () => {
    return HttpResponse.json({
      result: {
        country: {
          code: 'NG',
          name: 'Nigeria',
          nationality: 'NGN',
          phoneCode: '+234',
          id: 2,
        },
      } as ApiServicesAppCountriesGetcountryforeditGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const countryApiHandler = [getCountryForEdit];
