import React from 'react';
import {View} from 'react-native';
import InvestigationToggle from '../investigation-toggle';
import {wp} from '@/resources/config';
import {cellCountType} from './type';
import {investigationCellCountSelectionStyles} from './styles';

/** @description refer to doc/InvestigationCellCountSelectionView to see a picture. */
const InvestigationCellCountSelectionView = ({
  selected,
  getSelectedTab = item => item,
  data = [],
}: {
  selected?: cellCountType;
  getSelectedTab: (tab: cellCountType) => void;
  data: Array<{id: number; name: cellCountType}>;
}) => {
  return (
    <View style={investigationCellCountSelectionStyles.container}>
      {data.map(item => (
        <InvestigationToggle
          text={item.name}
          key={item.id}
          shouldFlex={false}
          isSelected={selected === item.name}
          onPress={() => getSelectedTab(item.name)}
          paddingHorizontal={wp(20)}
        />
      ))}
    </View>
  );
};

export default InvestigationCellCountSelectionView;
