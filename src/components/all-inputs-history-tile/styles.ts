import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const allInputsHistoryTileStyles = () => {
  return StyleSheet.create({
    container: {flexDirection: 'row', gap: wp(8)},
    dateTimeContainer: {gap: wp(4)},
    textComponentContainer: {flex: 1},
  });
};
