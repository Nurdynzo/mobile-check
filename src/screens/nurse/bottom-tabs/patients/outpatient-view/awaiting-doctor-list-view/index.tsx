import {PatientAwaitingDoctorCard} from '@/components/cards';
import DoctorAndNurseLandingListEmptyStateView from '@/components/doctor-and-nurse-landing-list/empty-state-view';
import PaginatedListView from '@/components/paginated-list-view';
import React from 'react';
import useAwaitingDoctorListView from './use-awaiting-doctor-list-view';
import getOutpatientLandingList from '@/utils/helpers/get-outpatient-landing-list';
import {EMPTY_STRING} from '@/utils/constants';

const AwaitingDoctorListView = () => {
  const {
    handleFirstPageRefetch,
    handleLoadMore,
    handleRefresh,
    paginationState,
    patientData,
    selectedPatient,
  } = useAwaitingDoctorListView();

  return (
    <PaginatedListView
      paginationState={paginationState}
      onRefresh={handleRefresh}
      handleFirstPageRefetch={handleFirstPageRefetch}
      onLoadMore={handleLoadMore}
      EmptyStateComponent={
        <DoctorAndNurseLandingListEmptyStateView
          title={'Awaiting doctor'}
          description={'No patient is currently awaiting doctor'}
          onRefresh={handleFirstPageRefetch}
        />
      }
      keyExtractor={(_, index) => `${index}`}
      renderItem={({item}) => (
        <PatientAwaitingDoctorCard data={item} isBusyWithPhysician />
      )}
      data={getOutpatientLandingList(
        patientData,
        EMPTY_STRING,
        selectedPatient,
      )}
    />
  );
};

export default AwaitingDoctorListView;
