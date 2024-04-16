import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {appRowStyles} from './styles';
import AlignTypes from '@/types/alignTypes';
import justifyContentType from '@/types/justifyContentType';

/**
 *
 * @param alignItems defaults to center
 * @param columnGap defaults to 16 and it's scaled by wp
 */
const AppRow = ({
  children,
  extraStyles,
  alignItems = 'center',
  justifyContent,
  columnGap = 16,
}: {
  children: ReactNode;
  extraStyles?: ViewStyle;
  alignItems?: AlignTypes;
  isFullWidth?: boolean;
  columnGap?: number;
  justifyContent?: justifyContentType;
}) => {
  const styles = appRowStyles({
    alignItems,
    columnGap,
    justifyContent,
  });

  return <View style={[styles.container, extraStyles]}>{children}</View>;
};

export default AppRow;
