import {AppRow, AppSeperator} from '@/components/common';
import React, {useEffect, useState} from 'react';
import RangeInput from '../range-input';
import {RangeInputFormResponseValues, RangeInputFormTypes} from './type';
import RecordInvestigationToggleButton from '../record-investigation-toggle-button';
import {EMPTY_STRING} from '@/utils/constants';

/**
 @description this range component only return the values from interacting with the ranges
 */
const RangesInputForm = ({
  getValues = values => values,
  leadingRangeHasDropDown,
  leadingRangeHasToggle,
  leadingRangeTitle,
  leadingRangeUnit,
  leadingRangeValue,
  maxRangeValue,
  minRangeValue,
  showLeadingRange = true,
  onPressDropDownAfterName,
  showDropDownAfterName,
  showSeparator = true,
  extraData,
}: RangeInputFormTypes) => {
  const [ranges, setRanges] = useState<RangeInputFormResponseValues>({
    maxRangeValue: maxRangeValue as number,
    minRangeValue: minRangeValue as number,
    leadingRangeValue: leadingRangeValue as number,
    title: leadingRangeTitle,
  });

  const handleRanges = (
    field: keyof RangeInputFormResponseValues,
    value: number,
  ) => {
    setRanges({...ranges, [field]: value});
    getValues({
      ...ranges,
      [field]: value,
    });
  };

  useEffect(() => {
    setRanges({
      ...ranges,
      minRangeValue,
      maxRangeValue,
      leadingRangeValue: 0,
    });
    getValues({
      ...ranges,
      minRangeValue,
      maxRangeValue,
      leadingRangeValue: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadingRangeUnit]);

  return (
    <>
      {showLeadingRange && (
        <RangeInput
          title={`${leadingRangeTitle}`}
          name={leadingRangeUnit}
          defaultValue={ranges.leadingRangeValue}
          onChangeText={value => handleRanges('leadingRangeValue', value)}
          hasToggle={leadingRangeHasToggle}
          hasDropDown={leadingRangeHasDropDown}
          hasBorder={false}
          showDropDownAfterName={showDropDownAfterName}
          onPressDropDownAfterName={onPressDropDownAfterName}
          onPressAdd={() =>
            typeof ranges.leadingRangeValue === 'number'
              ? handleRanges('leadingRangeValue', ranges.leadingRangeValue + 1)
              : handleRanges('leadingRangeValue', 0 + 1)
          }
          onPressMinus={() =>
            typeof ranges.leadingRangeValue === 'number' &&
            handleRanges('leadingRangeValue', ranges.leadingRangeValue - 1)
          }
        />
      )}
      <AppRow>
        <RangeInput
          title={'Range (Min)'}
          defaultValue={ranges?.minRangeValue}
          onChangeText={value => {
            const numericValue = Number(value);
            if (!isNaN(numericValue) && numericValue <= ranges.maxRangeValue) {
              handleRanges('minRangeValue', numericValue);
            }
          }}
          hasToggle={false}
          hasDropDown={false}
          hasBorder={false}
          onPressAdd={() => {
            const newValue = ranges.minRangeValue + 1;
            if (newValue < ranges.maxRangeValue) {
              handleRanges('minRangeValue', newValue);
            }
          }}
          onPressMinus={() => {
            const newValue = ranges.minRangeValue - 1;
            handleRanges('minRangeValue', newValue);
          }}
        />
        <RangeInput
          title={'Range (Max)'}
          onChangeText={value => {
            const numericValue = Number(value);
            if (!isNaN(numericValue) && numericValue >= ranges.minRangeValue) {
              handleRanges('maxRangeValue', numericValue);
            }
          }}
          defaultValue={ranges?.maxRangeValue}
          hasToggle={false}
          hasDropDown={false}
          hasBorder={false}
          onPressAdd={() => {
            const newValue = ranges.maxRangeValue + 1;
            if (newValue > ranges.minRangeValue) {
              handleRanges('maxRangeValue', newValue);
            }
          }}
          onPressMinus={() => {
            const newValue = ranges.maxRangeValue - 1;
            if (newValue >= ranges.minRangeValue) {
              handleRanges('maxRangeValue', newValue);
            }
          }}
        />
      </AppRow>
      {extraData && (
        <>
          <RecordInvestigationToggleButton
            title={EMPTY_STRING}
            tabs={extraData.tabs}
            getSelectedTab={item =>
              setRanges({
                ...ranges,
                result: item,
              })
            }
            defaultTab={ranges?.result || EMPTY_STRING}
          />
          <AppSeperator />
        </>
      )}
      {showSeparator && <AppSeperator />}
    </>
  );
};

export default RangesInputForm;
