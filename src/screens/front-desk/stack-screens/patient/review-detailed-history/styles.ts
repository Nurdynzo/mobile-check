import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';

export const patientDetailedHistoryStyles = ({
  colors,
  showScrollableTab,
}: {
  colors: ColorDefinitions;
  showScrollableTab: boolean;
}) =>
  StyleSheet.create({
    screenContainer: {paddingBottom: wp(20)},
    patientInfo: {
      marginTop: wp(8),
      marginHorizontal: wp(24),
      marginBottom: wp(16),
    },
    scrollableTab: {
      marginBottom: wp(16),
      display: showScrollableTab ? 'flex' : 'none',
    },
    overviewDetails: {rowGap: wp(16)},
    userIcon: {
      backgroundColor: colors?.primary100,
      width: wp(72),
      height: wp(72),
      borderRadius: wp(72),
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      rowGap: wp(4),
    },
    detailedHistoryContainer: {gap: wp(16)},
  });
