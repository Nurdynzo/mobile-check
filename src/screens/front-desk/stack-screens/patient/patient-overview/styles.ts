import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';

export const patientOverViewStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    patientInfo: {marginTop: wp(8), marginBottom: wp(16)},
    overviewDetails: {rowGap: wp(16)},
    userIcon: {
      backgroundColor: colors?.primary100,
      width: wp(72),
      height: wp(72),
      borderRadius: wp(72),
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      rowGap: wp(8),
    },
  });
