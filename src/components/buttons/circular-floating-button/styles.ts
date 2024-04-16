import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import PositionTypes from '@/types/positionTypes';
import {StyleSheet} from 'react-native';

export const circularFloatingButtonStyles = ({
  top,
  bottom,
  left,
  right,
  size,
  colors,
  position,
}: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size: number;
  colors: ColorDefinitions;
  position: PositionTypes;
}) => {
  return StyleSheet.create({
    button: {
      top: top ? wp(top) : top,
      bottom: bottom ? wp(bottom) : bottom,
      left: left ? wp(left) : left,
      right: right ? wp(right) : right,
      position,
      height: wp(size),
      width: wp(size),
      borderRadius: wp(size / 2),
      borderWidth: 1,
      borderColor: colors.primary400,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
