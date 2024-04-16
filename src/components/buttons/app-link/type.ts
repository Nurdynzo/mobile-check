import {TypographyKeys} from '@/resources/fonts';
import VoidFunction from '@/types/voidfunction';
import {TextStyle} from 'react-native';

export type appLinkProps = {
  text: string;
  onPress?: VoidFunction;
  color?: string;
  align?: 'left' | 'center' | 'right';
  extraStyles?: TextStyle;
  textType?: TypographyKeys;
};
