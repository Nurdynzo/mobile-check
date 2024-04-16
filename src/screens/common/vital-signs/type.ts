import {ColorKeys} from '@/resources/colors';
import VoidFunction from '@/types/voidfunction';
import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type NumericInputProps = {
  title: string;
  hasToggle?: boolean;
  hasSitesDropDown?: boolean;
  onPressSiteDropDown?: VoidFunction;
  hasRangeDropDown?: boolean;
  onPressRangeDropDown?: VoidFunction;
  unitValue?: string;
  count?: number;
  onChangeCount?: (count: string) => void;
  isRightPosition?: boolean;
  onTogglePosition?: (position: boolean) => void;
  customContent?: ReactNode;
  customRightContent?: ReactNode;
  hasBorder?: boolean;
  addSubBy?: number;
  validationError?: string;
  decimalPlaces?: number;
  disable?: boolean;
};

export type ButtonTypes = {
  icon?: ReactNode;
  bg?: ColorKeys;
  borderColor?: ColorKeys;
  extraStyles?: ViewStyle;
  onPress?: VoidFunction;
  disabled?: boolean;
};
