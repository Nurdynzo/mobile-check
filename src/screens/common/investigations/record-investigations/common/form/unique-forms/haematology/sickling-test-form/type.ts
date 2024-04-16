import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type SicklingTestFormSpecimens = 'Sickling test';
export type SicklingTestFormSpecimensDataType = {
  [key in SicklingTestFormSpecimens]?: RangeInputFormResponseValues;
};
