import {showToast} from '@/components/app-toast';
import {useApiServicesAppInputnotesCreateinputnotesPostMutation} from '@/state/services/inputNotesApi';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';

export const useSaveInputNote = ({
  patientId,
  encounterId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [
    createInputNote,
    {isLoading: isCreateNoteLoading, isError, isSuccess},
  ] = useApiServicesAppInputnotesCreateinputnotesPostMutation();

  const handleSave = async ({
    selectedItems,
    reset,
  }: {
    selectedItems: SnowstormSimpleResponseDto[];
    reset: () => void;
  }) => {
    if (selectedItems.length) {
      try {
        await createInputNote({
          createInputNotesDto: {
            patientId,
            encounterId,
            description: selectedItems.map(p => p.name).join(', '),
          },
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Success',
          message: 'Successfully added note to our records',
        });

        reset();
      } catch (error) {
        showToast('ERROR', {
          title: 'Error Encountered!',
          message: 'Failed to add note to our records',
        });
      }
    }
  };

  return {
    isCreateNoteLoading,
    handleSave,
    isError,
    isSuccess,
  };
};
