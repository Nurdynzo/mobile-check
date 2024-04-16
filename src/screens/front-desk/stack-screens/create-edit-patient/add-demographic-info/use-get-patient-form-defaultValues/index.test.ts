import {renderHookWithProviders} from 'test-utils';
import {waitFor} from '@testing-library/react-native';
import {useGetPatientFormDefaultValues} from '.';

describe('useGetPatientFormDefaultValues', () => {
  it('should get patient details for edit', async () => {
    const {result} = renderHookWithProviders(() =>
      useGetPatientFormDefaultValues({patientId: 123}),
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
