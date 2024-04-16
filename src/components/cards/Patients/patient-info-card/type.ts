import {ColorKeys} from '@/resources/colors';
import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type PatientInfoCardProps = {
  fullName?: string | null;
  code?: string | number | null;
  dateOfBirth?: string;
  gender?: string;
  avatar?: string | null;
  containerStyle?: ViewStyle;
  backgroundColor?: ColorKeys;
  StatusContent?: ReactNode;
};
