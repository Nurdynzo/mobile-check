import {MenuOptionsProp} from '@/types/menusheet';

export const tabViewsList: string[] = ['Outpatient', 'Inpatient', 'A&E'];
export const diagnosisTabViewsList: string[] = ['Diagnosis', 'Differential'];

export const sortByOptions: MenuOptionsProp = [
  {label: 'Patient name: A-Z', value: 'fullName'},
  {label: 'Patient name: Z-A', value: 'fullName desc'},
  {label: 'Time in: Earliest', value: 'startTime'},
  {label: 'Time in: Latest', value: 'startTime desc'},
  {label: 'Age: Youngest', value: 'age'},
  {label: 'Age: Oldest', value: 'age desc'},
];

export const dateFilterOptions: MenuOptionsProp = [
  {label: 'Today', value: 'Today'},
  {label: 'This week', value: 'This week'},
  {label: 'This month', value: 'This month'},
  {label: 'This year', value: 'This year'},
  {label: 'Custom Date', value: 'Custom Date'},
];
