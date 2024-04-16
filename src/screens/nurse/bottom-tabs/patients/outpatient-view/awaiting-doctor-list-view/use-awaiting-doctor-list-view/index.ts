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
import {useEffect, useState} from 'react';

const useAwaitingDoctorListView = () => {
  const [skipCount, setSkipCount] = useState(0);
  const selectedPatient = useAppSelector(
    selectDoctorNurseSelectedPatientResult,
  );
  const dispatch = useAppDispatch();
  const maxResultCount = 10;
  const {
    data: patientList,
    isFetching,
    refetch,
    isError,
  } = useApiServicesAppPatientsGetoutpatientlandinglistGetQuery(
    {
      maxResultCount: 10,
      filter: 'Awaiting doctor',
      outPatientListingType: 'AttendingClinic',
      skipCount,
    },
    {refetchOnMountOrArgChange: false},
  );

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
    data: patientList?.items ?? [],
  });

  useEffect(() => {
    handleFirstPageRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    handleLoadMore,
    handleRefresh,
    handleFirstPageRefetch,
    resetQueryParams,
    paginationState,
    patientData,
    selectedPatient,
  };
};

export default useAwaitingDoctorListView;
