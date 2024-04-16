import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const imageUploadStyles = () =>
  StyleSheet.create({
    container: {flexDirection: 'row', alignItems: 'center'},
    takeBiometrics: {
      width: undefined,
      marginLeft: wp(24),
    },
    dropDownIcon: {marginLeft: wp(8)},
    subTitle: {marginTop: wp(12)},
  });

export const otherIdNumberFormStyles = () =>
  StyleSheet.create({
    container: {gap: wp(16)},
  });
