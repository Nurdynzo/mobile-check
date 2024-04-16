import usePaginatedList from '@/hooks/use-paginated-list';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {useApiServicesAppPatientsGetinpatientlandinglistGetQuery} from '@/state/services/patientApi';
import {
  selectDoctorNurseSelectedPatientResult,
  setDoctorNurseSearchPatientTerm,
  setDoctorNurseSelectedPatientResult,
} from '@/state/slices/doctor-nurse/doctorNurseSearchPatientBar';
import {EMPTY_STRING} from '@/utils/constants';
import {PaginationState} from '@/utils/enums';
import {useEffect, useState} from 'react';

const useInpatientListView = ({wardId}: {wardId: number}) => {
  const selectedPatient = useAppSelector(
    selectDoctorNurseSelectedPatientResult,
  );
  const [skipCount, setSkipCount] = useState(0);
  const maxResultCount = 10;
  const {
    currentData: inpatientData,
    isFetching,
    isError,
    refetch,
  } = useApiServicesAppPatientsGetinpatientlandinglistGetQuery(
    {
      wardId,
      maxResultCount,
      skipCount,
    },
    {refetchOnMountOrArgChange: false},
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (wardId) {
      handleWardChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wardId]);

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
    data: inpatientData?.items ?? [],
  });

  useEffect(() => {
    if (selectedPatient && paginationState !== PaginationState.Success) {
      setPaginationState(PaginationState.Success);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPatient, paginationState]);

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
  const handleWardChange = async () => {
    if (skipCount !== 0) {
      setSkipCount(0);
    }
    await refetch();
  };

  return {
    handleLoadMore,
    handleRefresh,
    handleFirstPageRefetch,
    paginationState,
    patientData,
    selectedPatient,
  };
};

export default useInpatientListView;
