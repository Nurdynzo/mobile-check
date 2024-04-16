import {ColorKeys} from '@/resources/colors';

export type SummaryMenuForNursingCarePlanTypes = {
  item: {
    value: TitlesForNursingCarePlanTypes;
    label: TitlesForNursingCarePlanTypes;
    id: number;
    color?: ColorKeys;
  };
};

export type TitlesForNursingCarePlanTypes =
  | 'Link to care plan'
  | 'Mark as examination'
  | 'Highlight for attention'
  | 'Ignore';
