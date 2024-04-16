import {ListRenderItem} from '@shopify/flash-list';
import {FC} from 'react';
import {ViewStyle} from 'react-native';

export interface IHistoryListViewProps<T> {
  /** This is set to 300 by default and scaled by wp */
  height?: number;
  data: T[];
  estimatedItemSize?: number;
  containerStyles?: ViewStyle;
  renderItem: ListRenderItem<T> | null | undefined;
  itemSeparatorComponent?: React.ComponentType<FC> | null | undefined;
  removeSeparator?: boolean;
  keyExtractor?: ((item: T, index: number) => string) | undefined;
}
