import {ColorKeys} from '@/resources/colors';
import VoidFunction from '@/types/voidfunction';
import {ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native';

export interface TitleRowProps {
  title: string;
  hasDropDown: boolean;
  onPressDropDown: VoidFunction;
  onPress?: VoidFunction;
  // TODO(Zucci): Kindly take a look at this eslint issue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
  extraTitleRowStyles?: TextStyle;
}

export interface ToggleSwitchRowProps {
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
}

export interface CounterRowProps {
  count: number;
  setCount: (count: number) => void;
  name: string;
  // TODO(Zucci): Kindly take a look at this eslint issue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
  // TODO(Zucci): Kindly take a look at this eslint issue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles: any;
}

export interface ButtonTypes {
  icon: React.ReactNode;
  bg: ColorKeys;
  borderColor: ColorKeys;
  // TODO(Zucci): Kindly take a look at this eslint issue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraStyles: any;
  onPress: VoidFunction;
  // TODO(Zucci): Kindly take a look at this eslint issue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
  disabled?: boolean;
}

export interface ButtonTypes {
  icon: React.ReactNode;
  bg: ColorKeys;
  borderColor: ColorKeys;
  // TODO(Zucci): Kindly take a look at this eslint issue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraStyles: any;
  onPress: VoidFunction;
  // TODO(Zucci): Kindly take a look at this eslint issue
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
  disabled?: boolean;
}

export type SignsNumericInputProps = {
  title: string;
  hasToggle?: boolean;
  hasDropDown?: boolean;
  onPressToggle?: VoidFunction;
  onPressDropDown?: VoidFunction;
  name?: string;
  value?: number;
  getCount?: (count: number) => void;
  getToggleValue?: (value: boolean) => void;
  customContent?: ReactNode;
  customRightContent?: ReactNode;
  hasBorder?: boolean;
  containerStyles?: ViewStyle;
  extraTitleRowStyles?: TextStyle;
};
