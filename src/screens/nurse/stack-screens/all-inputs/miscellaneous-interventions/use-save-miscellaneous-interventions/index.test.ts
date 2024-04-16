import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useSaveMiscellaneousInterventions} from '.';
import {EMPTY_STRING} from '@/utils/constants';

describe('useSaveMiscellaneousInterventions', () => {
  it('should save miscellaneous interventions', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveMiscellaneousInterventions(),
    );

    await act(async () => {
      await result.current.handleSaveMiscellaneousInterventions(
        {
          encounterId: 0,
          eventId: 1,
          interventionIds: [],
          interventionTexts: [],
          patientId: 434,
          eventText: EMPTY_STRING,
        },
        () => null,
      );
    });

    expect(result.current.saveMiscellaneousInterventionsSuccess).toBe(true);
  });
});
