import {showToast} from '@/components/app-toast';
import {
  SelectedProcedureDto,
  useApiServicesAppProcedureCreateproceduresPostMutation,
} from '@/state/services/procedureApi';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';

const useSaveRecordProcedure = ({
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
    snowmedId,
    parentProcedureId,
    note,
    reset,
  }: {
    selectedItems: SnowstormSimpleResponseDto[];
    note: string;
    reset: () => void;
    snowmedId: number | undefined | null;
    parentProcedureId: number | undefined;
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
          snowmedId,
          parentProcedureId,
          selectedProcedures,
          note,
          procedureType: 'RecordProcedure',
        },
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Success',
        message: 'Successfully added procedure',
      });

      reset();
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
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

export default useSaveRecordProcedure;
