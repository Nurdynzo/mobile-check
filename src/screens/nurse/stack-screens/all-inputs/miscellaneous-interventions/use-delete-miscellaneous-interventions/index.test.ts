import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useDeleteMiscelleneousInterventions} from '.';

describe('useDeleteMiscelleneousInterventions', () => {
  it('should delete selected miscelleneous interventions summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useDeleteMiscelleneousInterventions({patientFullName: 'Zucci Daniel'}),
    );

    await act(async () => {
      await result.current.handleDeleteMiscellaneousInterventions(1);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
