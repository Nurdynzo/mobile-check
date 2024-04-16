import {ArrowRightIcon} from '@/assets/svg';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import AppMenuSheet from '@/components/sheets/app-menu-sheet';
import {useSheet} from '@/hooks/useSheet';
import {MenuOptionsProp} from '@/types/menusheet';
import React from 'react';
import {AllInputPresaveItemViewmProps} from './types';

const AllInputPresaveItemView: React.FC<AllInputPresaveItemViewmProps> = ({
  TextComponent,
  onRemove = () => null,
  onEdit = () => null,
}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();

  const preSaveListOptions: MenuOptionsProp = [
    {
      value: 'Edit',
      onPress: onEdit,
    },
    {
      value: 'Remove',
      onPress: onRemove,
    },
  ];

  return (
    <>
      <AllInputsHistoryTile
        hideTimeAndDate
        onPress={openSheet}
        textComponent={TextComponent}
      />

      <AppMenuSheet
        removeHeader
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        menuOptions={preSaveListOptions}
        renderRightIcon={() => <ArrowRightIcon />}
        showSearchInput={false}
      />
    </>
  );
};

export default AllInputPresaveItemView;
