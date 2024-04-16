import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {ColorKeys} from '@/resources/colors';
import {MenuOptionsProp, OptionProps} from '@/types/menusheet';
import {ModalizeSheetRef} from '@/types/sheet';

export type onSelectItemProp = (props: {item: string}) => void;

export type AppMenuSheetProps = {
  menuOptions?: MenuOptionsProp;
  selectedValue?: string;
  title?: string;
  type?: string;
  arrayOfOptions?: string[];
  defaultOption?: string;
  HeaderRightContent?: ReactNode;
  topContentAfterTitle?: ReactNode;
  renderRightIcon?: (props: {isSelected?: boolean}) => ReactNode;
  onSelectItem?: onSelectItemProp;
  sheetRef?: ModalizeSheetRef;
  closeSheet?: () => void;
  removeHeader?: boolean;
  showSearchInput?: boolean;
  searchPlaceholder?: string;
  onOpen?: () => void;
  onClose?: () => void;
  isLoading?: boolean;
  onChanged?: onSelectItemProp;
};
export type MenuOptionItemProps = {
  item: OptionProps;
  onCloseSheet?: () => void;
  style?: ViewStyle;
  renderRightIcon: (props: {isSelected?: boolean}) => React.ReactNode;
  valueTextColor?: ColorKeys;
  valueOptionTextColor?: ColorKeys;
  selectedValue?: string;
  onPressItem?: onSelectItemProp;
  onChanged?: onSelectItemProp;
};
