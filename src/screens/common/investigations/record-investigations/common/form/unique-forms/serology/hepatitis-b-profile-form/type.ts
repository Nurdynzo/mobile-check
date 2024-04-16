import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type HepatitisBProfileFormSpecimens =
  | 'Hepatitis B surface antigen'
  | 'Hepatitis B antigen';

export type HepatitisBProfileFormSpecimensDataType = {
  [key in HepatitisBProfileFormSpecimens]?: RangeInputFormResponseValues;
};
