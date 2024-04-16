import {Image} from 'react-native-image-crop-picker';
import {ModalizeSheetRef} from '../../../types/sheet';

export type AppImageUploadSheetProps = {
  sheetRef?: ModalizeSheetRef;
  closeSheet?: () => void;
  onUplaodImage?: (image?: Image) => void;
  onOpen?: () => void;
  onClose?: () => void;
};
