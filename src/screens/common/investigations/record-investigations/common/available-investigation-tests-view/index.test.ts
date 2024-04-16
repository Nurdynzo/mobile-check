import {useApiServicesAppInvestigationGetinvestigationsrequestsGetQuery} from '@/state/services/investigationApi';
import {EMPTY_STRING} from '@/utils/constants';
import {waitFor} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';

describe('useAvailableInvestigationTests', () => {
  it('should get all available investigations', async () => {
    const {result} = renderHookWithProviders(() =>
      useApiServicesAppInvestigationGetinvestigationsrequestsGetQuery({
        patientId: 1,
        type: EMPTY_STRING,
      }),
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
