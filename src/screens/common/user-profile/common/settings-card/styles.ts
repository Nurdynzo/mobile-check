import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const settingsCardStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    personalInfoCard: {
      flex: 1,
      backgroundColor: colors.white,
      padding: wp(12),
      gap: wp(10),
      borderRadius: wp(10),
    },
    settingsCard: {gap: wp(32), marginTop: wp(10)},
  });
