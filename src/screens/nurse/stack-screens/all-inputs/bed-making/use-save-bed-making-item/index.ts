import {showToast} from '@/components/app-toast';
import {useApiServicesAppBedmakingCreatebedmakingPostMutation} from '@/state/services/bedMakingApi';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';

export const useSaveBedMaking = ({
  patientId,
  encounterId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [
    createBedMaking,
    {isLoading: isCreateBedMakingLoading, isError, isSuccess},
  ] = useApiServicesAppBedmakingCreatebedmakingPostMutation();

  const handleSave = async ({
    selectedItems,
    reset,
  }: {
    selectedItems: SnowstormSimpleResponseDto[];
    reset: () => void;
  }) => {
    if (selectedItems.length) {
      try {
        await createBedMaking({
          createBedMakingDto: {
            patientId,
            encounterId,
            note: selectedItems.map(p => p.name).join(', '),
          },
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Success',
          message: 'Successfully added record',
        });

        reset();
      } catch (error) {
        showToast('ERROR', {
          title: 'Error Encountered!',
          message: 'Failed to add record',
        });
      }
    }
  };

  return {
    isCreateBedMakingLoading,
    handleSave,
    isError,
    isSuccess,
  };
};
