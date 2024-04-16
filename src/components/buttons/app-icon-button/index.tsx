import {TouchableOpacity} from 'react-native';
import {AppIconButtonProps} from './types';
import React from 'react';
import {useColors} from '@/hooks/useColors';
import {appIconButtonStyles} from './styles';

/** This component is used as the trailing button on the appbar in Presenting
 * Complaints and other screens with trailing icon buttons
 *
 * @param height defaults to 44 and it's scaled by wp
 * @param width defaults to 48 and it's scaled by wp
 * @param borderRadius defaults to 10 and it's scaled by wp
 * @param borderColor defaults to primay400
 */
const AppIconButton = ({
  isDisabled,
  onPress,
  icon,
  buttonColor,
  borderColor = 'primary400',
  borderRadius = 10,
  height = 44,
  width = 48,
  containerStyle,
}: AppIconButtonProps) => {
  const {colors} = useColors();

  const styles = appIconButtonStyles({
    isDisabled,
    colors,
    height,
    width,
    borderColor,
    borderRadius,
    buttonColor,
  });

  return (
    <TouchableOpacity
      activeOpacity={isDisabled ? 1 : 0.8}
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {icon}
    </TouchableOpacity>
  );
};

export default AppIconButton;
