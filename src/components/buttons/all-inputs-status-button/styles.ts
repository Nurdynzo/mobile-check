import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const allInputsStatusButtonStyles = ({
  colors,
  borderColor,
}: {
  colors: ColorDefinitions;
  borderColor: ColorKeys;
}) => {
  return StyleSheet.create({
    button: {
      gap: wp(4),
      flexDirection: 'row',
      paddingVertical: wp(2),
      paddingHorizontal: wp(12),
      alignItems: 'center',
      borderRadius: wp(16),
      backgroundColor: colors.transparent,
      borderColor: colors[borderColor || 'alert500'],
      borderWidth: wp(1),
      alignSelf: 'flex-start',
    },
  });
};
