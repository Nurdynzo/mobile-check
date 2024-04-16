import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useCreateOccupation} from '.';

describe('useCreateOccupation', () => {
  it('should create patient occupation', async () => {
    const {result} = renderHookWithProviders(() =>
      useCreateOccupation({patientId: 123}),
    );

    await act(async () => {
      await result.current.handleCreate({
        values: {
          startDate: new Date(),
          isCurrent: true,
          notes: 'i love plateaumed',
          occupation: {id: 1, value: 'Doctor'},
          location: 'Lekki, Lagos',
        },
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
