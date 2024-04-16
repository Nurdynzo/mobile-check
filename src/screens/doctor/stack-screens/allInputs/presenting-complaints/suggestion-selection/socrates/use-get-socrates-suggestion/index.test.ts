import {renderHookWithProviders} from 'test-utils';
import {useGetSocratesSuggestion} from '.';
import {act, waitFor} from '@testing-library/react-native';
import {setTempStateMainSearchResult} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';

describe('useGetSocratesSuggestion', () => {
  it('should get predictiveTextSearchData and suggestedSymptom', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useGetSocratesSuggestion({inputType: 'Site', predictiveText: 'Left ear'}),
    );

    act(() => {
      store.dispatch(
        setTempStateMainSearchResult({id: '123', name: 'Headache'}),
      );
    });

    await waitFor(() => {
      expect(result.current.isPredictiveTextSearchSuccess).toBe(true);
    });
    await waitFor(() => {
      expect(result.current.isSuggestedSymptomSuccess).toBe(true);
    });
  });

  it('should validate predictiveTextSearchData and suggestedSymptom length response', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useGetSocratesSuggestion({inputType: 'Site', predictiveText: 'Left ear'}),
    );

    act(() => {
      store.dispatch(
        setTempStateMainSearchResult({id: '123', name: 'Headache'}),
      );
    });

    await waitFor(() => {
      expect(result.current.predictiveTextSearchData?.length).toBe(2);
    });
    await waitFor(() => {
      expect(result.current.suggestedSymptom?.length).toBe(2);
    });
  });
});
