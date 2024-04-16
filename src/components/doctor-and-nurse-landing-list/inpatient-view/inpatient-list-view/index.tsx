import InpatientAeCard from '@/components/cards/Patients/inpatient-ae-card';
import PaginatedListView from '@/components/paginated-list-view';
import getInpatientLandingList from '@/utils/helpers/get-inpatient-landing-list';
import React, {FunctionComponent} from 'react';
import DoctorAndNurseLandingListEmptyStateView from '../../empty-state-view';
import useInpatientListView from './use-inpatient-list-view';

const InpatientListView: FunctionComponent<{
  wardId: number;
  selectedSort: string;
}> = ({wardId, selectedSort}) => {
  const {
    handleFirstPageRefetch,
    handleLoadMore,
    handleRefresh,
    paginationState,
    patientData,
    selectedPatient,
  } = useInpatientListView({wardId});

  return (
    <PaginatedListView
      paginationState={paginationState}
      onRefresh={handleRefresh}
      handleFirstPageRefetch={handleFirstPageRefetch}
      onLoadMore={handleLoadMore}
      EmptyStateComponent={
        <DoctorAndNurseLandingListEmptyStateView
          title={'Patients in ward'}
          description={'No patient is currently admitted in this ward'}
          onRefresh={handleFirstPageRefetch}
        />
      }
      keyExtractor={(_, index) => `${index}`}
      renderItem={({item}) => <InpatientAeCard item={item} />}
      data={getInpatientLandingList(patientData, selectedSort, selectedPatient)}
    />
  );
};

export default InpatientListView;
