import {AppRow} from '@/components/common';
import * as Constants from '@/constants/index';
import {CommonMenuView} from '@/screens/doctor/bottom-tabs/patients/common/common-menu-view';
import {SortByButtonView} from '@/screens/doctor/bottom-tabs/patients/common/sort-by-button-view';
import OutpatientListView from '@/screens/doctor/bottom-tabs/patients/outpatient-view/outpatient-list-view';
import {useApiServicesAppPatientappointmentsGetconsultingroomsGetQuery} from '@/state/services/roomApi';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import React, {useState} from 'react';
import {View} from 'react-native';
import {doctorPatientStyle} from '../styles';
import {DoctorAndNurseSearchBarView} from '@/components/doctor-and-nurse-landing-list';

const OutpatientView = () => {
  const [selectedSort, setSelectedSort] = useState<string>(
    Constants.sortByOptions[0]?.value,
  );

  const styles = doctorPatientStyle();

  // TODO(Franklyn): There's more integration to be done
  const {currentData: roomList} =
    useApiServicesAppPatientappointmentsGetconsultingroomsGetQuery(undefined, {
      selectFromResult: ({currentData, ...rest}) => ({
        ...rest,
        currentData: (currentData?.rooms?.map(room => ({
          item: {id: room, value: room},
        })) ?? []) as SelectItemOptionsProp<never>,
      }),
    });

  return (
    <>
      <View style={styles.listTypeViewContainer}>
        <DoctorAndNurseSearchBarView />
        <AppRow>
          <CommonMenuView
            buttonText={'Consulting room'}
            sheetTitle={'Consulting rooms'}
            showSearchInput={false}
            menuOptions={roomList}
          />
          <SortByButtonView
            onSelectItem={sort => setSelectedSort(sort?.item)}
            selectedValue={selectedSort}
            reset={() => setSelectedSort(Constants.sortByOptions[0]?.value)}
          />
        </AppRow>
        <OutpatientListView selectedSort={selectedSort} />
      </View>
    </>
  );
};

export default OutpatientView;
