import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';

export const appScreenStyles = ({colors}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    flex1: {flex: 1},
    screenBackground: {
      flex: 1,
      overflow: 'hidden',
      backgroundColor: colors?.default400,
    },
  });
