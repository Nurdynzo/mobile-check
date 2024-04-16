import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const patientInfoEditStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      gap: wp(12),
      backgroundColor: colors?.white,
      padding: wp(12),
      borderRadius: wp(10),
    },
    editContainer: {height: '100%'},
  });
