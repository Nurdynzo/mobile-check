import {AllInputsSuggestionForm} from '@/components/forms';
import {useAppSelector} from '@/state/hooks';
import {selectTempState} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React, {useState} from 'react';
import {SocratesQuestionText, SocratesSuggestionToggleButton} from '../common';
import {useGetSocratesSuggestion} from '../use-get-socrates-suggestion';
import {useExacerbatingHandlers} from '../use-socrates-handlers';
import * as Contants from '@/constants/index';

const ExacerbatingView = () => {
  const [type, setType] = useState<
    (typeof Contants.exacerbatingSuggestionToggleOptions)[number]
  >(Contants.exacerbatingSuggestionToggleOptions[0]);

  const {exacerbating, mainSearchResult} = useAppSelector(selectTempState);

  const {
    isPredictiveTextSearchLoading,
    predictiveTextSearchData,
    suggestedSymptom,
  } = useGetSocratesSuggestion({
    inputType: 'Exacerbating',
    predictiveText: exacerbating.symptomSearch,
  });

  const handlers = useExacerbatingHandlers({type: type.value});
  return (
    <>
      <SocratesQuestionText text={'Does anything make it better or worse?'} />
      <AllInputsSuggestionForm
        expandSheetHeaderTitle={`Select suggestion(s) for ${mainSearchResult?.name}`}
        isloadingTextValueSuggestion={isPredictiveTextSearchLoading}
        textValueSuggestions={predictiveTextSearchData}
        toggleButton={
          <SocratesSuggestionToggleButton
            items={Contants.exacerbatingSuggestionToggleOptions}
            activeItem={type}
            setActiveItem={item => setType(item)}
          />
        }
        formProps={handlers}
        suggestions={(suggestedSymptom ?? []).map(el => ({
          ...el,
          isInActive: type.value === 'Relieving',
        }))}
      />
    </>
  );
};

export default ExacerbatingView;
