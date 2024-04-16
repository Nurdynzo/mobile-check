import {showToast} from '@/components/app-toast';
import {useApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationMutation} from '@/state/services/customApi';
import {imageFileSchema} from '@/utils/schema';
import {PhysicalExaminationSuggestionType} from '../suggestion-view/types';
import {CreatePatientPhysicalExamSuggestionAnswerDto} from '@/state/services/physicalExaminationsApi';

const useCreatePhysicalExamination = ({
  patientId,
  encounterId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [CreatePhysicalExamination, {isLoading, isSuccess}] =
    useApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationMutation();

  const handleSaveSuggestions = async ({
    allTabSelectedItems,
    physicalExaminationTypeId,
    otherNote,
    images,
    reset = () => null,
  }: {
    physicalExaminationTypeId: number;
    allTabSelectedItems: {
      [key: string]: PhysicalExaminationSuggestionType[];
    };
    otherNote: string;
    images: imageFileSchema[];
    reset: () => void;
  }) => {
    try {
      const suggestions =
        convertAllTabSelectedItemsToSuggestion(allTabSelectedItems);

      await CreatePhysicalExamination({
        body: {
          PhysicalExaminationEntryType: 'Suggestion',
          PhysicalExaminationTypeId: physicalExaminationTypeId,
          PatientId: patientId,
          EncounterId: encounterId,
          Suggestions: suggestions,
          OtherNote: otherNote,
          ImageFiles: images.map(el => ({
            name: el?.name as string,
            type: el?.type as string,
            uri: el?.path as string,
          })),
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Success',
        message:
          'Patient physical examination sugesstions have been added to our records',
      });
      reset();
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message:
          'Patient physical examination sugesstions failed to be added to our records',
      });
      return null;
    }
  };
  const handleSaveTypeNote = async ({
    physicalExaminationTypeId,
    notes,
    reset,
  }: {
    physicalExaminationTypeId: number;
    notes: {
      [key: string]: string;
    };
    reset: () => void;
  }) => {
    try {
      const response = await CreatePhysicalExamination({
        body: {
          PhysicalExaminationEntryType: 'TypeNote',
          PhysicalExaminationTypeId: physicalExaminationTypeId,
          PatientId: patientId,
          EncounterId: encounterId,
          TypeNotes: Object.keys(notes).map(key => ({
            type: key,
            note: notes[key],
          })),
        },
      }).unwrap();
      showToast('SUCCESS', {
        title: 'Success',
        message:
          'Patient physical examination note have been added to our records',
      });
      reset();
      return response;
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message:
          'Patient physical examination note failed to be added to our records',
      });
      return null;
    }
  };

  return {handleSaveSuggestions, handleSaveTypeNote, isLoading, isSuccess};
};

export default useCreatePhysicalExamination;

const convertAllTabSelectedItemsToSuggestion = (allTabSelectedItems: {
  [key: string]: PhysicalExaminationSuggestionType[];
}): {
  headerName: string;
  patientPhysicalExamSuggestionAnswers: CreatePatientPhysicalExamSuggestionAnswerDto[];
}[] =>
  Object.keys(allTabSelectedItems).map(key => {
    const values = allTabSelectedItems[key];
    return {
      headerName: key,
      patientPhysicalExamSuggestionAnswers: values.map(
        el =>
          ({
            description: el.name,
            snowmedId: el.data?.snomedId,
            isAbsent: el.isInActive,
            ...(el.plane && {
              planes: el.plane.map(elP => ({
                qualifierId: elP.id,
                name: elP.name,
              })),
            }),
            ...(el.qualifier && {
              qualifiers: el.qualifier.map(elQ => ({
                qualifierId: elQ.id,
                name: elQ.name,
              })),
            }),
            ...(el.site && {
              sites: el.site.map(elS => ({
                qualifierId: elS.id,
                name: elS.name,
              })),
            }),
          } as CreatePatientPhysicalExamSuggestionAnswerDto),
      ),
    };
  });
