import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {showToast} from '@/components/app-toast';
import {CreateAppointmentSchema} from '@/components/forms/appointment-form/schema';
import {
  CreateAppointmentSubmitTypeProp,
  onAppointmentSubmit,
} from '@/components/forms/appointment-form/types';
import {FrontDeskNavigationProps} from '@/navigation/front-desk/root-navigation/type';
import {routesNames} from '@/navigation/routes';
import {useApiServicesAppAppointmentCreateoreditPostMutation} from '@/state/services/appointmentApi';
import {useApiServicesAppUploadreferralletterfilePostMutation} from '@/state/services/customApi';
import {
  AppointmentRepeatType,
  AppointmentStatusType,
  AppointmentType,
  CreateOrEditPatientAppointmentDto,
} from '@/state/services/patientApi';
import {generateRandomText, getErrorMessage} from '@/utils/helpers';
import {
  convertToReadableDate,
  convertToReadableTime,
} from '@/utils/helpers/convertDateTime';
import {logThis} from '@/utils/helpers/logThis';
import {DOES_NOT_REPEAT} from '@/utils/constants';

export const useAddNewAppointment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigation =
    useNavigation<FrontDeskNavigationProps<'FD_ADD_NEW_APPOINTMENT'>>();

  const [createAppointment] =
    useApiServicesAppAppointmentCreateoreditPostMutation();

  const [uploadReferralLetter] =
    useApiServicesAppUploadreferralletterfilePostMutation();

  const handleCreateAppointment = async (data: CreateAppointmentSchema) => {
    try {
      const isRepeat = data.repeatType?.data !== DOES_NOT_REPEAT;

      const response = await createAppointment({
        createOrEditPatientAppointmentDto: {
          id: null,
          notes: null,
          patientReferralId: null,
          attendingPhysicianId: null,
          referringClinicId: null,
          startTime: convertToReadableDate(
            data.appointmentDateTime,
            'YYYY-MM-DD HH:mm:ss',
          ),
          patientId: Number(data.patient.id),
          status: 'Not arrived' as AppointmentStatusType,
          isRepeat,
          title: data.appointmentType.value,
          repeatType: isRepeat
            ? (data.repeatType?.data as AppointmentRepeatType)
            : undefined,
          type: data.appointmentType.data as AppointmentType,
          attendingClinicId: Number(data.clinic.id),
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Patient appointment added successfully',
        message: `${data.patient.fullname} appointment has been added to the records`,
      });
      return response;
    } catch (error) {
      logThis('Create Appointment error===', error);
      showToast('ERROR', {
        title: 'Create Appointment Error Encountered!',
        message: getErrorMessage(error),
      });
      return null;
    }
  };

  const handleUploadReferralLetter = async ({
    data,
    response,
  }: {
    data: CreateAppointmentSchema;
    response: CreateOrEditPatientAppointmentDto | null;
  }) => {
    if (
      response &&
      data.referringHospital &&
      data.diagonsis &&
      data.referralLetterImage?.path
    ) {
      try {
        await uploadReferralLetter({
          body: {
            AppointmentId: response.id as number,
            PatientId: response.patientId as number,
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
          title: 'Patient appointment Refferal added successfully',
          message: `${data.patient.fullname} appointment refferal has been added to the records`,
        });
      } catch (error) {
        logThis('Patient Appointment Referral error===', error);
        showToast('ERROR', {
          title: 'Appointment Referral Error Encountered!',
          message: getErrorMessage(error),
        });
      }
    }
  };

  const handleNavigation = ({
    data,
    response,
    type,
  }: {
    data: CreateAppointmentSchema;
    response: CreateOrEditPatientAppointmentDto | null;
    type: CreateAppointmentSubmitTypeProp;
  }) => {
    if (
      type === 'create_invoice' &&
      response?.id &&
      response?.title &&
      data.patient.id &&
      response?.type
    ) {
      navigation.replace(routesNames.FRONT_DESK.FD_CREATE_INVOICE, {
        appointment: {
          id: response?.id,
          title: response?.title,
          type: response?.type,
          time: convertToReadableTime(data?.appointmentDateTime),
        },
        patientId: Number(data.patient.id),
      });
    } else {
      navigation.goBack();
    }
  };

  const _handleSubmit = async (props: onAppointmentSubmit) => {
    setIsLoading(true);
    const {data, reset, type} = props;
    const response = await handleCreateAppointment(data);
    if (data.appointmentType?.value === 'Referral') {
      await handleUploadReferralLetter({data, response});
    }

    if (response) {
      handleNavigation({data, response, type});
      reset();
    }

    setIsLoading(false);
  };

  return {
    _handleSubmit,
    isLoading,
  };
};
