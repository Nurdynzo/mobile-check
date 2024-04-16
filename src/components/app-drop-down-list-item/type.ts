import {ReactNode} from 'react';
import {ColorKeys} from '../../resources/colors';

export type appDropDownListItemProp = {
  text: string;
  onPress: () => void;
  color?: ColorKeys;
  align?: 'left' | 'center' | 'right';
  icon?: ReactNode;
  selected?: boolean;
  removeRightIcon?: boolean;
};
