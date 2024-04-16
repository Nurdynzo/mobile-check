import React, {ReactNode} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {useColors} from '@/hooks/useColors';
import {ColorKeys} from '@/resources/colors';
import {TypographyKeys} from '@/resources/fonts';
import {AppText} from '../../common';
import {statusLabelStyles} from './styles';

const StatusLabel = ({
  icon,
  text = 'Button',
  bg = 'alert500',
  color = 'text400',
  leftIcon,
  style,
  textType = 'status_tag_semibold',
  onPressStatusLabel,
}: {
  icon?: ReactNode;
  text?: string;
  bg: ColorKeys;
  color?: ColorKeys;
  leftIcon?: ReactNode;
  style?: ViewStyle;
  textType?: TypographyKeys;
  onPressStatusLabel?: () => void;
}) => {
  const {colors} = useColors();

  const styles = statusLabelStyles({colors, bg});
  return (
    <TouchableOpacity
      onPress={onPressStatusLabel}
      style={[styles.button, style]}>
      {leftIcon}
      <AppText text={text} type={textType} color={color} />
      {icon}
    </TouchableOpacity>
  );
};
export default StatusLabel;
