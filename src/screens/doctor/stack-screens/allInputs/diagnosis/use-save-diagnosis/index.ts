import {showToast} from '@/components/app-toast';
import {
  DiagnosisItemDto,
  useApiServicesAppDiagnosisCreatediagnosisPostMutation,
} from '@/state/services/diagnosisApi';
import {DiagnosisState, Pill} from '@/types/doctor/diagnosis';
import {useState} from 'react';

export const useSaveDiagnosis = ({
  patientId,
  encounterId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [addDiagnosisRequest, {isSuccess}] =
    useApiServicesAppDiagnosisCreatediagnosisPostMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async ({
    reset,
    diagnosisDifferentialStates,
  }: {
    diagnosisDifferentialStates: DiagnosisState[];
    reset: () => void;
  }) => {
    try {
      setIsSubmitting(true);
      const selectedDiagnoses = changeFormat(
        diagnosisDifferentialStates.map(val => val.activePills[0]) as Pill[],
      );

      const note = diagnosisDifferentialStates
        .map(state => state.note.trim())
        .filter(Boolean)
        .join(', ');

      await addDiagnosisRequest({
        createDiagnosisDto: {
          patientId: patientId,
          encounterId,
          notes: note,
          selectedDiagnoses,
        },
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Diagnois saved successfully',
        message: 'Diagnois have been saved for this encounter successfully',
      });

      reset();
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Diagnosis failed to save',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {handleSave, isSubmitting, isSuccess};
};

const changeFormat = (activePills: Pill[]) => {
  if (Array.isArray(activePills) && activePills.length > 0) {
    const value = activePills.map(val => {
      return {
        name: val.value,
        type: val.type === 'Diagnosis' ? 0 : 1,
      };
    });
    return value as DiagnosisItemDto[];
  }
  return [] as DiagnosisItemDto[];
};
