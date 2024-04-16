import {AppRow, AppText} from '@/components/common';
import * as Constants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import {
  GetPatientDetailsOutDto,
  useApiServicesAppPatientsGetpatientdetailsGetQuery,
} from '@/state/services/patientApi';
import {NavigationProps} from '@/types/navigation';
import {NOT_AVAILABLE} from '@/utils/constants';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import {ReassignIcon} from '@/assets/svg';
import {AllInputsLandingScreen} from '@/components/all-inputs-landing-screen';
import {AppIconButton} from '@/components/buttons';
import Column from '@/components/common/column';
import {GeneralScreenProps} from '@/navigation/types';
import {wp} from '@/resources/config';
import {allInputStyles} from './styles';

export const AllInputs: FunctionComponent<
  GeneralScreenProps<'DOCTOR_ALL_INPUTS'>
> = ({route}) => {
  const navigation = useNavigation() as NavigationProps;
  const {encounterId, patientId} = route?.params || {};

  const {data} = useApiServicesAppPatientsGetpatientdetailsGetQuery({
    patientId,
  });
  const patient = data as GetPatientDetailsOutDto;

  return (
    <AllInputsLandingScreen
      AllInputsClinicalInfoContent={
        <AllInputsClinicalInfoCard patient={patient} />
      }
      allInputData={Constants.doctorAllInputData}
      handleRoute={routeName =>
        navigation.navigate(routeName, {patientId, encounterId})
      }
      ScreenHeaderRightContent={
        <AppIconButton
          icon={<ReassignIcon height={wp(16)} width={wp(16)} />}
          onPress={() => {}}
        />
      }
    />
  );
};

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
        value={`${patient?.lastSeenByDoctorName || 'Doctor'} | ${dayjs(
          patient?.lastSeenByDoctor,
        ).format('h:mmA - D MMM YYYY')}`}
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
