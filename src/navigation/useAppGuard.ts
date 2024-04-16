import InfoScreen from '@/components/info-screen';
import {useRedirect} from '@/hooks/useRedirect';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {logOut, selectAuth} from '@/state/slices/auth/auth';
import {
  AuthStatus,
  LoginPayload,
  RolesTypes,
  UserClaimTypes,
} from '@/state/slices/auth/type';
import {localStorage, localStorageKeys} from '@/utils/localStorage';
import {useEffect} from 'react';
import DoctorRootNavigation from './doctor/root-navigation';
import FrontDeskRootNavigation from './front-desk/root-navigation';
import {routesNames} from './routes';
import NurseRootNavigation from './nurse/root-navigation';
import {UserLoginInfoDto} from '@/state/services/sessionApi';

const useAppGuard = () => {
  const redirect = useRedirect();

  const dispatch = useAppDispatch();

  const {status: authStatus, role} = useAppSelector(selectAuth);
  const {route, routeNavigation} = getRouteAndNavigation(role);

  useEffect(() => {
    if (authStatus === AuthStatus?.loggedOut) {
      localStorage.removeAllExcept([localStorageKeys.PRE_SAVED_TENANTS]);
      return;
    }
  }, [authStatus]);

  useEffect(() => {
    const loginPayload = localStorage.get<LoginPayload>(
      localStorageKeys.USER_DETAILS,
    );
    if (loginPayload) {
      redirect({
        roleIdentity: loginPayload.role,
        decodedToken: loginPayload.userInformation,
        userClaims: loginPayload.userClaims as UserClaimTypes,
        user: loginPayload.user as UserLoginInfoDto,
      });
    } else {
      dispatch(logOut());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return {
    authStatus,
    route,
    routeNavigation,
  };
};

export default useAppGuard;

function getRouteAndNavigation(role: RolesTypes) {
  if (role === 'Doctor') {
    return {
      route: routesNames.DOCTOR.DOCTOR_ROOT_NAVIGATION,
      routeNavigation: DoctorRootNavigation,
    };
  } else if (role === 'Front Desk') {
    return {
      route: routesNames.FRONT_DESK.FD_ROOT_NAVIGATION,
      routeNavigation: FrontDeskRootNavigation,
    };
  } else if (role === 'Nurse') {
    return {
      route: routesNames.FRONT_DESK.FD_ROOT_NAVIGATION,
      routeNavigation: NurseRootNavigation,
    };
  } else {
    return {
      route: 'info',
      routeNavigation: InfoScreen,
    };
  }
}
