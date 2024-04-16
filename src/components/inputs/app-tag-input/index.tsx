import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useColors} from '../../../hooks/useColors';
import {appTagInputStyles} from './styles';
import {AppText} from '../../common';
import AppSpacer from '../../spacer/AppSpacer';
import {SearchResultCard} from '../../cards';
import {NOT_AVAILABLE} from '../../../utils';
import {appTagInput, suggestion} from './type';
import {CloseIcon} from '../../../assets/svg';
import {hp} from '../../../resources/config';

export function AppTagInput({
  value,
  onChangeText,
  placeholder,
  rightIcon,
  LeftContent,
  height,
  selectedTags,
  setSelectedTags,
  suggestions = [],
  showSearch,
  setShowSearch,
  onPressRightIcon,
}: appTagInput) {
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  useEffect(() => {
    if (value) {
      const lowercaseValue = value.toLowerCase();
      const filteredData = suggestions.filter(item =>
        item.name.toLowerCase().includes(lowercaseValue),
      );
      setFilteredSuggestions(filteredData);
    } else {
      setFilteredSuggestions(suggestions);
    }
  }, [value, suggestions]);

  const onSelectTag = ({id, name}: suggestion) => {
    const tag = selectedTags?.find(f => f.id === id);
    if (!tag) {
      setSelectedTags([
        ...(selectedTags || []),
        {
          id,
          name,
        },
      ]);
    }
  };

  const handleAddTagManually = () => {
    setShowSearch(false);
    const tag = filteredSuggestions?.find(f => f.name === value);
    if (tag) {
      const tagAlreadyExist = selectedTags?.find(f => f.id === tag?.id);
      if (!tagAlreadyExist) {
        setSelectedTags([
          ...(selectedTags || []),
          {
            id: tag?.id,
            name: tag?.name,
          },
        ]);
        if (onPressRightIcon) {
          onPressRightIcon();
        }
      }
    }
  };

  const removeTag = ({id}: suggestion) => {
    const tags = selectedTags?.filter(f => f.id !== id);
    if (tags) {
      setSelectedTags(tags);
    }
  };

  const {colors} = useColors();

  const styles = appTagInputStyles({colors, height});

  return (
    <>
      <View style={styles.inputContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputTextIconContainer}>
            {LeftContent}
            <TextInput
              multiline={true}
              value={value}
              onChangeText={onChangeText}
              style={styles.input}
              allowFontScaling={false}
              placeholder={placeholder}
            />
            {rightIcon && (
              <TouchableOpacity onPress={handleAddTagManually}>
                <AppSpacer direction="top" size={3} />
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.selectedTagsContainer}>
            {selectedTags &&
              selectedTags?.length > 0 &&
              selectedTags.map((tag, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => removeTag(tag)}
                  style={styles.tagItem}>
                  <AppText color="black" text={tag?.name} />
                  <AppSpacer direction="right" size={5} />
                  <CloseIcon fill={colors.text300} width={hp(16)} />
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>

      <AppSpacer direction="top" size={3} />
      {showSearch && value && (
        <>
          <View style={[styles.resultsContainer, styles.resultCardWrapper]}>
            <AppSpacer direction="top" size={3} />
            <FlatList
              data={filteredSuggestions}
              keyExtractor={item => `${item?.name}`}
              renderItem={({item}) => (
                <SearchResultCard
                  showId={false}
                  name={item.name ?? NOT_AVAILABLE}
                  id={item.id ?? NOT_AVAILABLE}
                  onPress={() => {
                    onSelectTag ? onSelectTag(item) : null;
                    setShowSearch(false);
                  }}
                />
              )}
              getItemLayout={(data, index) => ({
                length: 200,
                offset: 200 * index,
                index,
              })}
              initialNumToRender={30}
              maxToRenderPerBatch={30}
              keyboardShouldPersistTaps="handled"
            />
          </View>
        </>
      )}
    </>
  );
}
