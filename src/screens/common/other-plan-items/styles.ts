import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const otherPlanItemsStyles = StyleSheet.create({
  gap16: {gap: wp(16)},
  saveBtn: {
    width: undefined,
    marginTop: wp(32),
  },
  seperator: {marginTop: wp(32), marginBottom: wp(24)},
  patientInfoCard: {marginHorizontal: wp(24), marginBottom: wp(16)},
  baseinputContentContainer: {marginBottom: wp(248.6)},
  containerStyle: {paddingHorizontal: wp(20)},
});
