import {WoundDressingSummaryMenuType} from '@/screens/nurse/stack-screens/all-inputs/wound-dressing/type';

export const summaryMenuForWoundDressing: Array<WoundDressingSummaryMenuType> =
  [
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
        value: 'Mark as done',
        label: 'Mark as done',
        id: 3,
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
