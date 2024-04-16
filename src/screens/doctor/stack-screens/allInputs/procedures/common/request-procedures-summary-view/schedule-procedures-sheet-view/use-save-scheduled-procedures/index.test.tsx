import {renderHookWithProviders} from 'test-utils';
import {act} from '@testing-library/react-native';
import useSaveScheduledProcedures from '.';

describe('useSaveScheduledProcedures', () => {
  it('should save scheduled procedures', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveScheduledProcedures({
        procedureList: {
          selectedProcedures: [{procedureName: 'Bed Making', snowmedId: 1}],
        },
      }),
    );
    await act(async () => {
      await result.current.handleSave({
        isSameSession: true,
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
