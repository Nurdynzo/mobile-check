import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {generateShadow} from '@/utils/helpers';
import {StyleSheet} from 'react-native';

export const dropDownstyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    dropdown: {
      position: 'absolute',
      maxHeight: wp(220),
      marginTop: wp(5),
      overflow: 'hidden',
      borderRadius: wp(10),
      backgroundColor: colors?.white,
      ...generateShadow({depth: 12, color: colors.black}),
    },
    loadingContainer: {paddingVertical: wp(10)},
    flex1: {flex: 1},
  });
