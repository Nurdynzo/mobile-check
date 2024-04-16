import {PaginationState} from '@/utils/index';
import {ViewStyle, FlatListProps} from 'react-native';

export type PaginatedListViewProps<T> = {
  HeaderComponent?: JSX.Element;
  FooterComponent?: JSX.Element;
  EmptyStateComponent?: JSX.Element;
  onLoadMore: () => void;
  onRefresh: () => void;
  handleFirstPageRefetch: () => void;
  paginationState: PaginationState;
  contentContainerStyle?: ViewStyle | Array<ViewStyle>;
} & Omit<FlatListProps<T>, 'refreshing'>;
