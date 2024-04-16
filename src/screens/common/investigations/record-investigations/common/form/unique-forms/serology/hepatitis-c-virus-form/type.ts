import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type HepatitisCvirusFormSpecimens =
  | 'Hepatitis C virus IgM'
  | 'Hepatitis C virus IgG';

export type HepatitisCvirusFormSpecimenDataType = {
  [key in HepatitisCvirusFormSpecimens]?: RangeInputFormResponseValues;
};
