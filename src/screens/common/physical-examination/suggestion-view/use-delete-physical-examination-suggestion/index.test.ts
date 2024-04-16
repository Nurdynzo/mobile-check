import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import useDeletePhysicalExaminationSuggestion from '.';

describe('useDeletePhysicalExaminationSuggestion', () => {
  it('should delete patient physical examination suggestion', async () => {
    const {result} = renderHookWithProviders(() =>
      useDeletePhysicalExaminationSuggestion(),
    );

    await act(async () => {
      await result.current.handleDeleteSuggestion(1, () => null);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
