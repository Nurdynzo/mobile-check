import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteOccupation} from '.';

describe('useDeleteOccupation', () => {
  it('should delete patient occupation', async () => {
    const {result} = renderHookWithProviders(() => useDeleteOccupation());

    await act(async () => {
      await result.current.handleDelete({
        id: 12,
        remove: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
