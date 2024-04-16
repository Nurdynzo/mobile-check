import File from '@/types/file';
import {ModalizeSheetRef} from '@/types/sheet';

export type AppImageUploadSheetProps = {
  sheetRef?: ModalizeSheetRef;
  closeSheet?: () => void;
  onUploadImage?: (pdf?: File) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onUploading?: (loading: boolean) => void;
};
