import {StyleSheet} from 'react-native';
import {MENU_PADDING} from '../../../globals/Const';

export const insuranceCardDetailsStyles = () =>
  StyleSheet.create({
    container: {
      gap: 16,
      paddingHorizontal: MENU_PADDING,
    },
    generalRowWrapper: {
      gap: 16,
    },
  });
