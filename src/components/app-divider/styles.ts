import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../resources/colors';
import {wp} from '@/resources/config';

export const dividerStyles = ({
  marginVertical,
  marginTop,
  marginBottom,
  height,
  colors,
}: {
  height: number;
  marginVertical: number;
  marginTop: number;
  marginBottom: number;
  colors?: ColorDefinitions;
}) =>
  StyleSheet.create({
    dividerLine: {
      width: '100%',
      backgroundColor: colors?.neutral100,
      marginVertical: wp(marginVertical),
      marginTop: wp(marginTop),
      marginBottom: wp(marginBottom),
      height: height,
    },
  });
