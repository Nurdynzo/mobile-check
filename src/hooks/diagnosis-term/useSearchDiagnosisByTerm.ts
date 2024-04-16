import {useState} from 'react';
import {useApiServicesAppSnowstormGetdiagnosisbytermGetQuery} from '@/state/services/diagnosisApi';
import useDebounce from '../useDebounce';
import {EMPTY_STRING} from '@/utils/constants';

export const useSearchDiagnosisByTerm = () => {
  const [searchText, setSearchText] = useState<string>(EMPTY_STRING);
  const debouncedSearchTerm = useDebounce({
    value: searchText,
  });
  const {
    isError,
    isSuccess,
    currentData: searchResult = [],
    isFetching: searchingForDiagnosisByTerm,
    refetch: searchForPatient,
  } = useApiServicesAppSnowstormGetdiagnosisbytermGetQuery(
    {
      searchTerm: debouncedSearchTerm,
    },
    {skip: searchText === EMPTY_STRING},
  );

  return {
    searchResult,
    searchText,
    setSearchText,
    isError,
    searchingForPatient: searchingForDiagnosisByTerm,
    isSuccess,
    searchForPatient,
  };
};
