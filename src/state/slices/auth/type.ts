import {UserLoginInfoDto} from '@/state/services/sessionApi';

export type UserInformationType = {
  'AspNet.Identity.SecurityStamp': string;
  aud: string;
  exp: number;
  facilityId: string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string;
  'http://www.aspnetboilerplate.com/identity/claims/tenantId': string;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  refreshTokenValidityKey: string;
  sub: string;
  tokenType: string;
  tokenValidityKey: string;
  userIdentifier: string;
} | null;

export enum AuthStatus {
  none = 'none',
  loggedIn = 'loggedIn',
  loggedOut = 'loggedOut',
}

export type AuthState = {
  status: AuthStatus;
  userInformation?: UserInformationType;
  userClaims: UserClaimTypes | null;
  role: RolesTypes;
  user: UserLoginInfoDto | null;
};

export type LoginPayload = {
  userInformation: UserInformationType;
  role: RolesTypes;
  userClaims: UserClaimTypes | null;
  user: UserLoginInfoDto | null;
};

export type ClaimTypes = {
  [key: string]: string;
};

export type UserClaimTypes = {
  role: string;
  emailAddress: string;
  name: string;
  nameIdentifier: string;
  tenantId: string;
};

export type RolesTypes = 'Admin' | 'Doctor' | 'Front Desk' | 'Nurse' | 'None';
