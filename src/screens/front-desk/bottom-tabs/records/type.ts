import {ReactNode} from 'react';

type AlignProps = 'left' | 'center' | 'right';

export type cardProps = {
  title?: string;
  desc?: string;
  onPress?: () => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  hasBorder?: boolean;
  titleAlign?: AlignProps;
  descAlign?: AlignProps;
  subCardTextFull?: boolean;
};

export type RecordsSortType = {
  label: string;
  value: RecordsSortKeysType;
};

export type RecordsSortKeysType =
  | 'fullName'
  | 'fullName desc'
  | 'patientCode'
  | 'patientCode desc'
  | 'male'
  | 'female'
  | 'others'
  | 'age'
  | 'age desc'
  | 'startTime'
  | 'startTime desc'
  | 'appointmentStatus'
  | 'appointmentStatus desc'
  | '';
