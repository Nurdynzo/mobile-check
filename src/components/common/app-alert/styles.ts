import {StyleSheet} from 'react-native';
import {wp} from '@/resources/config';
import {ColorDefinitions} from '@/resources/colors';

export const appAlertStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    sheetContainer: {
      padding: wp(24),
      gap: wp(24),
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: colors?.white,
      borderRadius: wp(10),
    },
    sheetTextWrapper: {
      gap: wp(8),
    },
  });
