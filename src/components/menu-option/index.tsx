import {useColors} from '@/hooks/useColors';
import {ColorKeys} from '@/resources/colors';
import VoidFunction from '@/types/voidfunction';
import React, {FunctionComponent, ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppRow, AppText} from '../common';
import {menuOptionStyles} from './styles';
import {RightCaretIcon} from '@/assets/svg';

const MenuOption: FunctionComponent<{
  onPress?: VoidFunction;
  valueTextColor?: ColorKeys;
  label: string;
  RightIcon?: ReactNode;
}> = ({onPress, label, valueTextColor = 'text400', RightIcon}) => {
  const {colors} = useColors();
  const styles = menuOptionStyles({
    colors,
    isSelected: false,
  });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.option]}>
      <View style={styles.value}>
        <AppRow>
          <AppText text={label} color={valueTextColor} />
          {RightIcon ?? <RightCaretIcon stroke={colors.text400} />}
        </AppRow>
      </View>
    </TouchableOpacity>
  );
};

export default MenuOption;
