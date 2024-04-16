import {DownArrowIcon, UpArrowIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import {ColorKeys} from '@/resources/colors';
import {TypographyKeys} from '@/resources/fonts';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../../common/app-text';
import {allInputsStatusButtonStyles} from './styles';

export const AllInputsStatusButton = ({
  text = 'High',
  textType = 'pills_capsules_semibold',
  onPress,
}: {
  onPress?: VoidFunction;
  text: 'High' | 'Low';
  isSelected?: boolean;
  textType?: TypographyKeys;
}) => {
  const borderColor: ColorKeys = text === 'High' ? 'danger300' : 'alert500';
  const icon = text === 'High' ? <UpArrowIcon /> : <DownArrowIcon />;

  const {colors} = useColors();
  const styles = allInputsStatusButtonStyles({colors, borderColor});
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.button}>
      {icon}
      <AppText text={text} type={textType} color={borderColor} />
    </TouchableOpacity>
  );
};

export default AllInputsStatusButton;
