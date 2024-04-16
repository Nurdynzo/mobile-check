import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type BloodGroupAndRhFormSpecimens = 'Blood group' | 'rh';
export type BloodGroupAndRhFormSpecimensDataType = {
  [key in BloodGroupAndRhFormSpecimens]?: RangeInputFormResponseValues;
};
