import OutpatientCard from '@/components/cards/Patients/outpatient-card';
import PaginatedListView from '@/components/paginated-list-view';
import getOutpatientLandingList from '@/utils/helpers/get-outpatient-landing-list';
import React from 'react';
import DoctorAndNurseLandingListEmptyStateView from '@/components/doctor-and-nurse-landing-list/empty-state-view';
import useOutpatientListView from './use-outpatient-list-view';

const OutpatientListView = ({selectedSort}: {selectedSort: string}) => {
  const {
    handleFirstPageRefetch,
    handleLoadMore,
    handleRefresh,
    paginationState,
    patientData,
    selectedPatient,
  } = useOutpatientListView();

  return (
    <PaginatedListView
      paginationState={paginationState}
      onRefresh={handleRefresh}
      handleFirstPageRefetch={handleFirstPageRefetch}
      onLoadMore={handleLoadMore}
      EmptyStateComponent={
        <DoctorAndNurseLandingListEmptyStateView
          title={'Patients awaiting doctor'}
          description={'No patient is waiting for doctor’s encounter'}
          onRefresh={handleFirstPageRefetch}
        />
      }
      keyExtractor={(_, index) => `${index}`}
      renderItem={({item}) => <OutpatientCard item={item} />}
      data={getOutpatientLandingList(
        patientData,
        selectedSort,
        selectedPatient,
      )}
    />
  );
};

export default OutpatientListView;
