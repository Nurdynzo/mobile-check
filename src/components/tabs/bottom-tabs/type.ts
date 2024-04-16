import {FunctionComponent} from 'react';

export interface TabConfig {
  name: string;
  component: FunctionComponent;
  Icon: FunctionComponent;
  InActiveIcon: FunctionComponent;
  label: string;
  disabled?: boolean;
}

export interface BottomTabsProps {
  tabs: TabConfig[];
}
