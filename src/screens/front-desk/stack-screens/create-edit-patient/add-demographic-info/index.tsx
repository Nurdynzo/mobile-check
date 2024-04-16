import {GeneralScreenProps} from '@/navigation/types';
import React, {FunctionComponent} from 'react';
import AppScreen from '@/components/app-screen';
import {AppLoading} from '@/components/common';
import {PatientForm} from '@/components/forms';
import {AppHeader} from '@/components/headers';
import {useGetPatientFormDefaultValues} from './use-get-patient-form-defaultValues';
import {useAddDemographicInfo} from './use-add-demograhic-info';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';

const AddDemographicInfo: FunctionComponent<
  GeneralScreenProps<'FD_ADD_DEMOGRAPHIC_INFO'>
> = () => {
  const {id: patientId} = useAppSelector(selectPatient);

  const {defaultValues, isLoading: isGettingDetails} =
    useGetPatientFormDefaultValues({
      patientId,
    });
  const {_handleSubmit, isLoading} = useAddDemographicInfo({
    defaultValues,
    patientId,
  });

  return (
    <AppScreen isScrollable={false}>
      <AppLoading isLoading={isLoading} />
      <AppHeader middleTitle="Add demographic info" />
      <PatientForm
        onSubmit={_handleSubmit}
        formType="update"
        defaultValues={defaultValues}
        isUpdatingForm={isGettingDetails}
      />
    </AppScreen>
  );
};

export default AddDemographicInfo;
