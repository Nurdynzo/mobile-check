import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../resources/colors';
import {typography} from '../../../resources/fonts';

export const appMenuSheetStyle = ({
  colors,
  isFocused,
}: {colors?: ColorDefinitions; isFocused?: boolean} = {}) =>
  StyleSheet.create({
    optionsContainer: {gap: 24},
    titleContainer: {
      marginVertical: 16,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
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
      marginBottom: 16,
      paddingHorizontal: 24,
    },
    inputContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      height: 40,
      alignItems: 'center',
      borderWidth: isFocused ? 1.5 : 1,
      borderRadius: 10,
      borderColor: colors?.[isFocused ? 'primary400' : 'neutral100'],
    },
    searchIcon: {marginRight: 16},
  });

export const menuOptionItemStyles = ({
  colors,
  isSelected,
}: {colors?: ColorDefinitions; isSelected?: boolean} = {}) =>
  StyleSheet.create({
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 24,
      backgroundColor: isSelected ? colors?.neutral50 : 'transparent',
    },
    value: {flex: 1},
    itemOptionsContainer: {gap: 24, marginTop: 16, paddingLeft: 12},
  });
