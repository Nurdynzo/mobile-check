import {ColorKeys} from '@/resources/colors';
import {TypographyKeys} from '@/resources/fonts';
import {ViewStyle} from 'react-native';

export type AppTabSwitcherProps = {
  selectedTab: string;
  tabs?: {name: string}[];
  onChangeTab?: (index: string) => void;
  tabProps?: {
    activeTextColor?: ColorKeys;
    inActiveTextColor?: ColorKeys;
    activeBgColor?: ColorKeys;
    inActiveBgColor?: ColorKeys;
    textType?: TypographyKeys;
    otherStyles?: ViewStyle;
  };
  containerStyles?: ViewStyle;
};
