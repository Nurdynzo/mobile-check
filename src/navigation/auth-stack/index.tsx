import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesNames} from '../routes';
import {
  CreateNewPassword,
  EnterOtp,
  LoginScreen,
  ResetPassword,
} from '@/screens/common/auth';

export type AuthRootStackParamList = {
  LOGIN: undefined;
  CREATE_NEW_PASSWORD: undefined;
  RESET_PASSWORD: undefined;
  ENTER_OTP: undefined;
};

const {Navigator, Screen} =
  createNativeStackNavigator<AuthRootStackParamList>();

const AuthStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={routesNames.LOGIN} component={LoginScreen} />
      <Screen
        name={routesNames.CREATE_NEW_PASSWORD}
        component={CreateNewPassword}
      />
      <Screen name={routesNames.RESET_PASSWORD} component={ResetPassword} />
      <Screen name={routesNames.ENTER_OTP} component={EnterOtp} />
    </Navigator>
  );
};

export default AuthStack;
