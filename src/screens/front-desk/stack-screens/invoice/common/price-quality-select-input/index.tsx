import React from 'react';
import {Pressable, View} from 'react-native';
import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
} from '@/assets/svg';
import {AppText} from '@/components/common';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {detectTouch} from '@/resources/config';
import {quantities} from '../../defaultValues';
import {priceQualitySelectInputStyles} from './styles';
import {PriceQualitySelectInputType} from './type';
import {SelectItem} from '@/types/selectItemsheet';

const PriceQualitySelectInput = ({
  onChange = () => null,
  value,
  price,
  selectTitle,
}: PriceQualitySelectInputType) => {
  const {colors} = useColors();
  const {openSheet, closeSheet, sheetRef} = useSheet();
  const styles = priceQualitySelectInputStyles({colors});
  return (
    <>
      <View style={styles.container}>
        <AppText
          text={price && value ? price : 'Amount'}
          type="body_1_medium"
          color={price && value ? 'text400' : 'text50'}
          style={styles.priceValue}
        />

        <View style={styles.divider} />

        <Pressable
          hitSlop={detectTouch}
          onPress={openSheet}
          style={styles.quantityContainer}>
          <AppText
            text={value}
            style={styles.quantityValue}
            color={'text400'}
          />
          <DownCaretIcon stroke={colors.black} />
        </Pressable>
      </View>
      <AppSelectItemSheet
        sheetRef={sheetRef}
        title={selectTitle}
        closeSheet={closeSheet}
        onSelectItem={({item}: {item: SelectItem<number>}) => onChange(item)}
        selectedValue={value}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        selectOptions={quantities}
      />
    </>
  );
};

export default PriceQualitySelectInput;
