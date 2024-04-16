import VoidFunction from '@/types/voidfunction';
import {ReactNode} from 'react';
import {Animated, ViewStyle} from 'react-native';

export type AnimatedAppHeaderProp = {
  screenTitle: string;
  maxHeight?: number;
  minHeight?: number;
  RightContent?: ReactNode;
  onPressBack?: VoidFunction;
  animatedValue: Animated.Value;
  extraStyles?: ViewStyle;
};
