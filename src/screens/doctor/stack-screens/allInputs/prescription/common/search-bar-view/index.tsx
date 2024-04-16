import React, {useState} from 'react';
import OverlaySearchTextInput from '@/components/inputs/overlay-search-text-input';
import {
  SearchMedicationForReturnDto,
  useApiServicesAppMedicationGetsearchedmedicationsGetQuery,
} from '@/state/services/medicationApi';
import {OverlaySearchItem} from '@/components/inputs/overlay-search-text-input/type';
import {EMPTY_STRING} from '@/utils/constants';

export const PrescriptionSearchBarView = ({
  handleSelectedItem,
}: {
  handleSelectedItem: (item: SearchMedicationForReturnDto) => void;
}) => {
  const [searchText, setSearchText] = useState(EMPTY_STRING);

  const {currentData: searchResult} =
    useApiServicesAppMedicationGetsearchedmedicationsGetQuery(
      {
        searchTerm: searchText,
      },
      {
        skip: searchText === EMPTY_STRING || searchText?.length <= 3,
      },
    );

  return (
    <OverlaySearchTextInput
      showIdInSearchResult={false}
      placeholder={'Search medication'}
      searchInputValue={searchText}
      getSelectedItem={item => {
        handleSelectedItem(item);
      }}
      data={[
        ...(searchResult?.map((data, index) => {
          return {
            id: String(index),
            name: [
              data.productName,
              data.doseForm,
              data.genericName,
              data.categoryName,
              data.activeIngredient,
            ].join(', '),
            data: data,
          } as OverlaySearchItem<SearchMedicationForReturnDto>;
        }) ?? []),
      ]}
      onChangeText={value => {
        setSearchText(value);
      }}
      isFetchingData={false}
    />
  );
};
