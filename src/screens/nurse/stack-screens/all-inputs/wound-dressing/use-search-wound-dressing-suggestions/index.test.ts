// TODO(Philip): Please check it out

import {renderHookWithProviders} from 'test-utils';
import {useSearchWoundDressingSuggestions} from '.';

describe('useGetPatientWoundDressing', () => {
  it('should return suggestions that include query text', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {result} = renderHookWithProviders(() =>
      useSearchWoundDressingSuggestions(),
    );
  });
});
