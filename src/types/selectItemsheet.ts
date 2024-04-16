import {ReactNode} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NO_SELECTED_ITEM = undefined as any;

export type SelectItem<T> = {
  id: string | number;
  value: string;
  data?: T;
};

export type ItemOptionProp<T> = {
  item: SelectItem<T>;
  onPress?: () => void;
  disableCloseSheetOnPress?: boolean;
  renderRightIcon?: () => ReactNode;
  itemOptions?: SelectItemOptionsProp<T>;
};

export type SelectItemOptionsProp<T> = ItemOptionProp<T>[];
