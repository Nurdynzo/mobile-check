import {ColorKeys} from '@/resources/colors';

export type InvestigationTabNamesTypes =
  | 'Recent results'
  | 'Request investigations'
  | 'Record investigations';

export type TitlesforRecentResultInvestigationSummaryTypes =
  | 'View related images'
  | 'Link to care plan'
  | 'Link to event'
  | 'Link to examination'
  | 'Highlight for attention'
  | 'Delete';

export type SummaryMenuForRecordsTypes = {
  item: {
    value: TitlesforRecentResultInvestigationSummaryTypes;
    label: TitlesforRecentResultInvestigationSummaryTypes;
    id: number;
    color?: ColorKeys;
  };
};
