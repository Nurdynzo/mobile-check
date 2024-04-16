import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {InvestigationCategoriesKey} from '@/constants/requestInvestigations';

// TODO(Daniel): Kindly review the name of this type after fully implementing Investigations module
export interface InvestigationType extends NewCustomSnowstormSimpleResponseDto {
  urgent: boolean;
  type: InvestigationCategoriesKey;
  withContrast?: boolean;
}
