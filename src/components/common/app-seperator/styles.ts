import {StyleSheet} from 'react-native';
import {ColorDefinitions, ColorKeys} from '../../../resources/colors';

export const appSeperatorStyles = ({
  colors,
  color = 'neutral100',
}: {colors?: ColorDefinitions; color?: ColorKeys} = {}) =>
  StyleSheet.create({
    container: {height: 1, width: '100%', backgroundColor: colors?.[color]},
  });
