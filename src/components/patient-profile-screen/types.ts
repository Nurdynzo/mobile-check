import {SvgProps} from 'react-native-svg';

export type ProfileNavCardProps<R> = {
  title: string;
  Icon: React.FC<SvgProps>;
  routeName: R;
};

export type PatientProfileScreenProps<R> = {
  profileData: readonly ProfileNavCardProps<R>[];
  handleRoute: (routeName: R) => void;
};

export type FrontDeskPatientProfileType = ProfileNavCardProps<
  keyof Pick<
    ReactNavigation.RootParamList,
    | 'FD_PATIENT_OVERVIEW'
    | 'FD_PAYMENT_CONFIRMATION'
    | 'FD_WARD_ROUND_AND_CLINIC_NOTES'
    | 'FD_REVIEW_DETAILED_HISTORY'
  >
>[];

export type GeneralPatientProfileType = ProfileNavCardProps<
  keyof Pick<ReactNavigation.RootParamList, 'DOCTOR_ALL_INPUTS'>
>[];
