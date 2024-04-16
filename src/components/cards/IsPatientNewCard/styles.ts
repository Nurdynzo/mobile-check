import {ColorDefinitions} from '@/resources/colors';
import {StyleSheet} from 'react-native';

export const isPatientNewCardStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    headerStatus: {
      paddingVertical: 2,
      paddingHorizontal: 8,
      backgroundColor: colors.primary25,
      borderRadius: 8,
    },
  });
