import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {investigationToggleStyles} from './styles';
import {wp} from '@/resources/config';

const InvestigationToggle = ({
  text = 'text',
  isSelected,
  onPress,
  shouldFlex = true,
  paddingHorizontal = wp(10),
}: {
  text?: string;
  isSelected: boolean;
  shouldFlex?: boolean;
  onPress: VoidFunction;
  paddingHorizontal?: number;
}) => {
  const {colors} = useColors();
  const styles = investigationToggleStyles({
    colors,
    isSelected,
    shouldFlex,
    paddingHorizontal,
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText
        onPress={onPress}
        color={isSelected ? 'white' : 'text400'}
        text={text}
        align="center"
      />
    </TouchableOpacity>
  );
};

export default InvestigationToggle;
