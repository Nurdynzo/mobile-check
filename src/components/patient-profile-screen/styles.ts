import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';

export const profileNavCardStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors?.white,
      padding: wp(12),
      alignItems: 'center',
      borderRadius: wp(10),
    },
    contentContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: wp(12),
    },
    iconContainer: {
      padding: wp(6),
      backgroundColor: colors?.default300,
      borderRadius: wp(24),
    },
  });

export const patientProfileStyles = StyleSheet.create({
  container: {paddingVertical: wp(8)},
  navsList: {rowGap: wp(16), paddingVertical: wp(16)},
});
