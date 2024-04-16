import {renderHookWithProviders} from 'test-utils';
import useDeleteProcedureHistory from '.';
import {act} from '@testing-library/react-native';

describe('useDeleteProcedureHistory', () => {
  it('should delete a request or recorded procedure history', async () => {
    const {result} = renderHookWithProviders(() => useDeleteProcedureHistory());

    await act(async () => {
      await result.current.handleDeletion({
        id: 1,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
