import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
} from '@/assets/svg';
import {AppText} from '@/components/common';
import {AppMenuSheet} from '@/components/sheets';
import {recordedProcedures} from '@/constants/procedures';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {proceduresStyles} from '../../styles';
import {EMPTY_STRING} from '@/utils/constants';

const RecordedProcedures = () => {
  const {openSheet, sheetRef, closeSheet} = useSheet();
  const {colors} = useColors();
  const styles = proceduresStyles({colors});
  return (
    <>
      <TouchableOpacity onPress={openSheet} style={styles.iconWithText}>
        <AppText
          type="button_link_semibold"
          color="text400"
          text={'Recorded procedures'}
        />
        <DownCaretIcon stroke={colors.text400} />
      </TouchableOpacity>
      <AppMenuSheet
        removeHeader
        sheetRef={sheetRef}
        menuOptions={recordedProcedures}
        selectedValue={EMPTY_STRING}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        onSelectItem={() => {
          closeSheet();
        }}
      />
    </>
  );
};

export default RecordedProcedures;
