import {ColorKeys} from '@/resources/colors';
import {TypographyKeys} from '@/resources/fonts';
import VoidFunction from '@/types/voidfunction';
import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type RecordRowProps = {
  children?: ReactNode;
  detail?: string;
  icon?: ReactNode;
  value?: string;
  hasInfo?: boolean;
  hasDropDown?: boolean;
  onPressInfo?: VoidFunction;
  onPressDropDown?: VoidFunction;
  customFontSize?: number;
  detailsColor?: ColorKeys;
  detailType?: TypographyKeys;
  extraCardRowStyles?: ViewStyle;
  extraRecordRowStyles?: ViewStyle;
};
