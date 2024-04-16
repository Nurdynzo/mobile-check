import {
  ApiServicesAppIntakeoutputCreateoreditoutputPostApiResponse,
  ApiServicesAppIntakeoutputDeleteintakeoroutputDeleteApiResponse,
  ApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetApiResponse,
} from '@/state/services/intakeOutputApi';
import {HttpResponse, http} from 'msw';

const deleteIntakeOutput = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/IntakeOutput/DeleteIntakeOrOutput`,
  () => {
    return HttpResponse.json({
      result:
        true as ApiServicesAppIntakeoutputDeleteintakeoroutputDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const saveOrEditInTake = http.post(
  `${process.env.API_BASE_URL}/api/services/app/IntakeOutput/CreateOrEditIntake`,
  () => {
    return HttpResponse.json({
      result: {
        id: 0,
        patientId: 123,
        type: 1,
        pannel: null,
        suggestedText: 'Water',
        volumeInMls: 3,
      } as ApiServicesAppIntakeoutputCreateoreditoutputPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const saveOrEditOutput = http.post(
  `${process.env.API_BASE_URL}/api/services/app/IntakeOutput/CreateOrEditOutput`,
  () => {
    return HttpResponse.json({
      result: {
        id: 0,
        patientId: 123,
        type: 2,
        pannel: null,
        suggestedText: 'Water',
        volumeInMls: 3,
      } as ApiServicesAppIntakeoutputCreateoreditoutputPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getIntakeOutputHistory = http.get(
  `${process.env.API_BASE_URL}/api/services/app/IntakeOutput/GetIntakeOutputSavedHistory`,
  () => {
    return HttpResponse.json({
      result: {
        INTAKE: [
          {
            patientId: 123,
            type: 1,
            chartingTypeText: '1',
            suggestedText: [
              {
                id: 1,
                suggestedText: 'Water',
                volumeInMls: 3,
                frequency: '3 X per day',
              },
            ],
          },
        ],
        OUTPUT: [
          {
            patientId: 124,
            type: 2,
            chartingTypeText: '1',
            suggestedText: [
              {
                id: 1,
                suggestedText: 'Urine',
                volumeInMls: 3,
                frequency: '3 X per day',
              },
            ],
          },
        ],
      } as ApiServicesAppIntakeoutputGetintakeoutputsavedhistoryGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const intakeOutputChartApiHandler = [
  deleteIntakeOutput,
  saveOrEditInTake,
  saveOrEditOutput,
  getIntakeOutputHistory,
];
