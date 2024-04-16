import {hp, wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const createNewPasswordStyles = StyleSheet.create({
  sheetContainer: {
    padding: wp(16),
    paddingHorizontal: wp(24),
    gap: hp(24),
    flex: 1,
  },
  sheetTextWrapper: {paddingHorizontal: wp(10), gap: hp(8)},
});
