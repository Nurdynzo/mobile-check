import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {AppText, DisplayImage} from '../../common';
import {useColors} from '../../../hooks/useColors';
import {totalSummaryCardStyles} from './styles';
import {TotalSummaryCardProps} from './types';
import {
  checkDay,
  convertToReadableDate,
  convertToReadableTime,
} from '../../../utils/helpers/convertDateTime';

const TotalSummaryCard: FunctionComponent<TotalSummaryCardProps> = ({
  total = 0,
  totalDiscount = 0,
  currencySymbool,
  pamentDetails,
}) => {
  const {colors} = useColors();
  const styles = totalSummaryCardStyles({colors});
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <AppText
          text={'Total discount'}
          type="body_2_semibold"
          color="text300"
        />
        <AppText
          text={Number(totalDiscount).toFixed(2)}
          type="body_1_medium"
          color="text400"
        />
      </View>
      <View style={styles.summary}>
        <AppText
          text={`Total (${currencySymbool})`}
          type="body_2_medium"
          color="text300"
        />
        <AppText
          text={Number(total).toFixed(2)}
          type="body_1_semibold"
          color="text400"
        />
      </View>
      {pamentDetails && (
        <>
          <AppText
            type="body_1_medium"
            text={`${
              pamentDetails.status
            } for an appointment by ${convertToReadableTime(
              pamentDetails.date,
            )} | ${checkDay(pamentDetails.date)}`}
            color="text300"
          />
          <View style={styles.paymentDetailsContainer}>
            <AppText
              text={`${pamentDetails.status} by:`}
              color="text300"
              type="body_1_semibold"
            />
            <DisplayImage size={32} borderRadius={16} />
            <AppText
              text={pamentDetails.fullname}
              color="text400"
              type="body_1_medium"
            />
            <AppText
              text={convertToReadableDate(pamentDetails.date)}
              color="text300"
              type="body_1_semibold"
            />
          </View>
        </>
      )}
    </View>
  );
};

export default TotalSummaryCard;
