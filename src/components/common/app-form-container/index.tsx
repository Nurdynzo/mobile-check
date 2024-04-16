import React from 'react';
import {View} from 'react-native';
import {appFormContainerStyles} from './styles';
import {appFormContainerProps} from './type';

const AppFormContainer = ({
  children,
  extraStyles,
  hasFlex = false,
}: appFormContainerProps) => {
  const style = appFormContainerStyles({hasFlex});

  return <View style={[style.container, extraStyles]}>{children}</View>;
};

export default AppFormContainer;
