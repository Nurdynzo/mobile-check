import {GeneralRouteParamList} from '@/navigation/types';

export type DoctorRootStackParamList = GeneralRouteParamList & {
  DOCTOR_ROOT_NAVIGATION: undefined;
  DOCTOR_BOTTOM_TAB: undefined;
  DOCTOR_PATIENTS: undefined;
  DOCTOR_ALL_PATIENTS: undefined;
  DOCTOR_ALL_INPUTS: {patientId: number; encounterId: number};
  DOCTOR_PRESENTING_COMPLAINTS: {patientId: number; encounterId: number};
  DOCTOR_DIAGNOSIS: {encounterId: number};
  DOCTOR_PRESCRIPTIONS: {patientId: number; encounterId: number};
  DOCTOR_PROCEDURES: {patientId: number; encounterId: number};
};
