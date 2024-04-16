import {useAppSelector} from '@/state/hooks';
import {
  useApiServicesAppSnowstormGetbodypartsbytermGetQuery,
  useApiServicesAppSnowstormGetsymptomsuggestionGetQuery,
} from '@/state/services/snowstorm';
import {selectTempState} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';

export const useGetSocratesSuggestion = ({
  predictiveText,
  inputType,
}: {
  predictiveText: string;
  inputType:
    | 'Associations'
    | 'Character'
    | 'Site'
    | 'Radiation'
    | 'Exacerbating';
}) => {
  const {mainSearchResult} = useAppSelector(selectTempState);

  const {
    currentData: predictiveTextSearchData,
    isLoading: isPredictiveTextSearchLoading,
    isSuccess: isPredictiveTextSearchSuccess,
  } = useApiServicesAppSnowstormGetbodypartsbytermGetQuery(
    {
      searchTerm: predictiveText,
    },
    {
      skip:
        !mainSearchResult.name ||
        !mainSearchResult.id ||
        predictiveText.length < 2,
      refetchOnMountOrArgChange: true,
    },
  );

  const {data: suggestedSymptom, isSuccess: isSuggestedSymptomSuccess} =
    useApiServicesAppSnowstormGetsymptomsuggestionGetQuery(
      {
        inputType,
        searchTerm: mainSearchResult?.name as string,
        snowmedId: Number(mainSearchResult?.id),
      },
      {
        skip: !mainSearchResult.name || !mainSearchResult.id,
      },
    );

  return {
    predictiveTextSearchData,
    isPredictiveTextSearchLoading,
    suggestedSymptom,
    isPredictiveTextSearchSuccess,
    isSuggestedSymptomSuccess,
  };
};
