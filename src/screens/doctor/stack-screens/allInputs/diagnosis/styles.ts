import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const diagonisStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    tabButton: {
      alignItems: 'center',
      width: undefined,
      paddingVertical: wp(4),
      paddingHorizontal: wp(16),
      borderRadius: wp(23),
    },
    tabSwitcherContainer: {
      alignSelf: 'flex-start',
      backgroundColor: colors?.neutral25,
      marginBottom: wp(16),
    },
    selectedPillContainer: {
      flexDirection: 'row',
      paddingHorizontal: wp(12),
      paddingVertical: wp(8),
      height: wp(48),
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: colors.neutral100,
    },
    rowSpaceBetween: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    actionClick: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      columnGap: wp(8),
      alignItems: 'center',
      marginTop: wp(16),
      alignSelf: 'flex-end',
    },
    actionText: {
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
    },
    preSavedContainer: {gap: wp(16), marginVertical: wp(16)},
    fieldsContainer: {gap: wp(8)},
    btnSave: {marginTop: wp(16)},
    historyTitle: {paddingTop: wp(24)},
  });
