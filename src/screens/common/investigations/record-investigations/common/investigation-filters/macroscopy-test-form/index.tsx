import {
  AllInputsSuggestionForm,
  useAllInputsSuggestionForm,
} from '@/components/forms';
import React from 'react';
import InvestigationFormInputGroup from '../../form/form-input-group';

const MacroscopyTestForm = () => {
  const macroscopyFormHandler = useAllInputsSuggestionForm();

  return (
    <InvestigationFormInputGroup>
      <AllInputsSuggestionForm
        formProps={macroscopyFormHandler}
        suggestions={[
          {id: '1', name: 'bloody'},
          {id: '1', name: 'dark'},
          {id: '1', name: 'red'},
          {id: '1', name: 'tarry'},
          {id: '1', name: 'adult or larval worms visible'},
        ]}
        expandSheetHeaderTitle="Search predictive text"
        placeholder="Click on predictive text"
      />
    </InvestigationFormInputGroup>
  );
};

export default MacroscopyTestForm;
