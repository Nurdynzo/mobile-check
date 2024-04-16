import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const speachTextControlViewStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: wp(16),
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingHorizontal: wp(8),
      paddingVertical: wp(4),
      borderRadius: wp(10),
    },
    soundWave: {
      flex: 1,
      alignItems: 'center',
    },
  });
