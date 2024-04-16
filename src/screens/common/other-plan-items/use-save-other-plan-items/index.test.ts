import {renderHookWithProviders} from 'test-utils';
import {useSaveOtherPlanItems} from '.';
import {act} from 'react-test-renderer';

describe('useSaveOtherPlanItems', () => {
  it('should save other plan item summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveOtherPlanItems({
        patientId: 1,
        encounterId: 1,
      }),
    );

    await act(async () => {
      await result.current.handleSave({
        selectedItems: [{id: '1', name: 'Test1'}],
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
