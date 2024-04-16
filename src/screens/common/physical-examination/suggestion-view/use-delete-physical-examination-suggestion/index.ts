import {showToast} from '@/components/app-toast';
import {useApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteMutation} from '@/state/services/physicalExaminationsApi';
import VoidFunction from '@/types/voidfunction';

const useDeletePhysicalExaminationSuggestion = () => {
  const [onDeleteImage, {isLoading, isSuccess}] =
    useApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteMutation();

  const handleDeleteSuggestion = async (
    patientPhysicalExaminationId: number,
    reset: VoidFunction = () => null,
  ) => {
    try {
      await onDeleteImage({
        patientPhysicalExaminationRequest: {id: patientPhysicalExaminationId},
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Success',
        message:
          'Patient physical examination image have been removed from our records',
      });
      reset();
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message:
          'Patient physical examination image failed to remove from our records',
      });
    }
  };

  return {handleDeleteSuggestion, isLoading, isSuccess};
};

export default useDeletePhysicalExaminationSuggestion;
