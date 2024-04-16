import {useState} from 'react';
import {useApiServicesAppPatientsSearchpatientGetQuery} from '../../state/services/patientApi';
import useDebounce from '../useDebounce';
import {EMPTY_STRING} from '@/utils/constants';

export const useSearchPatient = () => {
  const [searchText, setSearchText] = useState<string>(EMPTY_STRING);
  const debouncedSearchTerm = useDebounce({
    value: searchText,
  });
  const {
    isError,
    isFetching: searchingForPatient,
    isSuccess,
    currentData: searchResult,
    refetch: searchForPatient,
  } = useApiServicesAppPatientsSearchpatientGetQuery(
    {
      searchText: debouncedSearchTerm,
    },
    {
      skip: searchText === '' || searchText.length <= 1,
    },
  );

  return {
    searchResult,
    searchText,
    setSearchText,
    isError,
    searchingForPatient,
    isSuccess,
    searchForPatient,
  };
};
