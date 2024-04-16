import React from 'react';
import {View} from 'react-native';
import {appFormButtonWrapperStyles} from './styles';
import {appFormContainerProps} from './type';

const AppFormButtonWrapper = ({
  children,
  extraStyles,
}: appFormContainerProps) => {
  return (
    <View style={[appFormButtonWrapperStyles().container, extraStyles]}>
      {children}
    </View>
  );
};

export default AppFormButtonWrapper;
