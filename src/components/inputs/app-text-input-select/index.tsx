import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {View, TextInput, Pressable} from 'react-native';
import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {AppText} from '../../common';
import AppSelectItemSheet from '../../sheets/app-select-item-sheet';
import {inputBtnStyles} from '@/components/inputs/app-select-text-input/styles';
import {AppSelectTextInputProps} from '@/components/inputs/app-select-text-input/type';

const AppTextInputSelect = <T,>({
  label = 'Label',
  inputKeyboardType,
  style,
  value,
  placeholder,
  borderColor,
  textColor = 'black',
  textSize = 'body_1_medium',
  disabled,
  onChange,
  selectOptions = [],
  searchPlaceholder,
  showSearchInput,
  inputColor = 'white',
  isOptionsLoading,
  selectError,
}: AppSelectTextInputProps<T>) => {
  const {colors} = useColors();
  const [isFocused, setIsFocused] = useState(false);

  const {closeSheet, openSheet, sheetRef} = useSheet();

  const styles = inputBtnStyles({
    colors,
    isFocus: isFocused,
    borderColor,
    disabled,
    inputColor,
  });

  return (
    <>
      <View style={[styles.container, style]}>
        {label && (
          <AppText
            text={label}
            type="label_semibold"
            color="text300"
            textTransform="capitalize"
            style={styles.label}
          />
        )}
        <View style={[styles.inputContainer]}>
          <TextInput
            keyboardType={inputKeyboardType}
            placeholderTextColor={colors.text50}
            autoCapitalize="none"
            value={value?.text}
            onChangeText={onChange?.text}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            placeholder={placeholder?.text}
            style={[styles.textInput, {flex: 0.2}]}
          />
          <View style={styles.seperatorContainer}>
            <View style={styles.seperator} />
          </View>
          <Pressable
            onPress={openSheet}
            style={styles.btnInputContainer}
            disabled={disabled}>
            <AppText
              type={textSize}
              text={value?.select || placeholder?.select}
              color={value?.select ? textColor : 'text50'}
              numberOfLines={1}
              style={styles.selectText}
            />

            {isOptionsLoading ? (
              <ActivityIndicator color={colors.neutral200} />
            ) : (
              <DownCaretIcon stroke={colors.text400} />
            )}
          </Pressable>
        </View>
      </View>

      <AppSelectItemSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        isLoading={isOptionsLoading}
        title={placeholder?.select}
        onOpen={() => setIsFocused(true)}
        onClose={() => setIsFocused(false)}
        selectOptions={selectOptions}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        error={selectError}
        onSelectItem={({item}) => onChange?.select(item)}
        selectedValue={value?.select}
        showSearchInput={showSearchInput}
        searchPlaceholder={searchPlaceholder}
      />
    </>
  );
};

export default AppTextInputSelect;
