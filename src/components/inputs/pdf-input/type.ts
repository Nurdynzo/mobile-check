import File from '@/types/file';
export type AppImageInputProps = {
  onChangeImage: (image?: File) => void;
  imageSrc?: string;
  placeholder?: string;
};
