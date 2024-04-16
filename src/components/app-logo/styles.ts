import {hp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const appLogoStyles = ({marginBottom = 16}: {marginBottom: number}) =>
  StyleSheet.create({
    container: {alignSelf: 'center', marginBottom: hp(marginBottom)},
  });
