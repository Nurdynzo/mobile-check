import {showToast} from '@/components/app-toast';
import {useApiServicesAppPlanitemsDeletecreateplanitemsDeleteMutation} from '@/state/services/planItemsApi';

export const useDeleteOtherPlanItems = () => {
  const [
    deletePlanItems,
    {isLoading: isDeletingOtherPlanItem, isSuccess, isError},
  ] = useApiServicesAppPlanitemsDeletecreateplanitemsDeleteMutation();

  const handleDeleteOtherPlanItems = async (
    planItemsId: number | undefined,
  ) => {
    if (planItemsId) {
      try {
        await deletePlanItems({
          planItemsId,
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Other plan items deleted sucessfully',
          message: 'Summary has been deleted from our records',
        });
      } catch (error) {
        showToast('ERROR', {
          title: 'Delete Other plan items Error Encountered!',
          message: 'Failed to delete summary from our records',
        });
      }
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingOtherPlanItem,
    handleDeleteOtherPlanItems: handleDeleteOtherPlanItems,
  };
};
