import {
  ActiveCalendarIcon,
  AnalyticIcon,
  ArrowDownFilled,
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
  RightCaretIcon,
  SearchIcon,
  SortDown,
} from '@/assets/svg';
import AppScreen from '@/components/app-screen';
import AppointmentDateRangerPicker from '@/components/appointment-date-range-picker';
import {
  AppButton,
  AppIconButton,
  AppLink,
  AppTouchButton,
} from '@/components/buttons';
import RecordCard from '@/components/cards/record-card';
import {AppAlert, AppRow} from '@/components/common';
import {WelcomeHeader} from '@/components/headers';
import Overlay from '@/components/overlay';
import SearchPatientResultContainer from '@/components/search-patient-result-container';
import {AppMenuSheet} from '@/components/sheets';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import useGetClinics from './use-get-clinics/index';
import {useColors} from '@/hooks/useColors';
import {routesNames} from '@/navigation/routes';
import {AppointmentListResponse} from '@/state/services/appointmentApi';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING, NOT_AVAILABLE} from '@/utils/constants';
import {
  convertToReadableDate,
  convertToReadableTime,
} from '@/utils/helpers/convertDateTime';
import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {recordStyles} from './styles';
import {useSheet} from '@/hooks/useSheet';
import {useRecords} from './use-records';
import {recordsSortByOptions} from '@/constants/index';
import PaginatedListView from '@/components/paginated-list-view';
import {GeneralNavProp} from '@/navigation/types';
import {RecordsSortType} from './type';
import VoidFunction from '@/types/voidfunction';
import useRecordsSortBy from './use-records-sortby';
import {getRecordsLandingListAppointments} from '@/utils/helpers';
import {ItemOptionProp} from '@/types/selectItemsheet';
import {useNavigation} from '@react-navigation/native';
import AlertBubbleIconWrapper from '@/components/alert-bubble-icon-wrapper';
import AnimatedBubble from '@/components/animated-bubble';
import {hp} from '@/resources/config';

const Records = () => {
  const sortByProps = useRecordsSortBy();

  const clinicFilterProps = useGetClinics();

  const {
    appointments,
    paginationState,
    showCalenderRange,
    setShowCalenderRange,
    showSearch,
    setShowSearch,
    handleLoadMoreAppointments,
    handleDateRangeChanged,
    handleSelectedPatientFromSearchResult,
    handleRefresh,
    currentlySearchedPatient,
    handleFirstPageRefetch,
  } = useRecords({
    attendingClinic: clinicFilterProps.selectedClinic,
  });

  const {colors} = useColors();

  const styles = recordStyles({colors});

  return (
    <>
      <AppScreen
        isScrollable={false}
        nestedScrollEnabled
        paddingHorizontal={24}
        ScreenHeader={
          <HeaderView>
            <AppRow>
              <PatientActivitiesButtonView />
              <AppIconButton
                onPress={() => setShowSearch(true)}
                icon={<SearchIcon stroke={colors.primary400} />}
              />
            </AppRow>
            <AppRow justifyContent={'space-between'} columnGap={42}>
              <ClinicFilterButtonView {...clinicFilterProps} />
              <SortByButtonView {...sortByProps} />
              <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{flex: 20}}
                onPress={() => setShowCalenderRange(true)}>
                <ActiveCalendarIcon fill={colors.primary400} />
              </TouchableOpacity>
            </AppRow>
          </HeaderView>
        }>
        <PaginatedListView
          paginationState={paginationState}
          onRefresh={handleRefresh}
          handleFirstPageRefetch={handleFirstPageRefetch}
          onLoadMore={handleLoadMoreAppointments}
          EmptyStateComponent={<EmptyStateComponent />}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={(_, index) => `${index}`}
          data={getRecordsLandingListAppointments(
            appointments,
            sortByProps.selectedSort,
            currentlySearchedPatient,
          )}
        />
      </AppScreen>

      <AppButton
        text="Analytics"
        containerStyle={styles.floatingBtn}
        LeftContent={<AnalyticIcon />}
      />

      <AppointmentDateRangerPicker
        mode={'date'}
        onCancel={() => setShowCalenderRange(false)}
        onDone={handleDateRangeChanged}
        onOverlayTap={() => setShowCalenderRange(false)}
        show={showCalenderRange}
      />

      <Overlay
        offset={170}
        onOverlayTap={() => setShowSearch(false)}
        show={showSearch}
        shouldUserOverlayContentStyles={false}>
        <SearchPatientResultContainer
          autoFocus
          onSelectPatient={handleSelectedPatientFromSearchResult}
        />
      </Overlay>
    </>
  );
};

export default Records;

