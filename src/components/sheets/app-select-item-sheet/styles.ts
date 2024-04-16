import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '@/resources/colors';
import {typography} from '@/resources/fonts';
import {wp} from '@/resources/config';

export const appSelectItemSheetStyle = ({
  colors,
  isFocused,
}: {colors?: ColorDefinitions; isFocused?: boolean} = {}) =>
  StyleSheet.create({
    optionsContainer: {gap: wp(24)},
    textInput: {
      flex: 1,
      height: '100%',
      paddingHorizontal: 0,
      paddingVertical: 0,
      color: 'black',
      ...typography.body_1_medium,
      lineHeight: 0,
    },
    searchContainer: {
      marginBottom: wp(16),
    },
    inputContainer: {
      flexDirection: 'row',
      paddingHorizontal: wp(20),
      height: wp(44),
      alignItems: 'center',
      borderWidth: isFocused ? 1.5 : 1,
      borderRadius: wp(10),
      borderColor: colors?.[isFocused ? 'primary400' : 'neutral100'],
    },
    searchIcon: {marginRight: wp(16)},
    handle: {backgroundColor: colors?.neutral500},
    modal: {
      borderTopLeftRadius: wp(24),
      borderTopRightRadius: wp(24),
      backgroundColor: colors?.background,
      overflow: 'hidden',
    },
    overlay: {backgroundColor: colors?.overlay},
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    listContentContainer: {
      gap: wp(24),
      paddingBottom: wp(30),
    },
    errorIconContainer: {
      backgroundColor: colors?.danger50,
      width: wp(72),
      height: wp(72),
      borderRadius: wp(72),
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      marginTop: wp(32),
      paddingHorizontal: wp(24),
    },
    headerContent: {
      paddingBottom: wp(16),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export const menuOptionItemStyles = ({
  colors,
  isSelected,
}: {colors?: ColorDefinitions; isSelected?: boolean} = {}) =>
  StyleSheet.create({
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: wp(8),
      paddingHorizontal: wp(24),
      backgroundColor: isSelected ? colors?.neutral50 : 'transparent',
    },
    value: {flex: 1, paddingRight: wp(10)},
    itemOptionsContainer: {gap: wp(24), marginTop: wp(16), paddingLeft: wp(12)},
  });
