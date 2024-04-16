import PatientAwaitingVitalsCard from '@/components/cards/Patients/patient-awaiting-vitals-card';
import DoctorAndNurseLandingListEmptyStateView from '@/components/doctor-and-nurse-landing-list/empty-state-view';
import PaginatedListView from '@/components/paginated-list-view';
import React from 'react';
import useAwaitingVitalsListView from './use-awaiting-vitals-list-view';
import getOutpatientLandingList from '@/utils/helpers/get-outpatient-landing-list';
import {EMPTY_STRING} from '@/utils/constants';

const AwaitingVitalsListView = () => {
  const {
    handleFirstPageRefetch,
    handleLoadMore,
    handleRefresh,
    paginationState,
    patientData,
    selectedPatient,
  } = useAwaitingVitalsListView();

  return (
    <PaginatedListView
      paginationState={paginationState}
      onRefresh={handleRefresh}
      handleFirstPageRefetch={handleFirstPageRefetch}
      onLoadMore={handleLoadMore}
      EmptyStateComponent={
        <DoctorAndNurseLandingListEmptyStateView
          title={'Awaiting vitals'}
          description={'No patient is currently awaiting vitals'}
          onRefresh={handleFirstPageRefetch}
        />
      }
      keyExtractor={(_, index) => `${index}`}
      renderItem={({item}) => (
        <PatientAwaitingVitalsCard data={item} isBusyWithPhysician />
      )}
      data={getOutpatientLandingList(
        patientData,
        EMPTY_STRING,
        selectedPatient,
      )}
    />
  );
};

export default AwaitingVitalsListView;
