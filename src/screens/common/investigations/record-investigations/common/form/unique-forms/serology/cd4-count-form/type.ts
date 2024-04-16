import {OptionalRangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type CD4CountFormSpecimens = 'CD4 count';
export type CD4CountFormSpecimensDataType = {
  [key in CD4CountFormSpecimens]?: OptionalRangeInputFormResponseValues;
};
