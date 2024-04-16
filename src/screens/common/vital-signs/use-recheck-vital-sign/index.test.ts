import {renderHookWithProviders} from 'test-utils';
import {act} from 'react-test-renderer';
import useRecheckVitalSign from '.';

describe('useRecheckVitalSign', () => {
  it('should recheck vital sign summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useRecheckVitalSign({encounterId: 12, patientId: 12}),
    );

    await act(async () => {
      await result.current.handleRecheck({
        values: {
          vitalSignId: 1,
          measurementSite: {id: 2, value: 'Arm'},
          measurementRange: {id: 3, value: 'Normal'},
          vitalReading: '110',
          position: 'LEFT',
          vitalSignName: 'BloodPressure',
        },
        reset: () => null,
        deleteMostRecentRecord: true,
        id: 900,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
