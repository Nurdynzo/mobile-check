import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useSaveRecordedVaccination} from '.';

describe('useSaveRecordedVaccination', () => {
  it('should save recorded patient vaccination', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveRecordedVaccination({encounterId: 1}),
    );

    await act(async () => {
      await result.current.handleSaveRecordedVaccination({
        vaccinations: [
          {
            dueDate: '2024-01-16T13:41:28.969Z',
            patientId: 0,
            vaccineId: 0,
            vaccineScheduleId: 0,
            isAdministered: true,
            dateAdministered: '2024-01-16T13:41:28.969Z',
            hasComplication: true,
            vaccineBrand: 'string',
            vaccineBatchNo: 'string',
            note: 'string',
          },
        ],
        cleanup: () => null,
      });
    });

    expect(result.current.createVaccineSuccess).toBe(true);
  });
});
