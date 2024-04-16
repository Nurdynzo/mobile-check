import {useCallback, useEffect, useState} from 'react';
import {useSheet} from '@/hooks/useSheet';
import {
  AppointmentListResponse,
  useApiServicesAppAppointmentDeleteDeleteMutation,
} from '@/state/services/appointmentApi';
import {useApiServicesAppPatientappointmentsGetappointmentsbypatientidGetQuery} from '@/state/services/patientAppointmentsApi';
import {MenuOptionsProp} from '@/types/menusheet';
import {logThis} from '@/utils/helpers/logThis';
import {removeDuplicates} from '@/utils/helpers/unique';
import {showToast} from '@/components/app-toast';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';

export const useViewAppointments = () => {
  const currentPatient = useAppSelector(selectPatient);

  const {
    sheetRef: sortSheet,
    openSheet: openSortBySheet,
    closeSheet: closeSortSheet,
  } = useSheet();

  const [selectedSort, setSelectedSort] = useState<string>('');

  //for date range
  const [showCalenderRange, setShowCalenderRange] = useState(false);

  const [dateRange, setDateRange] = useState<{
    to: Date | null | string;
    from: Date | null | string;
  }>({
    to: '',
    from: '',
  });

  const [refreshing, setRefreshing] = useState(false);

  //pagination and filters.
  const [loadingMore, setLoadingMore] = useState(false);
  const [skipCount, setSkipCount] = useState(0);
  const [previousSkipCount, setPrevousSkipCount] = useState(0);
  const [maxResultCount] = useState(50);
  const [totalPage, setTotalPage] = useState(2);
  const [appointmentsForThisPatient, setAppointmentsForThisPatient] = useState<
    Array<AppointmentListResponse>
  >([]);

  const {
    data: pagedAppointmentListForThisPatient,
    isLoading,
    isFetching,
    refetch,
    isError,
  } = useApiServicesAppPatientappointmentsGetappointmentsbypatientidGetQuery(
    {
      startDate:
        dateRange.from instanceof Date
          ? dateRange.from.toLocaleDateString()
          : '',
      endDate:
        dateRange.to instanceof Date ? dateRange.to?.toLocaleDateString() : '',
      skipCount: 0, //BUG
      maxResultCount,
      patientId: currentPatient.id,
    },
    {
      skip: false,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    },
  );

  const [
    deleteAppointmentById,
    {
      isLoading: isDeleting,
      isSuccess: deleteAppointmentSuccess,
      error: deleteAppointmentErrorObj,
      isError: errorDeletingAppointment,
      originalArgs: originalDeleteAppointmentArg,
    },
  ] = useApiServicesAppAppointmentDeleteDeleteMutation();

  const handleRefresh = () => {
    reset();
    setRefreshing(true);
  };

  const reset = () => {
    setAppointmentsForThisPatient([]);
    setSkipCount(0);
    setDateRange({from: '', to: ''});
  };

  const sortByOptions: MenuOptionsProp = [
    {
      value: 'All-time',
      onPress: () => {
        setDateRange({
          from: '',
          to: '',
        });
        setShowCalenderRange(false);
        closeSortSheet();
        handleFilterChanged();
      },
    },
    {
      value: 'Select range',
      onPress: () => {
        setShowCalenderRange(true);
        closeSortSheet();
      },
    },
  ];

  const handleLoadMoreAppointments = useCallback(() => {
    if (totalPage > skipCount && !loadingMore) {
      setLoadingMore(true);
      setSkipCount(prevSkipCount => prevSkipCount + 1);
    } else {
      // SHOW FINISHED MESSAGE HERE.
    }
  }, [totalPage, skipCount, loadingMore]);

  const handleSetAppointments = useCallback(() => {
    if (pagedAppointmentListForThisPatient) {
      const totalNumberOfPages =
        pagedAppointmentListForThisPatient.totalCount ?? 0 / maxResultCount;
      setTotalPage(totalNumberOfPages);

      if (skipCount === 0) {
        setAppointmentsForThisPatient(
          pagedAppointmentListForThisPatient?.items ?? [],
        );
      } else {
        if (previousSkipCount !== skipCount) {
          // Concatenate the new data with the existing appointments
          setAppointmentsForThisPatient(
            (prevAppointments: AppointmentListResponse[]) => {
              const newAppointments = [
                ...prevAppointments,
                ...(pagedAppointmentListForThisPatient?.items ?? []),
              ];
              // Remove duplicates
              const uniqueAppointments = removeDuplicates(
                newAppointments,
                'id',
              );
              return uniqueAppointments;
            },
          );
        }
        setPrevousSkipCount(skipCount);
      }
    }
    setRefreshing(false);
    setLoadingMore(false); // Set loadingMore to false after appointments are set
  }, [
    pagedAppointmentListForThisPatient,
    skipCount,
    previousSkipCount,
    maxResultCount,
  ]);

  const handleDateRangeChanged = () => {
    setShowCalenderRange(false);
    handleFilterChanged();
  };

  const handleFilterChanged = useCallback(async () => {
    reset();
    try {
      const {isSuccess, data} = await refetch();

      if (isSuccess) {
        // Clear the list.
        setAppointmentsForThisPatient(data?.items ?? []);
      } else {
        throw new Error();
      }
    } catch (error) {
      logThis('ERROR GETTING APPOINTMENTS FROM THE CLINIC ', error);
    }
  }, [setAppointmentsForThisPatient, refetch]);

  useEffect(() => {
    handleSetAppointments();
  }, [pagedAppointmentListForThisPatient, handleSetAppointments]);

  useEffect(() => {
    if (deleteAppointmentSuccess) {
      showToast('SUCCESS', {
        message: 'Appointment deleted!',
        title: 'Deleted',
      });
      const deletedAppointmentId = originalDeleteAppointmentArg?.id;

      setAppointmentsForThisPatient(prevAppointments =>
        prevAppointments.filter(item => item.id !== deletedAppointmentId),
      );
    }

    if (
      `${deleteAppointmentErrorObj?.data?.error?.message}`
        .toLowerCase()
        .includes('does not exist')
    ) {
      showToast('SUCCESS', {
        message: 'Appointment deleted!',
        title: 'Deleted',
      });
      const deletedAppointmentId = originalDeleteAppointmentArg?.id;

      setAppointmentsForThisPatient(prevAppointments =>
        prevAppointments.filter(item => {
          return item.id !== deletedAppointmentId;
        }),
      );
    }

    if (
      errorDeletingAppointment &&
      !`${deleteAppointmentErrorObj?.data?.error?.message}`
        .toLowerCase()
        .includes('does not exist')
    ) {
      showToast('ERROR', {
        message: deleteAppointmentErrorObj?.data?.error?.message,
        title: 'action failed',
      });
    }
  }, [
    deleteAppointmentSuccess,
    errorDeletingAppointment,
    originalDeleteAppointmentArg,
    deleteAppointmentErrorObj,
  ]);

  return {
    appointmentsForThisPatient,
    isLoading,
    refetch,
    sortByOptions,
    openSortBySheet,
    selectedSort,
    setSelectedSort,
    handleLoadMoreAppointments,
    isError,
    isFetching,
    closeSortSheet,
    currentPatient,
    sortSheet,
    totalPage,
    deleteAppointmentById,
    isDeleting,
    deleteAppointmentSuccess,
    errorDeletingAppointment,
    dateRange,
    handleDateRangeChanged,
    showCalenderRange,
    setShowCalenderRange,
    setDateRange,
    handleRefresh,
    refreshing,
  };
};
