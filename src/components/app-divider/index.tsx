import React from 'react';
import {View} from 'react-native';
import {dividerStyles} from './styles';
import {useColors} from '../../hooks/useColors';

/**
 *
 * @param height defaults to 1
 * @param maringVertical defaults to 16 and it's scaled by wp
 * @param marginTop defaults to 0 and it's scaled by wp
 * @param marginBottom defaults to 0 and it's scaled by wp
 *
 * Note: User either marginVertical or marginTop and marginBottom
 */
const AppDivider = ({
  height = 1,
  marginVertical = 16,
  marginBottom = 0,
  marginTop = 0,
}: {
  height?: number;
  marginVertical?: number;
  marginTop?: number;
  marginBottom?: number;
}) => {
  const {colors} = useColors();
  const divider = dividerStyles({
    height,
    marginVertical,
    marginBottom,
    marginTop,
    colors,
  });
  return <View style={divider.dividerLine} />;
};

export default AppDivider;
