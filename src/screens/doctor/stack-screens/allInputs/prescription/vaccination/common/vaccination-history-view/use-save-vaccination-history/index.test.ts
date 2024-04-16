import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useSaveVaccinationHistory} from '.';

describe('useSaveVaccinationHistory', () => {
  it('should save a patient vaccination history', async () => {
    const {result} = renderHookWithProviders(() => useSaveVaccinationHistory());

    await act(async () => {
      await result.current.handleCreateVaccinationHistory({
        cleanup: () => null,
        historyDoseForm: {
          hasComplication: true,
          howLong: 'weeks',
          interval: '3',
          note: 'test notes',
          title: 'cholera',
        },
        id: 0,
        patientId: 1999,
        encounterId: 111,
      });
    });

    expect(result.current.savedVaccination).toBe(true);
  });
});
