import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const insuranceHistoryStyles = ({
  colors,
}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {
      gap: wp(12),
      backgroundColor: colors?.white,
      padding: wp(12),
      borderRadius: wp(10),
    },
    editContainer: {height: '100%'},
    btn: {
      paddingVertical: wp(8),
      width: undefined,
      height: undefined,
      alignSelf: 'flex-start',
    },
  });

export const insuranceHistoryCardStyles = StyleSheet.create({
  container: {gap: wp(16)},
  optionBtn: {position: 'absolute', top: 0, right: 0},
});

export const insuranceFormSheetStyles = StyleSheet.create({
  container: {
    gap: wp(20),
    paddingHorizontal: wp(24),
    borderRadius: wp(10),
  },
  flex1: {flex: 1},
  footerContainer: {
    paddingHorizontal: wp(24),
    paddingTop: wp(16),
    paddingBottom: wp(32),
  },
});
