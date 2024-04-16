import {renderHookWithProviders} from 'test-utils';
import useGetRequestedProcedureHistory from '.';
import {waitFor} from '@testing-library/react-native';

describe('useGetRequestedProcedureHistory', () => {
  it('should get requested procedure history', async () => {
    const {result} = renderHookWithProviders(() =>
      useGetRequestedProcedureHistory({
        patientId: 1,
      }),
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
