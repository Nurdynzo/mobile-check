import {useColors} from '../../hooks/useColors';
import {ScrollView, TouchableOpacity} from 'react-native';
import {AppText} from '../common';
import React from 'react';
import {appPillsContainerType} from './type';
import {appPillsContainerStyles} from './styles';
import {PlusIcon} from '../../assets/svg';

export function AppPillsContainer({
  suggestions,
  setSuggestions,
  height,
}: appPillsContainerType) {
  const onSelectTag = ({id, name}: {id: string; name: string}) => {
    if (setSuggestions) {
      setSuggestions({id, name});
    }
  };

  const {colors} = useColors();

  const styles = appPillsContainerStyles({colors, height});

  return (
    <ScrollView
      style={styles.selectedTagsContainer}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      {suggestions &&
        suggestions.length > 0 &&
        suggestions.map((tag, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              onSelectTag({
                id: tag?.id || '',
                name: tag?.name || '',
              })
            }
            style={styles.tagItem}>
            <AppText color="black" text={tag?.name} />
            <PlusIcon />
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
}
