import {ActiveCalendarIcon, ClockIcon} from '@/assets/svg';
import {AppRow} from '@/components/common';
import {AppDateTimeInput} from '@/components/inputs';
import {useColors} from '@/hooks/useColors';
import {fs, wp} from '@/resources/config';
import React, {ReactNode} from 'react';
import {SpecimenInvestigationTestFormDatesType} from '../../../type';

const DateTimeFormView = ({
  dateOfSampleCollection,
  timeOfSampleCollection,
  dateOfResult,
  timeOfResult,
  onUpdateForm,
  type = 'Regular',
}: {
  dateOfSampleCollection?: Date;
  timeOfSampleCollection?: Date;
  dateOfResult: Date;
  timeOfResult: Date;
  onUpdateForm: (
    field: keyof SpecimenInvestigationTestFormDatesType,
    value: Date | undefined,
  ) => void;
  type?: 'Regular' | 'Radiology + Pulm';
}) => {
  const iconSize = wp(15);
  const {colors} = useColors();
  return (
    <>
      {type === 'Regular' && (
        <AppRow extraStyles={{gap: wp(10)}}>
          <InvestigationDateField
            label="Date of sample collection"
            placeholder="Select date"
            value={dateOfSampleCollection}
            onChange={date =>
              date ? onUpdateForm('dateOfSampleCollection', date) : null
            }
            RightContent={
              <ActiveCalendarIcon
                fill={colors.text50}
                width={iconSize}
                height={iconSize}
              />
            }
          />
          <InvestigationDateField
            mode="time"
            placeholder="Select time"
            label="Time of sample collection"
            value={timeOfSampleCollection}
            onChange={date =>
              date ? onUpdateForm('timeOfSampleCollection', date) : null
            }
            RightContent={
              <ClockIcon
                fill={colors.text50}
                width={iconSize}
                height={iconSize}
              />
            }
          />
        </AppRow>
      )}
      <AppRow extraStyles={{gap: wp(10)}}>
        <InvestigationDateField
          placeholder="Select date"
          label="Date of result"
          value={dateOfResult}
          onChange={date => (date ? onUpdateForm('dateOfResult', date) : null)}
          RightContent={
            <ActiveCalendarIcon
              fill={colors.text50}
              width={iconSize}
              height={iconSize}
            />
          }
        />
        <InvestigationDateField
          mode="time"
          placeholder="Select time"
          label="Time of result"
          value={timeOfResult}
          onChange={date => (date ? onUpdateForm('timeOfResult', date) : null)}
          RightContent={
            <ClockIcon
              fill={colors.text50}
              width={iconSize}
              height={iconSize}
            />
          }
        />
      </AppRow>
    </>
  );
};

export default DateTimeFormView;

const InvestigationDateField = ({
  label,
  placeholder,
  RightContent,
  onChange,
  value = undefined,
  mode = 'date',
}: {
  label: string;
  placeholder?: string;
  RightContent?: ReactNode;
  onChange?: (date: Date | null) => void;
  value: Date | undefined;
  mode?: 'date' | 'time' | 'datetime' | undefined;
}) => {
  return (
    <>
      <AppDateTimeInput
        labelStyles={{fontSize: fs(12)}}
        extraFontStyle={{fontSize: wp(11)}} //TODO(Zucci): Meet temitope for this font type.
        label={label}
        mode={mode}
        placeholder={placeholder}
        RightContent={RightContent}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
