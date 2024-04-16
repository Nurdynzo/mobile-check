import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useColors} from '@/hooks/useColors';
import AppText from '../../common/app-text';
import {appButtonStyles} from './styles';
import {AppButtonProps} from './type';
import AppActivityIndicator from '@/components/app-activity-indicator';

/**
 *
 * @param text defaults to Add Label
 * @param textType defaults to button_semibold
 * @param textColor defaults to white
 * @param borderWidth defaults to 1
 */
const AppButton = ({
  height,
  width,
  text = 'Add Label',
  onPress,
  buttonColor,
  isDisabled,
  isLoading,
  containerStyle,
  textType = 'button_semibold',
  textColor = 'white',
  borderColor,
  borderRadius,
  borderWidth = 1,
  LeftContent,
  RightContent,
  borderStyle,
  textStyle,
  paddingHorizontal,
  flex,
}: AppButtonProps) => {
  const {colors} = useColors();

  const isBusy = isDisabled || isLoading;

  const styles = appButtonStyles({
    height,
    width,
    isBusy,
    colors,
    borderColor,
    borderRadius,
    borderWidth,
    buttonColor,
    borderStyle,
    paddingHorizontal,
    flex,
  });

  return (
    <TouchableOpacity
      activeOpacity={isBusy ? 1 : 0.8}
      disabled={isBusy}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {LeftContent}
      {isLoading ? (
        <AppActivityIndicator color={buttonColor} size={25} />
      ) : (
        <AppText
          color={textColor}
          type={textType}
          text={text}
          align={'center'}
          style={textStyle}
        />
      )}
      {RightContent}
    </TouchableOpacity>
  );
};

export default AppButton;
