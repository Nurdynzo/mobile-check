import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const allInputsSuggestionsContainerStyles = ({
  colors,
  height = 200,
  marginBottom = 0,
}: {
  height?: number;
  colors?: ColorDefinitions;
  marginBottom?: number;
}) => {
  return StyleSheet.create({
    baseContainer: {
      gap: wp(12),
      marginBottom: wp(marginBottom),
      height: wp(height),
      width: '100%',
      backgroundColor: colors?.white,
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: colors?.neutral100,
      paddingVertical: wp(8),
      paddingHorizontal: wp(12),
    },
    scrollViewContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: wp(12),
    },
  });
};
