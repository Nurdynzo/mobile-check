import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import useDeleteMedication from '.';

describe('useDeleteMedication', () => {
  it('should delete selected medication', async () => {
    const {result} = renderHookWithProviders(() => useDeleteMedication());

    await act(async () => {
      await result.current.handleDeleteMedication(1);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
