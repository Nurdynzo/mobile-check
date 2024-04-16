import {useApiServicesAppVaccineGetpatientvaccinationhistoryGetQuery} from '@/state/services/vaccineApi';
import {RootState} from '@/state/store';
import {useSelector} from 'react-redux';

//TODO(Zucci): This is a place holder, until the actual endpoint comes.
export const useGetRecordedVaccinationHistory = () => {
  const {id} = useSelector((state: RootState) => state.selectedPatient);
  const {
    data: apiVaccinationHistory,
    refetch: handleRefetchRecordedVaccination,
    isLoading: isLoadedRecordedVaccinations,
    isSuccess: loadedRecordedVaccinations,
  } = useApiServicesAppVaccineGetpatientvaccinationhistoryGetQuery({
    id,
  });

  return {
    apiVaccinationHistory,
    handleRefetchRecordedVaccination,
    isLoadedRecordedVaccinations,
    loadedRecordedVaccinations,
  };
};
