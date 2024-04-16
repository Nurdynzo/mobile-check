import {ViewStyle} from 'react-native';
import {AppScreenProps} from '../app-screen/type';

export type ListRendererScreenProps = AppScreenProps & {
  data: Array<object | number | string>;
  renderItem: (item: object, index: number) => JSX.Element;
  keyExtractor: (item: object, index: number) => object;
  HeaderComponent?: JSX.Element;
  FooterComponent?: JSX.Element;
  EmptyStateComponent?: JSX.Element;
  onLoadMore?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
  loadMore?: boolean;
  contentContainerStyle?: ViewStyle | Array<ViewStyle>;
};
