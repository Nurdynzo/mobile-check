import React, {FunctionComponent} from 'react';
import AppScreen from '@/components/app-screen';
import {AppLoading} from '@/components/common';
import {AppointmentForm} from '@/components/forms';
import {AppHeader} from '@/components/headers';
import {FrontDeskScreenProps} from '@/navigation/front-desk/root-navigation/type';
import {useEditAppointment} from './useEditAppointment';

const EditAppointment: FunctionComponent<
  FrontDeskScreenProps<'FD_EDIT_APPOINTMENT'>
> = ({route}) => {
  const {_handleSubmit, isLoading, defaultValues} = useEditAppointment({
    appointmentData: route.params?.appointmentData,
  });

  return (
    <AppScreen ScreenHeader={<AppHeader middleTitle="Edit appointment" />}>
      <AppLoading isLoading={isLoading} />
      <AppointmentForm
        formType="edit"
        patientId={route?.params?.patientId}
        defaultValues={defaultValues}
        onSubmit={_handleSubmit}
      />
    </AppScreen>
  );
};

export default EditAppointment;
