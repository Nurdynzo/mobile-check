import {RecordsSortKeysType} from '@/screens/front-desk/bottom-tabs/records/type';
import {MenuOptionsProp} from '@/types/menusheet';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';

export const clinicOptions: MenuOptionsProp = [
  {value: 'Accident & Emergency'},
  {value: 'Neurology'},
  {value: 'Cardiology'},
  {value: 'Respiratory Medicine'},
  {value: 'Gastroenterology & Hepatology'},
  {value: 'Infectious Disease Unit'},
];

export const recordsSortByOptions: SelectItemOptionsProp<RecordsSortKeysType> =
  [
    {item: {id: 1, value: 'Patient name: A-Z', data: 'fullName'}},
    {item: {id: 2, value: 'Patient name: Z-A', data: 'fullName desc'}},
    {item: {id: 3, value: 'Patient ID: Ascending', data: 'patientCode'}},
    {item: {id: 4, value: 'Patient ID: Descending', data: 'patientCode desc'}},
    {item: {id: 5, value: 'Gender: Male', data: 'male'}},
    {item: {id: 6, value: 'Gender: Female', data: 'female'}},
    {item: {id: 7, value: 'Gender: Others', data: 'others'}},
    {item: {id: 8, value: 'Age: Youngest', data: 'age'}},
    {item: {id: 9, value: 'Age: Oldest', data: 'age desc'}},
    {item: {id: 10, value: 'Time/Date: Earliest', data: 'startTime'}},
    {item: {id: 11, value: 'Time/Date: Latest', data: 'startTime desc'}},
    {
      item: {
        id: 12,
        value: 'Appointment status: A-Z',
        data: 'appointmentStatus',
      },
    },
    {
      item: {
        id: 13,
        value: 'Appointment status: Z-A',
        data: 'appointmentStatus desc',
      },
    },
  ];

export const recordsSortByOptionsOld = [
  {
    value: 'fullName asc',
    label: 'Patient name: A-Z',
  },
  {
    value: 'fullName desc',
    label: 'Patient name: Z-A',
  },
  {
    value: 'patientCode asc',
    label: 'Patient No: Ascending',
  },
  {
    value: 'patientCode desc',
    label: 'Patient No: Descending',
  },
  {
    value: 'male',
    label: 'Gender: Male',
  },
  {
    value: 'female',
    label: 'Gender: Female',
  },
  {
    value: 'other',
    label: 'Gender: Other',
  },
  {
    value: 'dateOfBirth desc',
    label: 'Age: Youngest',
  },
  {
    value: 'dateOfBirth asc',
    label: 'Age: Oldest',
  },
];
