import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {fs, wp} from '@/resources/config';

export const tabSwitchStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingHorizontal: wp(1),
      borderBottomWidth: wp(2),
      justifyContent: 'space-between',
      borderBottomColor: colors?.neutral100,
    },
    tab: {
      paddingVertical: wp(10),
      paddingHorizontal: wp(20),
      position: 'relative',
      alignItems: 'center',
    },
    tabContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabIndicator: {
      bottom: wp(-12),
      width: wp(50),
      height: wp(2),
      backgroundColor: 'transparent',
    },
    activeTabIndicator: {
      backgroundColor: colors?.primary400,
    },
    tabText: {
      fontSize: fs(14),
      color: colors?.text300,
      textAlign: 'center',
    },
    activeTabText: {
      color: colors?.primary400,
    },
  });
