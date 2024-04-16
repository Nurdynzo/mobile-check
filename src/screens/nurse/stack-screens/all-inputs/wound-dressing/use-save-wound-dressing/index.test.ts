import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useSaveWoundDressing} from '.';

describe('useSaveWoundDressing', () => {
  it('should create wound dressing', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveWoundDressing({
        encounterId: 4343,
        patientId: 43434,
      }),
    );

    await act(async () => {
      await result.current.handleSaveWoundDressing([{id: '1', name: 'test'}]);
    });

    expect(result.current.woundDressingSuccess).toBe(true);
  });
});
