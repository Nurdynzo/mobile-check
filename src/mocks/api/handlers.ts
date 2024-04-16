import {accountApiHandler} from './accountApiHandler';
import {addNoteApiHandler} from './addNoteApiHandler';
import {appointmentApiHandler} from './appointmentApiHandler';
import {authApiHandler} from './authApiHandler';
import {bedMakingApiHandler} from './bedMakingApiHandler';
import {countryApiHandler} from './countryApiHandler';
import {disgnosisApiHandler} from './diagnosisApiHander';
import {districtApiHandler} from './districtApiHandler';
import {identificationTypesApiHandler} from './identificationTypeApiHandler';
import {intakeOutputChartApiHandler} from './intakeOutputChartApiHandler';
import {investigationApiHandler} from './investigationHandler';
import {miscellaneousInterventionsApiHandler} from './miscellaneousInterventionsApiHandler';
import {nursingCarePlanApiHandler} from './nursingCarePlanApiHandler';
import {occupationApiHandler} from './occupationApihndler';
import {organizationUnitApiHandler} from './organizationUnitApiHandler';
import {otherPlanItemsApiHandler} from './otherPlanItemsApiHandler';
import {patientApiHandler} from './patientApiHandler';
import {patientFamilyHistoryApiHandler} from './patientFamilyHistoryApiHandler';
import {patientOccupationApiHandler} from './patientOccupationApiHandler';
import {proceduresApiHandler} from './proceduresApiHandler';
import {recordInvestigationApiHandler} from './recordInvestigationApiHandler';
import {regionsApiHandler} from './regionsApiHandler';
import {roomApiHandler} from './roomApiHandler';
import {sessionApiHandler} from './sessionApiHandler';
import {snowmedApiHandler} from './snowmedApiHandler';
import {symptomSummaryApiHandler} from './symptomSummaryApiHandler';
import {vaccinationApiHandler} from './vaccinationHandler';
import {vitalSignApiHandler} from './vitalSignApiHander';
import {wardApiHandler} from './wardApiHandler';
import {woundDressingApiHandler} from './woundDressingApiHandler';
import {physicalExaminationApiHandler} from './physicalExaminationApiHandler';
import {staffApiHandler} from './staffApiHandler';
import {medicationApiHandler} from './medicationApiHandler';

export const handlers = [
  ...authApiHandler,
  ...addNoteApiHandler,
  ...intakeOutputChartApiHandler,
  ...woundDressingApiHandler,
  ...bedMakingApiHandler,
  ...snowmedApiHandler,
  ...miscellaneousInterventionsApiHandler,
  ...patientApiHandler,
  ...appointmentApiHandler,
  ...accountApiHandler,
  ...regionsApiHandler,
  ...sessionApiHandler,
  ...staffApiHandler,
  ...countryApiHandler,
  ...districtApiHandler,
  ...occupationApiHandler,
  ...vaccinationApiHandler,
  ...disgnosisApiHandler,
  ...otherPlanItemsApiHandler,
  ...organizationUnitApiHandler,
  ...patientOccupationApiHandler,
  ...investigationApiHandler,
  ...symptomSummaryApiHandler,
  ...patientFamilyHistoryApiHandler,
  ...vitalSignApiHandler,
  ...identificationTypesApiHandler,
  ...proceduresApiHandler,
  ...recordInvestigationApiHandler,
  ...nursingCarePlanApiHandler,
  ...physicalExaminationApiHandler,
  ...wardApiHandler,
  ...roomApiHandler,
  ...medicationApiHandler,
];
