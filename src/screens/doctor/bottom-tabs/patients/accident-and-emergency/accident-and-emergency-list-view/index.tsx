import React, {useEffect, useState} from 'react';
import {PatientDetails} from '@/types/doctor/nurseDoctor';
import {AandENurseData} from '../../../../../../globals/NurseDoctorData';
import {FlatList} from 'react-native';
import InpatientAeCard from '@/components/cards/Patients/inpatient-ae-card';
import AppActivityIndicator from '@/components/app-activity-indicator';

export const AccidentAndSurgeryListView = () => {
  const [aePatients, setAePatients] = useState<PatientDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchPatientData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setAePatients(AandENurseData || []);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    handleFetchPatientData();
  }, []);

  return (
    <FlatList
      data={aePatients}
      renderItem={({item}) => <InpatientAeCard item={item} />}
      keyExtractor={(_, index) => `${index}`}
      ListFooterComponent={isLoading ? <AppActivityIndicator /> : <></>}
      showsVerticalScrollIndicator={false}
    />
  );
};
