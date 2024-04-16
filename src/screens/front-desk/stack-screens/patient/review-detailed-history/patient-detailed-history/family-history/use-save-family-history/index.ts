import {
  Relationship,
  useApiServicesAppPatientprofileSavepatientfamilyhistoryPostMutation,
} from '@/state/services/patientApi';
import {
  EditFamilyHistoryFormSchema,
  FamilyMemberDetailsFormSchema,
} from '../schema';
import {showToast} from '@/components/app-toast';
import {getErrorMessage} from '@/utils/helpers';
import {logThis} from '@/utils/helpers/logThis';
import {useGetFamilyDetails} from '../use-get-family-details';

export const useSaveFamilyHistory = ({
  patientId,
  historyId,
}: {
  patientId: number;
  historyId?: number;
}) => {
  const [updateFamilyHistory, {isLoading, isSuccess}] =
    useApiServicesAppPatientprofileSavepatientfamilyhistoryPostMutation();

  const {familyHistoryData} = useGetFamilyDetails({patientId});

  const handleCreateorEditHistory = async ({
    values,
    reset,
  }: {
    values: EditFamilyHistoryFormSchema;
    reset: () => void;
  }) => {
    try {
      await updateFamilyHistory({
        patientFamilyHistoryDto: {
          patientId,
          totalNumberOfMaleChildren: Number(values.noOfMaleChildren),
          totalNumberOfFemaleChildren: Number(values.noOfFemaleChildren),
          totalNumberOfFemaleSiblings: Number(values.noOfFemaleSiblings),
          totalNumberOfMaleSiblings: Number(values.noOfMaleSiblings),
          isFamilyHistoryKnown: values.isFamilyHistoryNotKnown,
          totalNumberOfChildren:
            Number(values.noOfMaleChildren) + Number(values.noOfFemaleChildren),
          totalNumberOfSiblings:
            Number(values.noOfMaleSiblings) + Number(values.noOfFemaleSiblings),
          ...(historyId && {id: historyId}),
          familyMembers: [],
        },
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Familly history updated successfully',
        message: 'Family history record has been updated',
      });
      reset();
    } catch (error) {
      logThis('Family history Update error===', error);
      showToast('ERROR', {
        title: 'Familly history update Error Encountered!',
        message: getErrorMessage(error),
      });
    }
  };

  const handleCreateOrEditFamilyMember = async ({
    values,
    reset,
  }: {
    values: FamilyMemberDetailsFormSchema;
    reset: () => void;
  }) => {
    try {
      await updateFamilyHistory({
        patientFamilyHistoryDto: {
          ...familyHistoryData,
          patientId,
          familyMembers: [
            ...((familyHistoryData?.familyMembers ?? [])?.filter(
              el => el.id !== values.memberId,
            ) ?? []),
            {
              ageAtDeath: Number(values.ageOfDeath),
              ageAtDiagnosis: Number(values.ageAtDiagnosis),
              causesOfDeath: values.causeOfDeath.map(el => el.name).join(', '),
              id: values.memberId,
              isAlive: values.isAlive,
              relationship: values.relationship as Relationship,
              seriousIllnesses: values.seriousIllnesses
                .map(el => el.name)
                .join(', '),
            },
          ],
        },
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Familly member updated successfully',
        message: 'Family member have been updated to our records',
      });
      reset();
    } catch (error) {
      logThis('Family history Update error===', error);
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: getErrorMessage(error),
      });
    }
  };

  return {
    isLoading,
    handleCreateorEditHistory,
    handleCreateOrEditFamilyMember,
    isSuccess,
  };
};
