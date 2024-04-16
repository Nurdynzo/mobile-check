import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {SearchMedicationForReturnDto} from '@/state/services/medicationApi';

export interface PrescribeMedicationSuggestionType
  extends NewCustomSnowstormSimpleResponseDto {
  data?: SearchMedicationForReturnDto;
}

export type MedicationDto = {
  doseUnit?: string;
  doseValue?: string;
  frequencyUnit?: string;
  frequencyValue?: string;
  durationUnit?: string;
  durationValue?: string;
  direction?: string;
  note?: string;
};
