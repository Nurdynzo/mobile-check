import {TextStyle, ViewStyle} from 'react-native';
import {ColorKeys} from '../../../resources/colors';
import {TypographyKeys} from '../../../resources/fonts';

export type ToggleSize = 'small' | 'medium' | 'large';
export type OnTogglePress = (isOn: boolean) => void;
export type ToggleDimensions = {
  width: number;
  padding: number;
  circleWidth: number;
  circleHeight: number;
  translateX: number;
};

export type ToggleSwitchProps = {
  isOn: boolean;
  label?: string;
  labelType?: TypographyKeys;
  labelColor?: ColorKeys;
  labelPosition?: 'left' | 'right';
  onColor?: ColorKeys;
  offColor?: ColorKeys;
  size?: ToggleSize;
  labelStyle?: TextStyle | TextStyle[];
  thumbOnStyle?: ViewStyle | ViewStyle[];
  thumbOffStyle?: ViewStyle | ViewStyle[];
  trackOnStyle?: ViewStyle | ViewStyle[];
  trackOffStyle?: ViewStyle | ViewStyle[];
  onToggle?: OnTogglePress;
  icon?: React.ReactNode;
  disabled?: boolean;
  animationSpeed?: number;
  useNativeDriver?: boolean;
  circleColor?: string;
  hitSlop?:
    | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      }
    | number;
};
