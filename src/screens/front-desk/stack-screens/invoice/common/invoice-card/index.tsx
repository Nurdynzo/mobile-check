import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {invoiceCardStyles} from './styles';
import {InvoiceCardProps} from './type';

const InvoiceCard: FunctionComponent<InvoiceCardProps> = ({
  date,
  number,
  time,
  walletBal,
  isbalanceSufficient,
}) => {
  const {colors} = useColors();
  const styles = invoiceCardStyles({colors, isbalanceSufficient});
  return (
    <View style={styles.container}>
      <View style={styles.invoiceDetails}>
        <AppText text={`Invoice No: ${number}`} type="body_1_medium" />
        <AppText text={`${date} | ${time}`} type="body_1_medium" />
      </View>
      <View style={styles.walletContainer}>
        <View style={styles.greenFlag} />
        <View style={styles.walletContentContainer}>
          <AppText
            text={'Wallet balance (₦)'}
            type="label_semibold"
            color="text300"
          />
          <AppText text={walletBal} type="body_1_semibold" color="text400" />
        </View>
      </View>
    </View>
  );
};

export default InvoiceCard;
