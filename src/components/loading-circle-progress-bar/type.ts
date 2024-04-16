import {ColorKeys} from '@/resources/colors';
import {FunctionComponent} from 'react';

export interface LoadingCircleProgressBarProps {
  progress?: number;
  size: number;
  strokeWidth: number;
  filledColor?: ColorKeys;
  unfilledColor?: ColorKeys;
  InnerView?: FunctionComponent;
  onPress?: () => void;
  disableOnPress?: boolean;
}
