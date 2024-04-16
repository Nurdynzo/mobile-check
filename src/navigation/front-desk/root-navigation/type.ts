import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {AppointmentListResponse} from '@/state/services/patientApi';
import {GeneralRouteParamList} from '@/navigation/types';

export type FrontDeskRootStackParamList = GeneralRouteParamList & {
  FD_ROOT_NAVIGATION: undefined;
  FD_BOTTOM_TAB: undefined;
  FD_APPOINTMENTS: undefined;
  FD_PAYMENT_CONFIRMATION: undefined;
  FD_CREATE_INVOICE: {
    patientId: number;
    appointment: {type: string; title: string; id: number; time: string};
  };
  FD_PAY_INVOICE: undefined;
  FD_CALENDAR: undefined;
  FD_ADD_NEW_PATIENT: undefined;
  FD_ADD_DEMOGRAPHIC_INFO: undefined;
  FD_ADD_NEW_APPOINTMENT: {
    patientId?: number;
  };
  FD_EDIT_APPOINTMENT: {
    patientId: number;
    appointmentData: AppointmentListResponse;
  };
  FD_VIEW_APPOINTMENT_INFO: undefined;
  FD_SCAN_PAPER_RECORDS: undefined;
  FD_PATIENT_PROFILE: undefined;
  FD_PATIENT_OVERVIEW: undefined;
  FD_REVIEW_DETAILED_HISTORY: undefined;
  FD_WARD_ROUND_AND_CLINIC_NOTES: undefined;
  FD_VIEW_REFERRAL_LETTER: {
    docId: string;
  };
};

export type FrontDeskNavigationProps<
  T extends keyof FrontDeskRootStackParamList,
> = NativeStackNavigationProp<FrontDeskRootStackParamList, T>;

export type FrontDeskRouteProps<T extends keyof FrontDeskRootStackParamList> =
  RouteProp<FrontDeskRootStackParamList, T>;

export type FrontDeskScreenProps<T extends keyof FrontDeskRootStackParamList> =
  {
    navigation: NativeStackNavigationProp<FrontDeskRootStackParamList, T>;
    route: RouteProp<FrontDeskRootStackParamList, T>;
  };
