import {OptionalRangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type ViralLoadFormSpecimens = 'Viral load';
export type ViralLoadFormSpecimensDataType = {
  [key in ViralLoadFormSpecimens]?: OptionalRangeInputFormResponseValues;
};
