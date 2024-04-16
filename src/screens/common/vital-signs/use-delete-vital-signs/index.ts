import {showToast} from '@/components/app-toast';
import {useApiServicesAppVitalsignsDeletepatientvitalDeleteMutation} from '@/state/services/vitalSignsApi';
import VoidFunction from '@/types/voidfunction';

const useDeleteVitalSigns = () => {
  const [deleteNote, {isLoading: isDeletingVitalSigns, isSuccess, isError}] =
    useApiServicesAppVitalsignsDeletepatientvitalDeleteMutation();

  const handleDeleteVitalSigns = async ({
    patientVitalIds,
    reset,
  }: {
    patientVitalIds: number[] | undefined;
    reset: VoidFunction;
  }) => {
    if (patientVitalIds) {
      try {
        await deleteNote({
          patientVitalIds,
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Success',
          message: 'Patient vital signs has been deleted from our records',
        });
        reset();
      } catch (error) {
        showToast('ERROR', {
          title: 'Error Encountered!',
          message: 'Failed to delete vital signs from our records',
        });
      }
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingVitalSigns,
    handleDeleteVitalSigns,
  };
};

export default useDeleteVitalSigns;
