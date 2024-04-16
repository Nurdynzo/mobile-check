import {renderHookWithProviders} from 'test-utils';
import useSaveRequestProcedure from '.';
import {act} from '@testing-library/react-native';

describe('useSaveRequestProcedure', () => {
  it('should save request procedure summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveRequestProcedure({
        patientId: 123,
        encounterId: 2091,
      }),
    );

    await act(async () => {
      await result.current.handleSave({
        selectedItems: [{id: '123456', name: 'Bed Making'}],
        note: 'This is procedure notes',
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
