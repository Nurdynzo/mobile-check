import {showToast} from '@/components/app-toast';
import {useApiServicesAppSymptomDeletesymptomDeleteMutation} from '@/state/services/symptomApi';

export const useDeleteSymptomSummary = () => {
  const [
    deleteSymptomSummary,
    {isLoading: isDeletingSymptomSummary, isSuccess, isError},
  ] = useApiServicesAppSymptomDeletesymptomDeleteMutation();

  const handleDeleteSymptomSummary = async (symptomId: number | undefined) => {
    if (symptomId) {
      try {
        await deleteSymptomSummary({
          symptomId,
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Symptom summary deleted sucessfully',
          message: 'Symptom summary has been deleted from our records',
        });
      } catch (error) {
        showToast('ERROR', {
          title: 'Error Encountered!',
          message: ' Symptom summary failed to be deleted from our records',
        });
      }
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingSymptomSummary,
    handleDeleteSymptomSummary,
  };
};
