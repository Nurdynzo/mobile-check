import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';

export const addItemFormStyles = ({colors}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {gap: 16},
    quantitySubmitConatainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    quantityContainer: {flex: 1},
    submitBtn: {
      padding: 8,
      backgroundColor: colors?.white,
      borderRadius: 32,
      borderWidth: 1,
      borderColor: colors?.primary400,
      marginLeft: 16,
    },
  });
