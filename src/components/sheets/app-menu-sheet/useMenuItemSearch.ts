import {useEffect, useState} from 'react';
import {MenuOptionsProp} from '../../../types/menusheet';

export const useMenuItemSearch = ({
  menuOptions,
}: {
  menuOptions: MenuOptionsProp;
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [optionsData, setOptionsData] = useState<MenuOptionsProp>(menuOptions);

  useEffect(() => {
    if (menuOptions.length) {
      const filteredData = menuOptions.filter(opt =>
        opt.value.trim().toLowerCase().includes(query.trim().toLowerCase()),
      );
      setOptionsData(filteredData);
    }
  }, [menuOptions, query]);

  return {
    optionsData,
    query,
    setQuery,
    isFocused,
    setIsFocused,
  };
};
