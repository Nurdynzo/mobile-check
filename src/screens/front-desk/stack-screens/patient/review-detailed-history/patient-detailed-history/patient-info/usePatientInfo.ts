import {showToast} from '@/components/app-toast';
import {useGetOccupation} from '@/hooks/useGetOccupation';
import {useApiServicesAppCountriesGetcountryforeditGetQuery} from '@/state/services/countriesApi';
import {useApiServicesAppDistrictGetdistrictforeditGetQuery} from '@/state/services/districtApi';
import {
  BloodGenotype,
  BloodGroup,
  CreateOrEditPatientDto,
  GenderType,
  MaritalStatus,
  Religion,
  TitleType,
} from '@/state/services/patientApi';
import {useApiServicesAppRegionsGetregionforeditGetQuery} from '@/state/services/regionsApi';
import {EMPTY_STRING, NOT_AVAILABLE, TEMP_AVATAR_URL} from '@/utils/constants';
import {getErrorMessage} from '@/utils/helpers';
import {convertToReadableDate} from '@/utils/helpers/convertDateTime';
import {logThis} from '@/utils/helpers/logThis';
import {otherIdNumberFormSchema} from '@/utils/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {EditPatientInfoFormSchema, editPatientInfoFormSchema} from './schema';
import {useApiServicesAppPatientsCreateoreditPostMutation} from '@/state/services/overrides';
import {useAppDispatch} from '@/state/hooks';
import {updateSelectedPatient} from '@/state/slices/patient/selectedPatient';
export const defaultOtherIdNumberValues: otherIdNumberFormSchema = {
  type: EMPTY_STRING,
  number: EMPTY_STRING,
};
export const usePatientInfo = ({
  patientData,
  onClose = () => null,
}: {
  patientData: CreateOrEditPatientDto | undefined;
  onClose?: () => void;
}) => {
  const dispatch = useAppDispatch();
  const updateSelectedPatientSlice = (response: CreateOrEditPatientDto) => {
    dispatch(
      updateSelectedPatient({
        id: Number(response.id),
        fullName: `${response.firstName} ${response.lastName}` ?? NOT_AVAILABLE,
        code: response.patientCode ?? NOT_AVAILABLE,
        dateOfBirth: response.dateOfBirth ?? NOT_AVAILABLE,
        gender: response.genderType ?? NOT_AVAILABLE,
        pic: response.profilePictureUrl ?? TEMP_AVATAR_URL,
      }),
    );
  };

  const patientCurrentOccupation = patientData?.patientOccupations?.find(
    el => el.isCurrent,
  );

  const defaultValues = {
    firstName: patientData?.firstName,
    lastName: patientData?.lastName,
    middleName: patientData?.middleName ?? EMPTY_STRING,
    address: patientData?.address ?? EMPTY_STRING,
    bloodGroup: patientData?.bloodGroup ?? EMPTY_STRING,
    email: patientData?.emailAddress || EMPTY_STRING,
    ...(patientData?.dateOfBirth && {
      dob: new Date(patientData?.dateOfBirth),
    }),
    ethnicity: patientData?.ethnicity ?? EMPTY_STRING,
    genotype: patientData?.bloodGenotype ?? EMPTY_STRING,
    maritalStatus: patientData?.maritalStatus ?? EMPTY_STRING,
    officeLocation: patientCurrentOccupation?.location ?? '',
    phoneNumber: patientData?.phoneNumber,
    gender: patientData?.genderType,
    religion: patientData?.religion ?? EMPTY_STRING,
    title: patientData?.title ?? EMPTY_STRING,
    otherIdNumber: [defaultOtherIdNumberValues],
  };

  const {control, setValue, handleSubmit, reset} =
    useForm<EditPatientInfoFormSchema>({
      defaultValues,
      resolver: zodResolver(editPatientInfoFormSchema),
      mode: 'onSubmit',
      reValidateMode: 'onChange',
    });

  const {data: country} = useApiServicesAppCountriesGetcountryforeditGetQuery({
    id: patientData?.countryId as number,
  });

  const {data: stateOfOrigin} =
    useApiServicesAppRegionsGetregionforeditGetQuery({
      id: patientData?.stateOfOriginId as number,
    });

  const {data: lga} = useApiServicesAppDistrictGetdistrictforeditGetQuery({
    id: patientData?.districtId as number,
  });

  const {getOccupation} = useGetOccupation();

  const occupation = getOccupation(patientCurrentOccupation?.occupationId);

  const [updatePatientInfo, {isLoading}] =
    useApiServicesAppPatientsCreateoreditPostMutation();
  useEffect(() => {
    if (country?.country?.id) {
      setValue('nationality', {
        id: country?.country?.id,
        value: country?.country?.name,
        data: country?.country?.code,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country?.country?.id]);

  useEffect(() => {
    if (stateOfOrigin?.region?.id) {
      setValue('state', {
        id: stateOfOrigin?.region?.id,
        value: stateOfOrigin?.region?.name,
        data: stateOfOrigin?.region?.id,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateOfOrigin?.region?.id]);

  useEffect(() => {
    if (lga?.district?.id) {
      setValue('lga', {
        id: lga.district?.id,
        value: lga.district?.name,
        data: lga.district?.regionId,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lga?.district?.id]);

  useEffect(() => {
    if (patientCurrentOccupation?.occupationId && occupation) {
      setValue('occupation', {
        id: patientCurrentOccupation.occupationId,
        value: occupation?.name ?? '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientCurrentOccupation?.occupationId, occupation]);

  const submit = async (values: EditPatientInfoFormSchema) => {
    try {
      const response = await updatePatientInfo({
        createOrEditPatientDto: {
          id: patientData?.id as number,
          patientCode: patientData?.patientCode as string,
          firstName: values?.firstName,
          lastName: values?.lastName,
          phoneNumber: values?.phoneNumber,
          dateOfBirth: convertToReadableDate(values.dob),
          genderType: values?.gender as GenderType,
          address: values?.address,
          ...(values.email && {emailAddress: values?.email}),
          ...(values.ethnicity && {ethnicity: values?.ethnicity}),
          ...(values.genotype && {
            bloodGenotype: values.genotype as BloodGenotype,
          }),
          ...(values.bloodGroup && {
            bloodGroup: values.bloodGroup as BloodGroup,
          }),
          ...(values.maritalStatus && {
            maritalStatus: values.maritalStatus as MaritalStatus,
          }),
          ...(values.middleName && {middleName: values.middleName}),
          ...(values?.nationality?.id && {
            countryId: Number(values.nationality?.id),
          }),
          ...(values?.lga?.id && {districtId: Number(values.lga?.id)}),
          ...(values.state?.id && {
            stateOfOriginId: Number(values.state?.id),
          }),
          ...(values.religion && {religion: values.religion as Religion}),
          ...(values.title && {title: values.title as TitleType}),
          ...(values.occupation?.id &&
            values.officeLocation && {
              patientOccupations: [
                ...(patientData?.patientOccupations || []).filter(
                  el => el.id !== Number(values.occupation?.id),
                ),
                {
                  location: values.officeLocation,
                  occupationId: Number(values?.occupation?.id),
                  isCurrent: true,
                },
              ],
            }),
        },
      }).unwrap();
      if (response) {
        showToast('SUCCESS', {
          title: 'Patient info updated successfully',
          message: `${response?.firstName} ${response?.lastName} information record has been updated`,
        });
        reset();
        updateSelectedPatientSlice(response);
        onClose();
      }
    } catch (error) {
      logThis('Patient Update error===', error);
      showToast('ERROR', {
        title: 'Patient info Update Error Encountered!',
        message: getErrorMessage(error),
      });
    }
  };

  return {_handleSubmit: handleSubmit(submit), isLoading, control};
};
