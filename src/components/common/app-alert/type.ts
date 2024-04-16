import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type appAlertTypes = {
  icon?: ReactNode;
  buttonText?: string;
  title?: string;
  description?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  showButton?: boolean;
  buttonWidth?: number | null;
};
