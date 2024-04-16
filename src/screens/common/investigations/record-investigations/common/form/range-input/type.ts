import {ColorKeys} from '@/resources/colors';
import VoidFunction from '@/types/voidfunction';
import {ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native';

export interface TitleRowProps {
  title: string;
  hasDropDown: boolean;
  onPressDropDown: VoidFunction;
  onPress?: VoidFunction;
  extraTitleRowStyles?: TextStyle;
}

export interface ToggleSwitchRowProps {
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
}

export interface CounterRowProps {
  count: number;
  setCount?: (count: number) => void;
  name: string;
  showDropDownAfterName?: boolean;
  onPressDropDownAfterName?: VoidFunction;
  onPressAdd: VoidFunction;
  onPressMinus: VoidFunction;
  onChangeText: (text: number) => void;
}

export interface ButtonTypes {
  icon: React.ReactNode;
  bg: ColorKeys;
  borderColor: ColorKeys;
  extraStyles: ViewStyle | Array<ViewStyle>;
  onPress: VoidFunction;
  disabled?: boolean;
}

export type RangeInputProps = {
  title: string;
  onChangeText?: (value: number) => void;
  hasToggle?: boolean;
  hasDropDown?: boolean;
  onPressToggle?: VoidFunction;
  onPressDropDown?: VoidFunction;
  name?: string;
  defaultValue?: number;
  getCount?: (count: number) => void;
  getToggleValue?: (value: boolean) => void;
  customContent?: ReactNode;
  customRightContent?: ReactNode;
  hasBorder?: boolean;
  containerStyles?: ViewStyle;
  extraTitleRowStyles?: TextStyle;
  showDropDownAfterName?: boolean;
  onPressDropDownAfterName?: VoidFunction;
  onPressMinus: VoidFunction;
  onPressAdd: VoidFunction;
};
