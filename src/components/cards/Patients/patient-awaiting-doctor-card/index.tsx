import {ArrowRightIcon, RightCaretIcon} from '@/assets/svg';
import {AppointmentStatus} from '@/components/cards/statues';
import {AppRow, AppText} from '@/components/common';
import {LandingListCardHeader} from '@/components/headers';
import {
  AppContentSheet,
  AppMenuSheet,
  PatientReassignmentSheet,
} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {routesNames} from '@/navigation/routes';
import {MenuOptionsProp} from '@/types/menusheet';
import {NavigationProps} from '@/types/navigation';
import {NOT_AVAILABLE, TEMP_AVATAR_URL} from '@/utils/constants';
import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {Pressable, View} from 'react-native';
import LabelValueText from '../../../common/label-value-text';
import RecordRow from '../../record-row';
import PatientInfoCard from '../patient-info-card';
import {
  fullCardDetailsSheetStyles,
  patientAwaitingDoctorCardStyles,
} from './styles';
import {
  FullCardDetailsSheetProps,
  PatientAwaitingDoctorCardProps,
} from './types';
import {useDispatch} from 'react-redux';
import {updateSelectedPatient} from '@/state/slices/patient/selectedPatient';
import {getMostRecentVitals} from '@/utils/helpers';

const PatientAwaitingDoctorCard: FunctionComponent<
  PatientAwaitingDoctorCardProps
> = ({isBusyWithPhysician = true, data, avatar}) => {
  const {colors} = useColors();

  const styles = patientAwaitingDoctorCardStyles({colors});

  const dispatch = useDispatch();

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

  const {
    closeSheet: closeDetailsSheet,
    openSheet: openDetailsSheet,
    sheetRef: detailsSheetRef,
  } = useSheet();
  const {
    sheetRef: patientFullDetailsSheetRef,
    closeSheet: closePatientFullDetailsSheet,
    openSheet: openPatientFullDetailsSheet,
  } = useSheet();
  const {
    sheetRef: assignToSheetRef,
    closeSheet: closeAssignToSheet,
    openSheet: openAssignToSheet,
  } = useSheet();

  const navigation = useNavigation() as NavigationProps;

  const detailsOptions: MenuOptionsProp = [
    {
      value: 'View full card details',
      onPress: openPatientFullDetailsSheet,
    },
    {
      value: 'Reassign patient',
      onPress: openAssignToSheet,
    },
    {
      value: 'View all inputs',
      onPress: () =>
        navigation.navigate(
          routesNames.NURSE.OUT_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD,
          {
            patientId: data.patientId as number,
            encounterId: data.encounterId,
          },
        ),
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
          code={data.patientCode || NOT_AVAILABLE}
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
          <AppRow alignItems="flex-start">
            <RecordRow detail="Status">
              <AppointmentStatus status={data?.status} />
            </RecordRow>
            <LabelValueText
              label={'Assigned to'}
              value={data?.attendingPhysician ?? NOT_AVAILABLE}
            />
          </AppRow>
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
        sheetRef={detailsSheetRef}
        closeSheet={closeDetailsSheet}
        onChanged={_ => onMenuOptionChanged()}
        renderRightIcon={() => <RightCaretIcon />}
      />
      <FullCardDetailsSheet
        sheetRef={patientFullDetailsSheetRef}
        closeSheet={closePatientFullDetailsSheet}
        details={{
          data,
          avatar,
        }}
      />
      <PatientReassignmentSheet
        encounterId={data.encounterId}
        sheetRef={assignToSheetRef}
        closeSheet={closeAssignToSheet}
      />
    </>
  );
};

export default PatientAwaitingDoctorCard;

const FullCardDetailsSheet: FunctionComponent<FullCardDetailsSheetProps> = ({
  details,
  closeSheet,
  sheetRef,
}) => {
  const {data, avatar} = details;
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
      <AppRow alignItems="flex-start">
        <RecordRow detail="Status">
          <AppointmentStatus status={data?.status} />
        </RecordRow>
        <LabelValueText
          label={'Assigned to'}
          value={data?.attendingPhysician ?? NOT_AVAILABLE}
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
    </AppContentSheet>
  );
};
