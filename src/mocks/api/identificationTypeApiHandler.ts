import {ApiServicesAppIdentificationtypeGetidentificationtypesGetApiResponse} from '@/state/services/identificationTypeApi';
import {HttpResponse, http} from 'msw';

const getIndentificationTypess = http.get(
  `${process.env.API_BASE_URL}/api/services/app/IdentificationType/GetIdentificationTypes`,
  () => {
    return HttpResponse.json({
      result: [
        'National Id card',
        "Driver's license",
      ] as ApiServicesAppIdentificationtypeGetidentificationtypesGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const identificationTypesApiHandler = [getIndentificationTypess];
