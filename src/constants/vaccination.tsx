import {TabSwitcherType} from '@/components/tabs/tabs-switcher/types';

export const vaccinationFromBackend = [
  {
    id: 0,
    name: 'National immunization schedule',
    fullName: 'National immunization schedule',
  },
  {
    id: 1,
    name: 'BCG',
    fullName: 'BCG',
  },
  {
    id: 2,
    name: 'Oral polio vaccine',
    fullName: 'Oral polio vaccine',
  },
  {
    id: 3,
    name: 'Hepatitis B',
    fullName: 'Hepatitis B',
  },
  {
    id: 3,
    name: 'Hepatitis B',
    fullName: 'Hepatitis B',
  },
];

export const filterOptions = [
  {id: 1, value: 'By due date'},
  {id: 2, value: 'By vaccine'},
];

export const nationalImmunizationDurationsVaccines = [
  'BCG',
  'Hepatitis B',
  'OPV',
  'Rotavirus vaccine',
];

export const nationalImmunizationDurationsDurations = [
  'At birth',
  'At 6 weeks',
  'At 10 weeks',
];

export const vaccinationPeriodIntervals = [
  {item: {id: 'Days', value: 'Days'}},
  {item: {id: 'Weeks', value: 'Weeks'}},
  {item: {id: 'Months', value: 'Months'}},
  {item: {id: 'Years', value: 'Years'}},
];

export type VaccinationTabTypes = 'Record vaccinations' | 'History';

export type VaccinationTabsProps = {
  name: VaccinationTabTypes;
};

export const vaccinationTabs: TabSwitcherType<VaccinationTabTypes>[] = [
  {name: 'Record vaccinations', data: 'Record vaccinations'},
  {name: 'History', data: 'History'},
];
