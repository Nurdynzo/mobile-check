import {showToast} from '@/components/app-toast';
import {useApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutMutation} from '@/state/services/patientApi';
import {getErrorMessage} from '@/utils/helpers';
import {logThis} from '@/utils/helpers/logThis';
import {OccupationFormSchema} from '../schema';

export const useUpdateOccupation = ({patientId}: {patientId: number}) => {
  const [updateOccupation, {isSuccess, isLoading}] =
    useApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutMutation();

  const handleUpdate = async ({
    values,
    reset,
  }: {
    values: OccupationFormSchema;
    reset: () => void;
  }) => {
    try {
      await updateOccupation({
        createOccupationalHistoryDto: {
          patientId,
          from: values.startDate.toDateString(),
          ...(!values.isCurrent && {to: values.endDate?.toDateString()}),
          isCurrent: values.isCurrent,
          note: values.notes,
          occupation: values.occupation.value,
          workLocation: values.location,
          id: values.occupationId,
        },
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Occupation updated successfully',
        message: 'occupations record has been updated',
      });
      reset();
    } catch (error) {
      logThis('Occupation update error===', error);
      showToast('ERROR', {
        title: 'Occupation added Error Encountered!',
        message: getErrorMessage(error),
      });
    }
  };

  return {handleUpdate, isSuccess, isLoading};
};
