import {ColorKeys} from '@/resources/colors';

export type SummaryMenuForMiscellaneousInterventionsTypes = {
  item: {
    value: TitlesForMiscIntTypes;
    label: TitlesForMiscIntTypes;
    id: number;
    color?: ColorKeys;
  };
};

export type TitlesForMiscIntTypes =
  | 'Link to care plan'
  | 'Mark as examination'
  | 'Highlight for attention'
  | 'Ignore';
