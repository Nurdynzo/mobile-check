import {ClinicListDto} from '@/state/services/organizationUnit';
import {HttpResponse, http} from 'msw';

const getClinics = http.get(
  `${process.env.API_BASE_URL}/api/services/app/OrganizationUnit/GetClinics`,
  () => {
    return HttpResponse.json({
      result: getClinicsResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const organizationUnitApiHandler = [getClinics];

const getClinicsResponse: ClinicListDto[] = [
  {
    id: 35816,
    displayName: 'Accident & Emergency (A & E) Medicine',
    isActive: true,
  },
  {
    id: 35818,
    displayName: 'Neurology',
    isActive: true,
  },
  {
    id: 35820,
    displayName: 'Cardiology',
    isActive: true,
  },
  {
    id: 35822,
    displayName: 'Respiratory Medicine',
    isActive: true,
  },
];
