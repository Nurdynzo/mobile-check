import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const appHeaderStyles = ({
  paddingHorizontal,
  paddingBottom,
  paddingVertical = 10.5,
}: {
  paddingHorizontal: number;
  paddingVertical: number;
  paddingBottom: number;
}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: wp(paddingVertical),
      paddingHorizontal: wp(paddingHorizontal),
      paddingBottom: wp(paddingBottom),
    },
    trailingIconPlaceholder: {
      width: wp(48),
      height: wp(44),
    },
  });
