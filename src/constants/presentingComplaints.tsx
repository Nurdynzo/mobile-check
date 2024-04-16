import {SuggestionToggleButtonItemType} from '@/screens/doctor/stack-screens/allInputs/presenting-complaints/suggestion-selection/socrates/common/socrates-suggestion-toggle-button/types';

export const socratesTabLabels: string[] = [
  'S',
  'O',
  'C',
  'R',
  'A',
  'T',
  'E',
  'S',
];

export const exacerbatingSuggestionToggleOptions: SuggestionToggleButtonItemType<
  'Exacerbating' | 'Relieving'
>[] = [
  {value: 'Exacerbating', label: 'Exacerbating'},
  {value: 'Relieving', label: 'Relieving'},
];

export const presentAbsentSuggestionToggleOptions: SuggestionToggleButtonItemType<
  'Present' | 'Absent'
>[] = [
  {value: 'Present', label: 'Present'},
  {value: 'Absent', label: 'Absent'},
];
