import {SearchIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import {OptionProps} from '@/types/menusheet';
import React, {FunctionComponent} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import AppText from '../../common/app-text';
import AppContentSheet from '../app-content-sheet';
import {appMenuSheetStyle, menuOptionItemStyles} from './styles';
import {AppMenuSheetProps, MenuOptionItemProps} from './type';
import {useMenuItemSearch} from './useMenuItemSearch';

// (Franklyn) Pls REFER TO APP_SELECT_ITEM_SHEET , BECAUSE IT NO LONGER IN USE
const AppMenuSheet: FunctionComponent<AppMenuSheetProps> = ({
  sheetRef,
  menuOptions = [],
  selectedValue,
  closeSheet = () => null,
  title,
  HeaderRightContent,
  renderRightIcon = () => null,
  onSelectItem = item => item,
  showSearchInput,
  searchPlaceholder = 'Search',
  onClose = () => null,
  removeHeader,
  onOpen,
  isLoading,
  onChanged,
}) => {
  const {colors} = useColors();

  const {optionsData, isFocused, query, setIsFocused, setQuery} =
    useMenuItemSearch({
      menuOptions,
    });

  const styles = appMenuSheetStyle({colors, isFocused});

  return (
    <AppContentSheet
      removeHeader={removeHeader}
      headerTitle={title}
      HeaderRightContent={HeaderRightContent}
      sheetRef={sheetRef}
      isLoading={isLoading}
      onClose={() => {
        onClose();
        setQuery('');
        setIsFocused(false);
      }}
      onOpen={onOpen}>
      {showSearchInput && (
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <SearchIcon style={styles.searchIcon} stroke={colors.text50} />
            <TextInput
              placeholderTextColor={colors.text50}
              autoCapitalize="none"
              value={query}
              onChangeText={text => setQuery(text)}
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

      <View style={styles.optionsContainer}>
        {optionsData?.map((item: OptionProps) =>
          item?.customComponent ? (
            <React.Fragment key={item.id ?? item.value}>
              {item?.customComponent}
            </React.Fragment>
          ) : (
            <MenuOptionItem
              key={item.id ?? item.value}
              renderRightIcon={item?.icon ? item?.icon : renderRightIcon}
              onCloseSheet={closeSheet}
              onChanged={onChanged}
              onPressItem={value => {
                onSelectItem(value);
                setIsFocused(false);
              }}
              item={item}
              selectedValue={selectedValue}
              valueTextColor={item?.color ? item?.color : 'text400'}
              valueOptionTextColor="text300"
            />
          ),
        )}
      </View>
    </AppContentSheet>
  );
};

const MenuOptionItem: FunctionComponent<MenuOptionItemProps> = ({
  onCloseSheet = () => null,
  style,
  renderRightIcon,
  valueOptionTextColor,
  valueTextColor,
  selectedValue,
  item,
  onPressItem = () => null,
  onChanged,
}) => {
  const {colors} = useColors();
  const styles = menuOptionItemStyles({
    colors,
    isSelected: selectedValue === item.value,
  });

  return (
    <View>
      <TouchableOpacity
        disabled={!!item.valueOptions}
        onPress={() => {
          if (item?.onPress) {
            item.onPress();
          } else {
            onPressItem({item: item.value});
          }
          if (!item.disableCloseSheetOnPress) {
            onCloseSheet();
          }
          if (onChanged) {
            onChanged({item: item.value});
          }
        }}
        style={[styles.option, style]}>
        <View style={styles.value}>
          <AppText text={item.label || item.value} color={valueTextColor} />
        </View>
        {!item.valueOptions && (
          <>
            {item.renderRightIcon
              ? item.renderRightIcon()
              : renderRightIcon &&
                renderRightIcon({isSelected: item.value === selectedValue})}
          </>
        )}
      </TouchableOpacity>
      {item.valueOptions?.length ? (
        <View style={styles.itemOptionsContainer}>
          {item.valueOptions?.map(itemOption => (
            <MenuOptionItem
              key={item?.id ?? itemOption.value}
              item={itemOption}
              valueTextColor={valueOptionTextColor}
              renderRightIcon={renderRightIcon}
              onCloseSheet={onCloseSheet}
              onPressItem={onPressItem}
              selectedValue={selectedValue}
              style={style}
              onChanged={onChanged}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default AppMenuSheet;
