import {showToast} from '@/components/app-toast';
import {useApiServicesAppWardemergenciesCreatepatientinterventionPostMutation} from '@/state/services/WardEmergenciesApi';
import {CreatePatientInterventionRequest} from '@/state/services/patientApi';

export const useSaveMiscellaneousInterventions = () => {
  const [
    saveMiscellaneousInterventions,
    {
      isLoading: isSavingMiscellaneousInterventions,
      isError: saveMiscellaneousInterventionsError,
      isSuccess: saveMiscellaneousInterventionsSuccess,
      data: saveMiscellaneousInterventionsData,
    },
  ] = useApiServicesAppWardemergenciesCreatepatientinterventionPostMutation();

  const handleSaveMiscellaneousInterventions = async (
    savePayload: CreatePatientInterventionRequest,
    successCallback: () => void,
  ) => {
    try {
      await saveMiscellaneousInterventions({
        createPatientInterventionRequest: savePayload,
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Successful!',
        message: 'Successfully added miscellaneous interventions!',
      });
      successCallback();
    } catch (error) {
      showToast('ERROR', {
        title: 'Failed!',
        message: 'Failed to add miscellaneous interventions!',
      });
    }
  };

  return {
    handleSaveMiscellaneousInterventions,
    isSavingMiscellaneousInterventions,
    saveMiscellaneousInterventionsError,
    saveMiscellaneousInterventionsSuccess,
    saveMiscellaneousInterventionsData,
  };
};
