import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const patientAwaitingDoctorCardStyles = ({
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

    topPane: {
      borderTopLeftRadius: wp(8),
      borderTopRightRadius: wp(8),
      backgroundColor: colors.secondary400,
      paddingTop: wp(4.5),
    },
    topPaneContent: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: wp(8),
      backgroundColor: colors.neutral100,
      paddingHorizontal: wp(8),
      paddingVertical: wp(1),
      flex: 1,
      borderTopLeftRadius: wp(8),
      borderTopRightRadius: wp(8),
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
});
