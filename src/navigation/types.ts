import {NavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FrontDeskRootStackParamList} from './front-desk/root-navigation/type';
import {NurseRootStackParamList} from './nurse/root-navigation/types';
import {AuthRootStackParamList} from './auth-stack';
import {DoctorRootStackParamList} from './doctor/root-navigation/type';

export type GeneralScreenProps<T extends keyof ReactNavigation.RootParamList> =
  {
    navigation: NavigationProp<ReactNavigation.RootParamList, T>;
    route: RouteProp<Omit<ReactNavigation.RootParamList, ''>, T>;
  };

export type GeneralRouteParamList = {
  VIEW_PARER_RECORDS_TAB: {
    patient: {id: number; code: string};
    disableRegularTab?: boolean;
  };
  OTHER_PLAN_ITEMS: {patientId: number; encounterId: number};
  VITAL_SIGNS: {patientId: number; encounterId: number};
  ADD_NOTES: {patientId: number; encounterId: number};
  INVESTIGATIONS: {patientId: number; encounterId: number};
  PHYSICAL_EXAMINATION: {patientId: number; encounterId: number};
  USER_PROFILE: undefined;
  EDIT_USER_PROFILE: undefined;
  NOTIFICATIONS: undefined;
  MESSAGES: undefined;
};

export type GeneralScreenNavigationProps<
  T extends keyof ReactNavigation.RootParamList,
> = NavigationProp<ReactNavigation.RootParamList, T>;

export type GeneralScreenRouteProps<
  T extends keyof ReactNavigation.RootParamList,
> = RouteProp<Omit<ReactNavigation.RootParamList, ''>, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList
      extends FrontDeskRootStackParamList,
        DoctorRootStackParamList,
        NurseRootStackParamList,
        GeneralRouteParamList,
        AuthRootStackParamList {}
  }
}

export type GeneralNavProp = NavigationProp<ReactNavigation.RootParamList>;

export type FrontDeskNavProp =
  NativeStackNavigationProp<FrontDeskRootStackParamList>;

export type DoctorNavProp = NativeStackNavigationProp<DoctorRootStackParamList>;

export type NurseNavProp = NativeStackNavigationProp<NurseRootStackParamList>;
