import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../../resources/colors';

export const patientStatusLabelStyles = ({
  colors,
}: {
  colors?: ColorDefinitions;
}) =>
  StyleSheet.create({
    button: {
      padding: 8,
      paddingHorizontal: 10,
      backgroundColor: colors?.primary25,
      flexDirection: 'row',
      gap: 8,
      borderRadius: 8,
      alignSelf: 'flex-start',
    },
  });
