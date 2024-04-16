import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import VoidFunction from '@/types/voidfunction';

export type AllInputsMulipleSuggestionFormHookType<
  T extends NewCustomSnowstormSimpleResponseDto,
> = {
  selectedItems: {
    [key: string]: T[];
  };
  setSelectedItems: (
    data: T[] | ((prevState: T[]) => T[]),
    {tabName}: {tabName: string},
  ) => void;
  text: {
    [key: string]: string;
  };
  setText: (
    val: string | ((prevState: string) => string),
    {tabName}: {tabName: string},
  ) => void;
  handleAddItem: (
    props: T,
    {tabName, isSingleSelect}: {tabName: string; isSingleSelect?: boolean},
  ) => void;
  handleRemoveItem: (props: T, {tabName}: {tabName: string}) => void;
  reset: VoidFunction;
};
