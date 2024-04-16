import {useAllInputsSuggestionForm} from '@/components/forms';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {useState} from 'react';
import {SpecimenInvestigationTestFormType} from '../../../type';

const defaultSpecimenInvestigationTestForm: SpecimenInvestigationTestFormType =
  {
    dateOfSampleCollection: null,
    timeOfSampleCollection: null,
    dateOfResult: null,
    timeOfResult: null,
    specimens: {},
    conclusions: {},
    images: [],
  };
const useSpecimenInvestigationTestForm = () => {
  const [specimenInvestigationTestForm, setSpecimenInvestigationTestForm] =
    useState<SpecimenInvestigationTestFormType>(
      defaultSpecimenInvestigationTestForm,
    );

  const resetSpecimenInvestigationTestForm = () => {
    setSpecimenInvestigationTestForm(defaultSpecimenInvestigationTestForm);
  };

  function isSampleAndResultFieldsFilled(): boolean {
    const {
      dateOfSampleCollection,
      timeOfSampleCollection,
      dateOfResult,
      timeOfResult,
    } = specimenInvestigationTestForm;
    return ![
      dateOfSampleCollection,
      timeOfSampleCollection,
      dateOfResult,
      timeOfResult,
    ].includes(null);
  }

  const handleUpdateForm = <K extends keyof SpecimenInvestigationTestFormType>(
    field: K,
    value: number | string | SnowstormSimpleResponseDto | Date | [],
  ) => {
    if (field === 'images') {
      setSpecimenInvestigationTestForm({
        ...specimenInvestigationTestForm,
        images: [...specimenInvestigationTestForm.images, value as string],
      });
    } else {
      setSpecimenInvestigationTestForm({
        ...specimenInvestigationTestForm,
        [field]: value,
      });
    }
  };

  const specimenFormHandler = useAllInputsSuggestionForm();
  const {
    selectedItems: selectedSpecimen,
    text: specimenText,
    reset: resetSpecimen,
  } = specimenFormHandler;

  const conclusionFormHandler = useAllInputsSuggestionForm();
  const {
    selectedItems: selectedConclusion,
    text: conclusionText,
    reset: resetConclusions,
  } = conclusionFormHandler;

  return {
    handleUpdateForm,
    specimenInvestigationTestForm,
    setSpecimenInvestigationTestForm,
    selectedSpecimen,
    specimenText,
    specimenFormHandler,
    conclusionFormHandler,
    selectedConclusion,
    conclusionText,
    isSampleAndResultFieldsFilled,
    resetSpecimenInvestigationTestForm,
    resetSpecimen,
    resetConclusions,
  };
};

export default useSpecimenInvestigationTestForm;
