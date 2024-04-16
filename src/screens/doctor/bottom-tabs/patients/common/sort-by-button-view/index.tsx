import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
  SortDown,
} from '@/assets/svg';
import {AppLink, AppTouchButton} from '@/components/buttons';
import {AppMenuSheet} from '@/components/sheets';
import {onSelectItemProp} from '@/components/sheets/app-menu-sheet/type';
import * as Constant from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import VoidFunction from '@/types/voidfunction';
import React from 'react';

export const SortByButtonView = ({
  reset,
  selectedValue,
  onSelectItem,
}: {
  reset?: VoidFunction;
  onSelectItem?: onSelectItemProp;
  selectedValue?: string;
}) => {
  const {colors} = useColors();

  const {sheetRef, openSheet: openSortBySheet, closeSheet} = useSheet();
  return (
    <>
      <AppTouchButton
        height={48}
        onPress={openSortBySheet}
        text="Sort by"
        rightIcon={<DownCaretIcon stroke={colors.primary400} />}
        leftIcon={<SortDown />}
      />
      <AppMenuSheet
        title="Sort by"
        sheetRef={sheetRef}
        selectedValue={selectedValue}
        closeSheet={closeSheet}
        onSelectItem={onSelectItem}
        HeaderRightContent={<AppLink text="Reset" onPress={reset} />}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        menuOptions={Constant.sortByOptions}
      />
    </>
  );
};
