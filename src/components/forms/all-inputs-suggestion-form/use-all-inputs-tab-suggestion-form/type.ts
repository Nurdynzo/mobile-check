import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import VoidFunction from '@/types/voidfunction';

export type AllInputsTabSuggestionFormHookType<
  T extends NewCustomSnowstormSimpleResponseDto,
> = {
  selectedItems: T[];
  setSelectedItems: (data: T[]) => void;
  text: string;
  setText: (text: string) => void;
  handleAddItem: (props: T) => void;
  handleRemoveItem: (props: T) => void;
  reset: VoidFunction;
  allTabSelectedItems: {
    [key: string]: T[];
  };
};
