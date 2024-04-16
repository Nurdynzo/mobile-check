import {ColorDefinitions} from '@/resources/colors';
import {StyleSheet} from 'react-native';

export const mostRecentBillStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      gap: 12,
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 10,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    itemCard: {backgroundColor: colors.neutral25},
  });
