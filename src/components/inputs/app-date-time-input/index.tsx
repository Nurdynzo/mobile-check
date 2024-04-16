import React from 'react';
import {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {AppointmentsFilledIcon, ClockIcon} from '@/assets/svg';
import {
  convertToReadableDate,
  convertToReadableTime,
} from '@/utils/helpers/convertDateTime';
import AppButtonInput from '../app-button-input';
import {AppDatePickerProps} from './type';
import {useColors} from '@/hooks/useColors';
import {EMPTY_STRING} from '@/utils/constants';

const AppDateTimeInput: FunctionComponent<AppDatePickerProps> = ({
  onChange = () => null,
  value: dateTimeValue,
  mode = 'date',
  extraFontStyle,
  maximumDate,
  minimumDate,
  labelFontType,
  ...btnInputProps
}) => {
  const [open, setOpen] = useState(false);
  const {colors} = useColors();

  const convert =
    mode === 'time' ? convertToReadableTime : convertToReadableDate;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <AppButtonInput
        labelFontType={labelFontType}
        extraFontStyle={extraFontStyle}
        isFocused={open}
        RightContent={
          mode === 'time' ? (
            <ClockIcon />
          ) : (
            <AppointmentsFilledIcon fill={colors.text50} />
          )
        }
        value={dateTimeValue ? convert(dateTimeValue) : EMPTY_STRING}
        onPress={() => setOpen(true)}
        {...btnInputProps}
      />

      <DatePicker
        mode={mode}
        modal
        open={open}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        date={dateTimeValue ? dateTimeValue : new Date()}
        onConfirm={newDate => {
          setOpen(false);
          onChange(newDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default AppDateTimeInput;
