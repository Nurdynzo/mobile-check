import {StyleSheet} from 'react-native';

export const nestedFormStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    paddingVertical: 8,
    width: undefined,
    height: undefined,
  },
  rightIcon: {marginLeft: 8},
  leftIcon: {marginRight: 8},
});
