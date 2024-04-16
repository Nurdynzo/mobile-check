import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../../../../resources/colors';

export const invoiceStatusStyles = ({
  colors,
}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors?.neutral100,
      flexDirection: 'row',
      borderRadius: 10,
    },
    image: {marginHorizontal: 8},
  });
