import React from 'react';
import AppButtonInput from '../app-button-input';
import {SearchIcon} from '@/assets/svg';
import {AppButtonInputProps} from '../app-button-input/type';
import {useColors} from '@/hooks/useColors';

const SearchButtonInput = ({
  height = 44,
  width,
  LeftContent = <DefaultLeftContent />,
  ...props
}: AppButtonInputProps) => {
  return (
    <AppButtonInput
      {...{
        ...props,
        height,
        width,
        LeftContent,
      }}
    />
  );
};

const DefaultLeftContent = () => {
  const {colors} = useColors();
  // eslint-disable-next-line react-native/no-inline-styles
  return <SearchIcon stroke={colors.text50} style={{marginRight: 16}} />;
};

export default SearchButtonInput;
