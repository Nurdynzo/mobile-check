import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
} from '@/assets/svg';
import {AppText} from '@/components/common';
import AppButtonInput from '@/components/inputs/app-button-input/index';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {detectTouch} from '@/resources/config';
import React, {useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {AppSelectInputProps} from '../app-select-input/type';
import {AppSelectInputWithLeftValueStyles} from './styles';
import {EMPTY_STRING} from '@/utils/constants';

/* Refer to the doc for SelectInputWithLeftValue pictorial view */
const SelectWithLeftValue = <T,>({
  onChange = () => null,
  value = EMPTY_STRING,
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
  leftValue,
  ...btnInputProps
}: AppSelectInputProps<T> & {
  leftValue?: string;
}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const [focused, setFocused] = useState(false);
  const {colors} = useColors();

  const styles = AppSelectInputWithLeftValueStyles({colors});

  return (
    <>
      <AppButtonInput
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        LeftContent={
          <View style={styles.leftValueContainer}>
            <AppText
              type="body_1_medium"
              color="text50"
              style={styles.leftValueText}
              text={leftValue}
            />
          </View>
        }
        RightContent={
          isOptionsLoading ? (
            <ActivityIndicator color={colors.neutral200} />
          ) : (
            <TouchableOpacity hitSlop={detectTouch} onPress={openSheet}>
              <DownCaretIcon stroke={colors.text400} />
            </TouchableOpacity>
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
    </>
  );
};

export default SelectWithLeftValue;
