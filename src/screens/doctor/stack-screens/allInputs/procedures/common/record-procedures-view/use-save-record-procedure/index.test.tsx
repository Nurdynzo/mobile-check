import {renderHookWithProviders} from 'test-utils';
import useSaveRecordProcedure from '.';
import {act} from '@testing-library/react-native';

describe('useSaveRecordProcedure', () => {
  it('should save record procedure summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveRecordProcedure({
        patientId: 123,
        encounterId: 2091,
      }),
    );

    await act(async () => {
      await result.current.handleSave({
        selectedItems: [{id: '123456', name: 'Bed Making'}],
        note: 'This is procedure notes',
        reset: () => null,
        parentProcedureId: 0,
        snowmedId: 123456,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
