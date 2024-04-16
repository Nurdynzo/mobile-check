import {showToast} from '@/components/app-toast';
import {useApiServicesAppProcedureDeleteprocedureDeleteMutation} from '@/state/services/procedureApi';

/// Cannot mock test because API takes in query params
const useDeleteProcedureHistory = () => {
  const [deleteProcedure, {isLoading: isDeleting, isError, isSuccess}] =
    useApiServicesAppProcedureDeleteprocedureDeleteMutation();

  const handleDeletion = async ({id}: {id: number | undefined}) => {
    try {
      await deleteProcedure({
        input: id,
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Success',
        message: 'Successfully deleted procedure',
      });
    } catch (error) {
      showToast('ERROR', {
        title: 'Error encountered!',
        message: 'Error deleting procedure',
      });
    }
  };

  return {
    isDeleting,
    handleDeletion,
    isError,
    isSuccess,
  };
};

export default useDeleteProcedureHistory;
