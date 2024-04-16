import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';
import {
  AllInputsSuggestionFormHookType,
  NewAllInputsSuggestionFormHookType,
} from './type';
import {NewCustomSnowstormSimpleResponseDto} from '../types';

/**
 * This hook is depreacted kindly review to use useNewAllInputsSuggestionForm
 */
export const useAllInputsSuggestionForm = ({
  isSingleSelect,
}: {
  isSingleSelect?: boolean;
} = {}): AllInputsSuggestionFormHookType => {
  const [selectedItems, setSelectedItems] = useState<
    SnowstormSimpleResponseDto[]
  >([]);

  const [text, setText] = useState(EMPTY_STRING);

  const handleAddItem = (props: SnowstormSimpleResponseDto) => {
    if (!selectedItems.some(p => p.name === props.name)) {
      setSelectedItems(!isSingleSelect ? [...selectedItems, props] : [props]);
      setText(EMPTY_STRING);
    }
  };

  const handleRemoveItem = (props: SnowstormSimpleResponseDto) => {
    setSelectedItems(selectedItems.filter(p => p.name !== props.name));
  };

  const reset = () => {
    setSelectedItems([]);
    setText(EMPTY_STRING);
  };

  return {
    selectedItems,
    setSelectedItems,
    text,
    setText,
    handleAddItem,
    handleRemoveItem,
    reset,
  };
};

export const useNewAllInputsSuggestionForm = <
  T extends NewCustomSnowstormSimpleResponseDto,
>({
  isSingleSelect,
}: {
  isSingleSelect?: boolean;
} = {}): NewAllInputsSuggestionFormHookType<T> => {
  const [selectedItems, setSelectedItems] = useState<T[]>([]);

  const [text, setText] = useState(EMPTY_STRING);

  const handleAddItem = (props: T) => {
    if (!selectedItems.some(p => p.name === props.name)) {
      setSelectedItems(!isSingleSelect ? [...selectedItems, props] : [props]);
      setText(EMPTY_STRING);
    }
  };

  const handleRemoveItem = (props: T) => {
    setSelectedItems(selectedItems.filter(p => p.name !== props.name));
  };

  const reset = () => {
    setSelectedItems([]);
    setText(EMPTY_STRING);
  };

  return {
    selectedItems,
    setSelectedItems,
    text,
    setText,
    handleAddItem,
    handleRemoveItem,
    reset,
  };
};
