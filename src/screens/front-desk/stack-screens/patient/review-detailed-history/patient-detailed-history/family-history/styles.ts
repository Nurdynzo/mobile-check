import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const familyMemberFormSheetStyles = StyleSheet.create({
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
export const familyHistoryStyles = ({
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
    flex1: {flex: 1},
    btn: {
      paddingVertical: wp(8),
      width: undefined,
      height: undefined,
    },
    addViewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    memberListContainer: {gap: wp(16)},
  });
export const familyKinInputStyles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', gap: 16, alignItems: 'flex-end'},
  flex1: {flex: 1},
  btnInput: {flex: 0.8},
});
export const familyMemberCardStyles = StyleSheet.create({
  container: {gap: wp(16)},
  optionBtn: {position: 'absolute', top: 0, right: 0},
  menuOptioncontainer: {rowGap: wp(24)},
  menuOption: {
    paddingVertical: wp(10),
    paddingHorizontal: wp(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const causeOfDeathSearchInputStyles = StyleSheet.create({
  searchIcon: {marginRight: wp(16)},
});

export const deathCauseSearchInputStyles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: wp(16)},
  btnInput: {flex: 1},
});

export const causeOfDeathFormStyles = StyleSheet.create({
  container: {gap: wp(8)},
  fieldsContainer: {gap: wp(20)},
});
