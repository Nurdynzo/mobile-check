import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import VoidFunction from '@/types/voidfunction';
import {NewCustomSnowstormSimpleResponseDto} from '../types';

export type AllInputsSuggestionFormHookType = {
  selectedItems: SnowstormSimpleResponseDto[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<SnowstormSimpleResponseDto[]>
  >;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleAddItem: (props: SnowstormSimpleResponseDto) => void;
  handleRemoveItem: (props: SnowstormSimpleResponseDto) => void;
  reset: VoidFunction;
};

export type NewAllInputsSuggestionFormHookType<
  T extends NewCustomSnowstormSimpleResponseDto,
> = {
  selectedItems: T[];
  setSelectedItems: (items: T[] | ((prevState: T[]) => T[])) => void;
  text: string;
  setText: (text: string | ((prevState: string) => string)) => void;
  handleAddItem: (props: T) => void;
  handleRemoveItem: (props: T) => void;
  reset: VoidFunction;
};
