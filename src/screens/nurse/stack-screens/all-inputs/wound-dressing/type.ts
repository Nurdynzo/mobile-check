import {ColorKeys} from '@/resources/colors';

export type WoundDressingSummaryMenuType = {
  item: {
    value: WoundDressingOptionTitles;
    label: WoundDressingOptionTitles;
    id: number;
    color?: ColorKeys;
  };
};

export type WoundDressingOptionTitles =
  | 'Link to care plan'
  | 'Mark as ongoing'
  | 'Mark as done'
  | 'Link to event'
  | 'Assign to'
  | 'Highlight for attention'
  | 'Delete';
