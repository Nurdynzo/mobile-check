import {PlusCircleIcon} from '@/assets/svg';
import {SearchResultCard} from '@/components/cards';
import DropdownList from '@/components/dropdown-list';
import {useColors} from '@/hooks/useColors';
import {detectTouch} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import React, {useRef, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AllInputsPillButton from '../../buttons/all-inputs-pill-button';
import AppTextInput from '../app-text-input';
import {allInputsSuggestionsInputStyles} from './styles';
import {
  AllInputSuggestionsInputTypes,
  NewAllInputSuggestionsInputTypes,
} from './types';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';

/**
 *
 * This component is deprecated kindly use the NewAllInputsSuggestionsInput
 */
const AllInputsSuggestionsInput = ({
  suggestions = [],
  onRemoveItem = () => null,
  onPressPlusIcon,
  placeholder = 'Click predictive text or type here',
  textValue = EMPTY_STRING,
  marginBottom,
  onChangeText,
  disablePlusBtn,
  ActionBtnContent,
  showTextInput = true,
  extraBaseContainerStyle,
  textValueSuggestions,
  showRightView = true,
  onSelectSuggestion = () => null,
  isloadingTextValueSuggestion,
}: AllInputSuggestionsInputTypes) => {
  const {colors} = useColors();
  const styles = allInputsSuggestionsInputStyles({colors, marginBottom});
  const scrollViewRef = useRef<ScrollView>(null);
  const inputRef = useRef<TextInput>(null);
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={[styles.baseContainer, extraBaseContainerStyle]}>
        <View style={styles.textInputWrapper}>
          {showTextInput && (
            <>
              <AppTextInput
                value={textValue}
                inputRef={inputRef}
                onChangeText={onChangeText}
                multiline={true}
                inputContainerStyle={styles.inputContentContainer}
                inputStyle={styles.textInput}
                placeholder={placeholder}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
              />
              <DropdownList
                viewRef={inputRef}
                data={textValueSuggestions}
                visible={
                  (show || !!textValueSuggestions?.length) &&
                  textValue?.length > 1
                }
                isLoading={isloadingTextValueSuggestion}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({item}) => {
                  return (
                    <SearchResultCard
                      name={item.name as string}
                      showId={false}
                      containerStyle={styles.searchCard}
                      onPress={() => {
                        onSelectSuggestion(item);
                        setShow(false);
                      }}
                    />
                  );
                }}
              />
            </>
          )}
          <ScrollView
            ref={scrollViewRef}
            nestedScrollEnabled
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
            overScrollMode="never">
            <View style={styles.selectedSuggestionsContainer}>
              {suggestions.map((item, index) => (
                <AllInputsPillButton
                  key={index}
                  text={item.name as string}
                  background={item.isInActive ? 'white' : 'neutral200'}
                  isSelected
                  onPress={() => onRemoveItem(item)}
                  borderWidth={0}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        {showRightView && (
          <View style={styles.actionsBtnContainer}>
            <TouchableOpacity
              hitSlop={detectTouch}
              disabled={disablePlusBtn}
              onPress={onPressPlusIcon}>
              {
                <PlusCircleIcon
                  fill={colors?.[!disablePlusBtn ? 'primary400' : 'text50']}
                />
              }
            </TouchableOpacity>
            {ActionBtnContent}
          </View>
        )}
      </View>
    </>
  );
};

export default AllInputsSuggestionsInput;

/**
 * This component is the view that shows selected all inputs suggestions.
 *
 * User's can also type, search and add custom suggestions
 * @param placeholder defaults to Click predictive text or type here
 * @param activePillBackground defaults to neutral200
 * @param inActivePillBackground defaults to white
 * @param showRightView defaults to true
 * @param showTextInput defaults to true
 */
export const NewAllInputsSuggestionsInput = <
  T extends NewCustomSnowstormSimpleResponseDto,
>({
  suggestions = [],
  onRemoveItem = () => null,
  onPressPlusIcon,
  placeholder = 'Click predictive text or type here',
  textValue = EMPTY_STRING,
  marginBottom,
  onChangeText,
  disablePlusBtn,
  ActionBtnContent,
  showTextInput = true,
  extraBaseContainerStyle,
  textValueSuggestions,
  showRightView = true,
  onSelectSuggestion = () => null,
  isloadingTextValueSuggestion,
  activePillBackground = 'neutral200',
  inActivePillBackground = 'white',
}: NewAllInputSuggestionsInputTypes<T>) => {
  const {colors} = useColors();
  const styles = allInputsSuggestionsInputStyles({colors, marginBottom});
  const scrollViewRef = useRef<ScrollView>(null);
  const inputRef = useRef<TextInput>(null);
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={[styles.baseContainer, extraBaseContainerStyle]}>
        <View style={styles.textInputWrapper}>
          {showTextInput && (
            <>
              <AppTextInput
                value={textValue}
                inputRef={inputRef}
                onChangeText={onChangeText}
                multiline={true}
                inputContainerStyle={styles.inputContentContainer}
                inputStyle={styles.textInput}
                placeholder={placeholder}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
              />
              <DropdownList
                viewRef={inputRef}
                data={textValueSuggestions}
                visible={
                  (show || !!textValueSuggestions?.length) &&
                  textValue?.length > 1
                }
                isLoading={isloadingTextValueSuggestion}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({item}) => {
                  return (
                    <SearchResultCard
                      name={item.name as string}
                      showId={false}
                      containerStyle={styles.searchCard}
                      onPress={() => {
                        onSelectSuggestion(item);
                        setShow(false);
                      }}
                    />
                  );
                }}
              />
            </>
          )}
          {suggestions.length ? (
            <ScrollView
              ref={scrollViewRef}
              nestedScrollEnabled
              onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
              overScrollMode="never">
              <View style={styles.selectedSuggestionsContainer}>
                {suggestions.map((item, index) => (
                  <AllInputsPillButton
                    key={index}
                    text={item.name as string}
                    background={
                      item.isInActive
                        ? inActivePillBackground
                        : activePillBackground
                    }
                    isSelected
                    onPress={() => onRemoveItem(item)}
                    borderWidth={0}
                  />
                ))}
              </View>
            </ScrollView>
          ) : (
            <></>
          )}
        </View>
        {showRightView && (
          <View style={styles.actionsBtnContainer}>
            <TouchableOpacity
              hitSlop={detectTouch}
              disabled={disablePlusBtn}
              onPress={onPressPlusIcon}>
              {
                <PlusCircleIcon
                  fill={colors?.[!disablePlusBtn ? 'primary400' : 'text50']}
                />
              }
            </TouchableOpacity>
            {ActionBtnContent}
          </View>
        )}
      </View>
    </>
  );
};
