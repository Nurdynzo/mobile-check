import {GetInvestigationResponse} from '@/state/services/investigationApi';
import {RangeInputFormResponseValues} from '../form/ranges-input-form/type';

export type UniqueTestDetails = RangeInputFormResponseValues[];

export type DynamicTestFormType = {
  testDetails: GetInvestigationResponse;
  getTouchedValues?: (values: RangeInputFormResponseValues) => void;
  getUniqueTestDetails: (data: RangeInputFormResponseValues[]) => void;
};
