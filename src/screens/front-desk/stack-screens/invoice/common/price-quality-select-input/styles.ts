import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../../../../resources/colors';

export const priceQualitySelectInputStyles = ({
  colors,
}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 14,
      flex: 1,
      backgroundColor: colors?.white,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors?.neutral100,
      flexDirection: 'row',
    },
    priceValue: {flex: 1},
    divider: {
      height: '100%',
      width: 1,
      backgroundColor: colors?.neutral100,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityValue: {marginHorizontal: 10},
  });
