import {ModalizeProps} from 'react-native-modalize';
import {ViewStyle} from 'react-native';
import {ReactNode} from 'react';
import {ModalizeSheetRef} from '@/types/sheet';

export type AppSheetTypes = {
  enableSlideToClose?: boolean;
  disableBackDrop?: boolean;
  sheetRef: ModalizeSheetRef;
  onBackPress?: () => void;
  onPressButton?: () => void;
  modalStyle?: ViewStyle;
  children: ReactNode;
  snapHeight?: number;
  showButton?: boolean;
  useButtonText?: boolean;
  buttonTitle?: string;
  portal?: boolean;
  topContent?: ReactNode;
  contentHeight?: number;
} & Omit<ModalizeProps, 'children'>;
