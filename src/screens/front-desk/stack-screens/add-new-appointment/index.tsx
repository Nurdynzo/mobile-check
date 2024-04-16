import React, {FunctionComponent} from 'react';
import AppScreen from '@/components/app-screen';
import {AppHeader} from '@/components/headers';
import {AppointmentForm} from '@/components/forms';
import {useAddNewAppointment} from './useAddNewAppointment';
import {AppLoading} from '@/components/common';
import {FrontDeskScreenProps} from '@/navigation/front-desk/root-navigation/type';

const AddNewAppointment: FunctionComponent<
  FrontDeskScreenProps<'FD_ADD_NEW_APPOINTMENT'>
> = ({route}) => {
  const {_handleSubmit, isLoading} = useAddNewAppointment();

  return (
    <AppScreen ScreenHeader={<AppHeader middleTitle="Add new appointment" />}>
      <AppLoading isLoading={isLoading} />
      <AppointmentForm
        patientId={route?.params?.patientId}
        onSubmit={_handleSubmit}
        formType={'create'}
      />
    </AppScreen>
  );
};

export default AddNewAppointment;
