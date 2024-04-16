import {AppRow} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {EMPTY_STRING} from '@/utils/constants';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import RangeCounterRow from '../range-counter-row';
import RangeTitleRow from '../range-title-row';
import {rangeInputStyles} from './styles';
import {RangeInputProps} from './type';

const RangeInput = ({
  getToggleValue = (value: boolean) => value,
  title,
  name = EMPTY_STRING,
  hasDropDown = false,
  customContent,
  hasBorder = true,
  onPressDropDown = () => null,
  customRightContent,
  containerStyles,
  extraTitleRowStyles,
  defaultValue,
  onPressDropDownAfterName,
  showDropDownAfterName,
  onPressAdd,
  onPressMinus,
  onChangeText = value => value,
}: RangeInputProps) => {
  const {colors} = useColors();
  const styles = rangeInputStyles({colors, hasBorder});
  const [isOn, _] = useState(false);

  useEffect(() => {
    getToggleValue(isOn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);

  return (
    <View style={[styles.container, containerStyles]}>
      <AppRow>
        <RangeTitleRow
          extraTitleRowStyles={extraTitleRowStyles}
          title={title}
          hasDropDown={hasDropDown}
          onPressDropDown={onPressDropDown}
        />
        {customRightContent}
      </AppRow>
      {customContent ? (
        customContent
      ) : (
        <RangeCounterRow
          onPressAdd={onPressAdd}
          onPressMinus={onPressMinus}
          onPressDropDownAfterName={onPressDropDownAfterName}
          onChangeText={onChangeText}
          showDropDownAfterName={showDropDownAfterName}
          count={defaultValue as number}
          name={name}
        />
      )}
    </View>
  );
};

export default RangeInput;
