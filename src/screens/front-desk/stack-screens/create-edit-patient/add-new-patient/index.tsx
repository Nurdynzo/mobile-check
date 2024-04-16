import React, {FunctionComponent} from 'react';
import AppScreen from '@/components/app-screen';
import {PatientForm} from '@/components/forms';
import {AppHeader} from '@/components/headers';
import {AppLoading} from '@/components/common';
import {GeneralScreenProps} from '@/navigation/types';
import {useAddNewPatient} from './use-add-new-patient';

const AddNewPatient: FunctionComponent<
  GeneralScreenProps<'FD_ADD_NEW_PATIENT'>
> = () => {
  const {_handleSubmit, isLoading} = useAddNewPatient();
  return (
    <AppScreen isScrollable={false}>
      <AppLoading isLoading={isLoading} />
      <AppHeader middleTitle="Add new patient" />
      <PatientForm onSubmit={_handleSubmit} formType="create" />
    </AppScreen>
  );
};

export default AddNewPatient;
