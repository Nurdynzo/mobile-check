import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../resources/colors';

export const appSheetStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    overlay: {backgroundColor: colors?.overlay},
  });
