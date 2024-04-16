import {StyleSheet} from 'react-native';
import {ColorDefinitions, ColorKeys} from '../../resources/colors';
import {wp} from '../../resources/config';

export const animatedBubbleStyles = ({
  size = 100,
  bgColor = 'alert200',
  colors,
}: {
  colors: ColorDefinitions;
  bgColor?: ColorKeys;
  size?: number;
}) =>
  StyleSheet.create({
    container: {
      width: wp(size),
      height: wp(size),
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      width: wp(size),
      height: wp(size),
      borderRadius: wp(size) / 2,
      backgroundColor: colors[bgColor],
    },
    iconContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
