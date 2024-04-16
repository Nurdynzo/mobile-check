import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const prescribeMedicationStyles = StyleSheet.create({
  gap16: {gap: wp(16)},
  seperator: {marginTop: wp(32), marginBottom: wp(24)},
  clearAll: {alignSelf: 'flex-end', paddingHorizontal: 0},
  addButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 0,
  },
  fields: {gap: wp(16), marginTop: wp(16)},
  summary: {gap: wp(16), paddingTop: wp(16)},
});
