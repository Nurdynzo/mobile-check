import {uniqueFormComponentTypes} from '@/constants/recordInvestigationsTests';
import VoidFunction from '@/types/voidfunction';

export type RangeInputFormTypes = {
  showLeadingRange?: boolean;
  leadingRangeTitle?: string;
  leadingRangeValue?: number | string;
  leadingRangeHasDropDown?: boolean;
  leadingRangeHasToggle?: boolean;
  leadingRangeUnit?: string;
  leadingRangeHasBorder?: boolean;
  getValues?: (object: RangeInputFormResponseValues) => void;
  minRangeValue: number;
  maxRangeValue: number;
  showDropDownAfterName?: boolean;
  onPressDropDownAfterName?: VoidFunction;
  showSeparator?: boolean;
  extraData?: OptionalExtraData;
};

export type OptionalExtraData = {
  type: uniqueFormComponentTypes;
  tabs: Array<{id: number; name: string}>;
} | null;

export type RangeInputFormResponseValues = {
  leadingRangeValue?: number | number;
  minRangeValue: number;
  maxRangeValue: number;
  title?: string;
  id?: number;
  snomedId?: string;
  synonyms?: string;
  specimen?: string;
  unit?: string;
  category?: string;
  name?: string;
  shortName?: string;
  reference?: string;
  result?: string;
};

export type OptionalRangeInputFormResponseValues = Partial<
  Omit<RangeInputFormResponseValues, 'minRangeValue' | 'maxRangeValue'>
> & {
  minRangeValue?: number;
  maxRangeValue?: number;
};
