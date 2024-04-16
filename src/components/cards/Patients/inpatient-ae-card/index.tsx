import {
  ArrowRightIcon,
  HeartIcon,
  MinusIcon,
  RightCaretIcon,
} from '@/assets/svg';
import {routesNames} from '@/navigation/routes';
import {doctorPatientStyle} from '@/screens/doctor/bottom-tabs/patients/styles';
import {useAppSelector} from '@/state/hooks';
import {GetInpatientLandingListResponse} from '@/state/services/patientApi';
import {selectAuth} from '@/state/slices/auth/auth';
import {MenuOptionsProp} from '@/types/menusheet';
import {NavigationProps} from '@/types/navigation';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../../../common';
import AppRow from '../../../common/app-row';
import {AppMenuSheet} from '../../../sheets';
import {RecordRow} from '../../index';
import {recordCardStyles} from '../../record-card/styles';
import {useRecordCard} from '../../record-card/useRecordCard';
import PatientInfoCard from '../patient-info-card';
import {PatientStatusLabel} from '../patient-status-label';

const InpatientAECard = ({
  showDoctorStatus = true,
  item,
}: {
  showDoctorStatus?: boolean;
  item?: GetInpatientLandingListResponse;
}) => {
  const navigation = useNavigation() as NavigationProps;
  const {detailsSheet, openDetailsSheet, colors, closeDetailsSheet} =
    useRecordCard();
  const styles = recordCardStyles({colors});
  const patient = doctorPatientStyle({colors});
  const {role} = useAppSelector(selectAuth);

  const detailsOptions: MenuOptionsProp = [
    {
      value: 'View full card details',
      onPress: () => null,
      id: 'option-1',
    },

    {
      value: 'View all inputs',
      onPress: () => {
        if (role === 'Doctor' || role === 'Nurse') {
          navigation.navigate(
            role === 'Doctor'
              ? routesNames.DOCTOR.DOCTOR_ALL_INPUTS
              : routesNames.NURSE.IN_PATIENT_NURSE_ALL_INPUT_LANDING_DASHBOARD,
          );
        }
      },
      id: 'option-2',
    },

    {
      value: 'Edit shift notes',
      onPress: () => null,
      id: 'option-3',
    },

    {
      value: 'View referral letter',
      onPress: () => null,
      id: 'option-4',
    },
    {
      value: 'View patient profile',
      onPress: () => null,
      id: 'option-5',
    },
  ];

  return (
    <>
      <View style={patient.wrapper}>
        {showDoctorStatus ? (
          <View style={styles.topPane}>
            <MinusIcon />
            <AppText
              color="text400"
              type="status_tag_semibold"
              text={`${
                item?.attendingPhysician?.name || 'Doctor'
              } is busy with patient`}
            />
          </View>
        ) : null}

        <PatientInfoCard
          fullName={item?.fullName}
          code={item?.patientId}
          gender={item?.gender}
          dateOfBirth={item?.birthDate}
          avatar={item?.imageUrl}
          backgroundColor="transparent"
        />

        <View style={patient.cardContainer}>
          <View style={styles.leftPane}>
            <View style={patient.rowSpaceBetween}>
              <RecordRow detail="Status">
                <PatientStatusLabel
                  text={item?.status}
                  color="primary25"
                  bg="primary25"
                  icon={<HeartIcon />}
                />
              </RecordRow>

              <View style={styles.row}>
                <AppText
                  type="body_1_semibold"
                  color="text300"
                  text="Bed No."
                />
                <AppText
                  type="body_1_semibold"
                  color="text400"
                  text={`${item?.bedNumber}`}
                />
              </View>
            </View>

            <RecordRow detail="Most recent vitals">
              <AppText
                type="body_1_semibold"
                color="text400"
                text={`${item?.patientVitals
                  ?.map(
                    el => `${el.vitalSign}: ${el.reading} ${el.measurement}`,
                  )
                  .join(', ')}`}
              />
            </RecordRow>

            <RecordRow detail="Managing unit">
              <AppText
                type="body_1_semibold"
                color="text400"
                text={`${item?.attendingPhysician?.unit}`}
              />
            </RecordRow>
          </View>
        </View>
        <TouchableOpacity onPress={openDetailsSheet} style={styles.bottomPane}>
          <AppRow>
            <AppText
              color="primary400"
              type="button_semibold"
              text="View details"
            />
            <ArrowRightIcon />
          </AppRow>
        </TouchableOpacity>
      </View>

      <AppMenuSheet
        menuOptions={detailsOptions}
        closeSheet={closeDetailsSheet}
        removeHeader
        sheetRef={detailsSheet}
        renderRightIcon={() => <RightCaretIcon />}
      />
    </>
  );
};

export default InpatientAECard;
