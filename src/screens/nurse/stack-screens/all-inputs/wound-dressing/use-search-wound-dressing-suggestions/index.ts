import {useApiServicesAppSnowstormGetsymptomsuggestionGetQuery} from '@/state/services/snowstorm';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';

export const useSearchWoundDressingSuggestions = () => {
  const [query, setQuery] = useState<string>(EMPTY_STRING);

  const {data, isLoading} =
    useApiServicesAppSnowstormGetsymptomsuggestionGetQuery({
      inputType: 'WoundDressing',
      searchTerm: query,
    });

  return {
    data,
    isLoading,
    query,
    setQuery,
  };
};
