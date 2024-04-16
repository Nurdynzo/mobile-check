import React from 'react';
import {View} from 'react-native';
import {
  InActiveInvoiceAndRecieptIcon,
  InActivePaymentSummaryIcon,
  InvoiceAndRecieptIcon,
  PaymentSummaryIcon,
} from '@/assets/svg';
import {AppHeader} from '@/components/headers';
import BottomTabs from '@/components/tabs/bottom-tabs';
import InvoiceAndReciept from './common/invoice-and-reciept';
import PaymentConfirmationSort from './common/payment-confirmation-sort';
import {PaymentConfirmationStyles} from './styles';
import {useColors} from '@/hooks/useColors';

const PaymentConfirmation = () => {
  const {colors} = useColors();
  const styles = PaymentConfirmationStyles({colors});
  return (
    <>
      <View style={styles.screen}>
        <AppHeader middleTitle="Payment Confirmations" />
        <BottomTabs
          tabs={[
            {
              component: PaymentConfirmationSort,
              Icon: PaymentSummaryIcon,
              InActiveIcon: InActivePaymentSummaryIcon,
              label: 'Payment Summary',
              name: 'Payment Summary',
              disabled: false,
            },
            {
              component: InvoiceAndReciept,
              Icon: InvoiceAndRecieptIcon,
              InActiveIcon: InActiveInvoiceAndRecieptIcon,
              label: 'Invoices & Receipts',
              name: 'Invoices & Receipts',
              disabled: false,
            },
          ]}
        />
      </View>
    </>
  );
};

export default PaymentConfirmation;
