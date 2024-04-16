import {useState} from 'react';
import {ScheduleProcedureDataType} from '../../types';
import {
  CreateSpecializedProcedureDto,
  PatientProcedureResponseDto,
  SelectedProcedureDto,
  useApiServicesAppProcedureMarkprocedureasspecializedPostMutation,
} from '@/state/services/procedureApi';
import {showToast} from '@/components/app-toast';
import {EMPTY_STRING} from '@/utils/constants';

// TODO(Emmanuel): This hook would be revamped as soon as the api is updated to take an array.
const useSaveSpecializedProcedures = ({
  procedureList,
}: {
  procedureList: PatientProcedureResponseDto;
}) => {
  const [selectedProcedures, setSelectedProcedures] = useState<
    ScheduleProcedureDataType[]
  >(
    (procedureList.selectedProcedures ?? []).map(procedure => ({
      procedure: {
        procedureId: procedureList.id ?? 0,
        procedureName: procedure.procedureName ?? EMPTY_STRING,
        snowmedId: procedure.snowmedId ?? 0,
      },
    })),
  );
  const [createSpecializedProcedure, {isLoading, isSuccess}] =
    useApiServicesAppProcedureMarkprocedureasspecializedPostMutation();

  const handleSave = async ({
    isSameSession,
    anaesthetistUserId,
    requireAnaesthetist,
    reset,
  }: {
    reset: () => void;
    isSameSession: boolean;
    anaesthetistUserId: number | undefined;
    requireAnaesthetist: boolean;
  }) => {
    try {
      if (selectedProcedures.length && isSameSession) {
        const proposedDate = selectedProcedures[0].date?.toISOString();
        const time = selectedProcedures[0].date?.toISOString().split('T')[0];
        const duration = `${selectedProcedures[0]?.duration?.length} ${selectedProcedures[0]?.duration?.duration}`;
        const procedures: SelectedProcedureDto[] = selectedProcedures.map(
          ({procedure}) => ({
            procedureName: procedure.procedureName,
            snowmedId: procedure.snowmedId,
          }),
        );

        const createSpecializedProcedureDto: CreateSpecializedProcedureDto = {
          procedureId: selectedProcedures[0].procedure.procedureId,
          procedures,
          isProcedureInSameSession: isSameSession,
          anaesthetistUserId,
          requireAnaesthetist,
          roomId: selectedProcedures[0].operatingRoom?.roomId,
          proposedDate,
          time,
          duration,
        };

        await createSpecializedProcedure({
          createSpecializedProcedureDto,
        }).unwrap();
      } else if (selectedProcedures.length && !isSameSession) {
        for (const procedure of selectedProcedures) {
          const proposedDate = procedure.date?.toISOString();
          const time = procedure.date?.toISOString().split('T')[0];
          const duration = `${procedure?.duration?.length} ${procedure?.duration?.duration}`;
          const createSpecializedProcedureDto: CreateSpecializedProcedureDto = {
            procedureId: procedure.procedure.procedureId,
            procedures: [
              {
                procedureName: procedure.procedure.procedureName,
                snowmedId: procedure.procedure.snowmedId,
              },
            ],
            isProcedureInSameSession: isSameSession,
            anaesthetistUserId,
            requireAnaesthetist,
            roomId: procedure.operatingRoom?.roomId,
            proposedDate,
            time,
            duration,
          };

          try {
            await createSpecializedProcedure({
              createSpecializedProcedureDto,
            }).unwrap();
          } catch (error) {
            showToast('ERROR', {
              title: 'Error Encountered!',
              message: `The scheduling of the procedure ${procedure.procedure.procedureName} failed`,
            });
          }
        }
      }

      reset();
      showToast('SUCCESS', {
        title: 'Sucessfully',
        message: 'Procedure marked as specialized successfully',
      });
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Procedure failed to be marked as specialized',
      });
    }
  };
  return {
    selectedProcedures,
    setSelectedProcedures,
    handleSave,
    isLoading,
    isSuccess,
  };
};

export default useSaveSpecializedProcedures;
