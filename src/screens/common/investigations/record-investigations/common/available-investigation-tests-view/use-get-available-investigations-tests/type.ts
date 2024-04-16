import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {GetInvestigationRequestsResponse} from '@/state/services/investigationApi';

export interface SingleInvestigationTestType
  extends NewCustomSnowstormSimpleResponseDto,
    Omit<GetInvestigationRequestsResponse, 'id'> {}
