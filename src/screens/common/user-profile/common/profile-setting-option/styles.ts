import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const profileSettingOptionStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    option: {
      flexDirection: 'row',
      flex: 1,
      gap: wp(12),
      alignItems: 'center',
    },
    optionContainer: {
      justifyContent: 'flex-start',
      backgroundColor: colors.white,
      padding: wp(12),
      borderRadius: wp(12),
    },
  });
