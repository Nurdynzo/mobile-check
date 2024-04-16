import {DownCaretIcon, MinusIcon, PlusCircleOutlineIcon} from '@/assets/svg';
import {AppRow, AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {detectTouch, fs, wp} from '@/resources/config';
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {rangeInputStyles} from '../range-input/styles';
import {ButtonTypes, CounterRowProps} from '../range-input/type';

const RangeCounterRow = ({
  count,
  name,
  onPressDropDownAfterName,
  showDropDownAfterName,
  onPressAdd,
  onChangeText,
  onPressMinus,
}: CounterRowProps) => {
  const {colors} = useColors();
  const styles = rangeInputStyles({
    colors,
  });

  return (
    <AppRow columnGap={8}>
      <View style={styles.counter}>
        <RangeButton
          disabled={count === 0}
          onPress={() => {
            if (count > 0) {
              onPressMinus();
            }
          }}
          borderColor="transparent"
          bg="neutral100"
          extraStyles={styles.rightBorders}
          icon={<MinusIcon fill={'transparent'} stroke={colors.primary400} />}
        />
        <View style={styles.count}>
          <TextInput
            keyboardType="numeric"
            onChangeText={value => onChangeText(+value)}
            value={count?.toString()}
            maxLength={3}
          />
        </View>
        <RangeButton
          onPress={onPressAdd}
          borderColor="transparent"
          bg="neutral100"
          extraStyles={styles.leftBorders}
          icon={<PlusCircleOutlineIcon />}
        />
      </View>
      {name && (
        <View style={[styles.name, {gap: wp(10)}]}>
          <AppText
            type="title_semibold"
            style={{fontSize: fs(14)}}
            color="text400"
            text={name}
          />
          {showDropDownAfterName && (
            <TouchableOpacity
              hitSlop={detectTouch}
              onPress={onPressDropDownAfterName}>
              <DownCaretIcon fill={colors.text50} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </AppRow>
  );
};
export default RangeCounterRow;

const RangeButton = ({
  icon,
  bg,
  borderColor,
  extraStyles,
  onPress = () => null,
  disabled = false,
}: ButtonTypes) => {
  const {colors} = useColors();
  const styles = rangeInputStyles({
    bg,
    borderColor,
    disabled,
    colors,
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
