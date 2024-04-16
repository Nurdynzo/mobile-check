import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const exitWrapperStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      gap: wp(16),
      paddingHorizontal: wp(24),
    },
    textCard: {
      padding: wp(16),
      backgroundColor: colors.neutral25,
      borderRadius: wp(10),
      gap: wp(12),
    },
  });
