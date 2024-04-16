import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';

export const nursePatientStyle = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    tabButton: {
      alignItems: 'center',
      width: undefined,
      paddingVertical: wp(8),
      paddingHorizontal: wp(16),
      borderRadius: wp(23),
    },
    floatingBtn: {
      position: 'absolute',
      bottom: 30,
      right: 10,
      zIndex: 1000,
      width: wp(118),
    },
    header: {
      paddingHorizontal: wp(24),
      backgroundColor: colors?.default400,
    },
    tabSwitcherContainer: {
      alignSelf: 'flex-start',
      marginTop: wp(12),
      marginBottom: wp(16),
      backgroundColor: colors?.white,
    },
  });
