import React from 'react';
import {View} from 'react-native';

import AppDropDownListItem from '../../app-drop-down-list-item';
import {AppContentSheet} from '../../sheets';
import PatientInfoCard from '../Patients/patient-info-card';
import {paperRecordStyles} from './styles';

const PaperRecordStatus = () => {
  const styles = paperRecordStyles();
  return (
    <AppContentSheet headerTitle="Paper record status">
      <View style={styles.container}>
        <PatientInfoCard />
        <AppDropDownListItem
          text={'No scanned paper records'}
          selected
          icon={<></>}
          onPress={() => null}
        />
      </View>
    </AppContentSheet>
  );
};
export default PaperRecordStatus;
