import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {IHistoryListViewProps} from './type';
import {View} from 'react-native';
import {allInputsHistoryListViewStyles} from './styles';
import AppDivider from '../app-divider';

/**
 *
 * @param estimatedItemSize is set to 40 by default
 * @param height is set to 300px by default
 * @param ItemSeparatorComponent defaults to use the AllInputsHistoryDefaultDivider.
 *
 *
 * Note: This component is referred to as Summary on figma
 */
const AllInputsHistoryListView = <T,>({
  height = 300,
  data,
  renderItem,
  estimatedItemSize = 40,
  itemSeparatorComponent,
  containerStyles,
  removeSeparator,
  keyExtractor,
}: IHistoryListViewProps<T>): JSX.Element => {
  const styles = allInputsHistoryListViewStyles({height});
  return (
    <View style={[styles.container, containerStyles]}>
      <FlashList
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={data}
        keyExtractor={keyExtractor}
        estimatedItemSize={estimatedItemSize}
        ItemSeparatorComponent={
          !removeSeparator
            ? itemSeparatorComponent ?? AllInputsHistoryDefaultDivider
            : undefined
        }
      />
    </View>
  );
};

const AllInputsHistoryDefaultDivider = () => {
  return <AppDivider marginTop={12} marginBottom={8} />;
};

export default AllInputsHistoryListView;
