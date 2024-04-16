import {claims} from '@/constants/auth';
import {ClaimTypes, UserClaimTypes, RolesTypes} from '@/state/slices/auth/type';
import 'core-js/stable/atob';
import {jwtDecode} from 'jwt-decode';

export const prepareUserInfo = (token: string) => {
  const decodedToken = jwtDecode(token);

  const roleIdentity = decodedToken[
    'primary_role' as keyof typeof decodedToken
  ] as RolesTypes;

  const userClaims = extractUserClaims(decodedToken as ClaimTypes);

  return {
    decodedToken,
    roleIdentity,
    userClaims,
  };
};

export const extractUserClaims = (obj: ClaimTypes): UserClaimTypes => {
  return {
    role: obj[claims.role],
    emailAddress: obj[claims.emailAddress],
    name: obj[claims.name],
    nameIdentifier: obj[claims.nameIdentifier],
    tenantId: obj[claims.tenantId],
  };
};
