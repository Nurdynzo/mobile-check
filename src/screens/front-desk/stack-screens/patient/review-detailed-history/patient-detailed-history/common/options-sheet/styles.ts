import {StyleSheet} from 'react-native';

export const optionSheetStyles = StyleSheet.create({
  optionBtn: {position: 'absolute', top: 0, right: 0},
  menuOptioncontainer: {rowGap: 24},
  menuOption: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
