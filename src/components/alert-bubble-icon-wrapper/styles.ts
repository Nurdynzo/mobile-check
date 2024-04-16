import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const alertBubbleIconWrapperStyles = (backgroundColor: string) => {
  return StyleSheet.create({
    container: {
      backgroundColor,
      width: wp(72),
      height: wp(72),
      borderRadius: wp(72),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
