import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
} from '../../../assets/svg';
import {useColors} from '../../../hooks/useColors';
import {useSheet} from '../../../hooks/useSheet';
import AppSelectItemSheet from '../../sheets/app-select-item-sheet';
import AppButtonInput from '../app-button-input';
import {AppSelectInputProps} from './type';

const AppSelectInput = <T,>({
  onChange = () => null,
  value = '',
  placeholder,
  selectOptions = [],
  showSearchInput,
  searchPlaceholder,
  isOptionsLoading,
  disabled,
  error,
  searchValue,
  onSearchInputChange,
  HeaderRightContent,
  ...btnInputProps
}: AppSelectInputProps<T>) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const [focused, setFocused] = useState(false);
  const {colors} = useColors();

  return (
    <View>
      <AppButtonInput
        placeholder={placeholder}
        disabled={disabled}
        onPress={openSheet}
        value={value}
        RightContent={
          isOptionsLoading ? (
            <ActivityIndicator color={colors.neutral200} />
          ) : (
            <DownCaretIcon stroke={colors.text400} />
          )
        }
        isFocused={focused}
        {...btnInputProps}
      />
      <AppSelectItemSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        isLoading={isOptionsLoading}
        title={placeholder}
        onOpen={() => setFocused(true)}
        onClose={() => setFocused(false)}
        selectOptions={selectOptions}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        onSelectItem={({item}) => onChange(item)}
        onSearchInputChange={onSearchInputChange}
        searchValue={searchValue}
        HeaderRightContent={HeaderRightContent}
        selectedValue={value}
        showSearchInput={showSearchInput}
        searchPlaceholder={searchPlaceholder}
        error={error}
      />
    </View>
  );
};
export default AppSelectInput;
