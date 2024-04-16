import {showToast} from '@/components/app-toast';
import {useApiServicesAppPatientprofileDeletepatientfamilymemberDeleteMutation} from '@/state/services/patientApi';
import {getErrorMessage} from '@/utils/helpers';
import {logThis} from '@/utils/helpers/logThis';

export const useDeleteFamilyMember = () => {
  const [deleteFamilyMember, {isLoading, isSuccess}] =
    useApiServicesAppPatientprofileDeletepatientfamilymemberDeleteMutation();

  const handleDelete = async (id: number) => {
    try {
      await deleteFamilyMember({
        id,
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Familly member deleted successfully',
        message: 'Family history record has been updated',
      });
    } catch (error) {
      logThis('Family member delete error===', error);
      showToast('ERROR', {
        title: 'Familly member delete Error Encountered!',
        message: getErrorMessage(error),
      });
    }
  };

  return {
    isLoading,
    handleDelete,
    isSuccess,
  };
};
