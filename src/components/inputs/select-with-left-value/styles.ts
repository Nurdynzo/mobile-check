import {ColorDefinitions} from '@/resources/colors';
import {fs, wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const AppSelectInputWithLeftValueStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    leftValueContainer: {
      marginRight: wp(10),
      paddingRight: wp(20),
      borderColor: colors.text50,
      borderWidth: 0,
      borderRightWidth: wp(1),
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftValueText: {
      fontSize: fs(16),
    },
  });
