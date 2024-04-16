import {showToast} from '@/components/app-toast';
import {useApiServicesAppIntakeoutputDeleteintakeoroutputDeleteMutation} from '@/state/services/intakeOutputApi';

export const useDeleteIntakeOrOutput = () => {
  const [
    deleteIntakeOutput,
    {isLoading: isDeletingIntakeOrOutput, isSuccess, isError},
  ] = useApiServicesAppIntakeoutputDeleteintakeoroutputDeleteMutation();

  const handleDeleteIntakeOrOutput = async (
    intakeOrOutputId: number | undefined | null,
  ) => {
    if (intakeOrOutputId) {
      try {
        await deleteIntakeOutput({
          deleteIntakeOutputDto: {id: intakeOrOutputId},
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Summary deleted sucessfully',
          message: 'Summary has been deleted from our records',
        });
      } catch (error) {
        showToast('ERROR', {
          title: 'Delete Summary Error Encountered!',
          message: 'Failed to delete summary from our records',
        });
      }
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingIntakeOrOutput,
    handleDeleteIntakeOrOutput,
  };
};
