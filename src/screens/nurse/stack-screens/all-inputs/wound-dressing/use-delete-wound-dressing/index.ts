import {showToast} from '@/components/app-toast';
import {useApiServicesAppWounddressingDeletecreatewounddressingDeleteMutation} from '@/state/services/woundDressingApi';

export const useDeleteWoundDressing = ({
  patientFullName,
}: {
  patientFullName: string;
}) => {
  const [deleteNote, {isLoading: isDeletingWoundDressing, isSuccess, isError}] =
    useApiServicesAppWounddressingDeletecreatewounddressingDeleteMutation();

  const handleDeleteWoundDressing = async (
    woundDressingId: number | undefined,
  ) => {
    if (woundDressingId) {
      try {
        await deleteNote({
          woundDressingId,
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Wound dressing deleted sucessfully',
          message: `${patientFullName} wound dressing has been deleted from our records`,
        });
      } catch (error) {
        showToast('ERROR', {
          title: 'Delete Wound dressing Error Encountered!',
          message: `${patientFullName} wound dressing failed to be deleted from our records`,
        });
      }
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingWoundDressing,
    handleDeleteWoundDressing,
  };
};
