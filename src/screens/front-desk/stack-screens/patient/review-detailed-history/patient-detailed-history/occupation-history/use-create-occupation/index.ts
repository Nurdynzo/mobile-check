import {showToast} from '@/components/app-toast';
import {useApiServicesAppPatientprofileSaveoccupationhistoryPostMutation} from '@/state/services/patientApi';
import {EMPTY_STRING} from '@/utils/constants';
import {getErrorMessage} from '@/utils/helpers';
import {logThis} from '@/utils/helpers/logThis';
import {otherIdNumberFormSchema} from '@/utils/schema';
import {OccupationFormSchema} from '../schema';
export const defaultOtherIdNumberValues: otherIdNumberFormSchema = {
  type: EMPTY_STRING,
  number: EMPTY_STRING,
};
export const useCreateOccupation = ({patientId}: {patientId: number}) => {
  const [createOccupation, {isSuccess, isLoading}] =
    useApiServicesAppPatientprofileSaveoccupationhistoryPostMutation();

  const handleCreate = async ({
    values,
    reset,
  }: {
    values: OccupationFormSchema;
    reset: () => void;
  }) => {
    try {
      await createOccupation({
        createOccupationalHistoryDto: {
          patientId,
          from: values.startDate.toDateString(),
          ...(!values.isCurrent && {to: values.endDate?.toDateString()}),
          isCurrent: values.isCurrent,
          note: values.notes,
          occupation: values.occupation.value,
          workLocation: values.location,
        },
      }).unwrap();

      reset();
      showToast('SUCCESS', {
        title: 'Occupation added successfully',
        message: 'occupations record has been updated',
      });
    } catch (error) {
      logThis('Occupation added error===', error);
      showToast('ERROR', {
        title: 'Occupation added Error Encountered!',
        message: getErrorMessage(error),
      });
    }
  };

  return {handleCreate, isSuccess, isLoading};
};
