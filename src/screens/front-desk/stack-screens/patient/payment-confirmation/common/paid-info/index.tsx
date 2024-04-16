import {RecordRow} from '@/components/cards';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {AppRow, AppText} from '@/components/common';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {fs} from '@/resources/config';
import React from 'react';
import {View} from 'react-native';
import {PaymentConfirmationStyles} from '../../styles';

const PaidInfo = () => {
  const {sheetRef: paidInfoSheet, openSheet: openPaidInfoSheet} = useSheet();
  const {colors} = useColors();
  const styles = PaymentConfirmationStyles({colors});
  return (
    <>
      <RecordRow
        customFontSize={fs(14)}
        detail="Paid (₦)"
        hasInfo
        onPressInfo={openPaidInfoSheet}>
        <AppText
          style={{fontSize: fs(14)}}
          color="text400"
          type="body_1_semibold"
          text={'714,000'}
        />
      </RecordRow>
      <AppContentSheet headerTitle="Paid" sheetRef={paidInfoSheet}>
        <View style={styles.sheetHeaderWrapper}>
          <PatientInfoCard
            fullName={'daniel dfdfde'}
            code={34343}
            dateOfBirth={'2020-08-25T10:15:30.000Z'}
            gender={'Female'}
            avatar={
              'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png'
            }
          />
          <View style={styles.outstandingRowWrapper}>
            <AppRow alignItems="flex-start">
              <RecordRow customFontSize={fs(14)} detail="">
                <AppText
                  style={{fontSize: fs(14)}}
                  color="text400"
                  type="body_2_semibold"
                  text={'Relief applied'}
                />
              </RecordRow>
            </AppRow>
          </View>
        </View>
      </AppContentSheet>
    </>
  );
};

export default PaidInfo;
