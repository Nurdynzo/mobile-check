import {KeyboardType, ViewStyle} from 'react-native';
import {ColorKeys} from '../../../resources/colors';
import {TypographyKeys} from '../../../resources/fonts';
import {
  SelectItem,
  SelectItemOptionsProp,
} from '../../../types/selectItemsheet';

export type AppSelectTextInputProps<T> = {
  label?: string;
  placeholder?: {select: string; text: string};
  value?: {select?: string; text?: string};
  onChange?: {
    select: (item: SelectItem<T>) => void;
    text: (text: string) => void;
  };
  style?: ViewStyle;
  textSize?: TypographyKeys;
  textColor?: ColorKeys;
  borderColor?: ColorKeys | 'transparent';
  inputColor?: ColorKeys | 'transparent';
  disabled?: boolean;
  selectOptions?: SelectItemOptionsProp<T>;
  inputKeyboardType?: KeyboardType;
  showSearchInput?: boolean;
  searchPlaceholder?: string;
  isOptionsLoading?: boolean;
  selectError?: {
    value: boolean;
    onPressRefresh?: () => void;
    refreshBtnText?: string;
    title?: string;
    description?: string;
  };
};
