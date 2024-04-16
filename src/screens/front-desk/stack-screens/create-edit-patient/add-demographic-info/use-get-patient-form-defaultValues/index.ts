import {
  defaultInsuranceProviderValues,
  defaultPatientRelativeValues,
} from '@/components/forms/patient-form/defaultValues';
import {addNewPatientFormSchema} from '@/components/forms/patient-form/schema';
import {useGetOccupation} from '@/hooks/useGetOccupation';
import {useApiServicesAppCountriesGetcountryforeditGetQuery} from '@/state/services/countryApi';
import {useApiServicesAppDistrictGetdistrictforeditGetQuery} from '@/state/services/districtApi';
import {
  CreateOrEditPatientRelationDto,
  useApiServicesAppPatientsGetpatientforeditGetQuery,
} from '@/state/services/patientApi';
import {useApiServicesAppRegionsGetregionforeditGetQuery} from '@/state/services/regionsApi';
import {EMPTY_STRING} from '@/utils/constants';

export const useGetPatientFormDefaultValues = ({
  patientId,
}: {
  patientId: number;
}) => {
  const {
    data,
    isLoading: isPatientLoading,
    isSuccess,
  } = useApiServicesAppPatientsGetpatientforeditGetQuery({
    id: patientId,
  });

  const {data: country, isLoading: isCountryLoading} =
    useApiServicesAppCountriesGetcountryforeditGetQuery({
      id: data?.countryId as number,
    });

  const {data: stateOfOrigin, isLoading: isStateLoading} =
    useApiServicesAppRegionsGetregionforeditGetQuery({
      id: data?.stateOfOriginId as number,
    });

  const {data: lga, isLoading: isLgaLoading} =
    useApiServicesAppDistrictGetdistrictforeditGetQuery({
      id: data?.districtId as number,
    });

  const {getOccupation, isLoading: isOccupationLoading} = useGetOccupation();

  const patientOccupation = data?.patientOccupations?.find(el => el.isCurrent);
  const patientCurrentOccupation = getOccupation(
    patientOccupation?.occupationId,
  );

  const defaultValues = {
    ...(data?.dateOfBirth && {dob: new Date(data.dateOfBirth)}),
    ...(data?.emailAddress && {email: data.emailAddress}),
    ...(data?.firstName && {firstName: data.firstName}),
    ...(data?.lastName && {lastName: data.lastName}),
    ...(data?.genderType && {gender: data.genderType}),
    ...(data?.middleName && {middleName: data.middleName}),
    ...(data?.patientCode && {patientId: data.patientCode}),
    ...(data?.phoneNumber && {phoneNumber: data.phoneNumber}),
    ...(data?.maritalStatus && {maritalStatus: data.maritalStatus}),
    ...(data?.address && {address: data.address}),
    ...(data?.bloodGenotype && {genotype: data.bloodGenotype}), // This seems like a potential error, genotype should probably not be set to genderType
    ...(data?.ethnicity && {ethnicity: data.ethnicity}),
    ...(data?.title && {title: data.title}),
    ...(data?.numberOfChildren && {
      noOfChildren: data.numberOfChildren.toString(),
    }),
    ...(data?.numberOfSiblings && {
      noOfSiblings: data.numberOfSiblings.toString(),
    }),
    ...(data?.bloodGroup && {bloodGroup: data.bloodGroup}),
    ...(data?.religion && {religion: data.religion}),
    ...(data?.positionInFamily && {positionInFamily: data.positionInFamily}),
    ...(data?.numberOfSpouses && {noOfSpouse: data.numberOfSpouses.toString()}),
    ...(typeof data?.isNewToHospital === 'boolean' && {
      isNew: data.isNewToHospital,
    }),
    ...(data?.nuclearFamilySize && {
      nuclearFamilySize: data.nuclearFamilySize.toString(),
    }),
    nextOfKinForm: mapRelationsToForm({
      relations: data?.relations ?? [],
      isGuardian: false,
    }),
    guardianForm: mapRelationsToForm({
      relations: data?.relations ?? [],
      isGuardian: true,
    }),
    insuranceForm: [defaultInsuranceProviderValues],
    ...(country && {
      nationality: {
        id: country?.country?.id ?? EMPTY_STRING,
        value: country?.country?.name ?? EMPTY_STRING,
        data: country?.country?.code ?? EMPTY_STRING,
      },
    }),
    ...(stateOfOrigin && {
      state: {
        id: stateOfOrigin?.region?.id ?? EMPTY_STRING,
        value: stateOfOrigin?.region?.name ?? EMPTY_STRING,
        data: stateOfOrigin?.region?.id ?? EMPTY_STRING,
      },
    }),
    ...(lga && {
      lga: {
        id: lga?.district?.id ?? EMPTY_STRING,
        value: lga?.district?.name ?? EMPTY_STRING,
        data: lga?.district?.regionId ?? EMPTY_STRING,
      },
    }),
    ...(patientCurrentOccupation && {
      occupation: {
        id: patientCurrentOccupation?.id ?? EMPTY_STRING,
        value: patientCurrentOccupation?.name ?? EMPTY_STRING,
      },
    }),
    officeLocation: patientOccupation?.location ?? EMPTY_STRING,
    otherIdNumber: [
      {
        number: data?.identificationCode ?? EMPTY_STRING,
        type: data?.identificationType ?? EMPTY_STRING,
      },
    ],
    ...(data?.profilePictureUrl && {
      image: {
        path: data?.profilePictureUrl ?? EMPTY_STRING,
        type: EMPTY_STRING,
        name: EMPTY_STRING,
      },
    }),
    // TODO(Franklyn): When an endpoint to get this details i will update it
    diagonsis: EMPTY_STRING,
    referralLetterImage: undefined,
    referringHospital: EMPTY_STRING,
  } as addNewPatientFormSchema;

  return {
    isSuccess,
    defaultValues,
    isLoading:
      isPatientLoading ||
      isCountryLoading ||
      isStateLoading ||
      isLgaLoading ||
      isOccupationLoading,
  };
};

const mapRelationsToForm = ({
  relations,
  isGuardian,
}: {
  relations: CreateOrEditPatientRelationDto[];
  isGuardian: boolean;
}) => {
  const relatives = relations?.filter(el => el.isGuardian === isGuardian);
  return relatives.length
    ? relatives?.map(item => ({
        ...(item.id && {id: item.id}),
        email: item?.email ?? EMPTY_STRING,
        firstName: item?.firstName ?? EMPTY_STRING,
        lastName: item?.lastName ?? EMPTY_STRING,
        middleName: item?.middleName ?? EMPTY_STRING,
        address: item?.address ?? EMPTY_STRING,
        phoneNumber: item?.phoneNumber ?? EMPTY_STRING,
        title: item?.title ?? EMPTY_STRING,
        relationship: item?.relationship ?? EMPTY_STRING,
        otherIdNumber: [
          {
            number: item?.identificationCode ?? EMPTY_STRING,
            type: item?.identificationType ?? EMPTY_STRING,
          },
        ],
      }))
    : [defaultPatientRelativeValues];
};
