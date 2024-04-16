import {AuthStatus} from '@/state/slices/auth/type';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import AuthStack from './auth-stack';
import ViewPaperRecordTab from './common/view-paper-records-tab';
import {routesNames} from './routes';
import useAppGuard from './useAppGuard';
import {GeneralRouteParamList} from './types';
import {
  AddNotes,
  Investigations,
  OtherPlanItems,
  VitalSigns,
  PhysicalExamination,
} from '@/screens/common';
import SplashScreen from 'react-native-splash-screen';

// TODO(Philip): Ask Franklyn why we have the navigation implementation this way
const {Navigator, Screen, Group} = createNativeStackNavigator<
  GeneralRouteParamList & Omit<{[key: string]: undefined}, 'AUTH_STACK'>
>();

const RootNavigation = () => {
  const {authStatus, route, routeNavigation} = useAppGuard();

  // TODO(Philip): Improve this in the future as SplashScreen.hide() would be called
  // on every other AuthStatus state except AuthStatus.none
  useEffect(() => {
    if (authStatus === AuthStatus.none) {
      return;
    }

    SplashScreen.hide();
  }, [authStatus]);

  if (authStatus === AuthStatus.none) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={routesNames.AUTH_STACK}
        screenOptions={{headerShown: false}}>
        {authStatus === AuthStatus.loggedIn && (
          <Group>
            <Screen name={route} component={routeNavigation} />
            <Screen
              name={routesNames.VIEW_PARER_RECORDS_TAB}
              component={ViewPaperRecordTab}
            />
            <Screen
              name={routesNames.OTHER_PLAN_ITEMS}
              component={OtherPlanItems}
            />
            <Screen name={routesNames.VITAL_SIGNS} component={VitalSigns} />
            <Screen name={routesNames.ADD_NOTES} component={AddNotes} />
            <Screen
              name={routesNames.INVESTIGATIONS}
              component={Investigations}
            />
            <Screen
              name={routesNames.PHYSICAL_EXAMINATION}
              component={PhysicalExamination}
            />
          </Group>
        )}

        {authStatus === AuthStatus.loggedOut && (
          <Screen name={routesNames.AUTH_STACK} component={AuthStack} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
