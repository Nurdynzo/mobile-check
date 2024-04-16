import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const intakeOrOutputChartViewStyles = StyleSheet.create({
  subHeaderContainer: {
    gap: wp(16),
    paddingTop: wp(1),
    paddingHorizontal: wp(24),
    paddingBottom: wp(16),
  },
  editBtn: {
    height: undefined,
    paddingHorizontal: wp(16),
    paddingVertical: wp(8),
    width: undefined,
  },
});
