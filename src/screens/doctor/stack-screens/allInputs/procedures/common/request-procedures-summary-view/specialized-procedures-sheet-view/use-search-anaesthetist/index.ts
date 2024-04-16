import useDebounce from '@/hooks/useDebounce';
import {useApiServicesAppProcedureGetstaffmemberbysearchfilterGetQuery} from '@/state/services/procedureApi';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';

const useSearchAnaesthetist = () => {
  const [anaesthetistSearchTerm, setAnaesthetistSearchTerm] =
    useState<string>(EMPTY_STRING);
  const [showAnaesthetistDropDown, setShowAnaesthetistDropDown] =
    useState<boolean>(false);

  const onSearchTextChange = (text: string) => {
    setAnaesthetistSearchTerm(text);
    if (!showAnaesthetistDropDown) {
      setShowAnaesthetistDropDown(true);
    }
  };

  const debouncedSearchTerm = useDebounce({
    value: anaesthetistSearchTerm,
  });

  const {data: anaesthetists, isFetching: isAnaesthetistDataLoading} =
    useApiServicesAppProcedureGetstaffmemberbysearchfilterGetQuery({
      filter: debouncedSearchTerm,
      isAnaethetist: false,
    });

  const filterAnaesthetists = () => {
    if (!anaesthetists || !anaesthetistSearchTerm) {
      return [];
    }

    const searchTermLowerCase = anaesthetistSearchTerm.toLowerCase();

    return anaesthetists.filter(
      anaesthetist =>
        (anaesthetist.name ?? EMPTY_STRING)
          .toLowerCase()
          .startsWith(searchTermLowerCase) ||
        (anaesthetist.middleName ?? EMPTY_STRING)
          .toLowerCase()
          .startsWith(searchTermLowerCase) ||
        (anaesthetist.surname ?? EMPTY_STRING)
          .toLowerCase()
          .startsWith(searchTermLowerCase),
    );
  };

  return {
    onSearchTextChange,
    filterAnaesthetists,
    anaesthetistSearchTerm,
    showAnaesthetistDropDown,
    isAnaesthetistDataLoading,
    setAnaesthetistSearchTerm,
    setShowAnaesthetistDropDown,
  };
};

export default useSearchAnaesthetist;
