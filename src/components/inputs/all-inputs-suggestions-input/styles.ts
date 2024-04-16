import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {typography} from '@/resources/fonts';
import {StyleSheet} from 'react-native';

export const allInputsSuggestionsInputStyles = ({
  colors,
  marginBottom = 10,
}: {
  colors?: ColorDefinitions;
  marginBottom?: number;
}) => {
  return StyleSheet.create({
    baseContainer: {
      gap: wp(16),
      minHeight: wp(88),
      maxHeight: wp(208),
      borderRadius: wp(10),
      borderWidth: 1,
      marginBottom: wp(marginBottom),
      borderColor: colors?.neutral100,
      paddingVertical: wp(8),
      backgroundColor: colors?.white,
      paddingHorizontal: wp(12),
      flexDirection: 'row',
    },
    searchCard: {
      marginBottom: 0,
      paddingHorizontal: wp(12),
    },
    selectedSuggestionsContainer: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      gap: wp(12),
    },
    textInputWrapper: {
      flex: 1,
      gap: wp(8),
    },
    textInput: {
      paddingTop: 0,
      paddingBottom: 0,
      borderWidth: 0,
      justifyContent: 'flex-start',
      textAlignVertical: 'top',
      maxHeight: wp(100),
      ...typography.body_2_medium,
    },
    inputContentContainer: {
      height: undefined,
      borderWidth: 0,
      paddingHorizontal: 0,
      paddingTop: 0,
      borderRadius: 0,
    },
    actionsBtnContainer: {
      height: '100%',
      paddingVertical: wp(5),
      gap: wp(24),
      alignItems: 'flex-end',
    },
  });
};
