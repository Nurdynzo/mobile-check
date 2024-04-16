import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';

export const recordStyles = ({colors}: {colors?: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      gap: wp(16),
      paddingHorizontal: wp(24),
      paddingBottom: wp(10.5),
    },
    content: {
      gap: wp(10),
    },
    floatingBtn: {
      position: 'absolute',
      bottom: 30,
      right: 10,
      zIndex: 1000,
      width: wp(118),
    },
    overlay: {
      flex: 1,
      backgroundColor: colors?.overlay,
      paddingTop: 200,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      padding: wp(24),
    },
    overlayContent: {
      width: '100%',
      backgroundColor: colors?.white,
      borderRadius: wp(10),
      padding: wp(wp(16)),
      gap: wp(32),
    },
    overlayTop: {
      gap: wp(16),
    },
    calenderBtnWrapper: {justifyContent: 'flex-end', gap: wp(24)},
    gap: {gap: wp(32)},
  });
