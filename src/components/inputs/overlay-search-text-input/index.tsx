import SearchResultCard from '@/components/cards/search-result-card';
import Overlay from '@/components/overlay';
import {EMPTY_STRING, NOT_AVAILABLE} from '@/utils/index';
import React, {ReactNode, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import SearchTextInput from '../search-text-input';
import {useColors} from '@/hooks/useColors';
import {searchPatientResultContainerStyles} from '@/components/search-patient-result-container/styles';
import SearchButtonInput from '../search-button-input';
import {OverlaySearchItem} from './type';
import AppActivityIndicator from '@/components/app-activity-indicator';

/** - offset is set to 170 by default
 * - autoFocus is set true by default
 *
 */
const OverlaySearchTextInput = <T,>({
  offset = 170,
  getSelectedItem = (item: T) => item,
  autoFocus = true,
  data,
  searchInputValue,
  onChangeText = () => null,
  placeholder = 'Find patient',
  isFetchingData = false,
  showIdInSearchResult = false,
  baseInputFlex,
  value,
  height = 40,
  disabled,
  KeyExtractor = (_, index) => `${index}`,
}: {
  baseInputFlex?: number;
  showIdInSearchResult?: boolean;
  isFetchingData: boolean;
  value?: ReactNode;
  placeholder?: string;
  offset?: number;
  disabled?: boolean;
  getSelectedItem?: (item: T) => void;
  KeyExtractor?:
    | ((item: OverlaySearchItem<T>, index: number) => string)
    | undefined;
  autoFocus?: boolean;
  data: OverlaySearchItem<T>[];
  searchInputValue?: string;
  onChangeText: ((text: string) => void) | undefined;
  height?: number;
}) => {
  const [showSearch, setShowSearch] = useState(false);

  const {colors} = useColors();

  const styles = searchPatientResultContainerStyles({
    colors,
    hasResults: data.length > 0,
  });

  const renderItem: ListRenderItem<OverlaySearchItem<T>> = ({item, index}) => (
    <SearchResultCard
      key={index}
      showId={showIdInSearchResult}
      name={item?.name ?? NOT_AVAILABLE}
      id={String(item?.id) ?? NOT_AVAILABLE}
      onPress={() => {
        setShowSearch(false);
        getSelectedItem(item.data);

        onChangeText(EMPTY_STRING);
      }}
    />
  );

  return (
    <>
      <SearchButtonInput
        value={value}
        isFocused={showSearch}
        placeholder={placeholder}
        onPress={() => setShowSearch(true)}
        RightContent={
          isFetchingData && <AppActivityIndicator color={'primary100'} />
        }
        disabled={disabled}
        height={height}
        style={{flex: baseInputFlex}}
      />
      <Overlay
        offset={offset}
        onOverlayTap={() => {
          setShowSearch(false);
          onChangeText(EMPTY_STRING);
        }}
        show={showSearch}
        shouldUserOverlayContentStyles={false}>
        <View style={styles.gap}>
          <SearchTextInput
            autoFocus={autoFocus}
            placeholder={placeholder}
            value={searchInputValue}
            onChangeText={onChangeText}
            height={height}
            isLoading={isFetchingData}
          />
          <View style={styles.resultsContainer}>
            <FlatList
              data={data}
              keyExtractor={KeyExtractor}
              renderItem={renderItem}
              getItemLayout={(_, index) => ({
                length: 200,
                offset: 200 * index,
                index,
              })}
              initialNumToRender={30}
              maxToRenderPerBatch={30}
            />
          </View>
        </View>
      </Overlay>
    </>
  );
};

export default OverlaySearchTextInput;
