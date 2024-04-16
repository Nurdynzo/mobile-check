import {useSearchPatient} from '@/hooks/patients/useSearchPatient';
import React, {FunctionComponent, ReactNode} from 'react';
import OverlaySearchTextInput from '../../overlay-search-text-input';
import {OverlaySearchItem} from '../../overlay-search-text-input/type';
import {SearchPatientOutput} from '@/state/services/patientApi';
import {EMPTY_STRING} from '@/utils/constants';

const SearchPatientInput: FunctionComponent<{
  placeholder: string;
  onSelectedItem: (props: SearchPatientOutput) => void;
  value: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  height?: number;
  onChangeText?: (text: string) => void;
}> = ({
  placeholder,
  onSelectedItem,
  value,
  isLoading,
  disabled,
  height = 48,
  onChangeText,
}) => {
  const {
    searchText,
    setSearchText,
    searchResult = [],
    searchingForPatient,
  } = useSearchPatient();

  return (
    <OverlaySearchTextInput
      data={
        searchResult.map(el => ({
          id: el.patientCode as string,
          name: el.fullname as string,
          data: el,
        })) as OverlaySearchItem<SearchPatientOutput>[]
      }
      disabled={disabled}
      value={value}
      KeyExtractor={item => item.id}
      isFetchingData={isLoading || searchingForPatient}
      onChangeText={text => {
        setSearchText(text);
        if (onChangeText) {
          onChangeText(text);
        }
      }}
      searchInputValue={searchText}
      height={height}
      autoFocus
      placeholder={placeholder}
      getSelectedItem={item => {
        onSelectedItem(item);
        setSearchText(item.fullname ?? EMPTY_STRING);
      }}
      showIdInSearchResult={true}
    />
  );
};

export default SearchPatientInput;
