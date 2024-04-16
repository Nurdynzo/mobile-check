import {ColorDefinitions} from '@/resources/colors';
import {AppIconButtonStyle} from './types';
import {StyleSheet} from 'react-native';
import {wp} from '@/resources/config';

export const appIconButtonStyles = ({
  isDisabled,
  colors,
  borderColor = 'primary400',
  borderRadius,
  height,
  width,
  buttonColor = 'white',
}: {
  isDisabled?: boolean;
  colors: ColorDefinitions;
} & AppIconButtonStyle) =>
  StyleSheet.create({
    container: {
      width: wp(width ?? 0),
      height: wp(height ?? 0),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      backgroundColor: colors?.[buttonColor],
      borderRadius: wp(borderRadius ?? 0),
      borderWidth: 1,
      borderColor: colors?.[isDisabled ? 'primary50' : borderColor],
    },
  });
