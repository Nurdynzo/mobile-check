import {showToast} from '@/components/app-toast';
import {CreateVaccinationHistoryDto} from '@/state/services/patientApi';
import {
  CreateMultipleVaccinationHistoryDto,
  useApiServicesAppVaccineCreatevaccinationhistoryPostMutation,
} from '@/state/services/vaccineApi';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import VoidFunction from '@/types/voidfunction';
import {useSelector} from 'react-redux';
import {historyDoseType} from '../../../../types';

export const useSaveVaccinationHistory = () => {
  const [
    recordVaccinationHistoryRequest,
    {isLoading, isSuccess: savedVaccination},
  ] = useApiServicesAppVaccineCreatevaccinationhistoryPostMutation();

  const {id: patientId} = useSelector(selectPatient);

  const handleCreateVaccinationHistory = async ({
    cleanup,
    historyDoseForm,
    id,
    encounterId,
  }: {
    historyDoseForm: historyDoseType;
    id: number;
    encounterId: number;
    patientId: number;
    cleanup: VoidFunction;
  }) => {
    try {
      const {hasComplication, interval, note, howLong} = historyDoseForm;
      const payload: CreateVaccinationHistoryDto = {
        hasComplication,
        note,
        vaccineId: id,
        lastVaccineDuration: `${howLong} ${interval}`,
        patientId,
        numberOfDoses: 4, //TODO(ZUCCI): Ask temitope to make the design for this
      };

      const createMultipleVaccinationHistoryPayload: CreateMultipleVaccinationHistoryDto =
        {
          encounterId,
          vaccinationHistory: [payload],
        };

      await recordVaccinationHistoryRequest({
        createMultipleVaccinationHistoryDto:
          createMultipleVaccinationHistoryPayload,
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Success',
        message: 'Added Vaccination history!',
      });
      cleanup();
    } catch (_) {
      showToast('ERROR', {
        title: 'Failed',
        message: 'Failed to add vaccination history',
      });
    }
  };

  return {isLoading, handleCreateVaccinationHistory, savedVaccination};
};
