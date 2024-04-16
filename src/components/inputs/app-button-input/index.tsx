import React, {FunctionComponent} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {inputBtnStyles} from './style';
import {AppButtonInputProps} from './type';
import {useColors} from '@/hooks/useColors';
import {AppText} from '@/components/common';

/**
 *
 * @param placeholder defaults to 'Placeholder'
 * @param buttonColor defaults to white
 * @param textColor defaults to black
 * @param textSize defaults to body_1_medium
 * @param labelFontType defaults to label_semibold
 * @param showRequiredTag defaults to false
 */
const AppButtonInput: FunctionComponent<AppButtonInputProps> = ({
  height,
  width,
  RightContent,
  LeftContent,
  label,
  onPress,
  style,
  value,
  isFocused,
  placeholder = 'Placeholder',
  buttonColor = 'white',
  textColor = 'black',
  // TODO(Franklyn): This should be renamed to textType
  textSize = 'body_1_medium',
  disabled,
  extraFontStyle,
  labelFontType = 'label_semibold',
  labelStyles,
  showRequiredTag = false,
  inputContainerStyle,
}) => {
  const {colors} = useColors();

  const styles = inputBtnStyles({
    colors,
    isFocus: isFocused,
    buttonColor,
    disabled,
    height,
    width,
  });

  return (
    <View style={[styles.container, style]}>
      {label && (
        <AppText
          text={[
            label,
            showRequiredTag && <AppText key={0} text={'*'} color={'text400'} />,
          ]}
          type={labelFontType}
          color="text300"
          textTransform={'none'}
          style={[styles.label, labelStyles]}
        />
      )}
      <TouchableOpacity
        disabled={disabled}
        style={[styles.inputContainer, inputContainerStyle]}
        activeOpacity={1}
        onPress={onPress}>
        {LeftContent}
        <AppText
          type={textSize}
          text={value || placeholder}
          color={value ? textColor : 'text50'}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[{flex: 1}, extraFontStyle]}
          numberOfLines={1}
        />
        {RightContent}
      </TouchableOpacity>
    </View>
  );
};

export default AppButtonInput;
