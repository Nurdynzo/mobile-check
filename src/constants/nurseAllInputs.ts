import {AllInputDataItem} from '@/components/all-inputs-landing-screen/types';
import {routesNames} from '@/navigation/routes';

export const outPatientNurseAllInputData: AllInputDataItem<
  string,
  string,
  keyof Pick<
    ReactNavigation.RootParamList,
    | 'ADD_NOTES'
    | 'OUT_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD'
    | 'NURSING_CARE_PLAN'
    | 'NURSE_MISCELLANEOUS_INTERVENTIONS'
    | 'OTHER_PLAN_ITEMS'
    | 'VITAL_SIGNS'
    | 'INVESTIGATIONS'
    | 'PHYSICAL_EXAMINATION'
    | 'NURSE_MEDICATION'
  >
>[] = [
  {
    title: 'Vital signs',
    subTitle: 'Take vital signs',
    routeName: routesNames.VITAL_SIGNS,
  },
  {
    title: 'Investigations',
    subTitle: 'Record & view investigation results',
    routeName: routesNames.INVESTIGATIONS,
  },
  {
    title: 'Physical examination',
    subTitle: 'General physical examination',
    routeName: routesNames.PHYSICAL_EXAMINATION,
  },
  {
    title: 'Procedures',
    subTitle: 'Procedures Record procedures',
    routeName: routesNames.NURSE.OUT_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD,
  },
  {
    title: 'Medication',
    subTitle: 'Medication administration & vaccination',
    routeName: routesNames.NURSE.NURSE_MEDICATION,
  },
  {
    title: 'Miscellaneous interventions',
    subTitle: 'Enter event',
    routeName: routesNames.NURSE.NURSE_MISCELLANEOUS_INTERVENTIONS,
  },
  {
    title: 'Nursing care plan',
    subTitle: 'Enter care plan',
    routeName: routesNames.NURSE.NURSING_CARE_PLAN,
  },
  {
    title: 'Other plan items',
    subTitle: 'Add other plan items',
    routeName: routesNames.OTHER_PLAN_ITEMS,
  },
  {
    title: 'Add notes',
    subTitle: 'Enter notes',
    routeName: routesNames.ADD_NOTES,
  },
];

export const inPatientNurseAllInputData: AllInputDataItem<
  string,
  string,
  keyof Pick<
    ReactNavigation.RootParamList,
    | 'ADD_NOTES'
    | 'IN_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD'
    | 'VITAL_SIGNS'
    | 'NURSE_WOUND_DRESSING'
    | 'FD_WARD_ROUND_AND_CLINIC_NOTES'
    | 'NURSE_BED_MAKING'
    | 'NURSE_MISCELLANEOUS_INTERVENTIONS'
    | 'OTHER_PLAN_ITEMS'
    | 'NURSING_CARE_PLAN'
    | 'NURSE_INTAKE_OUTPUT_CHARTING'
    | 'INVESTIGATIONS'
    | 'PHYSICAL_EXAMINATION'
    | 'NURSE_MEDICATION'
  >
>[] = [
  {
    title: 'Medication',
    subTitle: 'Medication administration & vaccination',
    routeName: routesNames.NURSE.NURSE_MEDICATION,
  },
  {
    title: 'Vital signs',
    subTitle: 'Take vital signs',
    routeName: routesNames.VITAL_SIGNS,
  },
  {
    title: 'Investigations',
    subTitle: 'Record & view investigation results',
    routeName: routesNames.INVESTIGATIONS,
  },
  {
    title: 'Wound dressing',
    subTitle: 'Enter wound dressing details',
    routeName: routesNames.NURSE.NURSE_WOUND_DRESSING,
  },
  {
    title: 'Feeding',
    subTitle: 'Enter feeding details',
    routeName: routesNames.NURSE.IN_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD,
  },
  {
    title: 'Procedures',
    subTitle: 'Procedures Record procedures',
    routeName: routesNames.NURSE.IN_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD,
  },
  {
    title: 'Physical examination',
    subTitle: 'General physical examination',
    routeName: routesNames.PHYSICAL_EXAMINATION,
  },
  {
    title: 'Bed making',
    subTitle: 'Enter bed making details',
    routeName: routesNames.NURSE.NURSE_BED_MAKING,
  },
  {
    title: 'Intake or output charting',
    subTitle: 'intake & output',
    routeName: routesNames.NURSE.NURSE_INTAKE_OUTPUT_CHARTING,
  },
  {
    title: 'Miscellaneous interventions',
    subTitle: 'Enter event',
    routeName: routesNames.NURSE.NURSE_MISCELLANEOUS_INTERVENTIONS,
  },
  {
    title: 'Nursing care plan',
    subTitle: 'Enter care plan',
    routeName: routesNames.NURSE.NURSING_CARE_PLAN,
  },
  {
    title: 'Other plan items',
    subTitle: 'Add other plan items',
    routeName: routesNames.OTHER_PLAN_ITEMS,
  },
  {
    title: 'Add notes',
    subTitle: 'Enter notes',
    routeName: routesNames.ADD_NOTES,
  },
];

export const patientAppearanceMenuOptions = [
  {value: 'Stable'},
  {value: 'Critically ill'},
] as const;
