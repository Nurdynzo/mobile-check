import {showToast} from '@/components/app-toast';
import {useApiServicesAppIntakeoutputCreateoreditintakePostMutation} from '@/state/services/intakeOutputApi';
import {OnSaveProps} from '../types';
import {getErrorMessage} from '@/utils/helpers';

export const useSaveIntake = ({
  patientId,
  encounterId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [createIntake, {isLoading: isCreateIntakeLoading, isError, isSuccess}] =
    useApiServicesAppIntakeoutputCreateoreditintakePostMutation();

  const handleSave = async ({
    data: {suggestedText, volumnInMls},
    reset,
  }: OnSaveProps) => {
    try {
      await createIntake({
        createIntakeOutputDto: {
          patientId,
          selectedIntakeOutputCharting: [{suggestedText}],
          encounterId,
          volumeInMls: Number(volumnInMls),
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Success',
        message: 'Patient intake has been added to our records',
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
    isCreateIntakeLoading,
    handleSave,
    isError,
    isSuccess,
  };
};
