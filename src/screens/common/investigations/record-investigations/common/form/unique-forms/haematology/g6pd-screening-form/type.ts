import {RangeInputFormResponseValues} from '../../../ranges-input-form/type';

export type G6pdScreeningFormSpecimens = 'G6PD level detection';

export type G6pdScreeningFormSpecimensDataType = {
  [key in G6pdScreeningFormSpecimens]?: RangeInputFormResponseValues;
};
