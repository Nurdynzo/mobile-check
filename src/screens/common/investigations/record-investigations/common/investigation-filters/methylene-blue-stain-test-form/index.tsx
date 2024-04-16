import {
  AllInputsSuggestionForm,
  useAllInputsSuggestionForm,
} from '@/components/forms';
import React from 'react';
import InvestigationFormInputGroup from '../../form/form-input-group';

const MethyleneBlueStainTestForm = () => {
  const appearanceFormHandler = useAllInputsSuggestionForm();

  return (
    <InvestigationFormInputGroup>
      <AllInputsSuggestionForm
        formProps={appearanceFormHandler}
        suggestions={[
          {id: '1', name: 'Yeast cells'},
          {id: '1', name: 'Cocci'},
          {id: '1', name: 'Reticulocytes'},
        ]}
        expandSheetHeaderTitle="Search predictive text"
        placeholder="Click on predictive text"
      />
    </InvestigationFormInputGroup>
  );
};

export default MethyleneBlueStainTestForm;
