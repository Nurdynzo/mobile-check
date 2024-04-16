import {StyleSheet} from 'react-native';
import {wp} from '@/resources/config';
import {ColorDefinitions} from '@/resources/colors';

export const allInputStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    patientOtherInfoContainer: {
      columnGap: wp(12),
      height: wp(108),
      backgroundColor: colors?.neutral100,
      borderRadius: wp(15),
      paddingHorizontal: wp(16),
      paddingVertical: wp(8),
      rowGap: wp(12),
    },
  });
