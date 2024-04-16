import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import useCreateMedication from '.';

describe('useCreateMedication', () => {
  it('should create medication', async () => {
    const {result} = renderHookWithProviders(() =>
      useCreateMedication({encounterId: 12, patientId: 123}),
    );

    await act(async () => {
      await result.current.handleSave({
        selectedMedications: [
          {
            product: [
              {
                id: '1',
                name: 'Cipro tab',
                data: {
                  id: 1,
                  brandName: 'EverGreen',
                  activeIngredient: 'orange',
                  categoryName: 'Tab',
                  doseForm: 'Lekki',
                  source: 'Green',
                },
              },
            ],
            doseUnit: 'mg',
            doseValue: '500',
            frequencyUnit: 'times a day',
            frequencyValue: '2',
            durationUnit: 'days',
            durationValue: '7',
            direction: 'Take with food',
            note: 'No alcohol consumption',
          },
        ],
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
