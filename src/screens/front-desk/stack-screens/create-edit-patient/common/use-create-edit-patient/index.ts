import {showToast} from '@/components/app-toast';
import {
  addNewPatientFormSchema,
  patientRelativeFormSchema,
} from '@/components/forms/patient-form/schema';
import {useApiServicesAppPatientsCreateoreditPostMutation} from '@/state/services/overrides';
import {
  BloodGenotype,
  BloodGroup,
  CreateOrEditPatientRelationDto,
  GenderType,
  MaritalStatus,
  Relationship,
  Religion,
  TitleType,
} from '@/state/services/patientApi';
import {EMPTY_STRING} from '@/utils/constants';
import {getErrorMessage} from '@/utils/helpers';
import {convertToReadableDate} from '@/utils/helpers/convertDateTime';
import {logThis} from '@/utils/helpers/logThis';

export const useCreateEditPatient = () => {
  const [createPatient, {isSuccess}] =
    useApiServicesAppPatientsCreateoreditPostMutation();

  const handleCreatePatient = async (
    data: addNewPatientFormSchema,
    patientId?: number,
  ) => {
    const type = !patientId ? 'add' : 'edit';
    try {
      const patientGuardians = parsePatientRelativesFormData({
        data: data.guardianForm,
        isGuardian: true,
      });
      const patientNextOfKins = parsePatientRelativesFormData({
        data: data.nextOfKinForm,
        isGuardian: false,
      });
      const response = await createPatient({
        createOrEditPatientDto: {
          ...(patientId && {id: patientId}),
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          genderType: data.gender as GenderType,
          phoneNumber: data.phoneNumber,
          patientCode: data.patientId,
          dateOfBirth: convertToReadableDate(data.dob),
          ...(data.email && {emailAddress: data.email}),
          ...(data.address && {address: data.address}),
          ...(data.bloodGroup && {
            bloodGroup: data.bloodGroup as BloodGroup,
          }),
          ...(data.nationality?.id && {
            countryId: Number(data.nationality?.id),
          }),
          ...(data.genotype && {
            bloodGenotype: data.genotype as BloodGenotype,
          }),
          ...(data.lga?.id && {districtId: Number(data.lga?.id)}),
          ...(data.ethnicity && {ethnicity: data.ethnicity}),
          ...(data?.noOfChildren && {
            numberOfChildren: Number(data.noOfChildren),
          }),
          ...(data.noOfSpouse && {
            numberOfSpouses: Number(data.noOfSpouse),
          }),
          ...(data.nuclearFamilySize && {
            nuclearFamilySize: Number(data.nuclearFamilySize),
          }),
          ...(data.maritalStatus && {
            maritalStatus: data.maritalStatus as MaritalStatus,
          }),
          ...(data.isNew && {isNewToHospital: data.isNew}),
          ...(data.religion && {religion: data.religion as Religion}),
          ...(data.title && {title: data.title as TitleType}),
          ...(data.state?.id && {stateOfOriginId: Number(data.state?.id)}),
          ...(data.positionInFamily && {
            positionInFamily: data.positionInFamily,
          }),
          ...(data.noOfSiblings && {
            numberOfSiblings: Number(data.noOfSiblings),
          }),
          ...(data.ethnicity && {ethnicity: data.ethnicity}),
          ...((patientGuardians || patientNextOfKins) && {
            relations: [...patientGuardians, ...patientNextOfKins],
          }),
          ...(data.officeLocation &&
            data.occupation?.id && {
              patientOccupations: [
                {
                  location: data.officeLocation,
                  occupationId: Number(data.occupation?.id),
                  isCurrent: true,
                },
              ],
            }),
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: `Patient ${type}ed successfully`,
        message: `${response?.firstName} ${response?.lastName} has been ${type}ed to the records`,
      });
      return response;
    } catch (error) {
      logThis(`Patient ${type} error===`, error);
      showToast('ERROR', {
        title: `Patient ${type} Error Encountered!`,
        message: getErrorMessage(error),
      });
      return null;
    }
  };

  return {handleCreatePatient, isSuccess};
};

const parsePatientRelativesFormData = ({
  data = [],
  isGuardian,
}: {
  data: patientRelativeFormSchema[];
  isGuardian: boolean;
}): CreateOrEditPatientRelationDto[] => {
  const allRelations = data.map(item => {
    if (
      item.firstName &&
      item.lastName &&
      item.phoneNumber &&
      item.relationship
    ) {
      return {
        ...(item.id && {id: item.id}),
        isGuardian,
        firstName: item.firstName,
        lastName: item.lastName,
        phoneNumber: item.phoneNumber || EMPTY_STRING,
        relationship: item.relationship as Relationship,
        ...(item.address && {address: item.address}),
        ...(item.email && {email: item.email}),
        ...(item.middleName && {middleName: item.middleName}),
        ...(item.title && {title: item.title as TitleType}),
      };
    } else {
      return null;
    }
  }) as (CreateOrEditPatientRelationDto | null)[];

  return allRelations.filter(
    el => el !== null,
  ) as CreateOrEditPatientRelationDto[];
};
