import React, {FunctionComponent} from 'react';
import AppScreen from '@/components/app-screen';
import {AppHeader} from '@/components/headers';
import AppointmentCardDetails from '@/components/cards/appointment-details-card';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {View} from 'react-native';
import {AppAlert, AppText} from '@/components/common';
import {
  MostRecentBillCard,
  ReviewDetailedHistoryCard,
  WardroundClinicNotesCard,
} from '@/components/cards';
import {useColors} from '@/hooks/useColors';
import {patientOverViewStyles} from './styles';
import {GeneralNavProp, GeneralScreenProps} from '@/navigation/types';
import {
  useApiServicesAppAppointmentGetmostrecentappointmentforpatientGetQuery,
  useApiServicesAppPatientsGetpatientforeditGetQuery,
  useApiServicesAppPatientsGetpatientwardroundandclinicnotesGetQuery,
} from '@/state/services/patientApi';
import {
  convertToReadableDate,
  convertToReadableTime,
} from '@/utils/helpers/convertDateTime';
import {useApiServicesAppInvoicesGetmostrecentbillGetQuery} from '@/state/services/invoiceApi';
import AnimatedBubble from '@/components/animated-bubble';
import {DocumentIcon, ReceiptIcon, UserIcon} from '@/assets/svg';
import {routesNames} from '@/navigation/routes';
import {NOT_AVAILABLE} from '@/utils/index';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {useNavigation} from '@react-navigation/native';
import {SvgProps} from 'react-native-svg';
import VoidFunction from '@/types/voidfunction';

const PatientOverView: FunctionComponent<
  GeneralScreenProps<'FD_PATIENT_OVERVIEW'>
> = () => {
  const {colors} = useColors();
  const styles = patientOverViewStyles({colors});

  const {fullName, code, gender, dateOfBirth, pic} =
    useAppSelector(selectPatient);

  return (
    <AppScreen
      paddingHorizontal={24}
      ScreenHeader={<AppHeader middleTitle="Patient Overview" />}>
      <PatientInfoCard
        fullName={fullName}
        dateOfBirth={dateOfBirth}
        code={code}
        gender={gender}
        avatar={pic}
        containerStyle={styles.patientInfo}
      />

      <View style={styles.overviewDetails}>
        <MostRecentAppointmentView />

        <MostRecentBillView />

        <ReviewDetailedHistorySummaryView />
        <WardRoundAndClinicNotesView />
      </View>
    </AppScreen>
  );
};

export default PatientOverView;

const MostRecentAppointmentView = () => {
  const navigation = useNavigation<GeneralNavProp>();

  const {id: patientId} = useAppSelector(selectPatient);

  const {data: patientAppointmentData} =
    useApiServicesAppAppointmentGetmostrecentappointmentforpatientGetQuery({
      patientId: patientId,
    });

  const appointmentDate = new Date(
    patientAppointmentData?.startTime || Date.now(),
  );

  const startTime = convertToReadableTime(appointmentDate);

  const endTime = convertToReadableTime(
    new Date(appointmentDate.setHours(appointmentDate.getHours() + 1)),
  );

  if (!patientAppointmentData) {
    return (
      <EmptyStateView
        title={'Appointments'}
        description={'No appointment has been scheduled'}
        buttonText={'Create appointment'}
        onPress={() =>
          navigation.navigate(routesNames.FRONT_DESK.FD_ADD_NEW_APPOINTMENT, {
            patientId: Number(patientId),
          })
        }
      />
    );
  }

  return (
    <AppointmentCardDetails
      showHeaderTitle
      removeMoreBtn
      title={`${patientAppointmentData?.title}`}
      date={convertToReadableDate(
        patientAppointmentData?.startTime,
        'ddd, DD MMM YYYY',
      )}
      time={`${startTime} - ${endTime} (1 hour)`}
      clinicName={`${patientAppointmentData?.attendingClinic?.displayName}`}
      clinician={`${
        patientAppointmentData?.attendingPhysician || NOT_AVAILABLE
      }`}
      appointmentID={Number(patientAppointmentData.id)}
      patientID={Number(patientId)}
      note={patientAppointmentData?.notes}
      referralLetter={
        patientAppointmentData?.referralDocument?.referralDocument
      }
      appointmentScanStatus={patientAppointmentData?.scanningStatus}
      status={patientAppointmentData?.status}
      onCreateInvoice={() => {
        navigation?.navigate(routesNames.FRONT_DESK.FD_CREATE_INVOICE, {
          appointment: {
            id: patientAppointmentData?.id as number,
            title: patientAppointmentData?.title as string,
            type: patientAppointmentData?.type as string,
            time: convertToReadableTime(patientAppointmentData?.startTime),
          },
          patientId: Number(patientId),
        });
      }}
    />
  );
};

