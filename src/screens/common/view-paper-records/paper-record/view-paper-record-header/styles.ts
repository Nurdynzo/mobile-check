import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const viewPaperRecordsHeaderStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filter: {flexDirection: 'row', alignItems: 'center'},
  actionBtns: {flexDirection: 'row', columnGap: wp(16)},
});
