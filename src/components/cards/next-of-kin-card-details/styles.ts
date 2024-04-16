import {StyleSheet} from 'react-native';
import {wp} from '@/resources/config';
import {ColorDefinitions} from '@/resources/colors';

export const nextOfKinCardDetailsStyles = ({
  colors,
}: {
  colors?: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      gap: wp(16),
      paddingHorizontal: wp(24),
    },
    card: {
      backgroundColor: colors?.neutral100,
      height: wp(112),
      gap: wp(8),
      borderRadius: wp(10),
      justifyContent: 'center',
      paddingHorizontal: 12,
    },
    cardSubView: {
      gap: wp(16),
      flexDirection: 'row',
    },
    progressIndicator: {height: wp(331), justifyContent: 'center'},
  });
