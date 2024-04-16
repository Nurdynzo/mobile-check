import {AllInputsSuggestionForm} from '@/components/forms';
import {useAppSelector} from '@/state/hooks';
import {selectTempState} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React, {useState} from 'react';
import {SocratesQuestionText, SocratesSuggestionToggleButton} from '../common';
import {useAssociationsHandlers} from '../use-socrates-handlers';
import {useGetSocratesSuggestion} from '../use-get-socrates-suggestion';
import * as Contants from '@/constants/index';

const AssociationsView = () => {
  const [type, setType] = useState<
    (typeof Contants.presentAbsentSuggestionToggleOptions)[number]
  >(Contants.presentAbsentSuggestionToggleOptions[0]);

  const {associations, mainSearchResult} = useAppSelector(selectTempState);
  const handlers = useAssociationsHandlers({type: type.value});
  const {
    isPredictiveTextSearchLoading,
    predictiveTextSearchData,
    suggestedSymptom,
  } = useGetSocratesSuggestion({
    inputType: 'Associations',
    predictiveText: associations.bodyPartSearch,
  });

  return (
    <>
      <SocratesQuestionText
        text={`Is there anything else associated with the ${
          mainSearchResult.name || 'pain'
        }?`}
      />
      <AllInputsSuggestionForm
        expandSheetHeaderTitle={`Select suggestion(s) for ${
          mainSearchResult?.name || 'pain'
        }`}
        isloadingTextValueSuggestion={isPredictiveTextSearchLoading}
        textValueSuggestions={predictiveTextSearchData}
        toggleButton={
          <SocratesSuggestionToggleButton
            items={Contants.presentAbsentSuggestionToggleOptions}
            activeItem={type}
            setActiveItem={item => setType(item)}
          />
        }
        formProps={handlers}
        suggestions={(suggestedSymptom ?? []).map(el => ({
          ...el,
          isInActive: type.value === 'Absent',
        }))}
      />
    </>
  );
};

export default AssociationsView;
