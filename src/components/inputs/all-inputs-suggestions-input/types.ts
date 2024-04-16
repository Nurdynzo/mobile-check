import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {ColorKeys} from '@/resources/colors';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import VoidFunction from '@/types/voidfunction';
import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type PillType = {id: string; name: string};

export type AllInputSuggestionsInputTypes = {
  suggestions: Array<SnowstormSimpleResponseDto & {[key: string]: unknown}>;
  placeholder?: string;
  label?: string;
  onPressPlusIcon: VoidFunction;
  ActionBtnContent?: ReactNode;
  onRemoveItem: (item: SnowstormSimpleResponseDto) => void;
  textValue?: string;
  marginBottom?: number;
  onChangeText?: (text: string) => void;
  disablePlusBtn?: boolean;
  showTextInput?: boolean;
  extraBaseContainerStyle?: ViewStyle;
  showRightView?: boolean;
  textValueSuggestions?: SnowstormSimpleResponseDto[];
  isloadingTextValueSuggestion?: boolean;
  onSelectSuggestion?: (item: SnowstormSimpleResponseDto) => void;
};

export type NewAllInputSuggestionsInputTypes<
  T extends NewCustomSnowstormSimpleResponseDto,
> = {
  suggestions: Array<T & {[key: string]: unknown}>;
  placeholder?: string;
  label?: string;
  onPressPlusIcon: VoidFunction;
  ActionBtnContent?: ReactNode;
  onRemoveItem: (item: T) => void;
  textValue?: string;
  marginBottom?: number;
  onChangeText?: (text: string) => void;
  disablePlusBtn?: boolean;
  showTextInput?: boolean;
  extraBaseContainerStyle?: ViewStyle;
  showRightView?: boolean;
  activePillBackground?: ColorKeys;
  inActivePillBackground?: ColorKeys;
  textValueSuggestions?: T[];
  isloadingTextValueSuggestion?: boolean;
  onSelectSuggestion?: (item: T) => void;
};
