import {showToast} from '@/components/app-toast';
import {addNewPatientFormSchema} from '@/components/forms/patient-form/schema';
import {useApiServicesAppUploadpatientpicturePostMutation} from '@/state/services/customApi';
import {CreateOrEditPatientDto} from '@/state/services/patientApi';
import {generateRandomText} from '@/utils/helpers';

export const useUploadPatientProfile = () => {
  const [uploadPatientProfilePicture, {isSuccess}] =
    useApiServicesAppUploadpatientpicturePostMutation();

  const handleUploadPatientProfilePicture = async ({
    data,
    response,
  }: {
    data: addNewPatientFormSchema;
    response: CreateOrEditPatientDto | null;
  }) => {
    if (data.image && response?.id) {
      try {
        await uploadPatientProfilePicture({
          body: {
            File: {
              uri: data?.image?.path,
              type: data?.image?.type,
              name: data?.image?.name ?? generateRandomText(10),
            },
            PatientId: response.id,
          },
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Patient Profile added successfully',
          message: `${response?.firstName} ${response?.lastName} profile has been added to the records`,
        });
      } catch (error) {
        // TODO(Philip): look for a way to avoid parsing image response
      }
    }
  };

  return {handleUploadPatientProfilePicture, isSuccess};
};
