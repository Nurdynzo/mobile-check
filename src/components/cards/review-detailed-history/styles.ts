import {ColorDefinitions} from '@/resources/colors';
import {StyleSheet} from 'react-native';

export const reviewDetailHistoryStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      gap: 12,
      backgroundColor: colors.white,
      padding: 12,
      borderRadius: 10,
    },
    seperator: {marginVertical: 4},
  });
