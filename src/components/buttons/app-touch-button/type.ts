import {ReactNode} from 'react';
import {ColorKeys} from '@/resources/colors';
import {ViewStyle} from 'react-native';

export type appTouchButtonProps = {
  /** This is scaled by wp and defaults to 40 */
  height?: number;
  /** This is scaled by wp and defaults to 10 */
  borderRadius?: number;
  text: string;
  onPress?: () => void;
  bg?: ColorKeys;
  isDisabled?: boolean;
  hasPadding?: boolean;
  width?: string | number;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  color?: ColorKeys;
  extraStyles?: ViewStyle;
  textNumberOfLines?: number;
  flex?: number;
};
