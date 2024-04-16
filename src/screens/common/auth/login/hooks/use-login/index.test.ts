import {renderHookWithProviders} from 'test-utils';
import {act, waitFor} from '@testing-library/react-native';
import {AuthStatus} from '@/state/slices/auth/type';
import useLogin from '.';

// TODO(Philip): figure out a way to successfully mock a useLazyQuery hook.

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('useLogin', () => {
  it('given appropriate login details should login', async () => {
    const {result, store} = renderHookWithProviders(() => useLogin());

    expect(store.getState().auth.status).toBe(AuthStatus.none);

    await act(async () => {
      await result.current.handleAuthentication({
        emailAddress: 'admin@crest.com',
        password: 'password',
        tenant: 'Liveth Medical Group',
        uniqueBusinessCode: 'liveth',
      });
    });

    await waitFor(() => {
      expect(store.getState().auth.status).toBe(AuthStatus.loggedIn);
    });
  });
});
