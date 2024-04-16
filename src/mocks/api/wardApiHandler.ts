import {ApiServicesAppWardsGetallwardsGetApiResponse} from '@/state/services/wardApi';
import {HttpResponse, http} from 'msw';

const getAllWards = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Wards/GetAllWards`,
  () => {
    return HttpResponse.json({
      result: mockWardData,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const wardApiHandler = [getAllWards];

const mockWardData = [
  {
    name: 'Ward A',
    description: 'Description of Ward A',
    isActive: true,
    facilityId: 1,
    wardBeds: [
      {
        bedNumber: '101',
        isActive: true,
        bedTypeId: 1,
        wardId: 1,
        bedTypeName: 'Single Bed',
        id: 1,
      },
      {
        bedNumber: '102',
        isActive: true,
        bedTypeId: 2,
        wardId: 1,
        bedTypeName: 'Double Bed',
        id: 2,
      },
    ],
    id: 1,
  },
  {
    name: 'Ward B',
    description: 'Description of Ward B',
    isActive: true,
    facilityId: 2,
    wardBeds: [
      {
        bedNumber: '201',
        isActive: true,
        bedTypeId: 1,
        wardId: 2,
        bedTypeName: 'Single Bed',
        id: 3,
      },
      {
        bedNumber: '202',
        isActive: true,
        bedTypeId: 2,
        wardId: 2,
        bedTypeName: 'Double Bed',
        id: 4,
      },
    ],
    id: 2,
  },
] as ApiServicesAppWardsGetallwardsGetApiResponse;
