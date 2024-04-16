import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../resources/colors';
import {wp} from '@/resources/config';

export const searchResultCardStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    container: {
      height: wp(40),
      width: '100%',
      paddingHorizontal: wp(24),
      backgroundColor: colors.white,
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: wp(15),
    },
  });
