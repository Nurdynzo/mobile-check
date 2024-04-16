import {SuggestionToggleButtonItemType} from '@/screens/doctor/stack-screens/allInputs/presenting-complaints/suggestion-selection/socrates/common/socrates-suggestion-toggle-button/types';

export const medicationTabs: ('Medication administration' | 'Vaccination')[] = [
  'Medication administration',
  'Vaccination',
];

export const availableAndUnAvailableSuggestionToggleOptions: SuggestionToggleButtonItemType<
  'Available' | 'Unavailable'
>[] = [
  {value: 'Available', label: 'Available'},
  {value: 'Unavailable', label: 'Unavailable'},
];
