import {useApiServicesAppVaccineGetpatientvaccinationhistoryGetQuery} from '@/state/services/vaccineApi';
import {RootState} from '@/state/store';
import {useSelector} from 'react-redux';

export const useGetVaccinationHistory = () => {
  const {id: patientId} = useSelector(
    (state: RootState) => state.selectedPatient,
  );
  const {
    data: patientHistorySummaries,
    refetch,
    isLoading: isLoadedVaccinations,
    isSuccess: loadedVaccinationsHistory,
  } = useApiServicesAppVaccineGetpatientvaccinationhistoryGetQuery({
    id: patientId,
  });

  const handleRefetchVaccinationHistory = async () => {
    await refetch().unwrap();
  };

  return {
    patientHistorySummaries,
    handleRefetchVaccinationHistory,
    isLoadedVaccinations,
    loadedVaccinationsHistory,
  };
};