const HeaderView = ({children}: {children: ReactNode}) => {
  const {colors} = useColors();

  const styles = recordStyles({colors});
  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const PatientActivitiesButtonView = () => {
  const {colors} = useColors();
  const navigation = useNavigation<GeneralNavProp>();
  const {sheetRef: menuSheet, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {
      value: 'Add new patient',
      onPress: () => {
        navigation.navigate(routesNames.FRONT_DESK.FD_ADD_NEW_PATIENT);
      },
    },
    {
      value: 'Create appointment',
      onPress: () => {
        navigation.navigate(routesNames.FRONT_DESK.FD_ADD_NEW_APPOINTMENT, {});
      },
    },
  ];

  return (
    <>
      <AppButton
        onPress={openSheet}
        RightContent={<ArrowDownFilled />}
        text="Patient activities"
        width={170}
      />
      <AppMenuSheet
        closeSheet={closeSheet}
        title="Patient activities"
        menuOptions={menuOptions}
        sheetRef={menuSheet}
        renderRightIcon={() => <RightCaretIcon stroke={colors.text400} />}
      />
    </>
  );
};

const ClinicFilterButtonView = ({
  selectedClinic,
  isLoadingAllClinics,
  getClinics,
  setQueryForClinics,
  setSelectedClinic,
}: {
  isLoadingAllClinics: boolean;
  setQueryForClinics: React.Dispatch<React.SetStateAction<string>>;
  getClinics: () => ItemOptionProp<string>[];
  selectedClinic: string;
  setSelectedClinic: React.Dispatch<string>;
}) => {
  const {colors} = useColors();
  const {
    sheetRef: clinicSheet,
    openSheet: openClinicSheet,
    closeSheet: closeClinicSheet,
  } = useSheet();
  return (
    <>
      <AppTouchButton
        flex={86}
        textNumberOfLines={1}
        onPress={openClinicSheet}
        text={selectedClinic}
        color={'text400'}
        rightIcon={<DownCaretIcon stroke={colors.text400} />}
      />
      <AppSelectItemSheet
        title={'Clinic'}
        enableScroll
        showSearchInput
        contentHeight={450}
        sheetRef={clinicSheet}
        isLoading={isLoadingAllClinics}
        selectOptions={getClinics()}
        selectedValue={`${selectedClinic}`}
        onSearchInputChange={text => setQueryForClinics(text)}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        onSelectItem={({item}) => {
          setSelectedClinic(item.value);
          closeClinicSheet();
        }}
      />
    </>
  );
};

const SortByButtonView = ({
  resetSort,
  selectedSort,
  handleSelectedSort,
}: {
  resetSort: VoidFunction;
  selectedSort: RecordsSortType;
  handleSelectedSort: (item: RecordsSortType) => void;
}) => {
  const {colors} = useColors();
  const {
    sheetRef: sortSheet,
    openSheet: openSortBySheet,
    closeSheet: closeSortSheet,
  } = useSheet();
  return (
    <>
      <AppTouchButton
        flex={96}
        textNumberOfLines={1}
        onPress={openSortBySheet}
        text={selectedSort.label}
        rightIcon={<DownCaretIcon stroke={colors.text400} />}
        leftIcon={<SortDown />}
      />
      <AppSelectItemSheet
        title={'Sort by'}
        enableScroll
        contentHeight={383}
        sheetRef={sortSheet}
        selectedValue={selectedSort.label}
        selectOptions={recordsSortByOptions}
        onSelectItem={({item}) => {
          handleSelectedSort({
            label: item.value,
            value: item.data ?? EMPTY_STRING,
          });
          closeSortSheet();
        }}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        HeaderRightContent={
          <AppLink
            text={'Reset'}
            onPress={() => {
              resetSort();
              closeSortSheet();
            }}
          />
        }
      />
    </>
  );
};

const Card = ({item}: {item: AppointmentListResponse}) => {
  const {appointmentPatient} = item;
  return (
    <RecordCard
      appointmentId={item?.id || 0}
      appointmentType={item?.type ?? NOT_AVAILABLE}
      patient={appointmentPatient ?? {}}
      appButtonText={EMPTY_STRING}
      status={item?.status ?? NOT_AVAILABLE}
      appointmentTitle={item.title ?? EMPTY_STRING}
      clinicName={item?.attendingClinic?.displayName ?? NOT_AVAILABLE}
      appointmentScanStatus={item?.scanningStatus}
      appointmentDate={
        item?.startTime ? convertToReadableDate(item?.startTime) : NOT_AVAILABLE
      }
      appointmentTime={
        item?.startTime ? convertToReadableTime(item?.startTime) : NOT_AVAILABLE
      }
    />
  );
};

const EmptyStateComponent = () => {
  const {colors} = useColors();

  const navigation = useNavigation<GeneralNavProp>();

  const onPress = () =>
    navigation.navigate(routesNames.FRONT_DESK.FD_ADD_NEW_APPOINTMENT, {});

  return (
    <AppAlert
      title={'Appointments'}
      description={'No appointment has been scheduled'}
      buttonText={'Create appointment'}
      buttonWidth={null}
      onPress={onPress}
      containerStyle={{
        marginTop: hp(64),
      }}
      icon={
        <AnimatedBubble
          bgColor={'primary25'}
          size={90}
          Icon={
            <AlertBubbleIconWrapper
              colorKey={'primary100'}
              icon={
                <ActiveCalendarIcon
                  fill={colors.white}
                  width={36}
                  height={36}
                />
              }
            />
          }
        />
      }
    />
  );
};
