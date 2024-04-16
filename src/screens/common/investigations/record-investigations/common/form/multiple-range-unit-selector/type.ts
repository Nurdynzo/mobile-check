import {InvestigationRangeDto} from '@/state/services/investigationApi';
import {
  OptionalExtraData,
  RangeInputFormResponseValues,
} from '../ranges-input-form/type';

export interface UnitChangeType {
  data: string;
  id: number;
  value: string;
}

export interface MultipleRangeUnitSelectorProps {
  ranges: InvestigationRangeDto[];
  title?: string;
  getData: (data: RangeInputFormResponseValues) => void;
  extraData?: OptionalExtraData;
}
