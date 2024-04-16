import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {
  SelectItem,
  SelectItemOptionsProp,
} from '../../../types/selectItemsheet';
import {AppButtonInputProps} from '../app-button-input/type';

export type AppSelectInputProps<T> = {
  style?: ViewStyle;
  onChange?: (item: SelectItem<T>) => void;
  value?: string;
  selectOptions?: SelectItemOptionsProp<T>;
  showSearchInput?: boolean;
  searchPlaceholder?: string;
  isOptionsLoading?: boolean;
  onSearchInputChange?: (value: string) => void;
  searchValue?: string;
  HeaderRightContent?: ReactNode;
  error?: {
    value: boolean;
    onPressRefresh?: () => void;
    refreshBtnText?: string;
    title?: string;
    description?: string;
  };
} & AppButtonInputProps;
