import {renderHookWithProviders} from 'test-utils';
import {act} from 'react-test-renderer';
import useCreateNursingCarePlan from '.';

describe('useCreateNursingCarePlan', () => {
  it('should create nursing care plan', async () => {
    const {result} = renderHookWithProviders(() =>
      useCreateNursingCarePlan({
        encounterId: 12,
        patientId: 22,
      }),
    );

    await act(async () => {
      await result.current.handleSave({
        selectedItems: {
          nursingOutcomes: [{id: '123', name: 'Name'}],
          nursingDiagnosis: [{id: '123', name: 'Name'}],
          nursingIntervention: [{id: '123', name: 'Name'}],
          activities: [{id: '123', name: 'Name'}],
          evaluation: [{id: '123', name: 'Name'}],
        },
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
