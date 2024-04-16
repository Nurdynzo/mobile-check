import React, {FunctionComponent} from 'react';
import OverlaySearchTextInput from '../../overlay-search-text-input';
import {useSearchDiagnosisByTerm} from '@/hooks/diagnosis-term/useSearchDiagnosisByTerm';

const SearchDiagnosesByTermInput: FunctionComponent<{
  value: string;
  placeholder?: string;
  onSelectedItem: (props: {id: string; name: string}) => void;
  isLoading?: boolean;
  disable?: boolean;
  baseInputFlex?: number;
  height?: number;
}> = ({
  placeholder,
  onSelectedItem,
  value,
  isLoading,
  baseInputFlex,
  height = 48,
  disable,
}) => {
  const {
    searchText,
    setSearchText,
    searchResult = [],
    searchingForPatient,
  } = useSearchDiagnosisByTerm();

  return (
    <OverlaySearchTextInput
      baseInputFlex={baseInputFlex}
      data={searchResult.map(el => ({
        id: el.id as string,
        name: el.name as string,
        data: {id: el.id as string, name: el.name as string},
      }))}
      KeyExtractor={item => item.id}
      isFetchingData={isLoading ?? searchingForPatient}
      onChangeText={setSearchText}
      disabled={disable}
      searchInputValue={searchText}
      value={value}
      height={height}
      autoFocus
      placeholder={placeholder}
      getSelectedItem={onSelectedItem}
      showIdInSearchResult={false}
    />
  );
};

export default SearchDiagnosesByTermInput;
