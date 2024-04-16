import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const proceduresStyles = ({colors}: {colors: ColorDefinitions}) =>
  StyleSheet.create({
    content: {
      flex: 1,
    },
    seperator: {marginTop: wp(32), marginBottom: wp(24)},

    recordProceduresSaveButton: {marginTop: wp(32), marginBottom: wp(16)},
    requestProceduresSaveButton: {marginVertical: wp(32)},
    textInputWrapper: {flexDirection: 'row', alignItems: 'center', gap: 5},
    addNotesButton: {
      alignSelf: 'flex-start',
      marginTop: wp(16),
    },
    line: {
      height: wp(0.5),
      width: '100%',
      backgroundColor: colors.neutral100,
    },
    input: {
      flex: 1,
      height: wp(30),
    },
    top: {
      paddingHorizontal: wp(10),
      paddingBottom: wp(10),
      gap: wp(10),
      borderWidth: 1,
      borderColor: colors.neutral100,
      borderRadius: wp(10),
    },
    bottom: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: wp(10),
      gap: wp(10),
      paddingBottom: wp(20),
    },
    selectedPills: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRadius: wp(10),
    },
    bottomWrapper: {
      borderWidth: 1,
      borderColor: colors.neutral100,
      borderRadius: wp(10),
    },
    expandWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: wp(10),
    },
    iconWithText: {
      flexDirection: 'row',
      gap: wp(5),
    },
    textArea: {
      height: wp(100),
      borderWidth: 1,
      borderColor: colors.neutral100,
      borderRadius: wp(10),
      padding: wp(10),
    },
    summary: {
      width: '100%',
      borderTopWidth: 1,
      borderTopColor: colors.neutral100,
      borderRadius: wp(10),
      paddingVertical: wp(12),
    },
    sheetContainer: {
      paddingHorizontal: wp(24),
      gap: wp(20),
      flex: 1,
    },
    sheetContent: {padding: wp(20), paddingTop: 0, gap: wp(16)},
  });
