import {Image} from 'react-native-image-crop-picker';

export type AppImageInputProps = {
  onChangeImage: (image?: Image) => void;
  imageSrc?: string;
  placeholder?: string;
};
