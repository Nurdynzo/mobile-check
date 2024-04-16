import {TypographyKeys} from '@/resources/fonts';
import {ViewStyle} from 'react-native';
import {AppButtonInputProps} from '../app-button-input/type';

export type AppDatePickerProps = {
  style?: ViewStyle;
  onChange?: (date: Date | null) => void;
  value?: Date;
  mode?: 'date' | 'time' | 'datetime';
  maximumDate?: Date;
  minimumDate?: Date;
  labelFontType?: TypographyKeys;
} & Omit<AppButtonInputProps, 'value'>;
