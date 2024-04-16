import {ReactNode} from 'react';

export type appTagInput = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  rightIcon?: ReactNode;
  onPressRightIcon?: () => void;
  LeftContent?: ReactNode;
  height?: number;
  selectedTags?: suggestion[];
  setSelectedTags: (arrayOfTags: suggestion[]) => void;
  suggestions?: suggestion[];
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
};

export type suggestion = {id: string; name: string};
