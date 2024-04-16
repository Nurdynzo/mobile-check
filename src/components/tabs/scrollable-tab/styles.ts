import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const formTabStyles = () =>
  StyleSheet.create({
    tab: {
      paddingHorizontal: wp(12),
      paddingVertical: wp(8),
      borderRadius: wp(30),
      borderWidth: 1,
    },
    tabScrollContainer: {paddingHorizontal: wp(16), gap: wp(8)},
  });
