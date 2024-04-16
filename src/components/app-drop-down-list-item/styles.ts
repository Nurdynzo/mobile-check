import {StyleSheet} from 'react-native';
import {MENU_PADDING} from '../../globals/Const';
import {ColorDefinitions} from '../../resources/colors';

export const appDropDownListItemStyle = ({
  colors,
  selected,
}: {
  colors: ColorDefinitions;
  selected?: boolean;
}) =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
      backgroundColor: selected ? colors.neutral50 : 'transparent',
      paddingHorizontal: MENU_PADDING,
      borderRadius: 10,
    },
  });
