import {ArrowRightIcon, DownCaretIcon} from '@/assets/svg';
import {AppTouchButton} from '@/components/buttons';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {OnSelectItemProp} from '@/components/sheets/app-select-item-sheet/type';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import React from 'react';

export const CommonMenuView = <T,>({
  selectedValue,
  onSelectItem,
  menuOptions,
  showSearchInput,
  buttonText,
  sheetTitle,
}: {
  buttonText: string;
  sheetTitle: string;
  showSearchInput: boolean;
  onSelectItem?: OnSelectItemProp<T>;
  selectedValue?: string;
  menuOptions?: SelectItemOptionsProp<T> | undefined;
}) => {
  const {colors} = useColors();

  const {sheetRef, closeSheet, openSheet} = useSheet();

  return (
    <>
      <AppTouchButton
        height={48}
        onPress={openSheet}
        text={buttonText}
        color="text400"
        rightIcon={<DownCaretIcon stroke={colors.text400} />}
      />
      <AppSelectItemSheet
        title={sheetTitle}
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        selectOptions={menuOptions}
        selectedValue={selectedValue}
        renderRightIcon={() => <ArrowRightIcon />}
        showSearchInput={showSearchInput}
        onSelectItem={onSelectItem}
      />
    </>
  );
};
