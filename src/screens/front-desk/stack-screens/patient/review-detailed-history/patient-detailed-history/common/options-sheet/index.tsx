import {BinIcon, EditIcon} from '@/assets/svg';
import {AppText} from '@/components/common';
import {AppContentSheet} from '@/components/sheets';
import {BaseSheetProps} from '@/types/sheet';
import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {optionSheetStyles} from './styles';

const OptionsSheet: FunctionComponent<
  BaseSheetProps & {onEditPress?: () => void; onDeletePress?: () => void}
> = ({
  closeSheet = () => null,
  sheetRef,
  onDeletePress = () => null,
  onEditPress = () => null,
}) => {
  const styles = optionSheetStyles;
  return (
    <AppContentSheet sheetRef={sheetRef} closeSheet={closeSheet} removeHeader>
      <View style={styles.menuOptioncontainer}>
        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => {
            onEditPress();
            closeSheet();
          }}>
          <AppText text="Edit" type="body_1_semibold" color="text400" />
          <EditIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => {
            onDeletePress();
            closeSheet();
          }}>
          <AppText text="Delete" type="body_1_semibold" color="danger300" />
          <BinIcon />
        </TouchableOpacity>
      </View>
    </AppContentSheet>
  );
};

export default OptionsSheet;
