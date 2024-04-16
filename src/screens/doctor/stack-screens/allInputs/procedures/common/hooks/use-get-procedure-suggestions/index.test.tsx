import {renderHookWithProviders} from 'test-utils';
import useGetProcedureSuggestions from '.';
import {waitFor} from '@testing-library/react-native';

describe('useGetProcedureSuggestions', () => {
  it('should get procedure suggestions', async () => {
    const {result} = renderHookWithProviders(() =>
      useGetProcedureSuggestions(),
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
