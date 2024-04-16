import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const pillStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      paddingVertical: wp(6),
      paddingHorizontal: wp(12),
      backgroundColor: colors.default300,
      alignSelf: 'flex-start',
      borderRadius: wp(30),
    },
  });
