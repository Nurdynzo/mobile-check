import {ReactNode} from 'react';

type alignProps = 'left' | 'center' | 'right';

export type cardProps = {
  title?: string;
  desc?: string;
  onPress?: () => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  hasBorder?: boolean;
  titleAlign?: alignProps;
  descAlign?: alignProps;
  subCardTextFull?: boolean;
};
