import {ColorKeys} from '@/resources/colors';
import {TypographyKeys} from '@/resources/fonts';
import {ViewStyle} from 'react-native';

export type BottomIndicatorTabProps = {
  activeTextColor?: ColorKeys;
  inActiveTextColor?: ColorKeys;
  activeIndicatorColor?: ColorKeys;
  inActiveIndicatorColor?: ColorKeys;
  textType?: TypographyKeys;
  otherStyles?: ViewStyle;
};

export type AppTabSwitcherProps<T extends string> = {
  selectedTab: string;
  tabs?: T[];
  onChangeTab?: (index: T) => void;
  tabProps?: BottomIndicatorTabProps;
  containerStyles?: ViewStyle;
  uniqueTabStyles?: {[key in T[][number]]?: ViewStyle};
};
