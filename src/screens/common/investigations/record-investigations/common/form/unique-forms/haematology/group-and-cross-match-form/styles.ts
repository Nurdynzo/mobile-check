import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const groupAndCrossMatchFormStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      gap: wp(16),
      width: wp(199),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.neutral100,
      padding: wp(16),
      borderRadius: wp(10),
    },
    dropdown: {
      padding: wp(20),
      backgroundColor: colors?.transparent,
      borderWidth: wp(1),
      borderColor: colors.neutral100,
      borderRadius: wp(15),
      width: '70%',
    },
  });
