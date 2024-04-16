import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteBedMaking} from '.';

describe('useDeleteBedMaking', () => {
  it('should delete selected bed making summary', async () => {
    const {result} = renderHookWithProviders(() => useDeleteBedMaking());

    await act(async () => {
      await result.current.handleDeleteBedMaking(1);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
