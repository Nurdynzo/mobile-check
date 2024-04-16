import {ColorDefinitions} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const PaymentConfirmationStyles = ({
  colors,
}: {
  colors: ColorDefinitions;
}) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors?.black,
    },
    screen: {
      flex: 1,
      backgroundColor: colors?.default400,
    },
    headerContainer: {
      backgroundColor: colors.default400,
    },
    contentHeader: {paddingHorizontal: wp(24)},
    generalRowWrapper: {
      gap: wp(16),
      zIndex: 2,
    },
    generalRowContainer: {
      gap: wp(16),
      padding: wp(12),
      borderRadius: wp(10),
    },
    content: {
      flex: 1,
    },
    greenBorder: {
      marginTop: wp(16),
      borderTopColor: colors.success600,
      borderTopWidth: wp(4),
      paddingHorizontal: wp(4),
      borderTopEndRadius: wp(5),
      backgroundColor: colors.white,
      borderRadius: wp(5),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    topCard: {
      paddingHorizontal: wp(16),
      backgroundColor: colors.neutral25,
    },
    contentContainer: {
      gap: wp(12),
      flex: 1,
      paddingHorizontal: wp(20),
      backgroundColor: colors.neutral25,
    },
    bottomPane: {
      width: '100%',
      alignSelf: 'center',
      borderTopWidth: 0.5,
      borderTopColor: colors.neutral100,
      justifyContent: 'center',
      paddingVertical: wp(5),
    },
    invoiceContainer: {
      flex: 1,
      backgroundColor: colors.neutral25,
      padding: wp(16),
      gap: wp(10),
    },
    recieptCard: {
      backgroundColor: colors.white,
      borderRadius: wp(10),
      gap: wp(10),
    },
    sheetHeaderWrapper: {
      padding: wp(16),
      gap: wp(20),
    },
    dropDown: {
      width: '100%',
      borderRadius: wp(10),
      backgroundColor: colors.white,
      position: 'absolute',
      zIndex: 1000000000,
      top: wp(40),
      padding: wp(12),
      gap: wp(16),
    },
    menu: {
      padding: wp(10),
    },
    createInvoiceBtn: {
      paddingHorizontal: wp(16),
      paddingVertical: wp(8),
    },
    confirmationCard: {
      paddingBottom: 0,
      backgroundColor: colors.white,
    },
    outstandingRowWrapper: {
      gap: wp(10),
      backgroundColor: colors.neutral25,
      padding: wp(20),
      borderRadius: wp(10),
    },
    walletAccInfo: {padding: wp(16), gap: wp(20)},
    bankName: {
      gap: wp(10),
      backgroundColor: colors.neutral25,
      padding: wp(20),
      borderRadius: wp(10),
    },
    amountHeaderWrapper: {
      padding: wp(16),
      gap: wp(20),
    },
    discountRow: {
      gap: wp(10),
      backgroundColor: colors.neutral25,
      padding: wp(20),
      borderRadius: wp(10),
    },
  });
