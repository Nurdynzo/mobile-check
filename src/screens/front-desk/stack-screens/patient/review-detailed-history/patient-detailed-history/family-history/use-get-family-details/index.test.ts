import {waitFor} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useGetFamilyDetails} from '.';

describe('useGetFamilyDetails', () => {
  it('should get saved patient family history', async () => {
    const {result} = renderHookWithProviders(() =>
      useGetFamilyDetails({patientId: 1}),
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });

  it('should validate saved patient family history data response', async () => {
    const {result} = renderHookWithProviders(() =>
      useGetFamilyDetails({patientId: 1}),
    );

    await waitFor(() => {
      expect(result.current.familyHistoryData?.id).toEqual(123);
    });

    expect(result.current.familyHistoryData?.patientId).toEqual(1);
  });
});
