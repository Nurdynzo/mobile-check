import {AllInputsSuggestionForm} from '@/components/forms';
import {useAppSelector} from '@/state/hooks';
import {selectTempState} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React from 'react';
import {SocratesQuestionText} from '../common';
import {useGetSocratesSuggestion} from '../use-get-socrates-suggestion';
import {useSiteHandlers} from '../use-socrates-handlers';

const SiteView = () => {
  const {site, mainSearchResult} = useAppSelector(selectTempState);

  const {
    isPredictiveTextSearchLoading,
    predictiveTextSearchData,
    suggestedSymptom,
  } = useGetSocratesSuggestion({
    inputType: 'Site',
    predictiveText: site.bodyPartSearch,
  });

  const handlers = useSiteHandlers();

  return (
    <>
      <SocratesQuestionText
        text={`Where exactly is the ${mainSearchResult?.name || 'pain'}?`}
      />
      <AllInputsSuggestionForm
        expandSheetHeaderTitle={`Select suggestion(s) for ${
          mainSearchResult?.name || 'pain'
        }`}
        isloadingTextValueSuggestion={isPredictiveTextSearchLoading}
        textValueSuggestions={predictiveTextSearchData}
        formProps={handlers}
        suggestions={suggestedSymptom ?? []}
      />
    </>
  );
};

export default SiteView;
