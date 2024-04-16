import {ColorKeys} from '@/resources/colors';
import {CustomSnowstormSimpleResponseDto} from '@/types/CustomSnowstormSimpleResponseDto';
import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type AllInputsSuggestionFormProps<T> = {
  disablePlusBtnCondition?: boolean;
  ContentInBetweenSuggesstionsFields?: ReactNode;
  isSingleSelect?: boolean;
  expandSheetHeaderTitle: string;
  suggestions: CustomSnowstormSimpleResponseDto<T>[];
  textValueSuggestions?: CustomSnowstormSimpleResponseDto<T>[];
  isloadingTextValueSuggestion?: boolean;
  ActionBtnContent?: ReactNode;
  showTextInput?: boolean;
  suggestionBoxHeight?: number;
  showRightView?: boolean;
  extraBaseContainerStyle?: ViewStyle;
  formProps: FormPropsTypes<T>;
  toggleButton?: React.JSX.Element;
  placeholder?: string;
  renderSuggestionsPillLeftContent?: (
    item: CustomSnowstormSimpleResponseDto<T>,
  ) => ReactNode;
  removeExpandButton?: boolean;
};

export type NewAllInputsSuggestionFormProps<
  T extends NewCustomSnowstormSimpleResponseDto,
> = {
  disablePlusBtnCondition?: boolean;
  ContentInBetweenSuggesstionsFields?: ReactNode;
  isSingleSelect?: boolean;
  expandSheetHeaderTitle: string;
  suggestions: T[];
  textValueSuggestions?: T[];
  isloadingTextValueSuggestion?: boolean;
  ActionBtnContent?: ReactNode;
  showTextInput?: boolean;
  showRightView?: boolean;
  extraBaseContainerStyle?: ViewStyle;
  formProps: NewFormPropsTypes<T>;
  toggleButton?: React.JSX.Element;
  placeholder?: string;
  activeSelectedPillBackground?: ColorKeys;
  inActiveSelectedPillBackground?: ColorKeys;
  renderSuggestionsPillLeftContent?: (item: T) => ReactNode;
  removeExpandButton?: boolean;
};

export type additionalSelectedSuggestionAttributesTypes = {
  [key: string]: boolean | string | number;
};

export type FormPropsTypes<T> = {
  selectedItems: CustomSnowstormSimpleResponseDto<T>[];
  setSelectedItems: (value: CustomSnowstormSimpleResponseDto<T>[]) => void;
  text: string;
  setText: React.Dispatch<string>;
  handleAddItem: (props: CustomSnowstormSimpleResponseDto<T>) => void;
  handleRemoveItem: (props: CustomSnowstormSimpleResponseDto<T>) => void;
};

export type NewFormPropsTypes<T extends NewCustomSnowstormSimpleResponseDto> = {
  selectedItems: T[];
  setSelectedItems: (value: T[]) => void;
  text: string;
  setText: React.Dispatch<string>;
  handleAddItem: (props: T) => void;
  handleRemoveItem: (props: T) => void;
};

export type NewCustomSnowstormSimpleResponseDto = {
  id?: string | null;
  name?: string | null;
  isInActive?: boolean;
  background?: ColorKeys;
};
