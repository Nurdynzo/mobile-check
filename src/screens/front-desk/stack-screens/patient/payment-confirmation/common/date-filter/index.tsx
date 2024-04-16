import {RadioBtnEmptyIcon, RadioBtnFilledIcon} from '@/assets/svg';
import {RecordRow} from '@/components/cards';
import {AppMenuSheet} from '@/components/sheets';
import {dateFilterOptions} from '@/constants/doctorLandingScreen';
import {useSheet} from '@/hooks/useSheet';
import {fs} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import {ViewStyle} from 'react-native';

const DateFilter = ({
  extraRecordRowStyles,
  extraCardRowStyles,
}: {
  extraRecordRowStyles?: ViewStyle;
  extraCardRowStyles?: ViewStyle;
}) => {
  const {
    sheetRef: dateFilter,
    openSheet: openDateFilter,
    closeSheet: closeDateFilter,
  } = useSheet();
  return (
    <>
      <RecordRow
        extraRecordRowStyles={extraRecordRowStyles}
        extraCardRowStyles={extraCardRowStyles}
        customFontSize={fs(14)}
        detail="Today"
        detailType="button_semibold"
        detailsColor="text400"
        hasDropDown
        onPressDropDown={openDateFilter}
      />
      <AppMenuSheet
        title="Filter by date"
        sheetRef={dateFilter}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        selectedValue={EMPTY_STRING}
        menuOptions={dateFilterOptions}
        onSelectItem={() => {
          closeDateFilter();
        }}
      />
    </>
  );
};

export default DateFilter;
