import {
  SnowstormSimpleResponseDto,
  useApiServicesAppProcedureGetproceduresuggestionsGetQuery,
} from '@/state/services/procedureApi';

const useGetProcedureSuggestions = (): {
  procedureSuggestionData: SnowstormSimpleResponseDto[] | undefined;
  isSuccess: boolean | false;
} => {
  const {data: procedureSuggestionData = [], isSuccess} =
    useApiServicesAppProcedureGetproceduresuggestionsGetQuery();

  return {
    procedureSuggestionData,
    isSuccess,
  };
};

export default useGetProcedureSuggestions;
