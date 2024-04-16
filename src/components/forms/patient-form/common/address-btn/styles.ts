import {StyleSheet} from 'react-native';

export const addressBtnStyles = () =>
  StyleSheet.create({
    container: {flexDirection: 'row', alignItems: 'center'},
    btn: {
      width: undefined,
      height: undefined,
      paddingVertical: 2,
      paddingHorizontal: 8,
      marginLeft: 8,
    },
  });
