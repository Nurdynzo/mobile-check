import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const SocratesSuggestionToggleButtonStyles = ({
  colors,
}: {
  colors?: ColorDefinitions;
}) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: wp(4),
      backgroundColor: colors?.neutral25,
      borderRadius: wp(32),
    },
  });
};
