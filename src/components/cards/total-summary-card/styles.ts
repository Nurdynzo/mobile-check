import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../resources/colors';

export const totalSummaryCardStyles = ({
  colors,
}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors?.neutral100,
      padding: 12,
      borderRadius: 10,
      gap: 8,
    },
    summary: {flexDirection: 'row', justifyContent: 'space-between'},
    paymentDetailsContainer: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      gap: 8,
      backgroundColor: colors?.white,
      paddingHorizontal: 8,
      paddingVertical: 4,
      alignItems: 'center',
      borderRadius: 10,
    },
  });
