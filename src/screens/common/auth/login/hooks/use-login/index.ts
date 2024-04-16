import {showToast} from '@/components/app-toast';
import {useRedirect} from '@/hooks/useRedirect';
import {
  AuthenticateResultModel,
  useApiTokenauthAuthenticatePostMutation,
} from '@/state/services/tokenAuthApi';
import {
  RolesTypes,
  UserClaimTypes,
  UserInformationType,
} from '@/state/slices/auth/type';
import AuthPayload from '@/types/authPayload';
import {prepareUserInfo} from '@/utils/auth/auth';
import {getErrorMessage} from '@/utils/helpers';
import {localStorage, localStorageKeys} from '@/utils/localStorage';
import {
  TenantLoginInfoDto,
  UserLoginInfoDto,
  useLazyApiServicesAppSessionGetcurrentlogininformationsGetQuery,
} from '@/state/services/sessionApi';
import {useState} from 'react';
import {LoginSchema} from '../../type';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [loginRequest] = useApiTokenauthAuthenticatePostMutation();

  const {fetchUserData} = useGetLoggedInUserDetail();

  const handleAuthentication = async (data: LoginSchema) => {
    setIsLoading(true);

    try {
      const authData = await loginRequest({
        authenticateModel: {
          userNameOrEmailAddress: data.emailAddress,
          password: data.password,
          tenancyName: data.uniqueBusinessCode,
        },
      }).unwrap();

      if (authData && authData.accessToken) {
        persistAccessToken(authData);

        await fetchUserData(authData.accessToken);
      } else {
        throw Error('Sign-in failed');
      }
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: getErrorMessage(error),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {handleAuthentication, isLoading};
};

export default useLogin;

const useGetLoggedInUserDetail = () => {
  const redirect = useRedirect();

  const [trigger] =
    useLazyApiServicesAppSessionGetcurrentlogininformationsGetQuery();

  const fetchUserData = async (accessToken: string) => {
    try {
      const {user: userData, tenant} = await trigger().unwrap();

      if (userData && tenant) {
        handleSuccessfulLogin({accessToken, userData, tenant, redirect});
      } else {
        localStorage.remove(localStorageKeys.ACCESS_TOKEN);
        throw Error('Sign-in failed');
      }
    } catch (_) {
      localStorage.remove(localStorageKeys.ACCESS_TOKEN);
      throw Error('Sign-in failed');
    }
  };

  return {fetchUserData};
};

const handleSuccessfulLogin = ({
  tenant,
  userData,
  redirect,
  accessToken,
}: {
  accessToken: string;
  userData: UserLoginInfoDto;
  tenant: TenantLoginInfoDto;
  redirect: ({
    roleIdentity,
    decodedToken,
    userClaims,
    user,
    tenant,
  }: {
    roleIdentity: RolesTypes;
    decodedToken: UserInformationType;
    userClaims: UserClaimTypes;
    user: UserLoginInfoDto;
    tenant: TenantLoginInfoDto;
  }) => void;
}) => {
  const {decodedToken, roleIdentity, userClaims} = prepareUserInfo(accessToken);

  redirect({
    tenant,
    roleIdentity: roleIdentity as RolesTypes,
    decodedToken: decodedToken as UserInformationType,
    userClaims: userClaims as UserClaimTypes,
    user: userData as UserLoginInfoDto,
  });
};

const persistAccessToken = (authData: AuthenticateResultModel) => {
  const accessTokenExpirationTimeInMs = (authData.expireInSeconds ?? 0) * 1000;

  const authPayload: AuthPayload = {
    accessToken: authData.accessToken ?? undefined,
    refreshToken: authData.refreshToken,
    expiresAt: new Date(Date.now() + accessTokenExpirationTimeInMs).getTime(),
  };

  localStorage.store(localStorageKeys.ACCESS_TOKEN, authPayload);
};
