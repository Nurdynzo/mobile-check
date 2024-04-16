import {renderHookWithProviders} from 'test-utils';
import useGetClinics from '.';
import {act, waitFor} from '@testing-library/react-native';
import {ItemOptionProp} from '@/types/selectItemsheet';

describe('useGetClinics', () => {
  it('should get all clinics', async () => {
    const {result} = renderHookWithProviders(() => useGetClinics());

    await waitFor(() => {
      const clinics = result.current.getClinics();
      expect(clinics.length).toBe(5);
    });
  });

  it('should get clinics that contain searchQuery text', async () => {
    const {result} = renderHookWithProviders(() => useGetClinics());

    const searchQuery = 'Neu';

    await act(() => {
      result.current.setQueryForClinics(searchQuery);
    });

    let clinics: ItemOptionProp<string>[] = [];

    await waitFor(() => {
      clinics = result.current.getClinics();
      expect(clinics.length).toBe(1);
    });

    expect(clinics[0].item.value.includes(searchQuery)).toBe(true);
  });

  it('should set selectedClinic with appropriate string given setSelectedClinic is called', async () => {
    const {result} = renderHookWithProviders(() => useGetClinics());

    const newValue = 'Neurology';

    await act(() => {
      result.current.setSelectedClinic(newValue);
    });

    expect(result.current.selectedClinic).toEqual(newValue);
  });
});
