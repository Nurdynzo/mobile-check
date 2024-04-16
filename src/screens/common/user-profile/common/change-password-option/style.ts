import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const changePasswordOptionStyles = () =>
  StyleSheet.create({
    sheetContainer: {
      paddingHorizontal: wp(24),
      gap: wp(20),
      flex: 1,
    },
    sheetContent: {padding: wp(20), paddingTop: 0, gap: wp(16)},
  });
