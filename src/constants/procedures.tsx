import {
  SummaryMenuForRecordsTypes,
  SummaryMenuForRequestTypes,
} from '@/screens/doctor/stack-screens/allInputs/procedures/types';

export const pillsSample = [
  'Bed making',
  'Wound dressing',
  'Blood transfusion',
  'EBT - Exchange of blood transfusion',
  'Bed making',
  'Wound dressing',
  'Blood transfusion',
  'EBT - Exchange of blood transfusion',
];

export const tabs = [
  'Phlebotomy',
  'Stoma care',
  'Vision screening',
  'Syringing of ear',
  'EBT: Exchange of blood transfusion',
  'Blood transfusion',
  'Wound dressing',
  'Bead making',
];

export const tabsForProcedures: ('Request procedures' | 'Record procedures')[] =
  ['Request procedures', 'Record procedures'];

export const bottomTab = [
  'Laparatomyy, Prostatectonmy | OR1 | 12:30 PM 31 Jan 24',
];

export const chipMoreMenu = [
  {
    item: {
      value: 'View signed patient consent document',
      label: 'View signed patient consent document',
      id: 1,
    },
  },
  {
    item: {
      value: 'Reschedule or change location',
      label: 'Reschedule or change location',
      id: 2,
    },
  },
  {
    item: {
      value: 'Cancel procedure',
      label: 'Cancel procedure',
      id: 3,
    },
  },
  {
    item: {
      value: 'Delete',
      label: 'Delete',
      id: 4,
      color: 'danger100',
    },
  },
];
export const summaryMenuForRecords: Array<SummaryMenuForRecordsTypes> = [
  {
    item: {
      value: 'Link to care plan',
      label: 'Link to care plan',
      id: 1,
    },
  },
  {
    item: {
      value: 'Mark as ongoing',
      label: 'Mark as ongoing',
      id: 2,
    },
  },
  {
    item: {
      value: 'Assign to',
      label: 'Assign to',
      id: 4,
    },
  },
  {
    item: {
      value: 'Highlight for attention',
      label: 'Highlight for attention',
      id: 5,
    },
  },
  {
    item: {
      value: 'Delete',
      label: 'Delete',
      id: 6,
      color: 'danger100',
    },
  },
];
export const summaryMenuForRequest: Array<SummaryMenuForRequestTypes> = [
  {
    item: {
      value: 'Mark as specialized procedure',
      label: 'Mark as specialized procedure',
      id: 1,
    },
  },
  {
    item: {
      value: 'Schedule procedure',
      label: 'Schedule procedure',
      id: 2,
    },
  },
  {
    item: {
      value: 'Assign to',
      label: 'Assign to',
      id: 4,
    },
  },
  {
    item: {
      value: 'Highlight for attention',
      label: 'Highlight for attention',
      id: 5,
    },
  },
  {
    item: {
      value: 'Delete',
      label: 'Delete',
      id: 6,
      color: 'danger100',
    },
  },
];

export const recordedProcedures = [
  {
    value: 'All Procedures',
    label: 'All Procedures',
  },
  {
    value: 'Recorded Procedures',
    label: 'Recorded Procedures',
  },
  {
    value: 'Specialized Procedures',
    label: 'Specialized Procedures',
  },
  {
    value: 'Requested Procedures',
    label: 'Requested Procedures',
  },
];
export const procedureLocation = [
  {
    item: {
      id: 1,
      value: 'Operating room 1',
    },
  },
  {
    item: {
      id: 2,
      value: 'Operating room 2',
    },
  },
  {
    item: {
      id: 3,
      value: 'Operating room 3',
    },
  },
  {
    item: {
      id: 4,
      value: 'Operating room 4',
    },
  },
];

export const procedureDuration = [
  {item: {id: 0, value: 'Minutes'}},
  {item: {id: 1, value: 'Hours'}},
];
