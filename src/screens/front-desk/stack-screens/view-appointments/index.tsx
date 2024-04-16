import {
  CalenderPlusIcon,
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
} from '@/assets/svg';
import AppActivityIndicator from '@/components/app-activity-indicator';
import AppScreen from '@/components/app-screen';
import AppointmentDateRangerPicker from '@/components/appointment-date-range-picker';
import {AppButton, AppTouchButton} from '@/components/buttons';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import AppointmentCardDetails from '@/components/cards/appointment-details-card';
import {AppRow, AppText} from '@/components/common';
import {AppHeader} from '@/components/headers';
import ListRendererScreen from '@/components/list-renderer-screen';
import {AppMenuSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {routesNames} from '@/navigation/routes';
import {GeneralScreenProps} from '@/navigation/types';
import {wp} from '@/resources/config';
import {AppointmentListResponse} from '@/state/services/appointmentApi';
import {
  convertToReadableDate,
  convertToReadableTime,
} from '@/utils/helpers/convertDateTime';
import {NOT_AVAILABLE} from '@/utils/index';
import React, {FunctionComponent} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {viewAppointmentStyles} from './styles';
import {useViewAppointments} from './useViewAppointments';
import {FrontDeskPatientProfileMenuModal} from '@/components/patient-profile-overlay';

const ViewAppointments: FunctionComponent<
  GeneralScreenProps<'FD_VIEW_APPOINTMENT_INFO'>
> = ({navigation}) => {
  const {
    appointmentsForThisPatient,
    isLoading,
    isFetching,
    sortByOptions,
    openSortBySheet,
    selectedSort,
    setSelectedSort,
    handleLoadMoreAppointments,
    currentPatient,
    sortSheet,
    deleteAppointmentById,
    isDeleting,
    dateRange,
    handleDateRangeChanged,
    showCalenderRange,
    setShowCalenderRange,
    setDateRange,
    refreshing,
    handleRefresh,
  } = useViewAppointments();

  const {colors} = useColors();

  const styles = viewAppointmentStyles({colors});

  const handleRenderHeader = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          {isDeleting ? <AppActivityIndicator color={'black'} /> : <></>}
          <View style={styles.content}>
            <PatientInfoCard
              fullName={currentPatient.fullName}
              code={currentPatient.code}
              dateOfBirth={currentPatient.dateOfBirth}
              gender={currentPatient.gender}
              avatar={currentPatient.pic}
            />
            <AppRow>
              <AppButton
                RightContent={<CalenderPlusIcon fill={colors.white} />}
                text="Create appointment"
                containerStyle={{width: wp(200)}}
                onPress={() => {
                  navigation.navigate(
                    routesNames.FRONT_DESK.FD_ADD_NEW_APPOINTMENT,
                    {patientId: currentPatient?.id as number},
                  );
                }}
              />
              <AppTouchButton
                onPress={openSortBySheet}
                text="All-time"
                color="text400"
                rightIcon={<DownCaretIcon stroke={colors.text400} />}
              />
            </AppRow>
          </View>
        </View>
      </>
    );
  };

  const handleHiddenContent = () => {
    return (
      <>
        <AppMenuSheet
          removeHeader
          sheetRef={sortSheet}
          renderRightIcon={({isSelected}) =>
            isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
          }
          selectedValue={`${selectedSort}`}
          menuOptions={sortByOptions}
          onSelectItem={({item}) => setSelectedSort(item)}
        />
        <AppointmentDateRangerPicker
          mode="date"
          from={dateRange.from as Date}
          to={dateRange.to as Date}
          onCancel={() => setShowCalenderRange(false)}
          onChangeFrom={from =>
            setDateRange({...dateRange, from}) as Date | string | undefined
          }
          onChangeTo={to => setDateRange({...dateRange, to})}
          onDone={handleDateRangeChanged}
          onOverlayTap={() => setShowCalenderRange(false)}
          show={showCalenderRange}
        />
      </>
    );
  };

  const handleRenderListOfAppointments = (item: AppointmentListResponse) => {
    return (
      <>
        <AppointmentCardDetails
          status={item?.status ?? NOT_AVAILABLE}
          appointmentID={item.id ?? -10}
          patientID={currentPatient?.id ?? -13}
          title={item?.title ?? ''}
          clinicName={`${item?.attendingClinic?.displayName ?? NOT_AVAILABLE}`}
          appointmentScanStatus={item?.scanningStatus}
          date={convertToReadableDate(item?.startTime)}
          time={convertToReadableTime(item?.startTime)}
          clinician={item.attendingPhysician?.fullName ?? NOT_AVAILABLE}
          referralLetter={item?.referralDocument?.referralDocument ?? ''}
          onPressDelete={() => {
            deleteAppointmentById({id: item.id});
          }}
          onPressEdit={() =>
            navigation.navigate(routesNames.FRONT_DESK.FD_EDIT_APPOINTMENT, {
              patientId: currentPatient?.id as number,
              appointmentData: item,
            })
          }
          onCreateInvoice={() => {
            navigation?.navigate(routesNames.FRONT_DESK.FD_CREATE_INVOICE, {
              appointment: {
                id: item?.id as number,
                title: item?.title as string,
                type: item?.type as string,
                time: convertToReadableTime(item?.startTime),
              },
              patientId: Number(currentPatient?.id),
            });
          }}
        />
      </>
    );
  };

  return (
    <>
      <AppScreen
        isScrollable={false}
        paddingHorizontal={24}
        ScreenHeader={<AppHeader middleTitle="Appointment information" />}>
        <ListRendererScreen
          refreshing={refreshing}
          onRefresh={handleRefresh}
          HeaderComponent={handleRenderHeader()}
          data={appointmentsForThisPatient}
          renderItem={({item}) => handleRenderListOfAppointments(item)}
          keyExtractor={(_, index) => `${index}`}
          onLoadMore={handleLoadMoreAppointments}
          children={undefined}
          FooterComponent={
            isLoading || isFetching ? (
              <ActivityIndicator color={colors.black} />
            ) : (
              <></>
            )
          }
          ListEmptyComponent={
            !isLoading && !isFetching ? (
              <AppText
                text={
                  dateRange.from && dateRange.to
                    ? `No appointment for ${currentPatient.fullName} between ${
                        dateRange.from
                          ? convertToReadableDate(dateRange.from)
                          : 'now'
                      } and ${
                        dateRange.to
                          ? convertToReadableDate(dateRange.to)
                          : 'now'
                      }`
                    : `No appointment for ${currentPatient.fullName}`
                }
                align="center"
              />
            ) : (
              <></>
            )
          }
        />
        {handleHiddenContent()}
      </AppScreen>
      <FrontDeskPatientProfileMenuModal />
    </>
  );
};

export default ViewAppointments;
