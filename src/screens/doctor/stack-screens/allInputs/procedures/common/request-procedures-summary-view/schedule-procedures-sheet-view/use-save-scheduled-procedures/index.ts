import {useState} from 'react';
import {ScheduleProcedureDataType} from '../../types';
import {
  PatientProcedureResponseDto,
  ScheduleProcedureDto,
  SelectedProcedureDto,
  useApiServicesAppProcedureScheduleprocedurePostMutation,
} from '@/state/services/procedureApi';
import {showToast} from '@/components/app-toast';
import {EMPTY_STRING} from '@/utils/constants';

const useSaveScheduledProcedures = ({
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
  const [
    createScheduleProcedure,
    {isLoading: isCreateRequestProcedureLoading, isSuccess},
  ] = useApiServicesAppProcedureScheduleprocedurePostMutation();

  const handleSave = async ({
    isSameSession,
    reset,
  }: {
    reset: () => void;
    isSameSession: boolean;
  }) => {
    if (selectedProcedures.length && isSameSession) {
      try {
        const proposedDate = selectedProcedures[0].date?.toISOString();
        const time = selectedProcedures[0].date?.toISOString().split('T')[0];
        const duration = `${selectedProcedures[0]?.duration?.length} ${selectedProcedures[0]?.duration?.duration}`;
        const procedures: SelectedProcedureDto[] = selectedProcedures.map(
          ({procedure}) => ({
            procedureName: procedure.procedureName,
            snowmedId: procedure.snowmedId,
          }),
        );

        const scheduleProcedureDto: ScheduleProcedureDto = {
          procedureId: selectedProcedures[0].procedure.procedureId,
          procedures,
          isProcedureInSameSession: true,
          roomId: selectedProcedures[0].operatingRoom?.roomId,
          proposedDate,
          time,
          duration,
        };
        await createScheduleProcedure({
          scheduleProcedureDto,
        }).unwrap();

        reset();
        showToast('SUCCESS', {
          title: 'Success',
          message: 'Procedure has been scheduled successfully',
        });
      } catch (error) {
        showToast('ERROR', {
          title: 'Error Encountered!',
          message: 'Error scheduling procedure',
        });
      }
    } else if (selectedProcedures.length && !isSameSession) {
      for (const procedure of selectedProcedures) {
        const proposedDate = procedure.date?.toISOString();
        const time = procedure.date?.toISOString().split('T')[0];
        const duration = `${procedure?.duration?.length} ${procedure?.duration?.duration}`;
        const procedures: SelectedProcedureDto[] = [
          {
            procedureName: procedure.procedure.procedureName,
            snowmedId: procedure.procedure.snowmedId,
          },
        ];

        const scheduleProcedureDto: ScheduleProcedureDto = {
          procedureId: procedure.procedure.procedureId,
          procedures,
          isProcedureInSameSession: false,
          roomId: procedure.operatingRoom?.roomId,
          proposedDate,
          time,
          duration,
        };

        try {
          await createScheduleProcedure({
            scheduleProcedureDto,
          }).unwrap();
        } catch (error) {
          showToast('ERROR', {
            title: 'Error Encountered!',
            message: `Error scheduling procedure ${procedure.procedure.procedureName}`,
          });
        }
      }

      reset();
      showToast('SUCCESS', {
        title: 'Success',
        message: 'Procedures have been scheduled successfully',
      });
    }
  };
  return {
    selectedProcedures,
    setSelectedProcedures,
    handleSave,
    isCreateRequestProcedureLoading,
    isSuccess,
  };
};

export default useSaveScheduledProcedures;
