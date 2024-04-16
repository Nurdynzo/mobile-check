import {ReactNode} from 'react';

export type AllInputDataItem<T extends string, S extends string, R> = {
  title: T;
  subTitle: S;
  routeName: R;
};

export type AllInput<T extends string, S extends string, R> = {
  allInputData: readonly AllInputDataItem<T, S, R>[];
  AllInputsClinicalInfoContent: ReactNode;
  handleRoute: (routeName: R) => void;
  ScreenHeaderRightContent?: ReactNode;
};
