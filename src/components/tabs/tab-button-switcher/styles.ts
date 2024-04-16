import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const appTabSwitcherStyles = ({
  colors,
}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    tabContainer: {
      backgroundColor: colors?.neutral25,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 32,
      padding: wp(4),
    },
  });
