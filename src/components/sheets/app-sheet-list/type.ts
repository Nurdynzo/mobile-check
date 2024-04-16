import {BaseSheetProps, ModalizeSheetRef} from '@/types/sheet';
import {ReactNode} from 'react';
import {Animated, FlatListProps} from 'react-native';

export type AppSheetListProps<ItemT> = {
  headerTitle?: string;
  HeaderRightContent?: ReactNode;
  AdditionalHeaderContent?: ReactNode;
  FooterComponent?: ReactNode;
  closeSheet?: () => void;
  sheetRef?: ModalizeSheetRef;
  onOpen?: () => void;
  onClose?: () => void;
  removeHeader?: boolean;
  panGestureEnabled?: boolean;
  closeOnOverlayTap?: boolean;
  modalHeight?: number;
  contentHeight?: number;
  /**
   *  defaults to true
   */
  adjustToContentHeight?: boolean;
} & Animated.AnimatedProps<FlatListProps<ItemT>> &
  BaseSheetProps;
