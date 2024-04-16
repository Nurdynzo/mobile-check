import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const patientReassignmentSheetStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    assignButton: {
      marginHorizontal: wp(24),
      marginTop: wp(16),
      marginBottom: wp(32),
    },
    userIcon: {
      backgroundColor: colors?.primary100,
      width: wp(72),
      height: wp(72),
      borderRadius: wp(72),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
