import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

const Column = ({
  children,
  style,
  flex,
  rowGap,
}: {
  children: ReactNode;
  style?: ViewStyle;
  flex?: number;
  rowGap?: number;
}) => {
  const transformedStyle: ViewStyle = {
    flex,
    rowGap,
    ...style,
    flexDirection: 'column',
  };
  return <View style={transformedStyle}>{children}</View>;
};

export default Column;
