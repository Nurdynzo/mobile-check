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
  AppointmentListResponse,
  AppointmentRepeatType,
  AppointmentStatusType,
  AppointmentType,
  CreateOrEditPatientAppointmentDto,
} from '@/state/services/patientApi';
import {
  generateRandomText,
  getChangedProperties,
  getErrorMessage,
} from '@/utils/helpers';
import {
  convertToReadableDate,
  convertToReadableTime,
} from '@/utils/helpers/convertDateTime';
import {logThis} from '@/utils/helpers/logThis';
import * as Constants from '@/constants/index';
import {EMPTY_STRING} from '@/utils/constants';

const parsedPayload = (data: CreateAppointmentSchema) => ({
  startTime: convertToReadableDate(
    data.appointmentDateTime,
    'YYYY-MM-DD HH:mm:ss',
  ),
  status: 'Not arrived' as AppointmentStatusType,
  isRepeat: data.repeatType?.data !== 'Do not repeat',
  title: data.appointmentType.value,
  repeatType: data.repeatType?.data as AppointmentRepeatType,
  type: data.appointmentType.data as AppointmentType,
  attendingClinicId: Number(data.clinic.id),
});

export const useEditAppointment = ({
  appointmentData,
}: {
  appointmentData: AppointmentListResponse;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    appointmentDateTime: new Date(
      appointmentData.startTime ?? EMPTY_STRING,
    ) as Date,
    repeatType: Constants.repeatTypeOptions.find(
      el => el.item.data === appointmentData.repeatType,
    )?.item,
    appointmentType: Constants.consultAppointmentTypeOptions.find(
      el => el.item.data === appointmentData.type,
    )?.item ??
      (Constants.appointmentTypeOptions[0]?.itemOptions ?? [])?.find(
        el => el.item.data === appointmentData.type,
      )?.item ??
      Constants.appointmentTypeOptions.find(
        el => el.item.data === appointmentData.type,
      )?.item ?? {id: EMPTY_STRING, value: EMPTY_STRING, data: EMPTY_STRING},
    referringHospital:
      appointmentData.referralDocument?.referringHealthCareProvider ??
      EMPTY_STRING,
    diagonsis:
      appointmentData.referralDocument?.diagnosisSummary ?? EMPTY_STRING,
    ...(appointmentData.referralDocument?.referralDocument && {
      referralLetterImage: {
        path:
          appointmentData.referralDocument?.referralDocument || EMPTY_STRING,
        type: 'image/jpeg',
        name: generateRandomText(10),
      },
    }),
    clinic: {
      id: appointmentData.attendingClinic?.id ?? EMPTY_STRING,
      value: appointmentData.attendingClinic?.displayName ?? EMPTY_STRING,
    },
  } as CreateAppointmentSchema;

  const navigation =
    useNavigation<FrontDeskNavigationProps<'FD_ADD_NEW_APPOINTMENT'>>();

  const [editAppointment] =
    useApiServicesAppAppointmentCreateoreditPostMutation();

  const [uploadReferralLetter] =
    useApiServicesAppUploadreferralletterfilePostMutation();

  const handleCreateAppointment = async (data: CreateAppointmentSchema) => {
    const changedValues = getChangedProperties(
      parsedPayload(defaultValues),
      parsedPayload(data),
    );

    if (changedValues) {
      try {
        const response = await editAppointment({
          createOrEditPatientAppointmentDto: {
            id: appointmentData.id,
            patientId: Number(data.patient.id),
            ...changedValues,
          },
        }).unwrap();
        showToast('SUCCESS', {
          title: 'Patient appointment updated successfully',
          message: `${data.patient.fullname} appointment has been updated to the records`,
        });
        return response;
      } catch (error) {
        logThis('Edit Appointment error===', error);
        showToast('ERROR', {
          title: 'Create Appointment Error Encountered!',
          message: getErrorMessage(error),
        });
        return null;
      }
    } else {
      return null;
    }
  };

  const handleUploadReferralLetter = async ({
    data,
    FileId,
  }: {
    data: CreateAppointmentSchema;
    response: CreateOrEditPatientAppointmentDto | null;
    FileId?: string;
  }) => {
    if (
      data.referringHospital &&
      data.diagonsis &&
      data.referralLetterImage?.path
    ) {
      try {
        await uploadReferralLetter({
          body: {
            AppointmentId: Number(appointmentData.id),
            PatientId: Number(data.patient.id),
            File: {
              uri: data?.referralLetterImage?.path,
              type: data?.referralLetterImage?.type,
              name: data?.referralLetterImage?.name ?? generateRandomText(10),
            },
            FileId,
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
    const isFileChanged =
      defaultValues?.referralLetterImage?.path !==
      data?.referralLetterImage?.path;
    if (
      data.appointmentType?.value === 'Referral' &&
      (isFileChanged ||
        defaultValues?.referringHospital !== data?.referringHospital ||
        defaultValues?.diagonsis !== data?.diagonsis)
    ) {
      await handleUploadReferralLetter({
        data,
        response,
        FileId: !isFileChanged ? data.referralLetterImage?.path : undefined,
      });
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
    defaultValues,
  };
};
