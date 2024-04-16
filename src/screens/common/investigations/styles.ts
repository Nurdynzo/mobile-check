import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const investigationStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
  hasBottomBorder?: boolean;
}) =>
  StyleSheet.create({
    recentResultContainer: {
      backgroundColor: colors.white,
      padding: wp(10),
      gap: wp(16),
      overflow: 'scroll',
      borderRadius: wp(10),
    },
    wrapper: {marginBottom: wp(10), gap: wp(10)},
    addNotesButton: {
      alignSelf: 'flex-start',
    },
    tabWrapper: {gap: wp(10), overflow: 'hidden'},
    recentResultContainerHeader: {
      paddingBottom: wp(10),
      borderBottomColor: colors.neutral100,
      borderBottomWidth: wp(1),
      borderRadius: wp(5),
    },
    iconWithText: {
      flexDirection: 'row',
      gap: wp(5),
    },
    miniSaveBtn: {
      marginTop: wp(16),
      width: wp(80),
      alignSelf: 'flex-end',
    },
    borderTop: {
      borderWidth: 0,
      borderTopWidth: wp(1),
      paddingTop: wp(10),
      borderTopColor: colors.neutral100,
    },
    viewBtn: {marginTop: 0, height: wp(35)},
    seperator: {marginTop: wp(32), marginBottom: wp(24)},
    separatedWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: wp(10),
    },
  });
