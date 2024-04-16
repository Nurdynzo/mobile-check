import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useUpdateOccupation} from '.';

describe('useUpdateOccupation', () => {
  it('should update patient occupation', async () => {
    const {result} = renderHookWithProviders(() =>
      useUpdateOccupation({patientId: 123}),
    );

    await act(async () => {
      await result.current.handleUpdate({
        values: {
          startDate: new Date(),
          isCurrent: true,
          notes: 'i love plateaumed',
          occupation: {id: 1, value: 'Doctor'},
          location: 'Lekki, Lagos',
          occupationId: 12,
        },

        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
