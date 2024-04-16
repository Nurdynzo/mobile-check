import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteFamilyMember} from '.';

describe('useDeleteFamilyMember', () => {
  it('should delete patient family member', async () => {
    const {result} = renderHookWithProviders(() => useDeleteFamilyMember());

    await act(async () => {
      await result.current.handleDelete(2);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
