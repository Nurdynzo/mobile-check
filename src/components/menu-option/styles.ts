import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const menuOptionStyles = ({
  colors,
  isSelected,
}: {colors?: ColorDefinitions; isSelected?: boolean} = {}) =>
  StyleSheet.create({
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: wp(8),
      paddingHorizontal: wp(24),
      backgroundColor: isSelected ? colors?.neutral50 : 'transparent',
    },
    value: {flex: 1},
    itemOptionsContainer: {gap: wp(24), marginTop: wp(16), paddingLeft: wp(12)},
  });
