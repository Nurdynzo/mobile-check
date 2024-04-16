import VoidFunction from '@/types/voidfunction';

export interface TitleRowProps {
  title: string;
  hasDropDown: boolean;
  onPressDropDown: VoidFunction;
  onPress?: VoidFunction;
}

export interface ToggleSwitchRowProps {
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
}

export interface CounterRowProps {
  count: number | string | undefined;
  setCount: (count: number | string) => void;
  name: string | undefined;
  hasDropDown?: boolean;
  onPressDropDown?: VoidFunction;
  addSubBy?: number;
  decimalPlace?: number;
  disable?: boolean;
}
