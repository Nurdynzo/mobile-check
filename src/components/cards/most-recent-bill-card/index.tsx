import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useColors} from '../../../hooks/useColors';
import {AppText} from '../../../components/common';
import StatusLabel from '../status-label';
import BillItemCard from '../bill-item-card';
import TotalSummaryCard from '../total-summary-card';
import {mostRecentBillStyles} from './styles';
import {MostRecentBillCardProps} from './type';

const MostRecentBillCard: FunctionComponent<MostRecentBillCardProps> = ({
  items = [],
  paymentDetails,
  total,
  totalDiscount,
  paymentStatus,
  customContent,
}) => {
  const {colors} = useColors();
  const styles = mostRecentBillStyles({colors});
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {customContent || (
          <AppText text="Most recent bill" type="title_semibold" />
        )}
        <StatusLabel text={paymentStatus} color="danger300" bg={'danger25'} />
      </View>
      {items.map((item, index) => (
        <BillItemCard
          key={`${item.name}-${index}`}
          {...item}
          removeDeleteBtn
          style={styles.itemCard}
        />
      ))}

      <TotalSummaryCard
        total={total}
        totalDiscount={totalDiscount}
        currencySymbool="₦"
        pamentDetails={paymentDetails}
      />
    </View>
  );
};

export default MostRecentBillCard;
