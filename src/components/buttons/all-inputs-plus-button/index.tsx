import {PlusCircleIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {ViewStyle} from 'react-native';
import AppButton from '../app-button';

const AllInputsPlusButton = ({
  text,
  onPress,
  isDisabled,
  buttonStyle,
}: {
  text: string;
  isDisabled?: boolean;
  onPress: VoidFunction;
  buttonStyle?: Array<ViewStyle | undefined> | ViewStyle;
}) => {
  const {colors} = useColors();
  return (
    <AppButton
      text={text}
      onPress={!isDisabled ? onPress : undefined}
      textColor={isDisabled ? 'primary50' : 'primary400'}
      textType={'button_link_semibold'}
      buttonColor={'transparent'}
      height={16}
      borderWidth={0}
      containerStyle={buttonStyle}
      // eslint-disable-next-line react-native/no-inline-styles
      textStyle={{
        textDecorationLine: 'underline',
      }}
      LeftContent={
        <PlusCircleIcon
          fill={isDisabled ? colors.primary50 : colors.primary400}
        />
      }
    />
  );
};

export default AllInputsPlusButton;
