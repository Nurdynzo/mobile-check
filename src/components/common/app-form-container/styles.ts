import {hp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const appFormContainerStyles = ({hasFlex}: {hasFlex?: boolean}) =>
  StyleSheet.create({
    container: {
      flex: hasFlex ? 1 : 0,
      gap: hp(24),
    },
  });
