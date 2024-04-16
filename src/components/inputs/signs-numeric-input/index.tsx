import {DownCaretIcon, MinusIcon, PlusCircleOutlineIcon} from '@/assets/svg';
import {AppRow, AppText} from '@/components/common';
import {AppToggleSwitch} from '@/components/inputs';
import {useColors} from '@/hooks/useColors';
import {detectTouch, fs} from '@/resources/config';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {signsNumericInputStyles} from './styles';
import {
  ButtonTypes,
  CounterRowProps,
  SignsNumericInputProps,
  TitleRowProps,
  ToggleSwitchRowProps,
} from './type';
import {EMPTY_STRING} from '@/utils/constants';

const SignsNumericInput = ({
  getCount = (count: number) => count,
  getToggleValue = (value: boolean) => value,
  title,
  hasToggle = false,
  name = EMPTY_STRING,
  hasDropDown = false,
  customContent,
  hasBorder = true,
  onPressDropDown = () => null,
  customRightContent,
  containerStyles,
  extraTitleRowStyles,
}: SignsNumericInputProps) => {
  const {colors} = useColors();
  const styles = signsNumericInputStyles({colors, hasBorder});

  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    getCount(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    getToggleValue(isOn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);

  return (
    <View style={[styles.container, containerStyles]}>
      <AppRow>
        <TitleRow
          extraTitleRowStyles={extraTitleRowStyles}
          title={title}
          hasDropDown={hasDropDown}
          onPressDropDown={onPressDropDown}
          colors={colors}
        />
        {hasToggle && !customRightContent && (
          <ToggleSwitchRow isOn={isOn} setIsOn={setIsOn} />
        )}
        {customRightContent}
      </AppRow>
      {customContent ? (
        customContent
      ) : (
        <CounterRow
          count={count}
          setCount={setCount}
          name={name}
          colors={colors}
          styles={styles}
        />
      )}
    </View>
  );
};

const TitleRow = ({
  title,
  hasDropDown,
  onPressDropDown,
  colors,
  extraTitleRowStyles,
}: TitleRowProps) => (
  <TouchableOpacity activeOpacity={1} onPress={onPressDropDown}>
    <AppRow columnGap={4}>
      <AppText
        type="title_semibold"
        style={[{fontSize: fs(12)}, extraTitleRowStyles]}
        color="text50"
        text={title}
      />
      {hasDropDown && (
        <TouchableOpacity hitSlop={detectTouch} onPress={onPressDropDown}>
          <DownCaretIcon stroke={colors.text50} />
        </TouchableOpacity>
      )}
    </AppRow>
  </TouchableOpacity>
);

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

const CounterRow = ({
  count,
  setCount,
  name,
  colors,
  styles,
}: CounterRowProps) => (
  <AppRow columnGap={8}>
    <View style={styles.counter}>
      <VitalSignsButton
        disabled={count === 0}
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        borderColor="transparent"
        bg="neutral100"
        colors={colors}
        extraStyles={styles.rightBorders}
        icon={<MinusIcon fill={'transparent'} stroke={colors.primary400} />}
      />
      <View style={styles.count}>
        <AppText
          type="body_1_semibold"
          color={count === 0 ? 'text50' : 'text400'}
          text={count === 0 ? '0' : count}
        />
      </View>
      <VitalSignsButton
        onPress={() => {
          setCount(count + 1);
        }}
        borderColor="transparent"
        bg="neutral100"
        colors={colors}
        extraStyles={styles.leftBorders}
        icon={<PlusCircleOutlineIcon />}
      />
    </View>
    {name && (
      <View style={styles.name}>
        <AppText
          type="title_semibold"
          style={{fontSize: fs(14)}}
          color="text400"
          text={name}
        />
      </View>
    )}
  </AppRow>
);

const VitalSignsButton = ({
  icon,
  bg,
  borderColor,
  extraStyles,
  onPress = () => null,
  colors,
  disabled = false,
}: ButtonTypes) => {
  const styles = signsNumericInputStyles({
    colors,
    bg,
    borderColor,
    disabled,
  });
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8}
      onPress={onPress}
      style={[styles.numericButtonContainer, extraStyles]}>
      {icon}
    </TouchableOpacity>
  );
};

export default SignsNumericInput;
