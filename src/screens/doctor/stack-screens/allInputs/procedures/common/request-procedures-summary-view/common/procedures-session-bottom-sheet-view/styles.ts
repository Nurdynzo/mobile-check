import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const proceduresSessionBottomSheetViewStyles = StyleSheet.create({
  sheetContainer: {
    paddingHorizontal: wp(24),
    gap: wp(20),
    flex: 1,
    paddingBottom: 0,
  },
  sheetChildrenContainer: {gap: wp(20), paddingBottom: wp(32)},
});
