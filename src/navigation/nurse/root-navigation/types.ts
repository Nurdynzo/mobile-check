import {GeneralRouteParamList} from '@/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NurseRootStackParamList = GeneralRouteParamList & {
  NURSE_BOTTOM_TAB: undefined;
  NURSE_BED_MAKING: {patientId: number; encounterId: number};
  NURSE_WOUND_DRESSING: {patientId: number; encounterId: number};
  NURSE_INTAKE_OUTPUT_CHARTING: {patientId: number; encounterId: number};
  NURSE_MISCELLANEOUS_INTERVENTIONS: {patientId: number; encounterId: number};
  NURSING_CARE_PLAN: {patientId: number; encounterId: number};
  OUT_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD: {
    patientId: number;
    encounterId: number;
  };
  IN_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD: {
    patientId: number;
    encounterId: number;
  };
  NURSE_PATIENTS: undefined;
  NURSE_AUTO_ASSIGN: undefined;
  NURSE_MEDICATION: {patientId: number; encounterId: number};
};

export type FrontDeskNavigationProps<T extends keyof NurseRootStackParamList> =
  NativeStackNavigationProp<NurseRootStackParamList, T>;

export type FrontDeskRouteProps<T extends keyof NurseRootStackParamList> =
  RouteProp<NurseRootStackParamList, T>;

export type FrontDeskScreenProps<T extends keyof NurseRootStackParamList> = {
  navigation: NativeStackNavigationProp<NurseRootStackParamList, T>;
  route: RouteProp<NurseRootStackParamList, T>;
};
