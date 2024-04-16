import {ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {ColorKeys} from '@/resources/colors';
import {TypographyKeys} from '@/resources/fonts';
import VoidFunction from '@/types/voidfunction';

export type AppButtonInputProps = {
  height?: number;
  width?: number;
  RightContent?: ReactNode;
  LeftContent?: ReactNode;
  placeholder?: string;
  label?: string;
  value?: string | ReactNode;
  onPress?: VoidFunction;
  isFocused?: boolean;
  style?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  textSize?: TypographyKeys;
  labelFontType?: TypographyKeys;
  textColor?: ColorKeys;
  buttonColor?: ColorKeys | 'transparent';
  borderColor?: ColorKeys | 'transparent';
  disabled?: boolean;
  extraFontStyle?: TextStyle;
  labelStyles?: TextStyle;
  showRequiredTag?: boolean;
  extraInputContainerStyles?: ViewStyle;
};
