import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const recordInvestigationToggleButtonStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      height: wp(50),
      width: '100%',
      backgroundColor: colors.neutral50,
      borderRadius: wp(10),
      justifyContent: 'center',
      padding: wp(5),
    },
  });
