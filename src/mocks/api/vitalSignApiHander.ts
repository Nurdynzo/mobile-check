import {
  ApiServicesAppVitalsignsCreatepatientvitalPostApiResponse,
  ApiServicesAppVitalsignsDeletepatientvitalDeleteApiResponse,
  ApiServicesAppVitalsignsGetallGetApiResponse,
  ApiServicesAppVitalsignsGetgcsscoringGetApiResponse,
  ApiServicesAppVitalsignsRecheckpatientvitalPostApiResponse,
} from '@/state/services/vitalSignsApi';
import {HttpResponse, http} from 'msw';

const deleteVitalSign = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/VitalSigns/DeletePatientVital`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppVitalsignsDeletepatientvitalDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const createVitalSign = http.post(
  `${process.env.API_BASE_URL}/api/services/app/VitalSigns/CreatePatientVital`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppVitalsignsCreatepatientvitalPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);
const recheckVitalSign = http.post(
  `${process.env.API_BASE_URL}/api/services/app/VitalSigns/RecheckPatientVital`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppVitalsignsRecheckpatientvitalPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getAllVitalSign = http.get(
  `${process.env.API_BASE_URL}/api/services/app/VitalSigns/GetAll`,
  () => {
    return HttpResponse.json({
      result:
        mockedGetVitalSignData as ApiServicesAppVitalsignsGetallGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);
const getGCSScoring = http.get(
  `${process.env.API_BASE_URL}/api/services/app/VitalSigns/GetGCSScoring`,
  () => {
    return HttpResponse.json({
      result: [
        {
          name: 'Eye Opening',
          ranges: [
            {score: 4, ageMin: 0, ageMax: null, response: 'Spontaneous'},
            {score: 3, ageMin: 0, ageMax: null, response: 'To voice'},
            {score: 2, ageMin: 0, ageMax: null, response: 'To pain'},
            {score: 1, ageMin: 0, ageMax: null, response: 'None'},
          ],
        },
        {
          name: 'Motor Response',
          ranges: [
            {score: 6, ageMin: 0, ageMax: null, response: 'Obeys commands'},
            {score: 5, ageMin: 0, ageMax: null, response: 'Localizes pain'},
            {score: 4, ageMin: 0, ageMax: null, response: 'Withdraws to pain'},
            {score: 3, ageMin: 0, ageMax: null, response: 'Flexion to pain'},
            {score: 2, ageMin: 0, ageMax: null, response: 'Extension to pain'},
            {score: 1, ageMin: 0, ageMax: null, response: 'None'},
          ],
        },
      ] as ApiServicesAppVitalsignsGetgcsscoringGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const vitalSignApiHandler = [
  deleteVitalSign,
  createVitalSign,
  recheckVitalSign,
  getAllVitalSign,
  getGCSScoring,
];

const mockedGetVitalSignData = [
  {
    id: 1,
    sign: 'Temperature',
    sites: [{id: 1, site: 'Oral', default: true}],
    ranges: [
      {
        id: 1,
        lower: 36.5,
        upper: 37.5,
        unit: 'F',
        maxLength: 3,
        decimalPlaces: 1,
      },
      {
        id: 1,
        lower: 36.5,
        upper: 37.5,
        unit: 'C',
        maxLength: 4,
        decimalPlaces: 1,
      },
    ],
    leftRight: false,
    decimalPlaces: null,
    isPreset: false,
    maxLength: null,
  },
  {
    id: 2,
    sign: 'Blood Pressure',
    sites: [{id: 2, site: 'Arm', default: true}],
    ranges: [{id: 2, lower: 90, upper: 120, unit: 'mmHg'}],
    leftRight: true,
    decimalPlaces: 0,
    isPreset: true,
    maxLength: 3,
  },
];
