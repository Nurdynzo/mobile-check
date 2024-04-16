import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const landingListCardHeaderStyles = ({
  colors,
  hasInsurance,
}: {colors?: ColorDefinitions; hasInsurance?: boolean} = {}) =>
  StyleSheet.create({
    topPane: {
      borderTopLeftRadius: wp(8),
      borderTopRightRadius: wp(8),
      backgroundColor: colors?.secondary400,
      paddingTop: hasInsurance ? wp(4.5) : 0,
    },
    topPaneContent: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: wp(8),
      backgroundColor: colors?.neutral100,
      paddingHorizontal: wp(8),
      paddingVertical: wp(1),
      flex: 1,
      borderTopLeftRadius: wp(8),
      borderTopRightRadius: wp(8),
    },
  });
