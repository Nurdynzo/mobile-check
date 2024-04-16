import {ColorKeys} from '@/resources/colors';
import {TypographyKeys} from '@/resources/fonts';
import {ViewStyle} from 'react-native';

export type AppIconButtonStyle = {
  color?: ColorKeys;
  borderRadius?: number;
  borderColor?: ColorKeys;
  buttonColor?: ColorKeys | 'white';
  height?: number;
  width?: number;
};

export type AppIconButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  isDisabled?: boolean;
  containerStyle?: ViewStyle;
  textType?: TypographyKeys;
} & AppIconButtonStyle;
