import {renderHookWithProviders} from 'test-utils';
import {act} from 'react-test-renderer';
import useCreateVitalSigns from '.';

describe('useCreateVitalSigns', () => {
  it('should save vital sign summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useCreateVitalSigns({encounterId: 12, patientId: 123}),
    );

    await act(async () => {
      await result.current.handleSave({
        values: {
          vitalSigns: [
            {
              vitalSignId: 1,
              measurementSite: {id: 2, value: 'Arm'},
              measurementRange: {id: 3, value: 'Normal'},
              vitalReading: '110',
              position: 'LEFT',
              vitalSignName: 'BloodPressure',
            },
            {
              vitalSignId: 2,
              measurementSite: {id: 4, value: 'Wrist'},
              measurementRange: {id: 5, value: 'Elevated'},
              vitalReading: '75',
              position: 'RIGHT',
              vitalSignName: 'HeartRate',
            },
          ],
        },
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
