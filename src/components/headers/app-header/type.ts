import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type AppHeaderProp = {
  LeftContent?: ReactNode;
  middleTitle?: string;
  MiddleContent?: string;
  RightContent?: ReactNode;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingBottom?: number;
  extraStyles?: ViewStyle;
  onPressBack?: () => void;
};
