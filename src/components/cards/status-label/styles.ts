import {StyleSheet} from 'react-native';
import {ColorDefinitions, ColorKeys} from '@/resources/colors';

export const statusLabelStyles = ({
  bg,
  colors,
}: {
  bg: ColorKeys;
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    button: {
      padding: 8,
      paddingHorizontal: 10,
      backgroundColor: colors[`${bg}`],
      flexDirection: 'row',
      gap: 8,
      borderRadius: 8,
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
  });
