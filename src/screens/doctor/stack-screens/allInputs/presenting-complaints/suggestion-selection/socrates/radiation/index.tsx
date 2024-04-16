import {AllInputsSuggestionForm} from '@/components/forms';
import {useAppSelector} from '@/state/hooks';
import {selectTempState} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React, {useState} from 'react';
import {SocratesQuestionText, SocratesSuggestionToggleButton} from '../common';
import {useGetSocratesSuggestion} from '../use-get-socrates-suggestion';
import {useRadiationHandlers} from '../use-socrates-handlers';
import * as Contants from '@/constants/index';

const RadiationView = () => {
  const [type, setType] = useState<
    (typeof Contants.presentAbsentSuggestionToggleOptions)[number]
  >(Contants.presentAbsentSuggestionToggleOptions[0]);

  const {radiation, mainSearchResult} = useAppSelector(selectTempState);

  const {
    isPredictiveTextSearchLoading,
    predictiveTextSearchData,
    suggestedSymptom,
  } = useGetSocratesSuggestion({
    inputType: 'Radiation',
    predictiveText: radiation.bodyPartSearch,
  });

  const handlers = useRadiationHandlers({type: type.value});

  return (
    <>
      <SocratesQuestionText text={'Does it radiate/move anywhere?'} />
      <AllInputsSuggestionForm
        expandSheetHeaderTitle={`Select suggestion(s) for ${mainSearchResult?.name}`}
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

export default RadiationView;
