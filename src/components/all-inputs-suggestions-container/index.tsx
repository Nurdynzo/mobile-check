import {useColors} from '@/hooks/useColors';
import React from 'react';
import {View, ScrollView} from 'react-native';
import {allInputsSuggestionsContainerStyles} from './styles';

/** TODO(Philip): if there seems to be issue using this implementation,
 * consider using a Flatlist for this implementation because the suggestion are dynamic.
 * */
const AllInputsSuggestionsContainer = ({
  children,
  marginBottom,
  height = 240,
  leadingComponent,
}: {
  leadingComponent?: JSX.Element;
  children: React.ReactNode;
  marginBottom?: number;
  height?: number;
}) => {
  const {colors} = useColors();
  const styles = allInputsSuggestionsContainerStyles({
    colors,
    height,
    marginBottom,
  });
  return (
    <View style={styles.baseContainer}>
      {leadingComponent}
      <ScrollView nestedScrollEnabled overScrollMode="never">
        <View style={styles.scrollViewContainer}>{children}</View>
      </ScrollView>
    </View>
  );
};

export default AllInputsSuggestionsContainer;
