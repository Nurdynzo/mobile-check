import {DownCaretIcon, MinusIcon, PlusCircleOutlineIcon} from '@/assets/svg';
import {AppRow, AppText} from '@/components/common';
import {AppToggleSwitch} from '@/components/inputs';
import {useColors} from '@/hooks/useColors';
import React, {FunctionComponent, useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {ButtonTypes, NumericInputProps} from '../../type';
import {VitalSignsNumericInputStyles} from './styles';
import {CounterRowProps, TitleRowProps, ToggleSwitchRowProps} from './type';

const VitalSignsNumericInput = ({
  title,
  hasToggle = false,
  unitValue,
  customContent,
  hasBorder = true,
  hasSitesDropDown = false,
  onPressSiteDropDown = () => null,
  hasRangeDropDown,
  onPressRangeDropDown,
  customRightContent,
  count,
  onChangeCount = () => null,
  isRightPosition = false,
  onTogglePosition = () => null,
  addSubBy,
  validationError,
  decimalPlaces,
  disable,
}: NumericInputProps) => {
  const {colors} = useColors();
  const styles = VitalSignsNumericInputStyles({colors, hasBorder});

  return (
    <View style={styles.container}>
      <AppRow>
        <TitleRow
          title={title}
          hasDropDown={hasSitesDropDown}
          onPressDropDown={onPressSiteDropDown}
        />
        {hasToggle && !customRightContent && (
          <ToggleSwitchRow isOn={isRightPosition} setIsOn={onTogglePosition} />
        )}
        {customRightContent}
      </AppRow>
      {customContent ? (
        customContent
      ) : (
        <CounterRow
          count={count}
          setCount={val => onChangeCount(`${val}`)}
          hasDropDown={hasRangeDropDown}
          onPressDropDown={onPressRangeDropDown}
          name={unitValue}
          decimalPlace={decimalPlaces}
          addSubBy={addSubBy}
          disable={disable}
        />
      )}
      {validationError && (
        <AppText
          text={validationError}
          color="danger300"
          type="status_tag_semibold"
        />
      )}
    </View>
  );
};

const TitleRow = ({title, hasDropDown, onPressDropDown}: TitleRowProps) => {
  const {colors} = useColors();
  const styles = VitalSignsNumericInputStyles({colors});
  return (
    <View style={styles.titleRowContainer}>
      <TouchableOpacity disabled={!hasDropDown} onPress={onPressDropDown}>
        <AppRow justifyContent="flex-start" columnGap={4}>
          <AppText
            numberOfLines={1}
            type="title_semibold"
            color="text50"
            text={title}
          />
          {hasDropDown && <DownCaretIcon stroke={colors.text50} />}
        </AppRow>
      </TouchableOpacity>
    </View>
  );
};

const ToggleSwitchRow = ({isOn, setIsOn}: ToggleSwitchRowProps) => (
  <AppRow>
    <AppToggleSwitch
      icon={
        <AppText
          type="body_1_semibold"
          color={'primary400'}
          text={isOn ? 'R' : 'L'}
        />
      }
      isOn={isOn}
      onToggle={setIsOn}
    />
  </AppRow>
);

const CounterRow: FunctionComponent<CounterRowProps> = ({
  count,
  setCount,
  name,
  hasDropDown,
  onPressDropDown,
  addSubBy = 1,
  decimalPlace = 1,
  disable,
}) => {
  const {colors} = useColors();
  const styles = VitalSignsNumericInputStyles({colors});
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleAdd = () => {
    setCount(
      +parseFloat((+(count ?? 0) + addSubBy).toString()).toFixed(
        decimalPlace,
      ) || addSubBy,
    );
    !isFocused && inputRef.current?.focus();
  };

  const handleSub = () => {
    if (+(count ?? 0) >= addSubBy) {
      setCount(
        +parseFloat((+(count ?? 0) - addSubBy).toString()).toFixed(
          decimalPlace,
        ) || addSubBy,
      );
      !isFocused && inputRef.current?.focus();
    }
  };

  return (
    <AppRow columnGap={8}>
      <View style={styles.counter}>
        <VitalSignsButton
          disabled={count === 0 || disable}
          onPress={handleSub}
          extraStyles={styles.rightBorders}
          icon={<MinusIcon stroke={colors.primary400} />}
        />
        <View style={styles.textCountInputContainer}>
          <TextInput
            ref={inputRef}
            placeholder={`${addSubBy}`.replace('1', '0')}
            placeholderTextColor={colors.text50}
            value={count as string}
            onChangeText={setCount}
            numberOfLines={1}
            editable={!disable}
            keyboardType="numeric"
            style={styles.textCountInput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>

        <VitalSignsButton
          disabled={disable}
          onPress={handleAdd}
          extraStyles={styles.leftBorders}
          icon={<PlusCircleOutlineIcon />}
        />
      </View>
      <View style={styles.unitContainer}>
        <TouchableOpacity
          style={styles.unitBtn}
          disabled={!hasDropDown}
          onPress={onPressDropDown}>
          <AppText type="title_semibold" color="text400" text={name} />
          {hasDropDown && <DownCaretIcon stroke={colors.text50} />}
        </TouchableOpacity>
      </View>
    </AppRow>
  );
};

const VitalSignsButton = ({
  icon,
  bg = 'neutral100',
  borderColor = 'transparent',
  extraStyles,
  onPress = () => null,
  disabled = false,
}: ButtonTypes) => {
  const {colors} = useColors();
  const styles = VitalSignsNumericInputStyles({
    colors,
    bg,
    borderColor,
    disabled,
  });
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.numericButtonContainer, extraStyles]}>
      {icon}
    </TouchableOpacity>
  );
};

export default VitalSignsNumericInput;
