import {StyleSheet} from 'react-native';
import {MENU_PADDING} from '../../../globals/Const';
import {ColorDefinitions, ColorKeys} from '../../../resources/colors';

export const appointmentDetailsCardStyles = ({
  colors,
  bg,
}: {
  colors: ColorDefinitions;
  bg?: ColorKeys;
  cardHeaderHasBackground?: boolean;
}) =>
  StyleSheet.create({
    wrapper: {
      height: undefined,
      width: '100%',
      paddingTop: 0,
      backgroundColor: colors?.white,
      borderRadius: 10,
      overflow: 'hidden',
    },
    more: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1000,
    },
    container: {
      backgroundColor: colors.white,
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
      width: '95%',
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
      marginTop: 18,
      display: 'flex',
      justifyContent: 'center',
    },
    referralLetter: {
      borderWidth: 1,
      borderColor: colors.primary400,
      marginTop: 5,
    },
    formContainer: {paddingHorizontal: 24, paddingBottom: 200, gap: 20},
  });
