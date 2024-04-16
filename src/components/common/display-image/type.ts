import {ViewStyle} from 'react-native';

export type AppDisplayImageProps = {
  uri?: string | null;
  size?: number;
  style?: ViewStyle;
  borderRadius?: number;
  isCircular?: boolean;
  shouldCache?: boolean;
};
