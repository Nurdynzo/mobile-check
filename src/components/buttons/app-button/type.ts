import {ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {ColorKeys} from '../../../resources/colors';
import {TypographyKeys} from '../../../resources/fonts';

export type AppButtonStyle = {
  /** borderRadius is scaled by wp() and defaults to 10*/
  borderRadius?: number;

  /** height is scaled by wp() and defaults to 44*/
  height?: number;

  /** width is scaled by wp() and defaults to 100%*/
  width?: number | null;

  /** paddingHorizontal is scaled by wp() and defaults to 16*/
  paddingHorizontal?: number;
  buttonColor?: ColorKeys | 'transparent';
  borderWidth?: number;
  borderColor?: ColorKeys | 'transparent';
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  flex?: number;
};

export type AppButtonProps = {
  text?: string;
  onPress?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  containerStyle?: ViewStyle | Array<ViewStyle | undefined>;
  textType?: TypographyKeys;
  textColor?: ColorKeys;
  LeftContent?: ReactNode;
  RightContent?: ReactNode;
  textStyle?: TextStyle;
} & AppButtonStyle;
