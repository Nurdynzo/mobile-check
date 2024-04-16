import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const cardTitleStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    line: {
      flex: 1,
      height: wp(1),
      backgroundColor: colors.neutral100,
      marginLeft: wp(8),
    },
    personalInforCardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
