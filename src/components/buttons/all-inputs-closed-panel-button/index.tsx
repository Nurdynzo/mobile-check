import React from 'react';
import AppButton from '../app-button';
import {AllInputsClosedPanelButtonProps} from './type';
import {DownCaretIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import {allInputsClosedPanelButtonStyle} from './style';

/**
 *
 * @param marginTop defaults to 16
 * @param textType defaults to body_1_semibold
 */
const AllInputsClosedPanelButton = ({
  height,
  onPress,
  text,
  marginTop = 16,
  textType = 'body_1_semibold',
  isPreviewing,
}: AllInputsClosedPanelButtonProps) => {
  const {colors} = useColors();
  const style = allInputsClosedPanelButtonStyle(
    colors,
    marginTop,
    isPreviewing,
  );
  return (
    <AppButton
      text={text}
      height={height}
      onPress={onPress}
      buttonColor={'white'}
      textColor={'text400'}
      textType={textType}
      containerStyle={style.container}
      RightContent={
        <DownCaretIcon stroke={colors.text400} style={style.icon} />
      }
    />
  );
};

export default AllInputsClosedPanelButton;
