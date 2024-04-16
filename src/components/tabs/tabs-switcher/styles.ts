import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const appTabSwitcherStyles = ({
  colors,
  hasFlex,
}: {
  colors: ColorDefinitions;
  hasFlex?: boolean;
}) =>
  StyleSheet.create({
    tabContainer: {
      backgroundColor: colors?.neutral25,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: wp(32),
      padding: wp(4),
    },
    tab: {
      flex: hasFlex ? 1 : 0,
      alignItems: 'center',
      padding: wp(8),
      borderRadius: wp(23),
    },
    divider: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: -10,
    },
  });
