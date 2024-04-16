import {AllInputDataItem} from '@/components/all-inputs-landing-screen/types';
import {routesNames} from '@/navigation/routes';

export const doctorAllInputData: AllInputDataItem<
  string,
  string,
  keyof Pick<
    ReactNavigation.RootParamList,
    | 'ADD_NOTES'
    | 'OTHER_PLAN_ITEMS'
    | 'VITAL_SIGNS'
    | 'INVESTIGATIONS'
    | 'DOCTOR_PRESENTING_COMPLAINTS'
    | 'DOCTOR_PROCEDURES'
    | 'DOCTOR_ALL_INPUTS'
    | 'DOCTOR_DIAGNOSIS'
    | 'DOCTOR_PRESCRIPTIONS'
    | 'PHYSICAL_EXAMINATION'
  >
>[] = [
  {
    title: 'Presenting complaints',
    subTitle: 'Search symptoms',
    routeName: routesNames.DOCTOR.DOCTOR_PRESENTING_COMPLAINTS,
  },
  {
    title: 'Physical examination',
    subTitle: 'General physical examination',
    routeName: routesNames.PHYSICAL_EXAMINATION,
  },
  {
    title: 'Vital signs',
    subTitle: 'Take vital signs',
    routeName: routesNames.VITAL_SIGNS,
  },
  {
    title: 'Investigations',
    subTitle: 'Request & record investigations',
    routeName: routesNames.INVESTIGATIONS,
  },
  {
    title: 'Diagnosis',
    subTitle: 'Enter diagnosis & differentials',
    routeName: routesNames.DOCTOR.DOCTOR_DIAGNOSIS,
  },
  {
    title: 'Prescription',
    subTitle: 'Prescribe medication & vaccination',
    routeName: routesNames.DOCTOR.DOCTOR_PRESCRIPTIONS,
  },
  {
    title: 'Procedures',
    subTitle: 'Request & record procedures',
    routeName: routesNames.DOCTOR.DOCTOR_PROCEDURES,
  },
  {
    title: 'Other plan items',
    subTitle: 'Add other plan items',
    routeName: routesNames.OTHER_PLAN_ITEMS,
  },
  {
    title: 'Add notes',
    subTitle: 'Add notes',
    routeName: routesNames.ADD_NOTES,
  },
];
