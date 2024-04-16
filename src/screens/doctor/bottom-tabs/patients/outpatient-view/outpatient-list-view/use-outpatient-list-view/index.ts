import usePaginatedList from '@/hooks/use-paginated-list';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {useApiServicesAppPatientsGetoutpatientlandinglistGetQuery} from '@/state/services/patientApi';
import {
  selectDoctorNurseSelectedPatientResult,
  setDoctorNurseSearchPatientTerm,
  setDoctorNurseSelectedPatientResult,
} from '@/state/slices/doctor-nurse/doctorNurseSearchPatientBar';
import {EMPTY_STRING} from '@/utils/constants';
import {PaginationState} from '@/utils/enums';
import {useState} from 'react';

const useOutpatientListView = () => {
  const selectedPatient = useAppSelector(
    selectDoctorNurseSelectedPatientResult,
  );
  const [skipCount, setSkipCount] = useState(0);
  const maxResultCount = 10;
  const {
    currentData: outpatientData,
    isFetching,
    refetch,
    isError,
  } = useApiServicesAppPatientsGetoutpatientlandinglistGetQuery(
    {
      maxResultCount,
      skipCount,
      filter: 'Awaiting doctor',
      outPatientListingType: 'AttendingPhysician',
    },
    {refetchOnMountOrArgChange: false},
  );
  const dispatch = useAppDispatch();

  const {
    canLoadMore,
    paginationState,
    setPaginationState,
    proxyData: patientData,
  } = usePaginatedList({
    skipCount,
    maxResultCount,
    isFetching,
    isError,
    data: outpatientData?.items ?? [],
  });

  const handleLoadMore = async () => {
    if (canLoadMore) {
      setPaginationState(PaginationState.NewPageProgress);
      setSkipCount(prev => prev + maxResultCount);
      await refetch();
    }
  };

  const handleRefresh = async () => {
    setPaginationState(PaginationState.BackgroundRefresh);
    resetQueryParams();
    await refetch();
  };

  const handleFirstPageRefetch = async () => {
    resetQueryParams();
    await refetch();
  };

  const resetQueryParams = () => {
    if (skipCount !== 0) {
      setSkipCount(0);
    }
    if (selectedPatient !== null) {
      dispatch(setDoctorNurseSelectedPatientResult());
      dispatch(setDoctorNurseSearchPatientTerm(EMPTY_STRING));
    }
  };

  return {
    selectedPatient,
    paginationState,
    handleLoadMore,
    handleRefresh,
    handleFirstPageRefetch,
    patientData,
  };
};

export default useOutpatientListView;
