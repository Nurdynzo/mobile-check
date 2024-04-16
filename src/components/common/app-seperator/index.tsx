import React, {FunctionComponent} from 'react';
import {ViewStyle} from 'react-native';
import {View} from 'react-native';
import {useColors} from '../../../hooks/useColors';
import {ColorKeys} from '../../../resources/colors';
import {appSeperatorStyles} from './styles';

const AppSeperator: FunctionComponent<{
  color?: ColorKeys;
  style?: ViewStyle;
}> = ({color, style}) => {
  const {colors} = useColors();
  const styles = appSeperatorStyles({colors, color});
  return <View style={[styles.container, style]} />;
};

export default AppSeperator;
