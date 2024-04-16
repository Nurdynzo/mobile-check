import {renderHookWithProviders} from 'test-utils';
import {useSaveBedMaking} from '.';
import {act} from 'react-test-renderer';

describe('useSaveBedMaking', () => {
  it('should save bed making summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveBedMaking({
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
