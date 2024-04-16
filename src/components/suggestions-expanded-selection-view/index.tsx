import {SearchIcon} from '@/assets/svg';
import AllInputsSuggestionsContainer from '@/components/all-inputs-suggestions-container';
import {AllInputsPillButton, AppButton} from '@/components/buttons';
import {AppTextInput} from '@/components/inputs';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import {View} from 'react-native';
import {NewCustomSnowstormSimpleResponseDto} from '../forms/all-inputs-suggestion-form/types';
import SuggestionSelectionLeadingView from '../suggestion-selection-leading-view';
import {suggestionsExpandedSelectionViewStyles} from './styles';
import {
  useAddRemoveSuggestionInput,
  useNewAddRemoveSuggestionInput,
} from './use-add-remove-suggestion-input';
import {CustomSnowstormSimpleResponseDto} from '@/types/CustomSnowstormSimpleResponseDto';

const SuggestionsExpandedSelectionView = <T,>({
  suggestions = [],
  initialSeletedSugestions,
  headerTitle = EMPTY_STRING,
  onSaveChanges,
  isSingleSelect,
  toggleButton,
}: {
  headerTitle: string;
  suggestions: CustomSnowstormSimpleResponseDto<T>[];
  initialSeletedSugestions: CustomSnowstormSimpleResponseDto<T>[];
  onSaveChanges: (data: CustomSnowstormSimpleResponseDto<T>[]) => void;
  isSingleSelect?: boolean;
  toggleButton?: React.JSX.Element;
}) => {
  const {colors} = useColors();
  const {openSheet, sheetRef, closeSheet} = useSheet();

  const styles = suggestionsExpandedSelectionViewStyles();
  const {
    handleQuery,
    queryText,
    handleOnPressItem,
    selectedItems,
    sugesstionsData,
    reset,
    initialize,
  } = useAddRemoveSuggestionInput({
    initialSeletedSugestions,
    suggestions,
    isSingleSelect,
  });
  return (
    <>
      <SuggestionSelectionLeadingView
        toggleButton={toggleButton}
        onTapExpand={openSheet}
      />
      <AppContentSheet
        sheetRef={sheetRef}
        onOpen={initialize}
        onClose={reset}
        headerTitle={headerTitle}>
        <View style={styles.sheetContent}>
          <AppTextInput
            value={queryText}
            onChangeText={handleQuery}
            placeholder={'Search suggestions'}
            autoFocus
            LeftContent={<SearchIcon stroke={colors.text300} />}
          />
          <AllInputsSuggestionsContainer height={334.4}>
            {sugesstionsData.map((item, index) => {
              return (
                <AllInputsPillButton
                  key={index}
                  text={`${item.name}`}
                  background={item.isInActive ? 'white' : 'neutral200'}
                  isSelected={selectedItems.some(el => el.name === item.name)}
                  onPress={() => {
                    handleOnPressItem(item);
                  }}
                />
              );
            })}
          </AllInputsSuggestionsContainer>
          <AppButton
            text="Save changes"
            onPress={() => {
              onSaveChanges(selectedItems);
              closeSheet();
            }}
          />
        </View>
      </AppContentSheet>
    </>
  );
};

export default SuggestionsExpandedSelectionView;

export const NewSuggestionsExpandedSelectionView = <
  T extends NewCustomSnowstormSimpleResponseDto,
>({
  suggestions = [],
  initialSeletedSugestions,
  headerTitle = EMPTY_STRING,
  onSaveChanges,
  isSingleSelect,
  toggleButton,
}: {
  headerTitle: string;
  suggestions: T[];
  initialSeletedSugestions: T[];
  onSaveChanges: (data: T[]) => void;
  isSingleSelect?: boolean;
  toggleButton?: React.JSX.Element;
}) => {
  const {colors} = useColors();
  const {openSheet, sheetRef, closeSheet} = useSheet();

  const styles = suggestionsExpandedSelectionViewStyles();
  const {
    handleQuery,
    queryText,
    handleOnPressItem,
    selectedItems,
    sugesstionsData,
    reset,
    initialize,
  } = useNewAddRemoveSuggestionInput<T>({
    initialSeletedSugestions,
    suggestions,
    isSingleSelect,
  });
  return (
    <>
      <SuggestionSelectionLeadingView
        toggleButton={toggleButton}
        onTapExpand={openSheet}
      />
      <AppContentSheet
        sheetRef={sheetRef}
        onOpen={initialize}
        onClose={reset}
        headerTitle={headerTitle}>
        <View style={styles.sheetContent}>
          <AppTextInput
            value={queryText}
            onChangeText={handleQuery}
            placeholder={'Search suggestions'}
            autoFocus
            LeftContent={<SearchIcon stroke={colors.text300} />}
          />
          <AllInputsSuggestionsContainer height={334.4}>
            {sugesstionsData.map((item, index) => {
              return (
                <AllInputsPillButton
                  key={index}
                  text={`${item.name}`}
                  background={item.isInActive ? 'white' : 'neutral200'}
                  isSelected={selectedItems.some(el => el.name === item.name)}
                  onPress={() => {
                    handleOnPressItem(item);
                  }}
                />
              );
            })}
          </AllInputsSuggestionsContainer>
          <AppButton
            text="Save changes"
            onPress={() => {
              onSaveChanges(selectedItems);
              closeSheet();
            }}
          />
        </View>
      </AppContentSheet>
    </>
  );
};
