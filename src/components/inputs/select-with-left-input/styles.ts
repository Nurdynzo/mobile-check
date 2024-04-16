import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {typography} from '@/resources/fonts';
import {StyleSheet} from 'react-native';

export const AppSelectInputWithLeftInputStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    miniInputContainer: {
      width: wp(50),
      borderColor: colors.neutral100,
      borderRightWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    miniInput: {
      flex: 1,
      color: colors.text400,
      ...typography.body_1_medium,
      lineHeight: undefined,
    },
    label: {marginBottom: wp(8)},
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.neutral100,
      borderRadius: wp(10),
      padding: 5,
    },
    input: {
      borderWidth: 0,
      paddingHorizontal: wp(10),
    },
  });
