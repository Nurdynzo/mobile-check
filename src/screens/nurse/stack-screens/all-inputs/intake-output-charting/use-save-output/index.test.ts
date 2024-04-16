import {renderHookWithProviders} from 'test-utils';
import {useSaveOutput} from '.';
import {act} from 'react-test-renderer';

describe('useSaveOutput', () => {
  it('should save output summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveOutput({
        patientId: 1,
        encounterId: 1,
      }),
    );

    await act(async () => {
      await result.current.handleSave({
        data: {
          suggestedText: 'Urine',
          volumnInMls: '2',
        },
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
