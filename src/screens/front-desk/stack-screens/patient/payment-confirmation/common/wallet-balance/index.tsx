import {InfoCircleIcon} from '@/assets/svg';
import {AppTouchButton} from '@/components/buttons';
import {RecordRow} from '@/components/cards';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {AppRow, AppText} from '@/components/common';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {fs} from '@/resources/config';
import {TEMP_AVATAR_URL} from '@/utils/constants';
import React from 'react';
import {View} from 'react-native';
import {PaymentConfirmationStyles} from '../../styles';

const WalletBalance = () => {
  const {colors} = useColors();

  const {sheetRef: walletBalanceSheet, openSheet: openWalletBalanceSheet} =
    useSheet();

  const styles = PaymentConfirmationStyles({colors});
  return (
    <>
      <View style={styles.greenBorder}>
        <AppRow>
          <View style={styles.row}>
            <AppText
              type="label_semibold"
              style={{fontSize: fs(14)}}
              color="text300"
              text="Wallet balance (₦)"
            />
            <AppText
              type="body_1_semibold"
              style={{fontSize: fs(14)}}
              text={' 30,400'}
            />
          </View>
          <AppTouchButton
            height={25}
            onPress={openWalletBalanceSheet}
            text=""
            rightIcon={<InfoCircleIcon fill={colors.text50} />}
          />
        </AppRow>
      </View>
      <AppContentSheet
        headerTitle="Wallet account information"
        sheetRef={walletBalanceSheet}>
        <View style={styles.walletAccInfo}>
          <PatientInfoCard
            fullName={'daniel dfdfde'}
            code={34343}
            dateOfBirth={'2020-08-25T10:15:30.000Z'}
            gender={'Female'}
            avatar={TEMP_AVATAR_URL}
          />
          <View style={styles.bankName}>
            <AppRow alignItems="flex-start">
              <RecordRow customFontSize={fs(14)} detail="Bank name">
                <AppText
                  style={{fontSize: fs(14)}}
                  color="text400"
                  type="body_2_semibold"
                  text={'Durabo Merchant Bank'}
                />
              </RecordRow>
            </AppRow>
            <AppRow alignItems="flex-start">
              <RecordRow customFontSize={fs(14)} detail="Account number">
                <AppText
                  style={{fontSize: fs(14)}}
                  color="text400"
                  type="body_2_semibold"
                  text={'43434334434'}
                />
              </RecordRow>
            </AppRow>
          </View>
        </View>
      </AppContentSheet>
    </>
  );
};

export default WalletBalance;
