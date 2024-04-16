import {showToast} from '@/components/app-toast';
import {useApiServicesAppIntakeoutputCreateoreditoutputPostMutation} from '@/state/services/intakeOutputApi';
import {OnSaveProps} from '../types';
import {getErrorMessage} from '@/utils/helpers';

export const useSaveOutput = ({
  patientId,
  encounterId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [createOutput, {isLoading: isCreateOutputLoading, isError, isSuccess}] =
    useApiServicesAppIntakeoutputCreateoreditoutputPostMutation();

  const handleSave = async ({
    data: {suggestedText, volumnInMls},
    reset,
  }: OnSaveProps) => {
    try {
      await createOutput({
        createIntakeOutputDto: {
          patientId,
          encounterId,
          selectedIntakeOutputCharting: [{suggestedText}],
          volumeInMls: Number(volumnInMls),
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Success',
        message: 'Patient output has been added to our records',
      });

      reset();
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: getErrorMessage(error),
      });
    }
  };

  return {
    isCreateOutputLoading,
    handleSave,
    isError,
    isSuccess,
  };
};
