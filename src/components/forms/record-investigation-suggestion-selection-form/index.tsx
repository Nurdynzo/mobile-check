import AllInputsSuggestionsContainer from '@/components/all-inputs-suggestions-container';
import {AllInputsPillButton} from '@/components/buttons';
import SuggestionsExpandedSelectionView from '@/components/suggestions-expanded-selection-view';
import React, {FunctionComponent} from 'react';
import {NewCustomSnowstormSimpleResponseDto} from '../all-inputs-suggestion-form/types';
import {RecordInvestigationSuggestionSelectionFormProps} from './types';

const RecordInvestigationSuggestionSelectionForm: FunctionComponent<
  RecordInvestigationSuggestionSelectionFormProps
> = ({
  formProps,
  suggestions,
  expandSheetHeaderTitle,
  isSingleSelect,
  toggleButton,
  height,
}) => {
  const {selectedItems, handleAddItem, handleRemoveItem, setSelectedItems} =
    formProps;

  return (
    <>
      <AllInputsSuggestionsContainer
        height={height}
        leadingComponent={
          <SuggestionsExpandedSelectionView
            headerTitle={expandSheetHeaderTitle}
            initialSeletedSugestions={selectedItems}
            suggestions={suggestions}
            toggleButton={toggleButton}
            onSaveChanges={setSelectedItems}
            isSingleSelect={isSingleSelect}
          />
        }>
        {suggestions.map((item, index) => (
          <AllInputsPillButton
            key={index}
            text={`${item?.name}`}
            onPress={() =>
              isItemSelected(item, selectedItems)
                ? handleRemoveItem(item)
                : handleAddItem(item)
            }
            background={
              isItemSelected(item, selectedItems) ? 'white' : 'neutral200'
            }
          />
        ))}
      </AllInputsSuggestionsContainer>
    </>
  );
};

export default RecordInvestigationSuggestionSelectionForm;

const isItemSelected = (
  item: NewCustomSnowstormSimpleResponseDto,
  selectedItems: NewCustomSnowstormSimpleResponseDto[],
) => selectedItems.some(selectedItem => selectedItem.id === item.id);
