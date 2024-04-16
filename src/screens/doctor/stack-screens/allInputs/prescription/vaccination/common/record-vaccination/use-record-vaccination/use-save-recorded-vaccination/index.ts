import {showToast} from '@/components/app-toast';
import {
  CreateVaccinationDto,
  useApiServicesAppVaccineCreatevaccinationPostMutation,
} from '@/state/services/vaccineApi';
import VoidFunction from '@/types/voidfunction';

export const useSaveRecordedVaccination = ({
  encounterId,
}: {
  encounterId: number;
}) => {
  const [
    createVaccineRequest,
    {isLoading: isCreatingVaccineRequest, isSuccess: createVaccineSuccess},
  ] = useApiServicesAppVaccineCreatevaccinationPostMutation();

  const handleSaveRecordedVaccination = async ({
    vaccinations,
    cleanup,
  }: {
    vaccinations: CreateVaccinationDto[];
    cleanup: VoidFunction;
  }) => {
    try {
      await createVaccineRequest({
        createMultipleVaccinationDto: {
          vaccinations,
          encounterId,
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Vaccination recorded successfully',
        message: 'Vaccine has been recorded for this encounter successfully',
      });
      cleanup();
    } catch (error) {
      showToast('ERROR', {
        title: 'Record vaccination',
        message: 'Failed to Record Vaccination',
      });
    }
  };

  return {
    handleSaveRecordedVaccination,
    isCreatingVaccineRequest,
    createVaccineSuccess,
  };
};
