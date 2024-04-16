import {ViewStyle} from 'react-native';

export type ItemCardProps = {
  name: string;
  quality: string;
  price: string;
  onDelete?: () => void;
  discountName: string;
  style?: ViewStyle;
  removeDeleteBtn?: boolean;
};
