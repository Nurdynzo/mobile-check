import {RightCaretIcon} from '@/assets/svg';
import {RecordRow, StatusLabel} from '@/components/cards';
import {AppRow, AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {fs} from '@/resources/config';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {PaymentConfirmationStyles} from '../../styles';
import AmountInfo from '../amount-info';
import Card from '../card';
import {PaymentCardProps} from './type';
import {NOT_AVAILABLE} from '@/utils/constants';

export const DynamicPaymentCard = ({
  isSplitPayment = false,
  itemDetail = 'Consultation: Neurology',
  invoiceNo = '980089-890',
  date = '14 Sep 2022',
  paymentType = 'Wallet',
  paidAmount = '9,600',
  outstandingAmount = NOT_AVAILABLE,
}: PaymentCardProps) => {
  const customFontSize = {fontSize: fs(14)};
  const {colors} = useColors();
  const styles = PaymentConfirmationStyles({colors});

  return (
    <Card style={styles.confirmationCard}>
      <AppRow alignItems="flex-start">
        <RecordRow
          customFontSize={fs(14)}
          detail={isSplitPayment ? 'Split payment' : 'Item'}>
          <AppText
            style={customFontSize}
            color="text400"
            type="body_2_semibold"
            text={itemDetail}
          />
        </RecordRow>
        {isSplitPayment && <StatusLabel text="No preauth" bg="text25" />}
      </AppRow>
      <AppRow alignItems="flex-start">
        <RecordRow customFontSize={fs(14)} detail="Invoice No.">
          <AppText
            style={customFontSize}
            color="text400"
            type="body_1_semibold"
            text={invoiceNo}
          />
          <AppText
            style={customFontSize}
            color="text300"
            type="caption_medium"
            text={date}
          />
        </RecordRow>
        <AmountInfo sub />
      </AppRow>
      <AppRow alignItems="flex-start">
        <RecordRow customFontSize={fs(14)} detail="Payment type">
          <AppText
            style={customFontSize}
            color="text400"
            type="body_1_semibold"
            text={paymentType}
          />
        </RecordRow>
        <RecordRow customFontSize={fs(14)} detail="Paid (₦)">
          <AppText
            style={customFontSize}
            color="text400"
            type="body_1_semibold"
            text={paidAmount}
          />
        </RecordRow>
      </AppRow>
      <AppRow alignItems="flex-start">
        <RecordRow customFontSize={fs(14)} detail="Outstanding (₦)">
          <AppText
            style={customFontSize}
            color="text400"
            type="body_1_semibold"
            text={outstandingAmount}
          />
        </RecordRow>
        <RecordRow customFontSize={fs(14)} detail="Date paid">
          <AppText
            style={customFontSize}
            color="text400"
            type="caption_medium"
            text={date}
          />
        </RecordRow>
      </AppRow>
      <TouchableOpacity style={styles.bottomPane}>
        <AppRow alignItems="flex-start">
          <AppText
            style={customFontSize}
            color="primary400"
            type="button_semibold"
            text="View details "
          />
          <RightCaretIcon stroke={colors.primary400} />
        </AppRow>
      </TouchableOpacity>
    </Card>
  );
};
