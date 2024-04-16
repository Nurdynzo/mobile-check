import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';
import {AllInputsMulipleSuggestionFormHookType} from './type';

const useAllInputsMutipleSuggestionForm = <
  T extends NewCustomSnowstormSimpleResponseDto,
>(): AllInputsMulipleSuggestionFormHookType<T> => {
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: T[];
  }>({});

  const [text, setText] = useState<{
    [key: string]: string;
  }>({});

  const handleAddItem = (
    props: T,
    {tabName, isSingleSelect}: {tabName: string; isSingleSelect?: boolean},
  ) => {
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

  const handleRemoveItem = (props: T, {tabName}: {tabName: string}) => {
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
    selectedItems,
    setSelectedItems: (
      data: T[] | ((prevState: T[]) => T[]),
      {tabName}: {tabName: string},
    ) =>
      setSelectedItems(prev => ({
        ...prev,
        [tabName]: typeof data === 'function' ? data(prev[tabName]) : data,
      })),
    text,
    setText: (
      val: string | ((prevState: string) => string),
      {tabName}: {tabName: string},
    ) =>
      setText(prev => ({
        ...prev,
        [tabName]: typeof val === 'function' ? val(prev[tabName]) : val,
      })),
    handleAddItem,
    handleRemoveItem,
    reset,
  };
};

export default useAllInputsMutipleSuggestionForm;
