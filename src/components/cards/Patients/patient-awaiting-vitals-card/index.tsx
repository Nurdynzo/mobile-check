import {ArrowRightIcon, RightCaretIcon} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import {LandingListCardHeader} from '@/components/headers';
import {AppContentSheet, AppMenuSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {routesNames} from '@/navigation/routes';
import {GeneralNavProp} from '@/navigation/types';
import {useAppDispatch} from '@/state/hooks';
import {updateSelectedPatient} from '@/state/slices/patient/selectedPatient';
import {MenuOptionsProp} from '@/types/menusheet';
import {NOT_AVAILABLE, TEMP_AVATAR_URL} from '@/utils/constants';
import {getMostRecentVitals} from '@/utils/helpers';
import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {Pressable, View} from 'react-native';
import LabelValueText from '../../../common/label-value-text';
import PatientInfoCard from '../patient-info-card';
import {
  fullCardDetailsSheetStyles,
  patientAwaitingVitalsCardStyles,
} from './styles';
import {
  FullCardDetailsSheetProps,
  PatientAwaitingVitalsCardProps,
} from './types';

const PatientAwaitingVitalsCard: FunctionComponent<
  PatientAwaitingVitalsCardProps
> = ({isBusyWithPhysician = true, data, avatar}) => {
  const {colors} = useColors();
  const {
    closeSheet: closeDetailsSheet,
    openSheet: openDetailsSheet,
    sheetRef: detailsSheet,
  } = useSheet();
  const {
    sheetRef: patientFullDetailsSheetRef,
    closeSheet: closePatientFullDetailsSheet,
    openSheet: openPatientFullDetailsSheet,
  } = useSheet();

  const styles = patientAwaitingVitalsCardStyles({colors});
  const navigation = useNavigation<GeneralNavProp>();
  const dispatch = useAppDispatch();

  const onMenuOptionChanged = () => {
    dispatch(
      updateSelectedPatient({
        id: data.patientId ?? 0,
        fullName: data.name ?? NOT_AVAILABLE,
        code: data.patientCode ?? NOT_AVAILABLE,
        dateOfBirth: data.dateOfBirth ?? NOT_AVAILABLE,
        gender: data.gender ?? NOT_AVAILABLE,
        // TODO(Philip): add patient profile picture once BE returns it
        pic: TEMP_AVATAR_URL,
      }),
    );
  };

  const mostRecentVitals = getMostRecentVitals(data?.patientVitals);

  const detailsOptions: MenuOptionsProp = [
    {
      value: 'View full card details',
      onPress: openPatientFullDetailsSheet,
    },
    {
      value: 'View all inputs',
      onPress: () => {
        navigation.navigate(
          routesNames.NURSE.OUT_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD,
          {
            patientId: data.patientId as number,
            encounterId: data.encounterId as number,
          },
        );
      },
    },
    {
      value: 'View referral letter',
      onPress: () => null,
    },
    {
      value: 'View patient profile',
      onPress: () => null,
    },
  ];
  return (
    <>
      <View style={styles.wrapper}>
        {isBusyWithPhysician && (
          <LandingListCardHeader
            busyText={`${data?.attendingPhysician} is busy with patient`}
            hasInsurance
          />
        )}

        <PatientInfoCard
          fullName={data?.name || NOT_AVAILABLE}
          dateOfBirth={data?.dateOfBirth}
          code={data?.patientCode || NOT_AVAILABLE}
          gender={data?.gender || NOT_AVAILABLE}
          avatar={avatar}
          backgroundColor="transparent"
        />
        <View style={styles.cardContainer}>
          <AppRow alignItems="flex-start">
            <LabelValueText
              label={'Clinic'}
              value={data?.clinic ?? NOT_AVAILABLE}
            />
            <LabelValueText
              label={'Appointment type'}
              value={data?.appointmentType ?? NOT_AVAILABLE}
            />
          </AppRow>

          <LabelValueText
            label={'Most recent vitals'}
            value={mostRecentVitals ?? NOT_AVAILABLE}
          />
        </View>
        <Pressable onPress={openDetailsSheet} style={styles.bottomPane}>
          <AppRow>
            <AppText
              color="primary400"
              type="button_semibold"
              text="View details"
            />
            <ArrowRightIcon />
          </AppRow>
        </Pressable>
      </View>

      <AppMenuSheet
        menuOptions={detailsOptions}
        removeHeader
        sheetRef={detailsSheet}
        closeSheet={closeDetailsSheet}
        onChanged={_ => onMenuOptionChanged()}
        renderRightIcon={() => <RightCaretIcon />}
      />
      <FullCardDetailsSheet
        closeSheet={closePatientFullDetailsSheet}
        sheetRef={patientFullDetailsSheetRef}
        details={{
          avatar,
          data,
        }}
      />
    </>
  );
};

export default PatientAwaitingVitalsCard;

const FullCardDetailsSheet: FunctionComponent<FullCardDetailsSheetProps> = ({
  details,
  closeSheet,
  sheetRef,
}) => {
  const {avatar, data} = details;
  const styles = fullCardDetailsSheetStyles;
  const mostRecentVitals = getMostRecentVitals(data?.patientVitals);

  return (
    <AppContentSheet
      headerTitle="Full card details"
      sheetRef={sheetRef}
      containerStyle={styles.container}
      closeSheet={closeSheet}>
      <PatientInfoCard
        fullName={data?.name || NOT_AVAILABLE}
        dateOfBirth={data?.dateOfBirth}
        code={data?.patientCode || NOT_AVAILABLE}
        gender={data?.gender || NOT_AVAILABLE}
        avatar={avatar}
      />

      <AppRow alignItems="flex-start">
        <LabelValueText
          label={'Clinic'}
          value={data?.clinic ?? NOT_AVAILABLE}
        />
        <LabelValueText
          label={'Appointment type'}
          value={data?.appointmentType ?? NOT_AVAILABLE}
        />
      </AppRow>

      <LabelValueText
        label={'Most recent vitals'}
        value={mostRecentVitals ?? NOT_AVAILABLE}
      />
      <LabelValueText
        label={'Diagnosis'}
        value={data?.diagnosis?.join(', ') ?? NOT_AVAILABLE}
      />
      <View style={styles.payContainer}>
        <LabelValueText
          label={'Payments'}
          value={'₦50,350 outstanding' ?? NOT_AVAILABLE}
        />
        <AppButton
          text={'View summary'}
          borderWidth={1}
          containerStyle={styles.summaryBtn}
        />
      </View>
    </AppContentSheet>
  );
};
