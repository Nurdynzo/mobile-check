import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const userProfileStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    headerContainer: {
      paddingHorizontal: wp(24),
    },
    wrapper: {
      height: wp(82),
      padding: wp(12),
      borderRadius: wp(10),
    },
    container: {
      flexDirection: 'row',
      gap: wp(12),
      alignItems: 'center',
    },
    detailsContainer: {gap: wp(4)},
    line: {
      flex: 1,
      height: wp(1),
      backgroundColor: colors.neutral100,
      marginLeft: wp(8),
    },
    personalInforCardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    tabsScreen: {gap: wp(16), paddingBottom: wp(100)},
    scrollExtraStyles: {paddingVertical: wp(10), marginBottom: wp(8)},
    sheetContainer: {
      paddingHorizontal: wp(24),
      gap: wp(20),
      flex: 1,
    },
    sheetContent: {padding: wp(20), paddingTop: 0, gap: wp(16)},
    userCardWrapper: {
      padding: wp(12),
      borderRadius: wp(10),
      backgroundColor: colors?.default300,
      marginTop: wp(16),
    },
    userCardContainer: {
      flexDirection: 'row',
      gap: wp(12),
      alignItems: 'center',
    },
    userCardDetailsContainer: {gap: wp(4), flex: 1},
    userCardPrimary: {
      backgroundColor: colors?.white,
      paddingHorizontal: wp(5),
      paddingVertical: wp(2),
      borderRadius: wp(5),
    },
  });
