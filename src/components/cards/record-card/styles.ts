import {StyleSheet} from 'react-native';
import {MENU_PADDING} from '../../../globals/Const';
import {ColorDefinitions, ColorKeys} from '../../../resources/colors';
import {wp} from '@/resources/config';

export const recordCardStyles = ({
  colors,
  bg,
}: {
  colors: ColorDefinitions;
  bg?: ColorKeys;
  cardHeaderHasBackground?: boolean;
}) =>
  StyleSheet.create({
    row: {
      display: 'flex',
    },
    wrapper: {
      backgroundColor: colors?.white,
      borderRadius: 10,
      overflow: 'hidden',
      paddingVertical: 5,
    },
    container: {
      backgroundColor: colors.white,
    },
    status: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    leftPane: {
      flex: 1,
      gap: 16,
    },
    rightPane: {
      flex: 1,
      gap: 16,
    },
    topPane: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 10,
      backgroundColor: colors.neutral100,
      padding: 8,
      borderTopWidth: 5,
      borderColor: colors.secondary400,
    },
    bottomPane: {
      width: '90%',
      alignSelf: 'center',
      borderTopWidth: 0.5,
      borderTopColor: colors.neutral100,
      justifyContent: 'center',
      paddingVertical: 8,
    },
    detailsIcon: {
      transform: [{rotate: '270deg'}],
    },
    cardDetail: {
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    leftRow: {
      flex: 1,
      gap: 3,
    },
    button: {
      padding: 8,
      paddingHorizontal: 10,
      backgroundColor: `${bg}`,
      flexDirection: 'row',
      gap: 8,
      borderRadius: 8,
      alignSelf: 'flex-start',
    },

    paperRecordStatus: {
      gap: 16,
      paddingHorizontal: MENU_PADDING,
    },
    generalRowContainer: {
      gap: 16,
      backgroundColor: colors.neutral25,
      padding: 12,
      borderRadius: 10,
    },
    generalRowWrapper: {
      gap: 16,
    },
    card: {
      backgroundColor: colors.white,
    },
    //call button
    successButton: {
      backgroundColor: colors.success600,
      width: '50%',
      marginTop: wp(19),
      display: 'flex',
      justifyContent: 'center',
    },
  });
