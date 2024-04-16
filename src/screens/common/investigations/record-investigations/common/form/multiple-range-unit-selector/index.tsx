import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useSheet} from '@/hooks/useSheet';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import RangesInputForm from '../ranges-input-form';
import {MultipleRangeUnitSelectorProps, UnitChangeType} from './type';
import useMultipleRangeUnitSelector from './use-multiple-range-unit-selector';

const MultipleRangeUnitSelector: React.FC<MultipleRangeUnitSelectorProps> = ({
  ranges = [],
  title,
  getData = data => data,
  extraData,
}) => {
  const {openSheet, sheetRef, closeSheet} = useSheet();

  const {
    selectedUnit,
    currentRange,
    values,
    handleUnitChange,
    handleGetValues,
  } = useMultipleRangeUnitSelector({
    getData,
    ranges,
  });

  return (
    <>
      <RangesInputForm
        leadingRangeTitle={title}
        showDropDownAfterName={ranges.length > 1}
        onPressDropDownAfterName={() => openSheet()}
        leadingRangeUnit={selectedUnit}
        leadingRangeValue={values.leadingRangeValue}
        minRangeValue={currentRange?.minRange as number}
        maxRangeValue={currentRange?.maxRange as number}
        getValues={handleGetValues}
        showSeparator={false}
        extraData={extraData}
      />

      <AppSelectItemSheet
        title={'Choose Unit'}
        sheetRef={sheetRef}
        selectOptions={ranges.map((range, index) => ({
          item: {
            id: index,
            value: range.unit ?? EMPTY_STRING,
            data: range.unit ?? EMPTY_STRING,
          },
        }))}
        onSelectItem={({item}) => {
          handleUnitChange(item as UnitChangeType);
          closeSheet();
        }}
      />
    </>
  );
};

export default MultipleRangeUnitSelector;
