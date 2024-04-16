import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const searchTextInputStyles = () => {
  return StyleSheet.create({
    leftContent: {
      height: wp(15),
      width: wp(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      paddingLeft: wp(15),
    },
  });
};
