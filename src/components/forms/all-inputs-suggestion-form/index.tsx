import AllInputsSuggestionsContainer from '@/components/all-inputs-suggestions-container';
import {AllInputsPillButton} from '@/components/buttons';
import {AllInputsSuggestionsInput} from '@/components/inputs';
import {NewAllInputsSuggestionsInput} from '@/components/inputs/all-inputs-suggestions-input';
import SuggestionsExpandedSelectionView, {
  NewSuggestionsExpandedSelectionView,
} from '@/components/suggestions-expanded-selection-view';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import {
  AllInputsSuggestionFormProps,
  NewAllInputsSuggestionFormProps,
  NewCustomSnowstormSimpleResponseDto,
} from './types';

/**
 *
 * This component is deprecated, kindly use NewAllInputsSuggestionForm.
 */
const AllInputsSuggestionForm = <T,>({
  formProps,
  suggestions,
  ContentInBetweenSuggesstionsFields,
  expandSheetHeaderTitle,
  isSingleSelect,
  ActionBtnContent,
  showTextInput = true,
  extraBaseContainerStyle,
  showRightView = true,
  disablePlusBtnCondition,
  toggleButton,
  textValueSuggestions,
  isloadingTextValueSuggestion,
  placeholder,
  renderSuggestionsPillLeftContent = () => null,
  removeExpandButton,
  suggestionBoxHeight,
}: AllInputsSuggestionFormProps<T>) => {
  const {
    text,
    selectedItems,
    handleAddItem,
    handleRemoveItem,
    setSelectedItems,
    setText,
  } = formProps;

  return (
    <>
      <AllInputsSuggestionsInput
        placeholder={placeholder}
        showRightView={showRightView}
        extraBaseContainerStyle={extraBaseContainerStyle}
        showTextInput={showTextInput}
        marginBottom={8}
        suggestions={selectedItems}
        textValue={text}
        textValueSuggestions={textValueSuggestions}
        isloadingTextValueSuggestion={isloadingTextValueSuggestion}
        onSelectSuggestion={item => {
          handleAddItem(item);
          setText(EMPTY_STRING);
        }}
        ActionBtnContent={ActionBtnContent}
        disablePlusBtn={disablePlusBtnCondition || !text.trim()}
        onChangeText={setText}
        onPressPlusIcon={() => {
          handleAddItem({
            id: null,
            name: text,
          });
          setText(EMPTY_STRING);
        }}
        onRemoveItem={item => {
          handleRemoveItem(item);
        }}
      />
      {ContentInBetweenSuggesstionsFields}
      <AllInputsSuggestionsContainer
        height={suggestionBoxHeight}
        leadingComponent={
          !removeExpandButton ? (
            <SuggestionsExpandedSelectionView
              toggleButton={toggleButton}
              headerTitle={expandSheetHeaderTitle}
              initialSeletedSugestions={selectedItems}
              suggestions={suggestions}
              onSaveChanges={data => {
                setSelectedItems(data);
              }}
              isSingleSelect={isSingleSelect}
            />
          ) : (
            <></>
          )
        }>
        {suggestions?.map((item, index) => (
          <AllInputsPillButton
            LeftContent={renderSuggestionsPillLeftContent(item)}
            key={index}
            text={`${item?.name}`}
            onPress={() => {
              handleAddItem({
                ...item,
              });
            }}
          />
        ))}
      </AllInputsSuggestionsContainer>
    </>
  );
};

export default AllInputsSuggestionForm;

/**
 * This component is the view that shows selected all inputs suggestions
 * and list of suggestions to be selected from.
 *
 *
 * @param placeholder defaults to Click predictive text or type here
 * @param activePillBackground defaults to neutral200
 * @param inActivePillBackground defaults to white
 * @param showRightView defaults to true
 * @param showTextInput defaults to true
 */
export const NewAllInputsSuggestionForm = <
  T extends NewCustomSnowstormSimpleResponseDto,
>({
  formProps,
  suggestions,
  ContentInBetweenSuggesstionsFields,
  expandSheetHeaderTitle,
  isSingleSelect,
  ActionBtnContent,
  showTextInput = true,
  extraBaseContainerStyle,
  showRightView = true,
  disablePlusBtnCondition,
  toggleButton,
  textValueSuggestions,
  isloadingTextValueSuggestion,
  placeholder,
  activeSelectedPillBackground = 'neutral200',
  inActiveSelectedPillBackground = 'white',
  renderSuggestionsPillLeftContent = () => null,
  removeExpandButton,
}: NewAllInputsSuggestionFormProps<T>) => {
  const {
    text,
    selectedItems,
    handleAddItem,
    handleRemoveItem,
    setSelectedItems,
    setText,
  } = formProps;

  return (
    <>
      <NewAllInputsSuggestionsInput
        placeholder={placeholder}
        showRightView={showRightView}
        extraBaseContainerStyle={extraBaseContainerStyle}
        showTextInput={showTextInput}
        marginBottom={8}
        suggestions={selectedItems}
        textValue={text}
        activePillBackground={activeSelectedPillBackground}
        inActivePillBackground={inActiveSelectedPillBackground}
        textValueSuggestions={textValueSuggestions}
        isloadingTextValueSuggestion={isloadingTextValueSuggestion}
        onSelectSuggestion={item => {
          handleAddItem(item);
          setText(EMPTY_STRING);
        }}
        ActionBtnContent={ActionBtnContent}
        disablePlusBtn={disablePlusBtnCondition || !text.trim()}
        onChangeText={setText}
        onPressPlusIcon={() => {
          handleAddItem({
            id: null,
            name: text,
          } as T);
          setText(EMPTY_STRING);
        }}
        onRemoveItem={item => {
          handleRemoveItem(item);
        }}
      />
      {ContentInBetweenSuggesstionsFields}
      <AllInputsSuggestionsContainer
        leadingComponent={
          !removeExpandButton ? (
            <NewSuggestionsExpandedSelectionView
              toggleButton={toggleButton}
              headerTitle={expandSheetHeaderTitle}
              initialSeletedSugestions={selectedItems}
              suggestions={suggestions}
              onSaveChanges={data => {
                setSelectedItems(data);
              }}
              isSingleSelect={isSingleSelect}
            />
          ) : (
            <></>
          )
        }>
        {suggestions?.map((item, index) => (
          <AllInputsPillButton
            LeftContent={renderSuggestionsPillLeftContent(item)}
            key={index}
            text={`${item?.name}`}
            onPress={() => {
              handleAddItem({
                ...item,
              });
            }}
          />
        ))}
      </AllInputsSuggestionsContainer>
    </>
  );
};
