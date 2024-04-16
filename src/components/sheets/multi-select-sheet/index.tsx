import React, {useState} from 'react';
import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {SelectItem} from '@/types/selectItemsheet';
import {AppAlert, AppText} from '@/components/common';
import {CloseIcon, SearchIcon} from '@/assets/svg';
import AnimatedBubble from '@/components/animated-bubble';
import {MultiSelectItemProps, SelectOptionItemProps} from './type';
import {useColors} from '@/hooks/useColors';
import {multiSelectItemSheetStyle, menuOptionItemStyles} from './styles';
import {EMPTY_STRING} from '@/utils/constants';

/*
This component helps to handle multi selection, it's the opposite of the radio button selection.

*/

const MultiSelectItemSheet = <T,>({
  sheetRef,
  selectOptions = [],
  selectedValue,
  closeSheet = () => null,
  title,
  HeaderRightContent,
  renderRightIcon = () => null,
  onSelectItem = () => null,
  showSearchInput,
  searchPlaceholder = 'Search',
  onClose = () => null,
  removeHeader,
  onSearchInputChange = () => null,
  searchValue,
  onOpen = () => null,
  isLoading,
  error,
  flatlistProps,
}: MultiSelectItemProps<T>) => {
  const {colors} = useColors();
  const [isFocused, setIsFocused] = useState(false);
  const styles = multiSelectItemSheetStyle({colors, isFocused});

  return (
    <Portal>
      <Modalize
        panGestureEnabled
        closeOnOverlayTap={true}
        overlayStyle={styles.overlay}
        keyboardAvoidingOffset={30}
        ref={sheetRef}
        onClose={() => {
          onClose();
          onSearchInputChange(EMPTY_STRING);
          setIsFocused(false);
        }}
        onBackButtonPress={() => {
          closeSheet();
          return true;
        }}
        onOpen={onOpen}
        handleStyle={styles.handle}
        handlePosition="inside"
        modalStyle={styles.modal}
        HeaderComponent={
          <>
            {!removeHeader && (
              <View style={styles.titleContainer}>
                <AppText text={title} type="title_semibold" color="text300" />
                {HeaderRightContent}
              </View>
            )}
            {showSearchInput && (
              <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                  <SearchIcon style={styles.searchIcon} />
                  <TextInput
                    placeholderTextColor={colors.text50}
                    autoCapitalize="none"
                    value={searchValue}
                    onChangeText={text => onSearchInputChange(text)}
                    onFocus={() => {
                      setIsFocused(true);
                    }}
                    onBlur={() => {
                      setIsFocused(false);
                    }}
                    placeholder={searchPlaceholder}
                    style={styles.textInput}
                  />
                </View>
              </View>
            )}
          </>
        }
        flatListProps={{
          data: isLoading || error?.value ? [] : selectOptions,
          ListEmptyComponent: (
            <View style={styles.emptyContainer}>
              {isLoading ? (
                <ActivityIndicator color={colors.primary400} />
              ) : error?.value ? (
                <AppAlert
                  title={error?.title ?? 'Oops!'}
                  description={
                    error?.description ??
                    'Something went wrong. Please use the refresh button below to try again'
                  }
                  buttonText="Refresh"
                  onPress={error.onPressRefresh}
                  icon={
                    <AnimatedBubble
                      bgColor="danger25"
                      size={96}
                      Icon={
                        <View style={styles.errorIconContainer}>
                          <CloseIcon
                            fill={colors.danger300}
                            width={36}
                            height={36}
                          />
                        </View>
                      }
                    />
                  }
                />
              ) : (
                <AppText
                  text="Select Options not available"
                  color="text300"
                  align="center"
                />
              )}
            </View>
          ),
          keyExtractor: (item, index) => item?.item?.id.toString() || index,
          contentContainerStyle: [
            styles.listContentContainer,
            {
              ...((!selectOptions?.length || isLoading || error?.value) && {
                flex: 1,
              }),
            },
          ],
          style: {marginTop: removeHeader ? 30 : undefined},
          showsVerticalScrollIndicator: false,
          renderItem: ({item}) => (
            <MenuOptionItem
              renderRightIcon={renderRightIcon}
              onCloseSheet={closeSheet}
              onPressItem={(value: {item: SelectItem<T>}) => {
                onSelectItem(value);
                setIsFocused(false);
              }}
              optionItem={item}
              selectedValue={selectedValue}
              valueTextColor="text400"
              valueOptionTextColor="text300"
            />
          ),
          ...flatlistProps,
        }}
      />
    </Portal>
  );
};

const MenuOptionItem = <T,>({
  onCloseSheet = () => null,
  style,
  renderRightIcon,
  valueOptionTextColor,
  valueTextColor,
  selectedValue,
  optionItem,
  onPressItem = () => null,
}: SelectOptionItemProps<T>) => {
  const {colors} = useColors();
  const styles = menuOptionItemStyles({
    colors,
    isSelected: selectedValue === optionItem.item?.value,
  });

  return (
    <View>
      <TouchableOpacity
        disabled={!!optionItem?.itemOptions}
        onPress={() => {
          if (optionItem?.onPress) {
            optionItem.onPress();
          } else {
            onPressItem({item: optionItem?.item});
          }
          if (!optionItem.disableCloseSheetOnPress) {
            onCloseSheet();
          }
        }}
        style={[styles.option, style]}>
        <View style={styles.value}>
          <AppText text={optionItem?.item?.value} color={valueTextColor} />
        </View>
        {!optionItem.itemOptions && (
          <>
            {optionItem.renderRightIcon
              ? optionItem.renderRightIcon()
              : renderRightIcon &&
                renderRightIcon({
                  isSelected: optionItem?.item?.value === selectedValue,
                })}
          </>
        )}
      </TouchableOpacity>
      {optionItem?.itemOptions?.length ? (
        <View style={styles.itemOptionsContainer}>
          {optionItem.itemOptions?.map(itemOption => (
            <MenuOptionItem
              key={itemOption?.item.id}
              optionItem={itemOption}
              valueTextColor={valueOptionTextColor}
              renderRightIcon={renderRightIcon}
              onCloseSheet={onCloseSheet}
              onPressItem={onPressItem}
              selectedValue={selectedValue}
              style={style}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default MultiSelectItemSheet;
