import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type UrineGlucoseFormSpecimens = '';

export type UrineGlucoseFormSpecimensDataType = {
  [key in UrineGlucoseFormSpecimens]?: RangeInputFormResponseValues;
};
