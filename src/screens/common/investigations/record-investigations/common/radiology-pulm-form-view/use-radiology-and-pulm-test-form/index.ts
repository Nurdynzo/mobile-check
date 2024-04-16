import {useNewAllInputsSuggestionForm} from '@/components/forms';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {useState} from 'react';
import {RadiologyAndPulmFormType} from '../type';

const defaultTestForm: RadiologyAndPulmFormType = {
  dateOfResult: null,
  timeOfResult: null,
  conclusions: {},
  images: [],
};
const useRadiologyAndPulmTestForm = () => {
  const [regularTestForm, setRegularTestForm] =
    useState<RadiologyAndPulmFormType>(defaultTestForm);

  const resetRegularTestForm = () => {
    setRegularTestForm(defaultTestForm);
  };

  function isSampleAndResultFieldsFilled(): boolean {
    const {dateOfResult, timeOfResult, images} = regularTestForm;
    return ![dateOfResult, timeOfResult].includes(null) && images.length !== 0;
  }

  const handleUpdateForm = <K extends keyof RadiologyAndPulmFormType>(
    field: K,
    value: number | string | SnowstormSimpleResponseDto | Date | [],
  ) => {
    if (field === 'images') {
      setRegularTestForm({
        ...regularTestForm,
        images: [...regularTestForm.images, value as string],
      });
    } else {
      setRegularTestForm({...regularTestForm, [field]: value});
    }
  };

  const conclusionFormHandler = useNewAllInputsSuggestionForm();
  const {
    selectedItems: selectedConclusion,
    text: conclusionText,
    reset: resetConclusions,
  } = conclusionFormHandler;

  return {
    handleUpdateForm,
    regularTestForm,
    setRegularTestForm,
    conclusionFormHandler,
    selectedConclusion,
    conclusionText,
    isSampleAndResultFieldsFilled,
    resetRegularTestForm,
    resetConclusions,
  };
};

export default useRadiologyAndPulmTestForm;
