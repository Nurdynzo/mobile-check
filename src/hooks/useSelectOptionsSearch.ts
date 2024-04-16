import {useState} from 'react';
import {SelectItemOptionsProp} from '../types/selectItemsheet';

type useSelectOptionsSearchProps<T> = {
  selectOptions: SelectItemOptionsProp<T>;
};

export const useSelectOptionsSearch = <T>({
  selectOptions: selectOptions,
}: useSelectOptionsSearchProps<T>) => {
  const [query, setQuery] = useState('');
  const [optionsData, setOptionsData] =
    useState<SelectItemOptionsProp<T>>(selectOptions);

  const handleQuery = (text: string) => {
    setQuery(text);
    if (selectOptions.length) {
      const filteredData = selectOptions.filter(opt =>
        opt.item.value
          .toString()
          .trim()
          .toLowerCase()
          .includes(text.trim().toLowerCase()),
      );
      setOptionsData(filteredData);
    }
  };

  return {
    optionsData,
    query,
    setQuery: handleQuery,
  };
};
