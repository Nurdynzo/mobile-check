import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import useDeleteVitalSigns from '.';

describe('useDeleteVitalSigns', () => {
  it('should delete selected patient vital sign', async () => {
    const {result} = renderHookWithProviders(() => useDeleteVitalSigns());

    await act(async () => {
      await result.current.handleDeleteVitalSigns({
        patientVitalIds: [1],
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
