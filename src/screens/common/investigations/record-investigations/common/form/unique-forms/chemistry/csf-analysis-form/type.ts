import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type CSFAnalysisFormSpecimens = '';

export type CSFAnalysisFormSpecimensDataType = {
  [key in CSFAnalysisFormSpecimens]?: RangeInputFormResponseValues;
};
