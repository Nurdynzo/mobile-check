import React from 'react';
import {BinIcon, RightCaretIcon} from '@/assets/svg';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {ScrollableTab} from '@/components/tabs';
import {chipMoreMenu} from '@/constants/procedures';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';

const ScrollablePillSummary = ({
  text = 'Laparatomyy, Prostatectonmy | OR1 | 12:30 PM 31 Jan 24',
}: {
  text?: string;
}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const {colors} = useColors();
  return (
    <>
      <ScrollableTab
        tabs={[text]}
        currentIndex={0}
        activeColor={{background: 'default300'}}
        unActiveColor={{background: 'neutral100'}}
        style={{paddingVertical: wp(10)}}
        onPress={openSheet}
      />

      <AppSelectItemSheet
        removeHeader
        sheetRef={sheetRef}
        selectOptions={chipMoreMenu}
        renderRightIcon={({item}) =>
          item?.item.value.toLowerCase() === 'delete' ? (
            <BinIcon fill={colors.danger100} />
          ) : (
            <RightCaretIcon stroke={colors.text400} />
          )
        }
        onSelectItem={() => {
          closeSheet();
        }}
      />
    </>
  );
};

export default ScrollablePillSummary;
