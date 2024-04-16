import {useApiServicesAppPatientprofileGetpatientoccupationalhistoryGetQuery} from '@/state/services/patientApi';

export const useGetSavedOccupations = ({patientId}: {patientId: number}) => {
  const {
    currentData: occupationsData,
    isSuccess,
    error,
  } = useApiServicesAppPatientprofileGetpatientoccupationalhistoryGetQuery({
    patientId,
  });

  return {
    occupationsData: [...(occupationsData ?? [])].sort(
      (a, b) => (b?.isCurrent ? 1 : 0) - (a?.isCurrent ? 1 : 0),
    ),
    isSuccess,
    error,
  };
};
