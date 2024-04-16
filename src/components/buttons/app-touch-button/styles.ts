import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const appButtonStyles = ({
  height = 40,
  borderRadius = 10,
  bg,
  colors,
  flex,
}: {
  flex?: number;
  height?: number;
  borderRadius?: number;
  bg: ColorKeys;
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      flex,
      height: wp(height),
      justifyContent: 'center',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      gap: wp(8),
      alignSelf: 'center',
      borderRadius: wp(borderRadius),
      backgroundColor: colors[bg],
    },
  });
