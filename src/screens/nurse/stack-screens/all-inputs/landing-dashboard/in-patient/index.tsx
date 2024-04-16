import {AllInputsLandingScreen} from '@/components/all-inputs-landing-screen';
import {AppRow, AppText} from '@/components/common';
import Column from '@/components/common/column';
import * as Constants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import {GeneralScreenProps} from '@/navigation/types';
import {
  GetPatientDetailsOutDto,
  useApiServicesAppPatientsGetpatientdetailsGetQuery,
} from '@/state/services/patientApi';
import {NavigationProps} from '@/types/navigation';
import {NOT_AVAILABLE} from '@/utils/constants';
import {convertToReadableDate} from '@/utils/helpers/convertDateTime';
import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import {NurseAllInputHeaderRightContent} from '../header-right';
import {allInputStyles} from './../styles';

const InPatientNurseAllInputsLandingDashboard: FunctionComponent<
  GeneralScreenProps<'IN_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD'>
> = ({route}) => {
  const navigation = useNavigation() as NavigationProps;
  const {encounterId, patientId} = route?.params || {};
  const defaultValue = Constants.patientAppearanceMenuOptions[0];
  const [patientApperance, setPatientApperance] = useState<
    (typeof Constants.patientAppearanceMenuOptions)[number]['value']
  >(defaultValue.value);
  const {data} = useApiServicesAppPatientsGetpatientdetailsGetQuery({
    patientId,
  });

  const patient = data as GetPatientDetailsOutDto;

  return (
    <AllInputsLandingScreen
      AllInputsClinicalInfoContent={
        <AllInputsClinicalInfoCard patient={patient} />
      }
      allInputData={Constants.inPatientNurseAllInputData}
      handleRoute={routeName =>
        navigation.navigate(routeName, {patientId, encounterId})
      }
      ScreenHeaderRightContent={
        <NurseAllInputHeaderRightContent
          patientApperanceValue={patientApperance}
          setPatientApperanceValue={setPatientApperance}
        />
      }
    />
  );
};

export default InPatientNurseAllInputsLandingDashboard;

const AllInputsClinicalInfoCard = ({
  patient,
}: {
  patient: GetPatientDetailsOutDto;
}) => {
  const {colors} = useColors();
  const styles = allInputStyles({colors});

  return (
    <View style={styles.patientOtherInfoContainer}>
      <AppRow columnGap={12}>
        <PatientOtherInfoTextView
          label={'Genotype'}
          value={patient?.bloodGenotype}
        />
        <PatientOtherInfoTextView
          label={'Blood group'}
          value={patient?.bloodGroup}
        />
      </AppRow>
      <PatientOtherInfoTextView
        label={'Last seen by (Doctor)'}
        value={`${
          patient?.lastSeenByDoctorName || 'Dr Franklyn'
        } | ${convertToReadableDate(
          patient?.lastSeenByDoctor,
          'h:mmA - D MMM YYYY',
        )}`}
      />
    </View>
  );
};

const PatientOtherInfoTextView = ({
  label,
  value,
}: {
  label: string;
  value?: string;
}) => {
  return (
    <Column flex={1}>
      <AppText
        type={'label_semibold'}
        color={'text300'}
        text={label}
        numberOfLines={1}
      />
      <AppText
        type={'paragraph_2_semibold'}
        color={'text400'}
        text={value || NOT_AVAILABLE}
        numberOfLines={1}
      />
    </Column>
  );
};
