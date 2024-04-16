import {showToast} from '@/components/app-toast';
import {useApiServicesAppPatientprofileDeletepatientoccupationDeleteMutation} from '@/state/services/patientApi';
import {EMPTY_STRING} from '@/utils/constants';
import {getErrorMessage} from '@/utils/helpers';
import {logThis} from '@/utils/helpers/logThis';
import {otherIdNumberFormSchema} from '@/utils/schema';
export const defaultOtherIdNumberValues: otherIdNumberFormSchema = {
  type: EMPTY_STRING,
  number: EMPTY_STRING,
};
export const useDeleteOccupation = () => {
  const [deleteOccupation, {isSuccess}] =
    useApiServicesAppPatientprofileDeletepatientoccupationDeleteMutation();
  const handleDelete = async ({
    id,
  }: {
    id: number | undefined;
    remove: () => void;
  }) => {
    try {
      await deleteOccupation({
        id,
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Occupation deleted successfully',
        message: 'occupations record has been updated',
      });
    } catch (error) {
      logThis('Occupation delete error===', error);
      showToast('ERROR', {
        title: 'Occupation delete Error Encountered!',
        message: getErrorMessage(error),
      });
    }
  };

  return {handleDelete, isSuccess};
};
