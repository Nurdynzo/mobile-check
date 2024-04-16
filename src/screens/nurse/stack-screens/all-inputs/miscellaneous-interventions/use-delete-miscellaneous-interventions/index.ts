import {showToast} from '@/components/app-toast';
import {useApiServicesAppWounddressingDeletecreatewounddressingDeleteMutation} from '@/state/services/woundDressingApi';

//TODO(Zucci): Get the MiscelleneousIntervention Ep for delete and use it.
export const useDeleteMiscelleneousInterventions = ({
  patientFullName,
}: {
  patientFullName: string;
}) => {
  const [
    deleteMiscelleneousInterventions,
    {isLoading: isDeletingMiscellaneousInterventions, isSuccess, isError},
  ] = useApiServicesAppWounddressingDeletecreatewounddressingDeleteMutation();

  const handleDeleteMiscellaneousInterventions = async (
    miscellaneousInterventionsId: number | undefined,
  ) => {
    if (miscellaneousInterventionsId) {
      try {
        await deleteMiscelleneousInterventions({
          woundDressingId: miscellaneousInterventionsId,
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Miscelleneous interventions deleted sucessfully',
          message: `${patientFullName} miscelleneous interventions has been deleted from our records`,
        });
      } catch (error) {
        showToast('ERROR', {
          title: 'Delete miscelleneous interventions Error Encountered!',
          message: `${patientFullName} miscelleneous interventions failed to be deleted from our records`,
        });
      }
    }
  };

  return {
    isError,
    isSuccess,
    isDeletingMiscellaneousInterventions,
    handleDeleteMiscellaneousInterventions,
  };
};
