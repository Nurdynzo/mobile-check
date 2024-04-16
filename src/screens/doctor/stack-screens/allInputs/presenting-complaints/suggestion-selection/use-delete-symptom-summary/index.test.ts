import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteSymptomSummary} from '.';

describe('useDeleteSymptomSummary', () => {
  it('should delete selected symptom summary', async () => {
    const {result} = renderHookWithProviders(() => useDeleteSymptomSummary());

    await act(async () => {
      await result.current.handleDeleteSymptomSummary(1);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
