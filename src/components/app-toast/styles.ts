import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../resources/colors';
import {statusColors} from './types';

export const appToastViewStyles = ({
  statusColors,
  colors,
}: {
  colors: ColorDefinitions;
  statusColors: statusColors;
}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: 'transparent',
      paddingHorizontal: 20,
    },
    empty: {height: 4, backgroundColor: colors[statusColors.color3]},
    contentContainer: {flex: 1, paddingVertical: 12, paddingHorizontal: 16},
    toast: {
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: colors[statusColors.color1],
    },
    textContainer: {
      flex: 1,
      gap: 8,
    },
    dismissBtn: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 16,
      backgroundColor: colors[statusColors.color2],
      borderColor: colors[statusColors.color3],
    },
  });
