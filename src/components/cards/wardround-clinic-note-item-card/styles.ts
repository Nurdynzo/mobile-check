import {ColorDefinitions} from '../../../resources/colors';
import {StyleSheet} from 'react-native';

export const noteCardStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      padding: 12,
      backgroundColor: colors?.neutral25,
      borderRadius: 10,
      gap: 8,
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dateTimeContainer: {gap: 2},
    clinic: {paddingRight: 10, flex: 1},
  });
