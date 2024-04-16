import {AllInputsSuggestionForm} from '@/components/forms';
import {useAppSelector} from '@/state/hooks';
import {selectTempState} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React, {useState} from 'react';
import {SocratesQuestionText, SocratesSuggestionToggleButton} from '../common';
import {useGetSocratesSuggestion} from '../use-get-socrates-suggestion';
import {useCharacterHandlers} from '../use-socrates-handlers';
import * as Contants from '@/constants/index';

const CharacterView = () => {
  const [type, setType] = useState<
    (typeof Contants.presentAbsentSuggestionToggleOptions)[number]
  >(Contants.presentAbsentSuggestionToggleOptions[0]);

  const {character, mainSearchResult} = useAppSelector(selectTempState);
  const handlers = useCharacterHandlers({type: type.value});
  const {
    isPredictiveTextSearchLoading,
    predictiveTextSearchData,
    suggestedSymptom,
  } = useGetSocratesSuggestion({
    inputType: 'Character',
    predictiveText: character.characteristicSearch,
  });

  return (
    <>
      <SocratesQuestionText
        text={`On movement, what is the ${
          mainSearchResult?.name || 'pain'
        } like?`}
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

export default CharacterView;
