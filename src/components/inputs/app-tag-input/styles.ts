import {ColorDefinitions} from '../../../resources/colors';
import {StyleSheet} from 'react-native';
import {typography} from '../../../resources/fonts';
import {hp, SCREEN_HEIGHT, wp} from '../../../resources/config';

export const appTagInputStyles = ({
  colors,
  height,
  bg,
}: {
  colors: ColorDefinitions;
  height?: number;
  bg?: string;
}) =>
  StyleSheet.create({
    inputContainer: {
      width: '100%',
      height: height || hp(140),
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      borderRadius: hp(10),
      borderWidth: 1,
      borderColor: colors?.neutral100,
      backgroundColor: colors.white,
      paddingTop: wp(15),
    },
    input: {
      minHeight: wp(55),
      color: 'black',
      ...typography.body_1_medium,
      lineHeight: undefined,
    },
    inputTextIconContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: wp(12),
    },
    selectedTagsContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      width: wp(300),
    },
    icon: {
      padding: hp(10),
      paddingHorizontal: wp(15),
    },
    scrollView: {
      maxHeight: hp(150),
      padding: hp(8),
    },
    tagItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: bg || colors?.information50,
      paddingHorizontal: wp(12),
      borderRadius: hp(16),
      marginHorizontal: wp(2),
      marginBottom: hp(7),
    },
    resultsContainer: {
      borderRadius: hp(10),
      overflow: 'hidden',
      maxHeight: SCREEN_HEIGHT / 2,
      backgroundColor: colors?.white,
    },
    resultCardWrapper: {
      height: 'auto',
      width: '100%',
      backgroundColor: colors?.white,
      borderRadius: hp(10),
      overflow: 'hidden',
      borderColor: colors?.neutral100,
      borderStyle: 'solid',
      borderWidth: 1,
    },
  });
