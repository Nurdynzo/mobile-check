import {Ref} from 'react';
import {Modalize} from 'react-native-modalize';

export type ModalizeSheetRef = Ref<Modalize>;

export type BaseSheetProps = {
  closeSheet?: () => void;
  sheetRef?: ModalizeSheetRef;
};
