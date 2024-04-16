import {CloseIcon, PlusIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import {ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';
import {TypographyKeys} from '@/resources/fonts';
import VoidFunction from '@/types/voidfunction';
import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../../common/app-text';
import {allInputsPillButtonStyles} from './styles';

export const AllInputsPillButton = ({
  text,
  isSelected = false,
  textType = 'pills_capsules_semibold',
  onPress,
  borderWidth = 1,
  background = 'neutral200',
  disable,
  LeftContent,
}: {
  onPress?: VoidFunction;
  text: string;
  isSelected?: boolean;
  disable?: boolean;
  textType?: TypographyKeys;
  borderWidth?: number;
  background?: ColorKeys;
  LeftContent?: ReactNode;
}) => {
  const {colors} = useColors();
  const styles = allInputsPillButtonStyles({
    colors,
    isSelected,
    borderWidth,
    background,
  });
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disable}
      onPress={onPress}
      style={styles.button}>
      {LeftContent}
      <AppText
        text={text}
        type={textType}
        color={'text400'}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flexShrink: 1}}
      />
      {isSelected ? (
        <CloseIcon fill={colors.text300} height={wp(16)} width={wp(16)} />
      ) : (
        <PlusIcon height={wp(16)} width={wp(16)} />
      )}
    </TouchableOpacity>
  );
};

export default AllInputsPillButton;
