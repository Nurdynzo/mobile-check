import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {useColors} from '@/hooks/useColors';
import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {PaymentConfirmationStyles} from '../../styles';
import WalletBalance from '../wallet-balance';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';

const PaymentConfirmationHeader = ({
  topContent1,
  topContent2,
}: {
  topContent1?: ReactNode;
  topContent2?: ReactNode;
}) => {
  const {colors} = useColors();

  const styles = PaymentConfirmationStyles({colors});

  const patient = useAppSelector(selectPatient);

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.contentHeader}>
          <PatientInfoCard
            fullName={patient.fullName}
            code={patient.code}
            dateOfBirth={patient.dateOfBirth}
            gender={patient.gender}
            avatar={patient.pic}
          />
          <WalletBalance />
          {topContent1}
        </View>
        {topContent2}
      </View>
    </>
  );
};

export default PaymentConfirmationHeader;
