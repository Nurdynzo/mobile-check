import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {GetPhysicalExaminationListResponse} from '@/state/services/physicalExaminationsApi';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {SelectItem} from '@/types/selectItemsheet';

export interface PhysicalExaminationSuggestionType
  extends NewCustomSnowstormSimpleResponseDto {
  data?: GetPhysicalExaminationListResponse;
  site?: SnowstormSimpleResponseDto[];
  plane?: SnowstormSimpleResponseDto[];
  qualifier?: SnowstormSimpleResponseDto[];
}

export type PhysicalExaminationSuggestionViewProps = {
  patientId: number;
  encounterId: number;
  headerValue: string | undefined;
  examinationType: SelectItem<string> | null;
};

export type PhysicalExaminationSuggestionViewRef = {
  resetAllInputSugesstionForm: () => void;
};
