import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {ModalizeSheetRef} from '@/types/sheet';

export type AppContentSheetProps = {
  headerTitle?: string;
  HeaderRightContent?: ReactNode;
  AdditionalHeaderContent?: ReactNode;
  FooterComponent?: ReactNode;
  closeSheet?: () => void;
  sheetRef?: ModalizeSheetRef;
  onOpen?: () => void;
  onClose?: () => void;
  children: ReactNode;
  removeHeader?: boolean;
  containerStyle?: ViewStyle;
  modalHeight?: number;
  contentHeight?: number;
  isLoading?: boolean;
  isScrollable?: boolean;
  adjustToContentHeight?: boolean;
  panGestureEnabled?: boolean;
  closeOnOverlayTap?: boolean;
};
