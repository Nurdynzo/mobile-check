import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const investigationToggleStyles = ({
  isSelected,
  colors,
  shouldFlex,
  paddingHorizontal,
}: {
  colors: ColorDefinitions;
  isSelected?: boolean;
  shouldFlex?: boolean;
  paddingHorizontal?: number;
}) =>
  StyleSheet.create({
    text: {
      padding: wp(10),
      paddingHorizontal,
      backgroundColor: isSelected ? colors.primary400 : colors.transparent,
      flex: shouldFlex ? 1 : 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: colors.neutral100,
    },
  });
