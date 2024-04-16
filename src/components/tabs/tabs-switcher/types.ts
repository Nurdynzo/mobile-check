import {ViewStyle} from 'react-native';

export type AppTabSwitcherProps<T> = {
  selectedTab: TabSwitcherType<T>;
  tabs: TabSwitcherType<T>[];
  onChangeTab: (tab: TabSwitcherType<T>) => void;
  disabled?: boolean;
  hasFlex?: boolean;
  extraStyles?: ViewStyle;
};

export type TabSwitcherType<T> = {
  name: string;
  data: T;
};
