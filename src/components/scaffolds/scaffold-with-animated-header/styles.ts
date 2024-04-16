import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const scaffoldWithBackButtonStyles = ({
  colors,
  bodyHorizontalPadding,
}: {
  colors?: ColorDefinitions;
  bodyHorizontalPadding: number;
}) =>
  StyleSheet.create({
    flex1: {flex: 1},
    baseContainer: {
      flex: 1,
      backgroundColor: colors?.default400,
      paddingTop: wp(9),
      overflow: 'hidden',
    },
    patientInfoCard: {marginVertical: wp(16), marginHorizontal: wp(24)},
    bodyHorizontalPadding: {paddingHorizontal: wp(bodyHorizontalPadding)},
  });
