import {ItemOptionProp} from '@/types/selectItemsheet';
import Tenant from '@/types/tenant';
import {EMPTY_STRING} from '@/utils/constants';
import {localStorage, localStorageKeys} from '@/utils/localStorage';
import {useState} from 'react';

const useSelectPreSavedUniqueBusinessCode = () => {
  const [selectedTenant, setSelectedTenant] = useState(EMPTY_STRING);
  const [searchTerm, setSearchTerm] = useState(EMPTY_STRING);
  const preSavedTenants = localStorage.get<Tenant[]>(
    localStorageKeys.PRE_SAVED_TENANTS,
  );
  const filteredTenants = preSavedTenants
    ?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(item => {
      return {
        item: {
          id: item.uniqueBusinessCode,
          value: item.name,
          data: item,
        },
      } as ItemOptionProp<Tenant>;
    });

  return {
    filteredTenants,
    preSavedTenants,
    selectedTenant,
    setSelectedTenant,
    searchTerm,
    setSearchTerm,
  };
};

export default useSelectPreSavedUniqueBusinessCode;
