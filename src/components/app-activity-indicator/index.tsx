import {useColors} from '@/hooks/useColors';
import {ColorKeys} from '@/resources/colors';
import React, {FunctionComponent} from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';

const AppActivityIndicator: FunctionComponent<{
  color?: ColorKeys;
  style?: ViewStyle;
  size?: number;
}> = ({color = 'primary400', style, size = 20}) => {
  const {colors} = useColors();
  return (
    <ActivityIndicator style={style} size={size} color={colors?.[color]} />
  );
};

export default AppActivityIndicator;
