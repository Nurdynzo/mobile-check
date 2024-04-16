import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const animatedAppHeaderStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    trailingIconPlaceholder: {
      width: wp(48),
      height: wp(44),
    },
    backButton: {
      height: wp(44),
      width: wp(48),
      justifyContent: 'center',
    },
  });
};
