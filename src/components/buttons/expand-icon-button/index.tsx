import {ExpandIcon} from '@/assets/svg';
import {detectTouch} from '@/resources/config';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const ExpandIconButton = ({onPress}: {onPress: VoidFunction}) => {
  return (
    <TouchableOpacity onPress={onPress} hitSlop={detectTouch}>
      <ExpandIcon />
    </TouchableOpacity>
  );
};

export default ExpandIconButton;
