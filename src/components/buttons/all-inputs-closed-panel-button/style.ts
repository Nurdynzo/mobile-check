import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const allInputsClosedPanelButtonStyle = (
  colors: ColorDefinitions,
  marginTop?: number,
  isPreviewing?: boolean,
) => {
  return StyleSheet.create({
    container: {
      marginTop: wp(marginTop || 0),
      paddingHorizontal: 12,
      borderColor: colors.transparent,
      justifyContent: 'space-between',
    },
    icon: {
      marginLeft: wp(8),
      transform: [{rotate: isPreviewing ? '0deg' : '180deg'}],
    },
  });
};
