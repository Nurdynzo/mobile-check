import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const allInputsHistoryListViewStyles = ({
  height = 300,
}: {
  height?: number;
  marginTop?: number;
}) => {
  return StyleSheet.create({
    container: {
      height: wp(height),
    },
  });
};
