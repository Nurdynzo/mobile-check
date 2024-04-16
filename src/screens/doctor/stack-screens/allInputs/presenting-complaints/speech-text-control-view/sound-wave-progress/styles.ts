import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {StyleSheet} from 'react-native';

export const soundWaveProgressStyles = ({
  filledColor = 'primary400',
  height = 30,
  width = 200,
  unFilledColor = 'neutral100',
  colors,
}: {
  colors?: ColorDefinitions;
  unFilledColor?: ColorKeys;
  filledColor?: ColorKeys;
  width?: number;
  height?: number;
} = {}) =>
  StyleSheet.create({
    container: {width: width, height: height, overflow: 'hidden'},
    unFilledContainer: {
      width: width,
      height: height,
      backgroundColor: colors?.[unFilledColor],
      overflow: 'hidden',
    },
    filledContainer: {
      backgroundColor: colors?.[filledColor],
      position: 'absolute',
      top: 0,
      bottom: 0,
    },
  });
