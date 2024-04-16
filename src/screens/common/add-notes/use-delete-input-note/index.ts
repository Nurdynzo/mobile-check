import {showToast} from '@/components/app-toast';
import {useApiServicesAppInputnotesDeletecreateinputnotesDeleteMutation} from '@/state/services/inputNotesApi';

export const useDeleteInputNote = () => {
  const [deleteNote, {isLoading: isDeletingNote, isSuccess, isError}] =
    useApiServicesAppInputnotesDeletecreateinputnotesDeleteMutation();

  const handleDeleteNote = async (inputNotesId: number | undefined) => {
    if (inputNotesId) {
      try {
        await deleteNote({
          inputNotesId,
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Success',
          message: 'Successfully deleted note from our records',
        });
      } catch (error) {
        showToast('ERROR', {
          title: 'rror Encountered!',
          message: 'Failed to delete note from our records',
        });
      }
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingNote,
    handleDeleteNote,
  };
};
