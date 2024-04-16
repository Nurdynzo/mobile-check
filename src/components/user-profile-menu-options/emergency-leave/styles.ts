import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const emergencyLeaveStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      gap: wp(16),
      paddingHorizontal: wp(24),
    },
  });
