import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteOtherPlanItems} from '.';

describe('useDeleteOtherPlanItems', () => {
  it('should delete selected input note summary', async () => {
    const {result} = renderHookWithProviders(() => useDeleteOtherPlanItems());

    await act(async () => {
      await result.current.handleDeleteOtherPlanItems(1);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
