import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useSaveDiagnosis} from '.';

describe('useSaveDiagnosis', () => {
  it('should save diagnosis', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveDiagnosis({patientId: 123, encounterId: 1}),
    );

    await act(async () => {
      await result.current.handleSave({
        diagnosisDifferentialStates: [],
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
