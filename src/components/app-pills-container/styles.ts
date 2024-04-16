import {ColorDefinitions} from '../../resources/colors';
import {StyleSheet} from 'react-native';
import {wp} from '@/resources/config';

export const appPillsContainerStyles = ({
  colors,
  height,
  bg,
}: {
  colors: ColorDefinitions;
  height?: number;
  bg?: string;
}) =>
  StyleSheet.create({
    selectedTagsContainer: {
      height: height || wp(240),
      borderRadius: wp(10),
      borderWidth: 1,
      borderColor: colors?.neutral100,
      backgroundColor: bg || colors.white,
      paddingTop: wp(15),
      paddingRight: wp(12),
    },
    contentContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: wp(10),
      paddingVertical: wp(20),
    },
    tagItem: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: bg || colors?.information50,
      paddingVertical: wp(9),
      paddingHorizontal: wp(12),
      borderRadius: wp(16),
      marginHorizontal: wp(2),
      marginBottom: wp(7),
    },
  });
