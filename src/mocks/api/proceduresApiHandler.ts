import {
  ApiServicesAppProcedureCreateproceduresPostApiResponse,
  ApiServicesAppProcedureGetpatientproceduresGetApiResponse,
  ApiServicesAppProcedureGetproceduresuggestionsGetApiResponse,
  ApiServicesAppProcedureMarkprocedureasspecializedPostApiResponse,
  ApiServicesAppProcedureScheduleprocedurePostApiResponse,
} from '@/state/services/procedureApi';
import {http, HttpResponse} from 'msw';

const saveRequestedProcedures = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Procedure/CreateProcedures`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppProcedureCreateproceduresPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getRequestedProcedureSummaryHistory = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Procedure/GetPatientProcedures`,
  () => {
    return HttpResponse.json({
      result:
        requestProcedureSummaryHistoryResult as ApiServicesAppProcedureGetpatientproceduresGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getProcedureSuggestions = http.get(
  `${process.env.API_BASE_URL}/api/services/app/Procedure/GetProcedureSuggestions`,
  () => {
    return HttpResponse.json({
      result: [
        {
          id: '108226001',
          name: 'Patient counselling',
        },
        {
          id: '118489002',
          name: 'Removal of dressing',
        },
      ] as ApiServicesAppProcedureGetproceduresuggestionsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const deleteProcedureHistory = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/Procedure/DeleteProcedure`,
  () => {
    return HttpResponse.json({
      result:
        [] as ApiServicesAppProcedureGetproceduresuggestionsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const createScheduleProcedureProcedures = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Procedure/ScheduleProcedure`,
  () => {
    return HttpResponse.json({
      result: {} as ApiServicesAppProcedureScheduleprocedurePostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const markAsSpecializedProcedure = http.post(
  `${process.env.API_BASE_URL}/api/services/app/Procedure/MarkProcedureAsSpecialized`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppProcedureMarkprocedureasspecializedPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const proceduresApiHandler = [
  saveRequestedProcedures,
  getRequestedProcedureSummaryHistory,
  getProcedureSuggestions,
  deleteProcedureHistory,
  createScheduleProcedureProcedures,
  markAsSpecializedProcedure,
];

const requestProcedureSummaryHistoryResult = [
  {
    id: 0,
    snowmedId: 0,
    patientId: 1,
    selectedProcedures: [
      {
        snowmedId: 0,
        procedureName: 'string',
      },
    ],
    note: 'string',
    procedureType: 'string',
    specializedProcedures: [
      {
        id: 0,
        procedureId: 0,
        snowmedId: 0,
        procedureName: 'string',
        requireAnaesthetist: true,
        isProcedureInSameSession: true,
        anaesthetistUserId: 0,
        roomId: 0,
        duration: 'string',
        proposedDate: '2024-02-05T14:18:04.096Z',
        time: 'string',
        creationTime: '2024-02-05T14:18:04.096Z',
      },
    ],
    scheduledProcedures: [
      {
        id: 0,
        procedureId: 0,
        snowmedId: 0,
        procedureName: 'string',
        requireAnaesthetist: true,
        isProcedureInSameSession: true,
        anaesthetistUserId: 0,
        roomId: 0,
        duration: 'string',
        proposedDate: '2024-02-05T14:18:04.096Z',
        time: 'string',
        creationTime: '2024-02-05T14:18:04.096Z',
      },
    ],
    creationTime: '2024-02-05T14:18:04.096Z',
  },
];
