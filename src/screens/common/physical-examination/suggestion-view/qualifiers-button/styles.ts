import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const physicalExaminationQualifiersButtonStyles = StyleSheet.create({
  sheetContainer: {flex: 1, paddingHorizontal: wp(24), paddingTop: wp(16)},
  footerContainer: {marginTop: wp(24)},
  footerSummaryContainer: {
    flexDirection: 'row',
    flex: 1,
    gap: wp(4),
  },
});
