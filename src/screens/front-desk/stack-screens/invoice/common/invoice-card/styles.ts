import {StyleSheet} from 'react-native';
import {ColorDefinitions} from '../../../../../../resources/colors';

export const invoiceCardStyles = ({
  colors,
  isbalanceSufficient,
}: {colors?: ColorDefinitions; isbalanceSufficient?: boolean} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    invoiceDetails: {
      flex: 1,
      justifyContent: 'space-between',
    },
    walletContainer: {borderRadius: 10, overflow: 'hidden'},
    walletContentContainer: {
      backgroundColor: colors?.white,
      gap: 8,
      alignItems: 'center',
      padding: 4,
    },
    greenFlag: {
      height: 4,
      backgroundColor:
        colors?.[isbalanceSufficient ? 'success600' : 'danger300'],
    },
  });
