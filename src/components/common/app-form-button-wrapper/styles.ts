import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const appFormButtonWrapperStyles = () =>
  StyleSheet.create({
    container: {
      gap: wp(32),
      marginTop: wp(16),
    },
  });
