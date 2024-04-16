import {onPatientSubmit} from '@/components/forms/patient-form/types';
import {FrontDeskNavigationProps} from '@/navigation/front-desk/root-navigation/type';
import {routesNames} from '@/navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  useCreateEditPatient,
  useUploadPatientProfile,
  useUploadPatientReferralLetter,
} from '../../common';

export const useAddNewPatient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation =
    useNavigation<FrontDeskNavigationProps<'FD_ADD_NEW_APPOINTMENT'>>();
  const {handleCreatePatient} = useCreateEditPatient();
  const {handleUploadPatientProfilePicture} = useUploadPatientProfile();
  const {handleUploadReferralLetter} = useUploadPatientReferralLetter();

  const _handleSubmit = async (props: onPatientSubmit) => {
    setIsLoading(true);
    const {data, reset, type} = props;
    const response = await handleCreatePatient(data);
    await handleUploadPatientProfilePicture({data, response});
    await handleUploadReferralLetter({data, response});
    if (response) {
      if (type === 'create_appointment' && response?.id) {
        navigation.replace(routesNames.FRONT_DESK.FD_ADD_NEW_APPOINTMENT, {
          patientId: response.id,
        });
      } else if (type === 'save_and_close') {
        navigation.goBack();
      }
      reset();
    }
    setIsLoading(false);
  };

  return {_handleSubmit, isLoading};
};
