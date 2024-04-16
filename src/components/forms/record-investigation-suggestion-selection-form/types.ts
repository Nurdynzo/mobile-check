import {ViewStyle} from 'react-native';
import {NewCustomSnowstormSimpleResponseDto} from '../all-inputs-suggestion-form/types';

export type RecordInvestigationSuggestionSelectionFormProps = {
  isSingleSelect?: boolean;
  expandSheetHeaderTitle: string;
  suggestions: NewCustomSnowstormSimpleResponseDto[];
  showRightView?: boolean;
  extraBaseContainerStyle?: ViewStyle;
  toggleButton?: React.JSX.Element;
  formProps: {
    selectedItems: NewCustomSnowstormSimpleResponseDto[];
    setSelectedItems: (value: NewCustomSnowstormSimpleResponseDto[]) => void;
    text: string;
    setText: React.Dispatch<string>;
    handleAddItem: (props: NewCustomSnowstormSimpleResponseDto) => void;
    handleRemoveItem: (props: NewCustomSnowstormSimpleResponseDto) => void;
  };
  placeholder?: string;
  height?: number;
};
