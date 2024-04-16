import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const recordInvestigationSeperatedToggleButtonStyles = ({
  isSelected,
  colors,
}: {
  colors: ColorDefinitions;
  isSelected?: boolean;
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
    text: {
      padding: wp(10),
      backgroundColor: isSelected ? colors.primary400 : colors.transparent,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(10),
    },
  });
