import {showToast} from '@/components/app-toast';
import {useApiServicesAppBedmakingDeletecreatebedmakingDeleteMutation} from '@/state/services/bedMakingApi';

export const useDeleteBedMaking = () => {
  const [
    deleteBedMaking,
    {isLoading: isDeletingBedMaking, isSuccess, isError},
  ] = useApiServicesAppBedmakingDeletecreatebedmakingDeleteMutation();

  const handleDeleteBedMaking = async (bedMakingId: number | undefined) => {
    if (bedMakingId) {
      try {
        await deleteBedMaking({bedMakingId}).unwrap();
        showToast('SUCCESS', {
          title: 'Success',
          message: 'Successfully deleted summary from our records',
        });
      } catch (error) {
        showToast('ERROR', {
          title: 'Error Encountered!',
          message: 'Failed to delete summary from our records',
        });
      }
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingBedMaking,
    handleDeleteBedMaking,
  };
};
