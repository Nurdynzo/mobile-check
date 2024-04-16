import {act} from '@testing-library/react-native';
import useRequestInvestigations from '.';
import {renderHookWithProviders} from 'test-utils';

describe('useRequestInvestigations', () => {
  it('should handle investigation request successfully', async () => {
    const {result} = renderHookWithProviders(() =>
      useRequestInvestigations({
        activeCategory: 'Chemistry',
        searchText: 'test',
      }),
    );

    await act(async () => {
      await result.current.handleRequestInvestigation({
        investigationNotes: 'test note',
        localSelectedInvestigations: [
          {
            type: 'Chemistry',
            urgent: true,
            background: 'neutral200',
            id: '1',
            isInActive: false,
            name: 'test',
            withContrast: false,
          },
        ],
        encounterId: 1,
        successCallback: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
