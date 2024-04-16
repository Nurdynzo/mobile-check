import {frontdeskPatientProfileData} from '@/constants/patientProfileData';
import {FrontDeskScreenProps} from '@/navigation/front-desk/root-navigation/type';
import React, {FunctionComponent} from 'react';
import PatientProfileScreen from '@/components/patient-profile-screen';

const FrontDeskPatientProfile: FunctionComponent<
  FrontDeskScreenProps<'FD_PATIENT_PROFILE'>
> = ({navigation}) => {
  return (
    <PatientProfileScreen
      profileData={frontdeskPatientProfileData}
      handleRoute={routeName => navigation.navigate(routeName)}
    />
  );
};

export default FrontDeskPatientProfile;