const MostRecentBillView = () => {
  const {id: patientId} = useAppSelector(selectPatient);

  const {data: patientRecentBillData} =
    useApiServicesAppInvoicesGetmostrecentbillGetQuery({
      patientId: patientId,
    });

  if (!patientRecentBillData) {
    return (
      <EmptyStateView
        title={'Most recent bill'}
        description={'No invoice has been created'}
        showButton={false}
        Icon={ReceiptIcon}
      />
    );
  }
  return (
    <MostRecentBillCard
      items={(patientRecentBillData?.items || []).map(item => ({
        quality: `${item?.quantity}`,
        name: `${item?.name}`,
        price: `${item?.subTotal?.amount}`,
        discountName: '',
      }))}
      paymentStatus={`${patientRecentBillData?.paymentStatus}`}
      total={Number(patientRecentBillData?.totalAmount?.amount)}
      paymentDetails={{
        status: 'Issued',
        date: new Date(patientRecentBillData?.issuedOn || new Date()),
        fullname: `${patientRecentBillData?.issuedBy}`,
      }}
      totalDiscount={
        (patientRecentBillData?.items || []).reduce(
          (total, {quantity, subTotal}) => {
            return (quantity || 0) * (subTotal?.amount || 0) + total;
          },
          0,
        ) - Number(patientRecentBillData?.totalAmount?.amount)
      }
    />
  );
};

const ReviewDetailedHistorySummaryView = () => {
  const {colors} = useColors();
  const styles = patientOverViewStyles({colors});

  const {id: patientId} = useAppSelector(selectPatient);

  const {data: patientData} =
    useApiServicesAppPatientsGetpatientforeditGetQuery({
      id: patientId,
    });

  return (
    <ReviewDetailedHistoryCard
      Header={
        <View style={styles.title}>
          <AppText text="Review detailed history" type="title_semibold" />
          <AppText text="Patient info" type="subtitle_semibold" />
        </View>
      }
      fullName={`${patientData?.firstName} ${patientData?.lastName}`}
      address={patientData?.address}
      dob={convertToReadableDate(patientData?.dateOfBirth)}
      gender={patientData?.genderType}
      phoneNumber={`${patientData?.phoneNumber}`}
      emailAddress={patientData?.emailAddress}
      maritalStatus={patientData?.maritalStatus}
      familyHistory={{
        noOfFemaleChildren: patientData?.noOfFemaleChildren ?? 0,
        noOfFemaleSiblings: patientData?.noOfFemaleSiblings ?? 0,
        noOfMaleSiblings: patientData?.noOfMaleSiblings ?? 0,
        noOfMaleChildren: patientData?.noOfMaleChildren ?? 0,
        noOfSpouses: patientData?.numberOfSpouses ?? 0,
        nuclearFamilySize: patientData?.nuclearFamilySize ?? 0,
        positionInFamily: patientData?.positionInFamily,
        totalChildren:
          (patientData?.noOfFemaleChildren ?? 0) +
          (patientData?.noOfMaleChildren ?? 0),
        totalSiblings:
          (patientData?.noOfFemaleSiblings ?? 0) +
          (patientData?.noOfMaleSiblings ?? 0),
      }}
      patientCode={`${patientData?.patientCode}`}
      countryId={patientData?.countryId}
      stateOfOriginId={patientData?.stateOfOriginId}
      lgaOfOriginId={patientData?.districtId}
      occupationId={
        patientData?.patientOccupations?.find(el => el.isCurrent)?.occupationId
      }
    />
  );
};

const WardRoundAndClinicNotesView = () => {
  const navigation = useNavigation<GeneralNavProp>();

  const {id: patientId, code, fullName} = useAppSelector(selectPatient);

  const {data: patientRecentWardClinicNoteData} =
    useApiServicesAppPatientsGetpatientwardroundandclinicnotesGetQuery({
      patientId: patientId,
      maxResultCount: 5,
    });

  if (patientRecentWardClinicNoteData?.totalCount === 0) {
    return (
      <EmptyStateView
        title={'Ward round & Clinic notes'}
        description={'No ward round & clinic note has been saved'}
        buttonText={'View paper record'}
        Icon={DocumentIcon}
        onPress={() =>
          navigation.navigate(routesNames.FRONT_DESK.FD_ADD_NEW_APPOINTMENT, {
            patientId: Number(patientId),
          })
        }
      />
    );
  }

  return (
    <WardroundClinicNotesCard
      items={(patientRecentWardClinicNoteData?.items || [])?.map(
        (item, index) => ({
          id: `${item.clinic}-${item.ward}-${index}`,
          clinic: `${item.clinic}`,
          date: new Date(item?.dateTime || Date.now()),
          patientFullName: fullName,
        }),
      )}
      onPressViewRecords={() =>
        navigation.navigate(routesNames.VIEW_PARER_RECORDS_TAB, {
          patient: {
            id: patientId,
            code: code,
          },
          disableRegularTab: true,
        })
      }
    />
  );
};

const EmptyStateView = ({
  Icon = UserIcon,
  onPress,
  title,
  description,
  buttonText,
  showButton,
}: {
  title: string;
  description: string;
  buttonText?: string;
  showButton?: boolean;
  Icon?: React.FC<SvgProps>;
  onPress?: VoidFunction;
}) => {
  const {colors} = useColors();
  const styles = patientOverViewStyles({colors});
  return (
    <AppAlert
      title={title}
      description={description}
      buttonText={buttonText}
      showButton={showButton}
      onPress={onPress}
      icon={
        <AnimatedBubble
          bgColor={'primary25'}
          size={90}
          Icon={
            <View style={styles.userIcon}>
              <Icon fill={colors.white} width={36} height={36} />
            </View>
          }
        />
      }
    />
  );
};
