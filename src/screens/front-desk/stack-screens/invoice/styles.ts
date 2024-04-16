import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../../resources/colors';

export const invoiceStyles = ({colors}: {colors?: ColorDefinitions} = {}) =>
  StyleSheet.create({
    container: {flex: 1},
    screenContainer: {
      paddingHorizontal: 24,
      gap: 20,
    },
    buttonsContainer: {paddingHorizontal: 24, marginTop: 16, paddingBottom: 30},
    createAppointBtn: {marginTop: 22, marginBottom: 16},
    flex1: {flex: 1},
    successIcon: {
      backgroundColor: colors?.success50,
      width: 72,
      height: 72,
      borderRadius: 72,
      alignItems: 'center',
      justifyContent: 'center',
    },
    alertSheetContainer: {paddingHorizontal: 24},
    payBtnsContainer: {flexDirection: 'row', columnGap: 24},
    paySheetContainer: {paddingHorizontal: 24, paddingBottom: 10, rowGap: 16},
    payNotice: {
      padding: 16,
      rowGap: 12,
      backgroundColor: colors?.neutral25,
      borderRadius: 10,
    },
  });
