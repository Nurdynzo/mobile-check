import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteInputNote} from '.';

describe('useDeleteInputNote', () => {
  it('should delete selected input note summary', async () => {
    const {result} = renderHookWithProviders(() => useDeleteInputNote());

    await act(async () => {
      await result.current.handleDeleteNote(1);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
