import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
  SortDown,
} from '@/assets/svg';
import {AppLink, AppTouchButton} from '@/components/buttons';
import {AppMenuSheet} from '@/components/sheets';
import {sortByOptions} from '@/constants/doctorLandingScreen';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';

const Sort = () => {
  const {colors} = useColors();
  const {
    sheetRef: sortSheet,
    openSheet: openSortSheet,
    closeSheet: closeSortSheet,
  } = useSheet();

  return (
    <>
      <AppTouchButton
        onPress={openSortSheet}
        text="Sort by"
        color="primary400"
        leftIcon={<SortDown />}
        rightIcon={<DownCaretIcon stroke={colors.text400} />}
      />
      <AppMenuSheet
        title="Sort by"
        sheetRef={sortSheet}
        HeaderRightContent={<AppLink text="Reset" />}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        selectedValue={EMPTY_STRING}
        menuOptions={sortByOptions}
        onSelectItem={() => {
          closeSortSheet();
        }}
      />
    </>
  );
};

export default Sort;
