import {OptionalRangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type GroupAndCrossMatchFormSpecimens =
  | 'Group & cross match'
  | 'Blood component';
export type GroupAndCrossMatchFormSpecimensDataType = {
  [key in GroupAndCrossMatchFormSpecimens]?: OptionalRangeInputFormResponseValues;
};
