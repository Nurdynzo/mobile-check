import React, {useState} from 'react';
import {View} from 'react-native';
import Overlay from '../overlay';
import {AppRow, AppText} from '../common';
import {AppDateTimeInput} from '../inputs';
import {AppButton} from '../buttons';
import {appointmentDateRangePickerStyles} from './styles';
import {useColors} from '@/hooks/useColors';
import {AppointmentDateRangerPickerType} from './type';
import DateRange from '@/types/dateRange';
import {fs} from '@/resources/config';

const AppointmentDateRangerPicker = ({
  to,
  onCancel,
  onChangeTo,
  onChangeFrom,
  onDone,
  onOverlayTap,
  show,
  from,
  mode = 'time',
}: AppointmentDateRangerPickerType) => {
  const {colors} = useColors();
  const styles = appointmentDateRangePickerStyles({colors});

  const [dateRange, setDateRange] = useState<DateRange>({to, from});

  const _onDone = () => {
    onDone({...dateRange});
    setDateRange({});
  };
  return (
    <Overlay onOverlayTap={onOverlayTap} show={show} offset={122}>
      <View style={styles.overlayTop}>
        <AppText
          color="text300"
          type="title_semibold"
          text={'See appointments'}
        />
        <AppRow extraStyles={styles.gap}>
          <DateTimeInput
            mode={mode}
            value={dateRange.from}
            placeholder={'From'}
            onChange={result => {
              setDateRange({...dateRange, from: result});
              onChangeFrom?.(result);
            }}
          />
          <DateTimeInput
            mode={mode}
            placeholder={'To'}
            value={dateRange.to}
            onChange={result => {
              setDateRange({...dateRange, to: result});
              onChangeTo?.(result);
            }}
          />
        </AppRow>
      </View>
      <AppRow extraStyles={styles.calenderBtnWrapper}>
        <AppButton
          buttonColor={'white'}
          borderWidth={1}
          text="Cancel"
          textColor={'primary400'}
          borderColor={'primary400'}
          containerStyle={{width: undefined}}
          onPress={onCancel}
        />
        <AppButton
          text="Done"
          onPress={_onDone}
          containerStyle={{width: undefined}}
        />
      </AppRow>
    </Overlay>
  );
};

export default AppointmentDateRangerPicker;

const DateTimeInput = ({
  mode,
  value,
  placeholder,
  onChange,
}: {
  mode: 'time' | 'date';
  placeholder: string;
  value?: Date;
  onChange: (result?: Date) => void;
}) => {
  return (
    <AppDateTimeInput
      mode={mode}
      value={value}
      placeholder={placeholder}
      extraFontStyle={{fontSize: fs(12)}}
      onChange={from => {
        const result = from ?? undefined;
        onChange(result);
      }}
    />
  );
};
