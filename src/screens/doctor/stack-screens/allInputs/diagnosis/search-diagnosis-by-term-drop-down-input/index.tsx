import {PlusCircleIcon} from '@/assets/svg';
import {SearchResultCard} from '@/components/cards';
import DropdownList from '@/components/dropdown-list';
import {AppTextInput} from '@/components/inputs';
import {useSearchDiagnosisByTerm} from '@/hooks/diagnosis-term/useSearchDiagnosisByTerm';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import React, {FunctionComponent, useRef, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {searchDiagnosisByTermDropDownInputStyles} from './styles';
import {EMPTY_STRING} from '@/utils/constants';

const SearchDiagnosisByTermDropDownInput: FunctionComponent<{
  onSelect?: (item: SnowstormSimpleResponseDto) => void;
}> = ({onSelect = () => null}) => {
  const inputRef = useRef<TextInput>(null);
  const {
    searchText,
    setSearchText,
    searchResult = [],
    searchingForPatient,
  } = useSearchDiagnosisByTerm();
  const [show, setShow] = useState(false);
  const {colors} = useColors();

  const styles = searchDiagnosisByTermDropDownInputStyles;

  return (
    <>
      <AppTextInput
        inputRef={inputRef}
        placeholder={'Enter diagnosis'}
        value={searchText}
        onChangeText={text => {
          setSearchText(text);
          if (!show) {
            setShow(true);
          }
        }}
        inputContainerStyle={{paddingHorizontal: wp(12)}}
        RightContent={
          <TouchableOpacity
            disabled={!searchText?.trim()}
            onPress={() => {
              setShow(false);
              onSelect({id: null, name: searchText});
              setSearchText(EMPTY_STRING);
            }}>
            <PlusCircleIcon
              fill={colors?.[searchText?.trim() ? 'primary400' : 'text50']}
            />
          </TouchableOpacity>
        }
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      <DropdownList
        viewRef={inputRef}
        data={searchResult}
        visible={show && !!searchResult?.length}
        isLoading={searchingForPatient}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => {
          return (
            <SearchResultCard
              name={item.name as string}
              showId={false}
              onPress={() => {
                onSelect(item);
              }}
              containerStyle={styles.result}
            />
          );
        }}
      />
    </>
  );
};

export default SearchDiagnosisByTermDropDownInput;
