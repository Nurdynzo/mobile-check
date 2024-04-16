import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type HepatitisBsurfaceAntigenFormSpecimens =
  'Hepatitis B surface antigen';

export type HepatitisBsurfaceAntigenFormSpecimensDataType = {
  [key in HepatitisBsurfaceAntigenFormSpecimens]?: RangeInputFormResponseValues;
};
