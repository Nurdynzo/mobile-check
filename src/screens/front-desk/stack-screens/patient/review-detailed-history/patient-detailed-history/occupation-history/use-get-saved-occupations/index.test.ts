import {waitFor} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useGetSavedOccupations} from '.';

describe('useGetSavedOccupations', () => {
  it('should get saved patient occupations', async () => {
    const {result} = renderHookWithProviders(() =>
      useGetSavedOccupations({patientId: 123}),
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });

  it('should validate occupationsData length response', async () => {
    const {result} = renderHookWithProviders(() =>
      useGetSavedOccupations({patientId: 123}),
    );

    await waitFor(() => {
      expect(result.current.occupationsData.length).toBe(1);
    });
  });
});
