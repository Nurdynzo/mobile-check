import {ReactNode} from 'react';
import {Animated, FlatListProps} from 'react-native';
import {ViewStyle} from 'react-native';
import {ColorKeys} from '../../../resources/colors';
import {
  ItemOptionProp,
  SelectItem,
  SelectItemOptionsProp,
} from '../../../types/selectItemsheet';
import {ModalizeSheetRef} from '../../../types/sheet';

export type OnSelectItemProp<T> = (props: {item: SelectItem<T>}) => void;

export type MultiSelectItemProps<T> = {
  selectOptions?: SelectItemOptionsProp<T>;
  selectedValue?: string;
  title?: string;
  HeaderRightContent?: ReactNode;
  renderRightIcon?: (props: {isSelected?: boolean}) => ReactNode;
  onSearchInputChange?: (value: string) => void;
  searchValue?: string;
  onSelectItem?: OnSelectItemProp<T>;
  sheetRef?: ModalizeSheetRef;
  closeSheet?: () => void;
  removeHeader?: boolean;
  showSearchInput?: boolean;
  searchPlaceholder?: string;
  onOpen?: () => void;
  onClose?: () => void;
  isLoading?: boolean;
  error?: {
    value: boolean;
    onPressRefresh?: () => void;
    refreshBtnText?: string;
    title?: string;
    description?: string;
  };
  flatlistProps?: Animated.AnimatedProps<
    Omit<
      FlatListProps<ItemOptionProp<T>>,
      | 'data'
      | 'keyExtractor'
      | 'renderItem'
      | 'horizontal'
      | 'showsVerticalScrollIndicator'
      | 'showsHorizontalScrollIndicator'
      | 'ListEmptyComponent'
    >
  >;
};
export type SelectOptionItemProps<T> = {
  optionItem: ItemOptionProp<T>;
  onCloseSheet?: () => void;
  style?: ViewStyle;
  renderRightIcon: (props: {isSelected?: boolean}) => React.ReactNode;
  valueTextColor?: ColorKeys;
  valueOptionTextColor?: ColorKeys;
  selectedValue?: string;
  onPressItem?: OnSelectItemProp<T>;
};
