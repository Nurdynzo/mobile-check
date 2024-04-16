import React from 'react';
import {TouchableOpacity} from 'react-native';
import {circularFloatingButtonStyles} from './styles';
import {useColors} from '@/hooks/useColors';
import PositionTypes from '@/types/positionTypes';
import VoidFunction from '@/types/voidfunction';

/**
 * This component used to make the floating action button in all input screen et al.s
 *
 * @param size defaults to 48, it's passed to height and width property and is scaled by wp
 * @param position defaults to relative
 */
const CircularFloatingButton = ({
  top,
  bottom,
  left,
  right,
  size = 48,
  icon,
  position = 'absolute',
  onPress,
}: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size?: number;
  icon: JSX.Element;
  position?: PositionTypes;
  onPress: VoidFunction;
}) => {
  const {colors} = useColors();
  const styles = circularFloatingButtonStyles({
    size,
    colors,
    top,
    bottom,
    left,
    right,
    position,
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {icon}
    </TouchableOpacity>
  );
};

export default CircularFloatingButton;
