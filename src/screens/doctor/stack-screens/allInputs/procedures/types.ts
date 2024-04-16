import {ColorKeys} from '@/resources/colors';

export type TitlesforRequestsTypes =
  | 'Mark as specialized procedure'
  | 'Schedule procedure'
  | 'Assign to'
  | 'Highlight for attention'
  | 'Delete';

export type TitlesforRecordTypes =
  | 'Link to care plan'
  | 'Mark as ongoing'
  | 'Assign to'
  | 'Highlight for attention'
  | 'Delete';

export type SummaryMenuForRequestTypes = {
  item: {
    value: TitlesforRequestsTypes;
    label: TitlesforRequestsTypes;
    id: number;
    color?: ColorKeys;
  };
};
export type SummaryMenuForRecordsTypes = {
  item: {
    value: TitlesforRecordTypes;
    label: TitlesforRecordTypes;
    id: number;
    color?: ColorKeys;
  };
};
