import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const navigationCardStyles = ({
  height,
  colors,
}: {
  height: number;
  colors: ColorDefinitions;
}) => {
  return StyleSheet.create({
    container: {
      height: wp(height),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: wp(10),
      rowGap: wp(8),
      paddingHorizontal: wp(12),
    },
  });
};
