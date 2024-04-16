import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteIntakeOrOutput} from '.';

describe('useDeleteIntakeOrOutput', () => {
  it('should delete intake or output summary', async () => {
    const {result} = renderHookWithProviders(() => useDeleteIntakeOrOutput());

    await act(async () => {
      await result.current.handleDeleteIntakeOrOutput(1);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
