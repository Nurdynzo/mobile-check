import {ColorKeys} from '../../resources/colors';

export type toastTypeProps = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';

export type appToastViewProps = {
  message: string | undefined;
  title: string | undefined;
  type: toastTypeProps;
  onHide: () => void;
};

export type statusColors = {
  color1: ColorKeys;
  color2: ColorKeys;
  color3: ColorKeys;
};

export type ToastProps = {
  toastType: toastTypeProps;
};
