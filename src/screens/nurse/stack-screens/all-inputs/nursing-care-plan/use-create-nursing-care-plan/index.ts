import {useApiServicesAppNursecareplansCreatenursecareplanPostMutation} from '@/state/services/nurseCarePlansApi';
import planNames from '@/constants/nurseCarePlan';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {showToast} from '@/components/app-toast';

const useCreateNursingCarePlan = ({
  patientId,
  encounterId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [createNursePlan, {isLoading, isSuccess}] =
    useApiServicesAppNursecareplansCreatenursecareplanPostMutation();

  const handleSave = async ({
    selectedItems,
    reset,
  }: {
    selectedItems: {
      [key: string]: NewCustomSnowstormSimpleResponseDto[];
    };
    reset: () => void;
  }) => {
    const nursingOutcomes = selectedItems?.[planNames.nursingOutcomes];
    const nursingDiagnosis = selectedItems?.[planNames.nursingDiagnosis];
    const nursingIntervention = selectedItems?.[planNames.nursingIntervention];
    const activies = selectedItems?.[planNames.activities];
    const evaluation = selectedItems?.[planNames.evaluation];
    try {
      await createNursePlan({
        createNurseCarePlanRequest: {
          patientId,
          encounterId,
          activitiesId: activies.map(el => Number(el.id)),
          activitiesText: activies.map(el => `${el.name}`),
          diagnosisId: Number(nursingDiagnosis[0].id),
          diagnosisText: nursingDiagnosis[0].name,
          interventionsId: nursingIntervention.map(el => Number(el.id)),
          interventionsText: nursingIntervention.map(el => `${el.name}`),
          evaluationId: Number(evaluation[0].id),
          evaluationText: evaluation[0].name,
          outcomesId: nursingOutcomes.map(el => Number(el.id)),
          outcomesText: nursingOutcomes.map(el => `${el.name}`),
        },
      }).unwrap();
      reset();
      showToast('SUCCESS', {
        title: 'Success!',
        message: 'Patient nursing care plan have been added to our records',
      });
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Patient nursing care plan failed to be added to our records',
      });
    }
  };

  return {handleSave, isLoading, isSuccess};
};

export default useCreateNursingCarePlan;
