import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const roundedCloseButtonStyles = ({
  height = 18,
  width = 18,
}: {
  height?: number;
  width?: number;
}) => {
  return StyleSheet.create({
    button: {
      height: wp(height),
      width: wp(width),
    },
  });
};
