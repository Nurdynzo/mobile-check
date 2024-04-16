import {useApiServicesAppAppointmentGetappointmentlistfortodayGetQuery} from '@/state/services/appointmentApi';
import {SearchPatientOutput} from '@/state/services/patientApi';
import DateRange from '@/types/dateRange';
import {ALL_CLINICS, EMPTY_STRING} from '@/utils/constants';
import {PaginationState} from '@/utils/index';
import {useState, useEffect} from 'react';
import usePaginatedList from '@/hooks/use-paginated-list';

export const useRecords = ({attendingClinic}: {attendingClinic: string}) => {
  const [skipCount, setSkipCount] = useState(0);

  const [showCalenderRange, setShowCalenderRange] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [dateRange, setDateRange] = useState<DateRange>({
    to: undefined,
    from: undefined,
  });

  const [currentlySearchedPatient, setCurrentlySearchedPatient] =
    useState<SearchPatientOutput | null>(null);

  const maxResultCount = 10;

  const {
    currentData: pagedAppointmentList,
    isFetching,
    isError,
    refetch,
  } = useApiServicesAppAppointmentGetappointmentlistfortodayGetQuery(
    {
      skipCount,
      maxResultCount,
      attendingClinic:
        attendingClinic === ALL_CLINICS ? EMPTY_STRING : attendingClinic,
      startTime: dateRange?.from?.toLocaleDateString(),
      endTime: dateRange.to?.toLocaleDateString(),
    },
    {refetchOnMountOrArgChange: false},
  );

  const {
    canLoadMore,
    paginationState,
    setPaginationState,
    proxyData: appointments,
  } = usePaginatedList({
    skipCount,
    maxResultCount,
    isFetching,
    isError,
    data: pagedAppointmentList?.items ?? [],
  });

  const handleRefresh = async () => {
    setPaginationState(PaginationState.BackgroundRefresh);
    resetQueryParams();
    await refetch();
  };

  const handleFirstPageRefetch = async () => {
    resetQueryParams();
    await refetch();
  };

  const handleLoadMoreAppointments = async () => {
    if (canLoadMore) {
      setPaginationState(PaginationState.NewPageProgress);
      setSkipCount(prev => prev + maxResultCount);
      await refetch();
    }
  };

  const resetQueryParams = () => {
    if (skipCount !== 0) {
      setSkipCount(0);
    }
    if (currentlySearchedPatient !== null) {
      setCurrentlySearchedPatient(null);
    }
    if (dateRange.from && dateRange.to) {
      setDateRange({});
    }
  };

  const handleDateRangeChanged = async (result: DateRange) => {
    setShowCalenderRange(false);
    setDateRange({...result});
    setSkipCount(0);
    await refetch();
  };

  const onAttendingClinicChanged = async () => {
    setCurrentlySearchedPatient(null);
    await refetch();
  };

  useEffect(() => {
    if (attendingClinic) {
      onAttendingClinicChanged();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attendingClinic]);

  const handleSelectedPatientFromSearchResult = async (
    item: SearchPatientOutput,
  ) => {
    setCurrentlySearchedPatient(item);
    setShowSearch(false);
  };

  return {
    appointments,
    showCalenderRange,
    setShowCalenderRange,
    showSearch,
    setShowSearch,
    dateRange,
    setDateRange,
    handleLoadMoreAppointments,
    handleDateRangeChanged,
    handleSelectedPatientFromSearchResult,
    paginationState,
    handleRefresh,
    currentlySearchedPatient,
    handleFirstPageRefetch,
  };
};
