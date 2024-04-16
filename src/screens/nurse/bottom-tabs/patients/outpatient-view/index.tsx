import {DoctorAndNurseSearchBarView} from '@/components/doctor-and-nurse-landing-list';
import {BottomIndicatorTabSwitcher} from '@/components/tabs';
import * as Contants from '@/constants/index';
import React, {useState} from 'react';
import {View} from 'react-native';
import AwaitingDoctorListView from './awaiting-doctor-list-view';
import AwaitingVitalsListView from './awaiting-vitals-list-view';
import {nurseOutPatientStyles} from './styles';

const OutpatientView = () => {
  const styles = nurseOutPatientStyles;
  const [selectedTab, setSelectedTab] = useState(
    Contants.outPatientNurseTabs[0],
  );

  return (
    <>
      <View style={styles.container}>
        <DoctorAndNurseSearchBarView />
        <BottomIndicatorTabSwitcher
          tabs={Contants.outPatientNurseTabs}
          onChangeTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        {selectedTab === 'Awaiting vitals' ? (
          <AwaitingVitalsListView />
        ) : (
          <AwaitingDoctorListView />
        )}
      </View>
    </>
  );
};

export default OutpatientView;
