import {AlertSymbolIcon} from '@/assets/svg';
import {AppAlert, AppRow} from '@/components/common';
import ListRendererScreen from '@/components/list-renderer-screen';
import {useColors} from '@/hooks/useColors';
import React from 'react';
import {View} from 'react-native';
import {PaymentConfirmationStyles} from '../../styles';
import AmountInfo from '../amount-info';
import PaymentConfirmationCard from '../card';
import {DynamicPaymentCard} from '../confirmation-card';
import DateFilter from '../date-filter';
import PaymentConfirmationFilter from '../payment-confirmation-filter';
import PaymentConfirmationHeader from '../header';
import OutstandingInfo from '../outstanding-info';
import PaidInfo from '../paid-info';
import Sort from '../sort';

const PaymentConfirmationSort = () => {
  const {colors} = useColors();

  const styles = PaymentConfirmationStyles({colors});

  return (
    <>
      <PaymentConfirmationHeader
        topContent1={
          <>
            <AppRow>
              <PaymentConfirmationFilter />
              <Sort />
            </AppRow>
          </>
        }
        topContent2={
          <>
            <View style={styles.topCard}>
              <PaymentConfirmationCard>
                <AppRow alignItems="flex-start">
                  <DateFilter />
                  <AmountInfo />
                </AppRow>
                <AppRow alignItems="flex-start">
                  <PaidInfo />
                  <OutstandingInfo />
                </AppRow>
              </PaymentConfirmationCard>
            </View>
          </>
        }
      />

      <ListRendererScreen
        bounces={false}
        scrollEnabled
        children={undefined}
        keyExtractor={(_, index) => `${index}`}
        data={['1']}
        renderItem={() => <RenderContent />}
      />
    </>
  );
};

const RenderContent = () => {
  const {colors} = useColors();

  const styles = PaymentConfirmationStyles({colors});

  return (
    <>
      <View style={styles.contentContainer}>
        {false && (
          <AppAlert
            showButton={false}
            icon={<AlertSymbolIcon />}
            title="Ward round & Clinic notes"
            description="No ward round & clinic note has been saved"
          />
        )}
        <DynamicPaymentCard />
        <DynamicPaymentCard />
      </View>
    </>
  );
};

export default PaymentConfirmationSort;
