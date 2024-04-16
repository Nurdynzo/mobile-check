import useDebounce from '@/hooks/useDebounce';
import {useApiServicesAppAccountGettenantsGetQuery} from '@/state/services/accountApi';
import Tenant from '@/types/tenant';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';

const useUniqueBusinessCodeInput = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  const [showSearchSheet, setShowSearchSheet] = useState(false);
  const [searchTerm, setSearchTerm] = useState(EMPTY_STRING);
  const debouncedTerm = useDebounce({value: searchTerm});

  const resetInput = () => {
    onChange(EMPTY_STRING);
    setSearchTerm(EMPTY_STRING);
  };

  const {currentData: tenants, isFetching: isFetchingTenants} =
    useApiServicesAppAccountGettenantsGetQuery(
      {searchTerm: debouncedTerm},
      {
        skip: searchTerm.length === 0,
        selectFromResult: results => ({
          ...results,
          currentData: results.currentData?.map(
            item =>
              ({
                name: item.name,
                uniqueBusinessCode: item.uniqueBusinessCode,
              } as Tenant),
          ),
        }),
      },
    );

  return {
    resetInput,
    showSearchSheet,
    setShowSearchSheet,
    tenants,
    isFetchingTenants,
    debouncedTerm,
    setSearchTerm,
  };
};

export default useUniqueBusinessCodeInput;
