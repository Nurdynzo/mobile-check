import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';
import {AllInputsTabSuggestionFormHookType} from './type';

export const useAllInputsTabSuggestionForm = <
  T extends NewCustomSnowstormSimpleResponseDto,
>(
  {
    isSingleSelect,
    tabName,
  }: {
    isSingleSelect?: boolean;
    tabName: string;
  } = {tabName: EMPTY_STRING},
): AllInputsTabSuggestionFormHookType<T> => {
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: T[];
  }>({});

  const [text, setText] = useState<{
    [key: string]: string;
  }>({});

  const handleAddItem = (props: T) => {
    if (
      !selectedItems[tabName]?.some(p =>
        p.id && props.id
          ? p.id === props.id && p.name === props.name
          : p.name === props.name,
      )
    ) {
      setSelectedItems(currentItems => ({
        ...currentItems,
        [tabName]: !isSingleSelect
          ? [
              ...(currentItems[tabName]?.filter(el =>
                el.id && props.id ? el.id !== props.id : true,
              ) || []),
              props,
            ]
          : [props],
      }));
      setText(prev => ({...prev, [tabName]: EMPTY_STRING}));
    }
  };

  const handleRemoveItem = (props: T) => {
    setSelectedItems(currentItems => ({
      ...currentItems,
      [tabName]: currentItems[tabName].filter(p => p.name !== props.name),
    }));
  };

  const reset = () => {
    setSelectedItems({});
    setText({});
  };

  return {
    selectedItems: selectedItems[tabName] ?? [],
    setSelectedItems: (data: T[]) =>
      setSelectedItems(prev => ({
        ...prev,
        [tabName]: data,
      })),
    text: text[tabName] ?? EMPTY_STRING,
    setText: (val: string) =>
      setText(prev => ({
        ...prev,
        [tabName]: val,
      })),
    handleAddItem,
    handleRemoveItem,
    reset,
    allTabSelectedItems: selectedItems,
  };
};
