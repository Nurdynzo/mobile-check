import {EMPTY_STRING} from '../utils';

export const prescriptionMenuOptions = [
  {
    value: 'Edit',
  },
  {
    value: 'Remove',
  },
];

export const prescriptionScreenInitialState = {
  activePills: [],
  dosage: null,
  note: EMPTY_STRING,
  direction: null,
  frequency: null,
  mainSearchResult: EMPTY_STRING,
  duration: null,
};

export const prescriptionScreenTabs: (
  | 'Prescribe medication'
  | 'Vaccination'
)[] = ['Prescribe medication', 'Vaccination'];
