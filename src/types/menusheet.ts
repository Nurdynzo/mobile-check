import {ReactNode} from 'react';
import {ColorKeys} from '../resources/colors';

export type OptionProps = {
  color?: ColorKeys;
  icon?: () => ReactNode;
  id?: string;
  label?: string;
  value: string;
  onPress?: () => void;
  disableCloseSheetOnPress?: boolean;
  renderRightIcon?: () => ReactNode;
  valueOptions?: MenuOptionsProp;
  customComponent?: ReactNode;
};

export type MenuOptionsProp = OptionProps[];
