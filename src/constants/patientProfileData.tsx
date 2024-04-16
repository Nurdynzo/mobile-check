import {
  CrossInCircleIcon,
  MedicalFoldersIcon,
  PaymentIcon,
  BiologyShapeIcon,
  HandicapIcon,
  HeartBlackShapeIcon,
  MedicalNotesIcon,
  MedicalSamplesIcon,
  NurseIcon,
  TreatmentPlanIcon,
} from '@/assets/svg';
import {routesNames} from '@/navigation/routes';
import {
  FrontDeskPatientProfileType,
  GeneralPatientProfileType,
} from '@/components/patient-profile-screen/types';

export const frontdeskPatientProfileData: FrontDeskPatientProfileType = [
  {
    title: 'Patient Overview',
    Icon: CrossInCircleIcon,
    routeName: routesNames.FRONT_DESK.FD_PATIENT_OVERVIEW,
  },
  {
    title: 'Payment Confirmations',
    Icon: PaymentIcon,
    routeName: routesNames.FRONT_DESK.FD_PAYMENT_CONFIRMATION,
  },
  {
    title: 'Ward round & Clinic notes',
    Icon: MedicalNotesIcon,
    routeName: routesNames.FRONT_DESK.FD_WARD_ROUND_AND_CLINIC_NOTES,
  },
  {
    title: 'Review detailed history',
    Icon: MedicalFoldersIcon,
    routeName: routesNames.FRONT_DESK.FD_REVIEW_DETAILED_HISTORY,
  },
];

// TODO(Philip): Replace all routeNames with the appropriate routeNames
export const generalPatientProfileData: GeneralPatientProfileType = [
  {
    title: 'Patient Overview',
    Icon: CrossInCircleIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
  {
    title: 'Vital signs',
    Icon: HeartBlackShapeIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
  {
    title: 'Clinical investigations',
    Icon: MedicalSamplesIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
  {
    title: 'Treatment plans',
    Icon: TreatmentPlanIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
  {
    title: 'Chronic conditions',
    Icon: HandicapIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
  {
    title: 'Nursing records',
    Icon: NurseIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
  {
    title: 'Ward round & Clinic notes',
    Icon: MedicalNotesIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
  {
    title: 'Allergy history',
    Icon: BiologyShapeIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
  {
    title: 'Review detailed history',
    Icon: MedicalFoldersIcon,
    routeName: 'DOCTOR_ALL_INPUTS',
  },
];
