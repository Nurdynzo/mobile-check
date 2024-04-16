import {ExpandIconButton} from '@/components/buttons';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {View} from 'react-native';
import {suggestionSelectionLeadingViewStyles} from './styles';

const SuggestionSelectionLeadingView = ({
  onTapExpand,
  toggleButton,
}: {
  onTapExpand: VoidFunction;
  toggleButton?: React.JSX.Element;
}) => {
  const styles = suggestionSelectionLeadingViewStyles({toggleButton});
  return (
    <View style={styles.container}>
      {toggleButton ?? <></>}
      <ExpandIconButton onPress={onTapExpand} />
    </View>
  );
};

export default SuggestionSelectionLeadingView;
