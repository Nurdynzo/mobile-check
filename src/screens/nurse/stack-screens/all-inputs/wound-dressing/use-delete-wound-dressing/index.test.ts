import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteWoundDressing} from '.';

describe('useDeleteWoundDressing', () => {
  it('should delete selected wound dressing summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useDeleteWoundDressing({patientFullName: 'Zucci Daniel'}),
    );

    await act(async () => {
      await result.current.handleDeleteWoundDressing(1);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
