import React from 'react';
import {ActivityIndicator} from 'react-native';
import {FlatList, View} from 'react-native';
import {SearchIcon} from '@/assets/svg';
import {SearchPatientOutput} from '@/state/services/patientApi';
import {SearchResultCard} from '../cards';
import {AppTextInput} from '../inputs';
import {searchPatientResultContainerStyles} from './styles';
import {NOT_AVAILABLE} from '@/utils/index';
import {useSearchPatient} from '@/hooks/patients/useSearchPatient';
import {useColors} from '@/hooks/useColors';

const SearchPatientResultContainer = ({
  onSelectPatient = (item: SearchPatientOutput) => item,
  autoFocus = false,
}: {
  onSelectPatient?: (item: SearchPatientOutput) => void;
  autoFocus?: boolean;
}) => {
  const {colors} = useColors();
  const {searchText, setSearchText, searchResult, searchingForPatient} =
    useSearchPatient();
  const styles = searchPatientResultContainerStyles({
    colors,
    hasResults: [...(searchResult || [])]?.length > 0,
  });

  const renderItem = ({item}: {item: SearchPatientOutput}) => (
    <SearchResultCard
      name={item.fullname ?? NOT_AVAILABLE}
      id={item.patientCode ?? NOT_AVAILABLE}
      onPress={() => onSelectPatient(item)}
    />
  );

  return (
    <View style={styles.gap}>
      <AppTextInput
        autoFocus={autoFocus}
        LeftContent={<SearchIcon stroke={colors.text50} />}
        placeholder="Find Patient"
        value={searchText}
        onChangeText={setSearchText}
      />
      <View style={styles.resultsContainer}>
        <FlatList
          data={searchResult}
          keyExtractor={item => `${item?.id}`}
          renderItem={renderItem}
          ListFooterComponent={
            searchingForPatient ? <ActivityIndicator /> : null
          }
          getItemLayout={(data, index) => ({
            length: 200,
            offset: 200 * index,
            index,
          })}
          initialNumToRender={30}
          maxToRenderPerBatch={30}
        />
      </View>
    </View>
  );
};

export default SearchPatientResultContainer;
