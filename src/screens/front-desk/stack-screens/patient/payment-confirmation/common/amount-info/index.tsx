import {RecordRow} from '@/components/cards';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {AppRow, AppText} from '@/components/common';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {fs} from '@/resources/config';
import {EMPTY_STRING, TEMP_AVATAR_URL} from '@/utils/constants';
import React from 'react';
import {View} from 'react-native';
import {PaymentConfirmationStyles} from '../../styles';

const AmountInfo = ({sub = false}: {sub?: boolean}) => {
  const {sheetRef: amountInfoSheet, openSheet: openAmountInfoSheet} =
    useSheet();
  const {colors} = useColors();
  const styles = PaymentConfirmationStyles({colors});
  return (
    <>
      <RecordRow
        customFontSize={fs(14)}
        detail="Amount (₦)"
        hasInfo
        onPressInfo={openAmountInfoSheet}>
        <AppText
          style={{fontSize: fs(14)}}
          color="text400"
          type="body_1_semibold"
          text={'714,000'}
        />
        {sub && (
          <AppText
            style={{fontSize: fs(14)}}
            color="text300"
            type="caption_medium"
            text={'9,600'}
          />
        )}
      </RecordRow>
      <AppContentSheet headerTitle="Amount" sheetRef={amountInfoSheet}>
        <View style={styles.amountHeaderWrapper}>
          <PatientInfoCard
            fullName={'daniel dfdfde'}
            code={34343}
            dateOfBirth={'2020-08-25T10:15:30.000Z'}
            gender={'Female'}
            avatar={TEMP_AVATAR_URL}
          />
          <View style={styles.discountRow}>
            <AppRow alignItems="flex-start">
              <RecordRow customFontSize={fs(14)} detail={EMPTY_STRING}>
                <AppText
                  style={{fontSize: fs(14)}}
                  color="text400"
                  type="body_2_semibold"
                  text={'Discount applied'}
                />
              </RecordRow>
            </AppRow>
          </View>
        </View>
      </AppContentSheet>
    </>
  );
};

export default AmountInfo;
