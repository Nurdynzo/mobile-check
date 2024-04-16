import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
} from '@/assets/svg';
import AppActivityIndicator from '@/components/app-activity-indicator';
import {AppText} from '@/components/common';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import React, {FunctionComponent, useState} from 'react';
import {TextInput, View} from 'react-native';
import AppButtonInput from '../app-button-input';
import {AppSelectInputProps} from '../app-select-input/type';
import {AppSelectInputWithLeftInputStyles} from './styles';
import {MiniInputProps} from './type';

const SelectWithLeftInput = <T,>({
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
  leftValue,
  onChangeLeftValueText,
  leftValuePlaceholder,
  label,
  showRequiredTag,
  labelFontType,
  labelStyles,
}: AppSelectInputProps<T> & MiniInputProps) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const [focused, setFocused] = useState(false);
  const {colors} = useColors();
  const styles = AppSelectInputWithLeftInputStyles({colors});

  return (
    <View>
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
      <View style={styles.container}>
        <MiniInput
          leftValue={leftValue}
          leftValuePlaceholder={leftValuePlaceholder}
          onChangeLeftValueText={onChangeLeftValueText}
        />
        <AppButtonInput
          height={40}
          inputContainerStyle={styles.input}
          style={{flex: 1}}
          onPress={openSheet}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          RightContent={
            isOptionsLoading ? (
              <AppActivityIndicator />
            ) : (
              <DownCaretIcon stroke={colors.text400} />
            )
          }
          isFocused={focused}
        />
      </View>
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

export default SelectWithLeftInput;

const MiniInput: FunctionComponent<MiniInputProps> = ({
  onChangeLeftValueText,
  leftValue,
  leftValuePlaceholder,
}) => {
  const {colors} = useColors();
  const styles = AppSelectInputWithLeftInputStyles({colors});
  return (
    <View style={styles.miniInputContainer}>
      <TextInput
        style={styles.miniInput}
        onChangeText={onChangeLeftValueText}
        value={leftValue}
        numberOfLines={1}
        keyboardType="numeric"
        placeholder={leftValuePlaceholder}
        placeholderTextColor={colors.text50}
      />
    </View>
  );
};
