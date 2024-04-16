import {showToast} from '@/components/app-toast';
import {useAppDispatch} from '@/state/hooks';
import {
  TenantLoginInfoDto,
  UserLoginInfoDto,
} from '@/state/services/sessionApi';
import {login} from '@/state/slices/auth/auth';
import {
  UserClaimTypes,
  UserInformationType,
  RolesTypes,
  LoginPayload,
} from '@/state/slices/auth/type';
import Tenant from '@/types/tenant';
import {localStorage, localStorageKeys} from '@/utils/localStorage';

export const useRedirect = () => {
  const dispatch = useAppDispatch();

  const redirect = ({
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
    tenant?: TenantLoginInfoDto;
  }) => {
    if (
      roleIdentity?.includes('Doctor') ||
      roleIdentity?.includes('Front Desk') ||
      roleIdentity?.includes('Nurse')
    ) {
      const userData: LoginPayload = {
        role: roleIdentity as RolesTypes,
        userInformation: decodedToken as UserInformationType,
        userClaims,
        user,
      };

      localStorage.store(localStorageKeys.USER_DETAILS, userData);

      addToPresavedTenantList(tenant);

      dispatch(login(userData));
    } else {
      localStorage.removeAllExcept([localStorageKeys.PRE_SAVED_TENANTS]);
      showToast('INFO', {
        title: 'Use our website',
        message: `${roleIdentity} is not available on mobile, please use our official website at this time.`,
      });
    }
  };

  return redirect;
};

const addToPresavedTenantList = (tenant?: TenantLoginInfoDto) => {
  if (tenant && tenant.name && tenant.tenancyName) {
    const presavedTenants = localStorage.get<Tenant[]>(
      localStorageKeys.PRE_SAVED_TENANTS,
    );

    const tenantAlreadyExist = presavedTenants?.some(
      value =>
        value.name === tenant.name &&
        value.uniqueBusinessCode === tenant.tenancyName,
    );

    if (tenantAlreadyExist) {
      return;
    }

    const newTenantData: Tenant[] = [
      ...(presavedTenants ?? []),
      {
        name: tenant.name,
        uniqueBusinessCode: tenant.tenancyName,
      },
    ];
    localStorage.store(localStorageKeys.PRE_SAVED_TENANTS, newTenantData);
  }
};
