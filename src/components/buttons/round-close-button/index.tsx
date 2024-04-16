import {XCircleIcon} from '@/assets/svg';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {roundedCloseButtonStyles} from './styles';

const RoundedCloseButton = ({
  height,
  width,
  onClose,
  style,
}: {
  height?: number;
  width?: number;
  onClose: VoidFunction;
  style?: ViewStyle;
}) => {
  const styles = roundedCloseButtonStyles({height, width});
  return (
    <TouchableOpacity onPress={onClose} style={[styles.button, style]}>
      <XCircleIcon height={'100%'} width={'100%'} />
    </TouchableOpacity>
  );
};

export default RoundedCloseButton;
