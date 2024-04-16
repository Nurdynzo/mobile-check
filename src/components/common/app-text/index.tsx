import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {useColors} from '@/hooks/useColors';
import {typography} from '@/resources/fonts';
import {textAlignStyles} from './styles';
import {AppTextProps} from './type';
import {EMPTY_STRING} from '@/utils/constants';

/**
 * @param text defaults to EMPTY_STRING
 * @param type defaults to label_semibold
 * @param textTransform defaults to nones
 * @param align defaults to auto
 * @param color defaults to black
 */
const AppText: FunctionComponent<AppTextProps> = ({
  text = EMPTY_STRING,
  color = 'black',
  type = 'label_semibold',
  align = 'auto',
  textTransform = 'none',
  style,
  onPress,
  textDecorationLine,
  ...otherTextProps
}) => {
  const {colors} = useColors();

  const textAlign = textAlignStyles[align];
  const textType = typography[type];
  const textColor = {color: colors[color]};

  const baseTextStyle = {
    ...textType,
    ...textColor,
    ...textAlign,
  };

  return (
    <Text
      onPress={onPress}
      style={[
        baseTextStyle,
        {
          textTransform,
          textDecorationLine,
        },
        style,
      ]}
      {...otherTextProps}>
      {text}
    </Text>
  );
};

export default AppText;
