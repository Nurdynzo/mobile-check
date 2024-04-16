import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';

export const displayImageStyles = ({
  colors,
  size = 50,
  borderRadius,
  isCircular,
}: {
  colors?: ColorDefinitions;
  size?: number;
  borderRadius?: number;
  isCircular?: boolean;
} = {}) =>
  StyleSheet.create({
    imgContainer: {
      width: wp(size),
      height: wp(size),
      borderRadius: isCircular ? wp(size) / 2 : borderRadius,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors?.text50,
    },
    img: {width: '100%', height: '100%'},
    imgPlaceholder: {
      borderRadius: wp(size * 0.7) / 2,
      overflow: 'hidden',
    },
  });
