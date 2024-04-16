import {ReactNode} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';

export type AppScreenProps = {
  children: ReactNode;
  isScrollable?: boolean;
  disableSafeArea?: boolean;
  ScreenHeader?: ReactNode;
  scrollRef?: React.MutableRefObject<ScrollView | null>;
  paddingHorizontal?: number;
} & ScrollViewProps;
