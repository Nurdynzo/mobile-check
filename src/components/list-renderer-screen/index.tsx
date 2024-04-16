import React from 'react';
import {FlatListProps, View, FlatList, ViewStyle} from 'react-native';
import {listRendererScreenStyles} from './styles';

type ListRendererScreenProps = {
  HeaderComponent?: JSX.Element;
  FooterComponent?: JSX.Element;
  EmptyStateComponent?: JSX.Element;
  onLoadMore?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
  loadMore?: boolean;
  contentContainerStyle?: ViewStyle | Array<ViewStyle>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} & FlatListProps<any>;

// TODO(Zucci): What is the purpose of this component?
const ListRendererScreen = ({
  HeaderComponent,
  FooterComponent,
  EmptyStateComponent,
  onLoadMore,
  contentContainerStyle,
  refreshing,
  onRefresh,
  ...otherFlatListProps
}: ListRendererScreenProps) => {
  const styles = listRendererScreenStyles;

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[contentContainerStyle, styles.default]}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
      refreshing={refreshing}
      extraData={refreshing}
      onRefresh={onRefresh}
      ListEmptyComponent={EmptyStateComponent}
      ItemSeparatorComponent={Separator}
      {...otherFlatListProps}
    />
  );
};

export default ListRendererScreen;

const Separator = () => {
  const styles = listRendererScreenStyles;
  return <View style={styles.gap} />;
};
