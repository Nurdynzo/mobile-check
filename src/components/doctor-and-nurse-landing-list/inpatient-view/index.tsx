import {AppRow} from '@/components/common';
import * as Constants from '@/constants/index';
import {CommonMenuView} from '@/screens/doctor/bottom-tabs/patients/common/common-menu-view';
import {SortByButtonView} from '@/screens/doctor/bottom-tabs/patients/common/sort-by-button-view';
import InpatientListView from '@/components/doctor-and-nurse-landing-list/inpatient-view/inpatient-list-view';
import {doctorPatientStyle} from '@/screens/doctor/bottom-tabs/patients/styles';
import {useApiServicesAppWardsGetallwardsGetQuery} from '@/state/services/wardApi';
import {SelectItem, SelectItemOptionsProp} from '@/types/selectItemsheet';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {View} from 'react-native';
import DoctorAndNurseSearchBarView from '../search-bar-view';

const InpatientView: FunctionComponent = () => {
  const styles = doctorPatientStyle();
  const {currentData: wards} = useApiServicesAppWardsGetallwardsGetQuery(
    undefined,
    {
      selectFromResult: ({currentData, ...rest}) => ({
        ...rest,
        currentData: (currentData?.map(ward => ({
          item: {id: Number(ward.id), value: `${ward.name}`},
        })) ?? []) as SelectItemOptionsProp<never>,
      }),
    },
  );

  const [selectedWard, setSelectedWard] = useState<SelectItem<never> | null>(
    null,
  );

  const [selectedSort, setSelectedSort] = useState<string>(
    Constants.sortByOptions[0]?.value,
  );

  useEffect(() => {
    if (wards?.length) {
      const wardSelected = wards[0];
      setSelectedWard(wardSelected?.item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wards?.length]);

  return (
    <View style={styles.listTypeViewContainer}>
      <DoctorAndNurseSearchBarView />
      <AppRow>
        <CommonMenuView
          buttonText={selectedWard?.value ?? EMPTY_STRING}
          sheetTitle={'Wards'}
          showSearchInput={false}
          selectedValue={selectedWard?.value}
          onSelectItem={({item}) => setSelectedWard(item)}
          menuOptions={wards}
        />
        <SortByButtonView
          onSelectItem={sort => setSelectedSort(sort?.item)}
          selectedValue={selectedSort}
          reset={() => setSelectedSort(Constants.sortByOptions[0]?.value)}
        />
      </AppRow>
      <InpatientListView
        wardId={selectedWard?.id as number}
        selectedSort={selectedSort}
      />
    </View>
  );
};

export default InpatientView;
