import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const patientProfileOverlayStyles = () => {
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      bottom: wp(88),
      right: wp(23.92),
      rowGap: wp(16),
    },
  });
};
