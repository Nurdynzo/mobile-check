import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  AddDemographicInfo,
  AddNewAppointment,
  AddNewPatient,
  CreateInvoice,
  FrontDeskPatientProfile,
  PayInvoice,
  PaymentConfirmation,
  ScanPaperRecord,
  ViewAppointments,
  ViewReferralLetter,
} from '@/screens/front-desk/stack-screens';
import {
  PatientOverView,
  ReviewDetailedHistory,
  WardRoundAndClinicNotes,
} from '@/screens/front-desk/stack-screens/patient';
import {routesNames} from '../../routes';
import FrontDeskBottomTab from '../bottom-tab';
import {FrontDeskRootStackParamList} from './type';
import EditAppointment from '@/screens/front-desk/stack-screens/edit-appointment';

const {Navigator, Screen} =
  createNativeStackNavigator<FrontDeskRootStackParamList>();

const FrontDeskRootNavigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name={routesNames.FRONT_DESK.FD_BOTTOM_TAB}
        component={FrontDeskBottomTab}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_ADD_NEW_PATIENT}
        component={AddNewPatient}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_ADD_DEMOGRAPHIC_INFO}
        component={AddDemographicInfo}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_ADD_NEW_APPOINTMENT}
        component={AddNewAppointment}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_EDIT_APPOINTMENT}
        component={EditAppointment}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_CREATE_INVOICE}
        component={CreateInvoice}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_PAY_INVOICE}
        component={PayInvoice}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_VIEW_APPOINTMENT_INFO}
        component={ViewAppointments}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_SCAN_PAPER_RECORDS}
        component={ScanPaperRecord}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_PATIENT_PROFILE}
        component={FrontDeskPatientProfile}
      />

      <Screen
        name={routesNames.FRONT_DESK.FD_PATIENT_OVERVIEW}
        component={PatientOverView}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_REVIEW_DETAILED_HISTORY}
        component={ReviewDetailedHistory}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_PAYMENT_CONFIRMATION}
        component={PaymentConfirmation}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_WARD_ROUND_AND_CLINIC_NOTES}
        component={WardRoundAndClinicNotes}
      />
      <Screen
        name={routesNames.FRONT_DESK.FD_VIEW_REFERRAL_LETTER}
        component={ViewReferralLetter}
      />
    </Navigator>
  );
};

export default FrontDeskRootNavigation;
