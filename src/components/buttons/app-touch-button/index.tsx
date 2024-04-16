import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../../common/app-text';
import {appButtonStyles} from './styles';
import {appTouchButtonProps} from './type';
import {useColors} from '@/hooks/useColors';

const AppTouchButton = ({
  text = 'Enter Link',
  onPress,
  isDisabled,
  leftIcon,
  rightIcon,
  color = 'primary400',
  height,
  borderRadius,
  extraStyles,
  bg = 'transparent',
  textNumberOfLines,
  flex,
}: appTouchButtonProps) => {
  const handleOnpress = isDisabled ? () => null : onPress;

  const {colors} = useColors();
  const styles = appButtonStyles({flex, height, borderRadius, bg, colors});

  return (
    <>
      <TouchableOpacity
        activeOpacity={isDisabled ? 1 : 0.8}
        onPress={handleOnpress}
        style={[styles.container, extraStyles]}>
        {leftIcon}
        <AppText
          type="button_semibold"
          color={color}
          text={text}
          align={'center'}
          numberOfLines={textNumberOfLines}
        />
        {rightIcon}
      </TouchableOpacity>
    </>
  );
};

export default AppTouchButton;
