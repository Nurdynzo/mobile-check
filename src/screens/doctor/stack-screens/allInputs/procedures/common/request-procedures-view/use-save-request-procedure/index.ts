import {showToast} from '@/components/app-toast';
import {
  SelectedProcedureDto,
  useApiServicesAppProcedureCreateproceduresPostMutation,
} from '@/state/services/procedureApi';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';

const useSaveRequestProcedure = ({
  patientId,
  encounterId,
}: {
  patientId: number;
  encounterId: number | undefined;
}) => {
  const [
    createRequestProcedure,
    {isLoading: isSavingProcedure, isError, isSuccess},
  ] = useApiServicesAppProcedureCreateproceduresPostMutation();

  const handleSave = async ({
    selectedItems,
    note,
    reset,
  }: {
    selectedItems: SnowstormSimpleResponseDto[];
    note: string;
    reset: () => void;
  }) => {
    try {
      const selectedProcedures: SelectedProcedureDto[] = selectedItems.map(
        item => ({
          snowmedId: Number(item.id),
          procedureName: `${item.name}`,
        }),
      );
      await createRequestProcedure({
        createProcedureDto: {
          patientId,
          encounterId,
          selectedProcedures,
          note,
          procedureType: 'RequestProcedure',
        },
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Success',
        message: 'Successfully added procedure',
      });

      reset();
    } catch (error) {
      showToast('ERROR', {
        title: 'Error encountered!',
        message: 'Failed to add procedure',
      });
    }
  };

  return {
    isSavingProcedure,
    handleSave,
    isError,
    isSuccess,
  };
};

export default useSaveRequestProcedure;
