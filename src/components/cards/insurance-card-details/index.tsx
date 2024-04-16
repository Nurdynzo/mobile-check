import React from 'react';
import {View} from 'react-native';
import PatientInfoCard from '../Patients/patient-info-card';
import InsuranceCard from '../insurance-card';
import {insuranceCardDetailsStyles} from './styles';

const InsuranceDetails = () => {
  const styles = insuranceCardDetailsStyles();
  return (
    <View style={styles.container}>
      <PatientInfoCard />
      <View style={styles.generalRowWrapper}>
        <InsuranceCard />
        <InsuranceCard />
      </View>
    </View>
  );
};

export default InsuranceDetails;
