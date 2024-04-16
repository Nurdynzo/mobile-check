import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';

export const useAddRemoveSuggestionInput = <
  T extends NewCustomSnowstormSimpleResponseDto,
>({
  initialSeletedSugestions = [],
  suggestions,
  isSingleSelect,
}: {
  initialSeletedSugestions: T[];
  suggestions: T[];
  isSingleSelect?: boolean;
}) => {
  const [selectedItems, setSelectedItems] = useState<T[]>([
    ...initialSeletedSugestions,
  ]);

  const [queryText, setQueryText] = useState(EMPTY_STRING);

  const sugesstionsData = suggestions.filter(el =>
    el.name?.toLowerCase().trim().includes(queryText.toLowerCase().trim()),
  );

  const handleQuery = (text: string) => {
    setQueryText(text);
  };

  const handleOnPressItem = (props: T) => {
    if (!selectedItems.some(p => p.name === props.name)) {
      setSelectedItems(!isSingleSelect ? [...selectedItems, props] : [props]);
    } else {
      setSelectedItems(selectedItems.filter(p => p.name !== props.name));
    }
  };

  const initialize = () => {
    setSelectedItems([...initialSeletedSugestions]);
  };
  const reset = () => {
    setSelectedItems([]);
    setQueryText(EMPTY_STRING);
  };

  return {
    selectedItems,
    queryText,
    handleOnPressItem,
    sugesstionsData,
    handleQuery,
    reset,
    initialize,
  };
};

export const useNewAddRemoveSuggestionInput = <
  T extends NewCustomSnowstormSimpleResponseDto,
>({
  initialSeletedSugestions = [],
  suggestions,
  isSingleSelect,
}: {
  initialSeletedSugestions: T[];
  suggestions: T[];
  isSingleSelect?: boolean;
}) => {
  const [selectedItems, setSelectedItems] = useState<T[]>([
    ...initialSeletedSugestions,
  ]);

  const [queryText, setQueryText] = useState(EMPTY_STRING);

  const sugesstionsData = suggestions.filter(el =>
    el.name?.toLowerCase().trim().includes(queryText.toLowerCase().trim()),
  );

  const handleQuery = (text: string) => {
    setQueryText(text);
  };

  const handleOnPressItem = (props: T) => {
    if (!selectedItems.some(p => p.name === props.name)) {
      setSelectedItems(!isSingleSelect ? [...selectedItems, props] : [props]);
    } else {
      setSelectedItems(selectedItems.filter(p => p.name !== props.name));
    }
  };

  const initialize = () => {
    setSelectedItems([...initialSeletedSugestions]);
  };
  const reset = () => {
    setSelectedItems([]);
    setQueryText(EMPTY_STRING);
  };

  return {
    selectedItems,
    queryText,
    handleOnPressItem,
    sugesstionsData,
    handleQuery,
    reset,
    initialize,
  };
};
