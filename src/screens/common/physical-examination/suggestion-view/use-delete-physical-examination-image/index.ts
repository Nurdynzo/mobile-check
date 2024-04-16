import {showToast} from '@/components/app-toast';
import {useApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteMutation} from '@/state/services/physicalExaminationsApi';
import VoidFunction from '@/types/voidfunction';

const useDeletePhysicalExaminationImage = () => {
  const [onDeleteImage, {isLoading, isSuccess}] =
    useApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteMutation();

  const handleDeleteImage = async (
    patientPhysicalExaminationImageFileId: number,
    reset: VoidFunction = () => null,
  ) => {
    try {
      await onDeleteImage({patientPhysicalExaminationImageFileId}).unwrap();
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

  return {handleDeleteImage, isLoading, isSuccess};
};

export default useDeletePhysicalExaminationImage;
