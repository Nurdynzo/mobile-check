import {showToast} from '@/components/app-toast';
import {addNewPatientFormSchema} from '@/components/forms/patient-form/schema';
import {useApiServicesAppUploadreferralletterfilePostMutation} from '@/state/services/customApi';
import {CreateOrEditPatientDto} from '@/state/services/patientApi';
import {generateRandomText, getErrorMessage} from '@/utils/helpers';
import {logThis} from '@/utils/helpers/logThis';

export const useUploadPatientReferralLetter = () => {
  const [uploadReferralLetter, {isSuccess}] =
    useApiServicesAppUploadreferralletterfilePostMutation();

  const handleUploadReferralLetter = async ({
    data,
    response,
  }: {
    data: addNewPatientFormSchema;
    response: CreateOrEditPatientDto | null;
  }) => {
    if (
      response?.id &&
      data.referralLetterImage &&
      data.referringHospital &&
      data.diagonsis
    ) {
      try {
        await uploadReferralLetter({
          body: {
            PatientId: response.id,
            File: {
              uri: data?.referralLetterImage?.path,
              type: data?.referralLetterImage?.type,
              name: data?.referralLetterImage?.name ?? generateRandomText(10),
            },
            DiagnosisSummary: data.diagonsis,
            ReferringHealthCareProvider: data.referringHospital,
          },
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Patient Refferal added successfully',
          message: `${response?.firstName} ${response?.lastName} refferal has added to the records`,
        });
      } catch (error) {
        logThis('Patient Referral error===', error);
        showToast('ERROR', {
          title: 'Patient Referral Error Encountered!',
          message: getErrorMessage(error),
        });
      }
    }
  };

  return {handleUploadReferralLetter, isSuccess};
};
