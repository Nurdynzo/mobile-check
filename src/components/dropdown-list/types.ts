import {FlatListProps, View} from 'react-native';

export type SearchSelectDropdownProps<T> = {
  viewRef: React.RefObject<View>;
  visible?: boolean;
  isLoading?: boolean;
  offset?: number;
} & FlatListProps<T>;
