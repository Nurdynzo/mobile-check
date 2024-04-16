import {
  AllInputs,
  Diagnosis,
  Prescription,
  PresentingComplaintsScreen,
  Procedures,
} from '@/screens/doctor';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {routesNames} from '../../routes';
import DoctorBottomTab from '../bottom-tab';
import {DoctorRootStackParamList} from './type';

const {Navigator, Screen} =
  createNativeStackNavigator<DoctorRootStackParamList>();

const DoctorRootNavigation = () => {
  return (
    <Navigator
      initialRouteName={routesNames.DOCTOR.DOCTOR_BOTTOM_TAB}
      screenOptions={{headerShown: false}}>
      <Screen
        name={routesNames.DOCTOR.DOCTOR_BOTTOM_TAB}
        component={DoctorBottomTab}
      />
      <Screen
        name={routesNames.DOCTOR.DOCTOR_ALL_INPUTS}
        component={AllInputs}
      />
      <Screen
        name={routesNames.DOCTOR.DOCTOR_PRESENTING_COMPLAINTS}
        component={PresentingComplaintsScreen}
      />
      <Screen
        name={routesNames.DOCTOR.DOCTOR_DIAGNOSIS}
        component={Diagnosis}
      />
      <Screen
        name={routesNames.DOCTOR.DOCTOR_PRESCRIPTIONS}
        component={Prescription}
      />
      <Screen
        name={routesNames.DOCTOR.DOCTOR_PROCEDURES}
        component={Procedures}
      />
    </Navigator>
  );
};

export default DoctorRootNavigation;
