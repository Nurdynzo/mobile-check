import {showToast} from '@/components/app-toast';
import {useApiServicesAppMedicationDeletemedicationDeleteMutation} from '@/state/services/medicationApi';

const useDeleteMedication = () => {
  const [
    deleteMedication,
    {isLoading: isDeletingMedication, isSuccess, isError},
  ] = useApiServicesAppMedicationDeletemedicationDeleteMutation();

  const handleDeleteMedication = async (id: number | undefined) => {
    try {
      await deleteMedication({
        id,
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Success',
        message: 'Patient medication has been deleted from our records',
      });
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Failed to delete patient medication from our records',
      });
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingMedication,
    handleDeleteMedication,
  };
};

export default useDeleteMedication;
