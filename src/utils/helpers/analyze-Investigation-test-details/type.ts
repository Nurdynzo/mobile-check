import {
  DipstickDto,
  GetInvestigationResponse,
  InvestigationRangeDto,
  InvestigationResultsDto,
  InvestigationSuggestionDto,
} from '@/state/services/investigationApi';

export type ResponseType =
  | 'details has components'
  | 'details has components that has ranges too'
  | 'details has no components but has suggestions'
  | 'this has a unique extra form'
  | 'details has ranges'
  | 'details has suggestions'
  | 'details has dipstick'
  | 'details has results'
  | 'details has components and ranges';

export interface UnitRange {
  unit: string;
  ranges: InvestigationRangeDto[];
}

export interface AnalysisResponse {
  typeOfDetail: ResponseType;
  components?: GetInvestigationResponse[];
  suggestions?: InvestigationSuggestionDto[];
  specimen: string | null;
  unitRanges: UnitRange[];
  ranges: InvestigationRangeDto[];
  dipstick: DipstickDto[];
  results: InvestigationResultsDto[];
}
