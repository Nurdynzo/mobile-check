import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type BloodFilmFormSpecimens = '';

export type BloodFilmFormSpecimensDataType = {
  [key in BloodFilmFormSpecimens]?: RangeInputFormResponseValues;
};
