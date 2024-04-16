import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesNames} from '../../routes';
import NurseBottomTab from '../bottom-tab';
import {
  BedMaking,
  IntakeOutputCharting,
  MiscellaneousInterventions,
  NursingCarePlan,
  WoundDressing,
} from '@/screens/nurse/stack-screens/all-inputs';
import {NurseRootStackParamList} from './types';
import {
  OutPatientNurseAllInputsLandingDashboard,
  InPatientNurseAllInputsLandingDashboard,
} from '@/screens/nurse/stack-screens/all-inputs/landing-dashboard';
import Medication from '@/screens/nurse/stack-screens/all-inputs/medication';

const {Navigator, Screen} =
  createNativeStackNavigator<NurseRootStackParamList>();

const NurseRootNavigation = () => {
  return (
    <Navigator
      initialRouteName={routesNames.NURSE.NURSE_BOTTOM_TAB}
      screenOptions={{headerShown: false}}>
      <Screen
        name={routesNames.NURSE.NURSE_BOTTOM_TAB}
        component={NurseBottomTab}
      />
      <Screen
        name={routesNames.NURSE.OUT_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD}
        component={OutPatientNurseAllInputsLandingDashboard}
      />
      <Screen
        name={routesNames.NURSE.IN_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD}
        component={InPatientNurseAllInputsLandingDashboard}
      />

      <Screen name={routesNames.NURSE.NURSE_BED_MAKING} component={BedMaking} />
      <Screen
        name={routesNames.NURSE.NURSE_WOUND_DRESSING}
        component={WoundDressing}
      />
      <Screen
        name={routesNames.NURSE.NURSE_MISCELLANEOUS_INTERVENTIONS}
        component={MiscellaneousInterventions}
      />
      <Screen
        name={routesNames.NURSE.NURSING_CARE_PLAN}
        component={NursingCarePlan}
      />
      <Screen
        name={routesNames.NURSE.NURSE_MEDICATION}
        component={Medication}
      />
      <Screen
        name={routesNames.NURSE.NURSE_INTAKE_OUTPUT_CHARTING}
        component={IntakeOutputCharting}
      />
    </Navigator>
  );
};

export default NurseRootNavigation;
