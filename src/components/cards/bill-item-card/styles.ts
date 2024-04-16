import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../resources/colors';

export const itemCardStyles = ({colors}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {
      padding: 12,
      backgroundColor: colors?.white,
      borderRadius: 10,
      columnGap: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    detailsContainer: {rowGap: 8, flex: 1},
    quantityContainer: {flexDirection: 'row', alignItems: 'center'},
    divider: {
      height: '100%',
      width: 1,
      backgroundColor: colors?.neutral100,
      marginHorizontal: 8,
    },
  });
