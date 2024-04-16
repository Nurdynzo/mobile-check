import {useApiServicesAppMedicationCreatemedicationPostMutation} from '@/state/services/medicationApi';
import {
  MedicationDto,
  PrescribeMedicationSuggestionType,
} from '@/types/medication';
import {showToast} from '@/components/app-toast';

const useCreateMedication = ({
  encounterId,
  patientId,
}: {
  encounterId: number;
  patientId: number;
}) => {
  const [CreateMedications, {isLoading, isSuccess}] =
    useApiServicesAppMedicationCreatemedicationPostMutation();

  const handleSave = async ({
    selectedMedications,
    reset,
  }: {
    selectedMedications: (MedicationDto & {
      product: PrescribeMedicationSuggestionType[];
    })[];
    reset: () => void;
  }) => {
    try {
      await CreateMedications({
        createMultipleMedicationsDto: {
          prescriptions: formatSelectedMedicationsToPrescriptions(
            selectedMedications,
            patientId,
          ),
          encounterId,
        },
      }).unwrap();
      reset();
      showToast('SUCCESS', {
        title: 'Success',
        message: 'Patient medication has been added to our record successfully',
      });
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Failed to add patient medication to our records',
      });
    }
  };

  return {handleSave, isLoading, isSuccess};
};

export default useCreateMedication;

const formatSelectedMedicationsToPrescriptions = (
  selectedMedications: (MedicationDto & {
    product: PrescribeMedicationSuggestionType[];
  })[],
  patientId: number,
) =>
  selectedMedications.map(el => {
    const {product, doseValue, durationValue, frequencyValue, ...rest} = el;
    const selectedProduct = product[0];
    return {
      patientId,
      productId: Number(selectedProduct.id),
      productName: selectedProduct.name,
      productSource: selectedProduct?.data?.source,
      doseValue: Number(doseValue),
      frequencyValue: Number(frequencyValue),
      durationValue: Number(durationValue),
      ...rest,
    };
  });
