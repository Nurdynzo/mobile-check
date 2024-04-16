import {renderHookWithProviders} from 'test-utils';
import useReassignPatient from '.';
import {act, waitFor} from '@testing-library/react-native';

describe('useReassignPatient', () => {
  it('should successfully reassign patient', async () => {
    const {result} = renderHookWithProviders(() =>
      useReassignPatient({encounterId: 0}),
    );

    await act(async () => {
      await result.current.handleReassignment({reset: () => {}});
    });

    expect(result.current.isReassigned).toBe(true);
  });

  it('should filter search result correctly given staff name includes search text', async () => {
    const {result} = renderHookWithProviders(() =>
      useReassignPatient({encounterId: 0}),
    );

    act(() => {
      result.current.setSearchText('Sam');
    });

    await waitFor(() => expect(result.current.searchResults.length).toBe(1));

    act(() => {
      result.current.setSearchText('David');
    });

    await waitFor(() => expect(result.current.searchResults.length).toBe(1));
  });
});
