import {
  ApiServicesAppPatientprofileDeletepatientfamilymemberDeleteApiResponse,
  ApiServicesAppPatientprofileGetpatientfamilyhistoryGetApiResponse,
  ApiServicesAppPatientprofileSavepatientfamilyhistoryPostApiResponse,
} from '@/state/services/patientApi';
import {HttpResponse, http} from 'msw';

const getPatientFamilyHistory = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PatientProfile/GetPatientFamilyHistory`,
  () => {
    return HttpResponse.json({
      result:
        mockPatientFamilyHistory as ApiServicesAppPatientprofileGetpatientfamilyhistoryGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const deletePatientFamilyMember = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/PatientProfile/DeletePatientFamilyMember`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppPatientprofileDeletepatientfamilymemberDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const savePatientFamilyHistory = http.post(
  `${process.env.API_BASE_URL}/api/services/app/PatientProfile/SavePatientFamilyHistory`,
  () => {
    return HttpResponse.json({
      result:
        mockPatientFamilyHistory as ApiServicesAppPatientprofileSavepatientfamilyhistoryPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const patientFamilyHistoryApiHandler = [
  getPatientFamilyHistory,
  deletePatientFamilyMember,
  savePatientFamilyHistory,
];

const mockPatientFamilyHistory = {
  patientId: 1,
  isFamilyHistoryKnown: true,
  totalNumberOfSiblings: 2,
  totalNumberOfMaleSiblings: 1,
  totalNumberOfFemaleSiblings: 1,
  totalNumberOfChildren: 3,
  totalNumberOfMaleChildren: 2,
  totalNumberOfFemaleChildren: 1,
  familyMembers: [
    {
      relationship: 'Father',
      isAlive: false,
      ageAtDeath: 75,
      causesOfDeath: 'Heart Attack',
      seriousIllnesses: 'Hypertension',
      ageAtDiagnosis: 50,
      id: 1,
    },
    {
      relationship: 'Mother',
      isAlive: true,
      ageAtDiagnosis: 60,
      seriousIllnesses: 'Diabetes',
      id: 2,
    },
  ],
  id: 123,
};
