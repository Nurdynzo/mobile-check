import {ColorDefinitions} from '@/resources/colors';
import {SCREEN_WIDTH, wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const docViewStyles = ({
  colors,
  isHorizontalScroll,
  verticalHeight,
}: {
  colors?: ColorDefinitions;
  isHorizontalScroll?: boolean;
  verticalHeight?: number;
} = {}) =>
  StyleSheet.create({
    indicatorView: {
      width: wp(48),
      paddingVertical: wp(8),
      backgroundColor: colors?.white,
      position: 'absolute',
      right: 0,
      top: 24,
      borderTopLeftRadius: wp(20),
      borderBottomLeftRadius: wp(20),
    },
    paperContainer: {
      flex: 1,
      height: isHorizontalScroll ? '100%' : verticalHeight,
      width: SCREEN_WIDTH,
      paddingVertical: wp(12),
      paddingHorizontal: wp(24),
    },
    flex1: {flex: 1},
  });
