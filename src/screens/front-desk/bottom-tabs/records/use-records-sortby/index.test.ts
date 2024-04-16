import {renderHookWithProviders} from 'test-utils';
import useRecordsSortBy from '.';
import {act, waitFor} from '@testing-library/react-native';
import {EMPTY_STRING} from '@/utils/constants';

describe('useRecordsSortby', () => {
  it('should have default label as Sort by and value as an empty string', async () => {
    const {result} = renderHookWithProviders(() => useRecordsSortBy());

    await waitFor(() => {
      expect(result.current.selectedSort.label).toBe('Sort by');
      expect(result.current.selectedSort.value).toBe(EMPTY_STRING);
    });
  });

  it('should set sortby with selected value', async () => {
    const {result} = renderHookWithProviders(() => useRecordsSortBy());

    const label = 'Patient Name: Z-A';
    const value = 'fullName desc';

    await act(() => {
      result.current.handleSelectedSort({
        label,
        value,
      });
    });

    await waitFor(() => {
      expect(result.current.selectedSort.label).toBe(label);
      expect(result.current.selectedSort.value).toBe(value);
    });
  });

  it('should reset sortby with default label as Sort by and value as empty string', async () => {
    const {result} = renderHookWithProviders(() => useRecordsSortBy());

    const label = 'Patient Name: Z-A';
    const value = 'fullName desc';

    await act(() => {
      result.current.handleSelectedSort({
        label,
        value,
      });
    });

    await act(() => {
      result.current.resetSort();
    });

    await waitFor(() => {
      expect(result.current.selectedSort.label).toBe('Sort by');
      expect(result.current.selectedSort.value).toBe(EMPTY_STRING);
    });
  });
});
