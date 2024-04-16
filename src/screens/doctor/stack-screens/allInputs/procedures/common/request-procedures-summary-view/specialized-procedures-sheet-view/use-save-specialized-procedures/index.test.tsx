import {renderHookWithProviders} from 'test-utils';
import {act} from '@testing-library/react-native';
import useSaveSpecializedProcedures from '.';

describe('useSaveSpecializedProcedures', () => {
  it('should mark procedure as specialized', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveSpecializedProcedures({
        procedureList: {
          selectedProcedures: [{procedureName: 'Bed Making', snowmedId: 1}],
        },
      }),
    );
    await act(async () => {
      await result.current.handleSave({
        isSameSession: true,
        reset: () => null,
        requireAnaesthetist: true,
        anaesthetistUserId: 0,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
