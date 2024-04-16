import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const patientAwaitingVitalsCardStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: colors?.white,
      borderRadius: wp(10),
      overflow: 'hidden',
    },
    cardContainer: {
      flex: 1,
      gap: wp(16),
      paddingHorizontal: wp(12),
      paddingBottom: wp(16),
    },

    bottomPane: {
      width: '90%',
      alignSelf: 'center',
      borderTopWidth: 0.5,
      borderTopColor: colors.neutral100,
      justifyContent: 'center',
      paddingVertical: wp(8),
    },
  });

export const fullCardDetailsSheetStyles = StyleSheet.create({
  container: {paddingHorizontal: wp(24), gap: wp(16)},
  payContainer: {
    gap: wp(8),
  },
  summaryBtn: {
    paddingVertical: wp(8),
    width: undefined,
    height: undefined,
    alignSelf: 'flex-start',
  },
});
