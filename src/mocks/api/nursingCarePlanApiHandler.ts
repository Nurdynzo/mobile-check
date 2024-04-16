import {
  ApiServicesAppNursecareplansCreatenursecareplanPostApiResponse,
  ApiServicesAppNursecareplansGetallGetApiResponse,
  ApiServicesAppNursecareplansGetnursingactivitiesGetApiResponse,
  ApiServicesAppNursecareplansGetnursingcareinterventionsGetApiResponse,
  ApiServicesAppNursecareplansGetnursingdiagnosisGetApiResponse,
  ApiServicesAppNursecareplansGetnursingevaluationGetApiResponse,
  ApiServicesAppNursecareplansGetnursingoutcomesGetApiResponse,
} from '@/state/services/nurseCarePlansApi';
import {HttpResponse, http} from 'msw';

const createNursingCarePlan = http.post(
  `${process.env.API_BASE_URL}/api/services/app/NurseCarePlans/CreateNurseCarePlan`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppNursecareplansCreatenursecareplanPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getNursingCarePlans = http.get(
  `${process.env.API_BASE_URL}/api/services/app/NurseCarePlans/GetAll`,
  () => {
    return HttpResponse.json({
      result:
        getNursingCarePlanMockData as ApiServicesAppNursecareplansGetallGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getNursingDiagnosis = http.get(
  `${process.env.API_BASE_URL}/api/services/app/NurseCarePlans/GetNursingDiagnosis`,
  () => {
    return HttpResponse.json({
      result:
        nursingCarePlanMockData as ApiServicesAppNursecareplansGetnursingdiagnosisGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getNursingOutcomes = http.get(
  `${process.env.API_BASE_URL}/api/services/app/NurseCarePlans/GetNursingOutcomes`,
  () => {
    return HttpResponse.json({
      result:
        nursingCarePlanMockData as ApiServicesAppNursecareplansGetnursingoutcomesGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getNursingCareInterventions = http.get(
  `${process.env.API_BASE_URL}/api/services/app/NurseCarePlans/GetNursingCareInterventions`,
  () => {
    return HttpResponse.json({
      result:
        nursingCarePlanMockData as ApiServicesAppNursecareplansGetnursingcareinterventionsGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getNursingActivities = http.get(
  `${process.env.API_BASE_URL}/api/services/app/NurseCarePlans/GetNursingActivities`,
  () => {
    return HttpResponse.json({
      result:
        nursingCarePlanMockData as ApiServicesAppNursecareplansGetnursingactivitiesGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getNursingEvaluation = http.get(
  `${process.env.API_BASE_URL}/api/services/app/NurseCarePlans/GetNursingEvaluation`,
  () => {
    return HttpResponse.json({
      result:
        nursingCarePlanMockData as ApiServicesAppNursecareplansGetnursingevaluationGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const createNurseCarePlan = http.get(
  `${process.env.API_BASE_URL}/api/services/app/NurseCarePlans/CreateNurseCarePlan`,
  () => {
    return HttpResponse.json({
      result:
        nursingCarePlanMockData as ApiServicesAppNursecareplansCreatenursecareplanPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const nursingCarePlanApiHandler = [
  createNursingCarePlan,
  getNursingCarePlans,
  getNursingDiagnosis,
  getNursingOutcomes,
  getNursingCareInterventions,
  getNursingActivities,
  getNursingEvaluation,
  createNurseCarePlan,
];

const getNursingCarePlanMockData = [
  {
    id: 1,
    diagnosis: 'Hypertension',
    outcomes: ['Lowered blood pressure', 'Improved cardiovascular health'],
    interventions: ['Prescription medication', 'Lifestyle changes'],
    activities: ['Regular exercise', 'Healthy diet'],
    evaluation:
      "Patient's blood pressure within normal range after three months of intervention",
    time: '2024-03-07T12:30:00Z',
  },
  {
    id: 2,
    diagnosis: 'Diabetes',
    outcomes: ['Stabilized blood sugar levels', 'Weight management'],
    interventions: ['Insulin therapy', 'Dietary counseling'],
    activities: ['Monitoring blood glucose levels', 'Regular check-ups'],
    evaluation: 'Improved HbA1c levels after six months of treatment',
    time: '2024-03-08T10:45:00Z',
  },
];

const nursingCarePlanMockData = [
  {
    id: 1,
    name: 'CarePlan A',
    code: 'CPA123',
  },
  {
    id: 2,
    name: 'CarePlan B',
    code: 'CPB456',
  },
  {
    id: 3,
    name: 'CarePlan C',
    code: 'CPC789',
  },
];
