import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const paginatedListViewStyles = StyleSheet.create({
  default: {paddingBottom: 10},
  seperator: {height: wp(16), width: '100%'},
  activityIndicator: {paddingVertical: wp(10)},
});
