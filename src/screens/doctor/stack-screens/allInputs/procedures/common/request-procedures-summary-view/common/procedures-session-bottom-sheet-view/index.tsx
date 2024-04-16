import {AppRow, AppText} from '@/components/common';
import {
  AppSelectInput,
  AppDateTimeInput,
  AppButtonInput,
  AppToggleSwitch,
} from '@/components/inputs';
import SelectWithLeftInput from '@/components/inputs/select-with-left-input';
import {procedureDuration} from '@/constants/procedures';
import {OperatingRoomDto} from '@/state/services/procedureApi';
import {SelectItemOptionsProp, SelectItem} from '@/types/selectItemsheet';
import {EMPTY_STRING} from '@/utils/constants';
import {ScheduleProcedureDataType, SelectedProcedureType} from '../../types';
import React, {ReactNode} from 'react';
import {DownCaretIcon} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {AppContentSheet} from '@/components/sheets';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {ModalizeSheetRef} from '@/types/sheet';
import VoidFunction from '@/types/voidfunction';
import {ScrollView} from 'react-native';
import {proceduresSessionBottomSheetViewStyles} from './styles';
import {useProcedureSessionFormType} from '../use-procedures-session-form';

const ProceduresSessionBottomSheetView = ({
  onSave,
  isSaving,
  formProps,
  AnaesthetistView,
  sheetRef,
  headerTitle,
}: {
  isSaving: boolean;
  headerTitle: string;
  onSave: VoidFunction;
  AnaesthetistView?: ReactNode;
  formProps: useProcedureSessionFormType;
  sheetRef: ModalizeSheetRef | undefined;
}) => {
  const styles = proceduresSessionBottomSheetViewStyles;

  const {
    code: patientCode,
    dateOfBirth: patientDateOfBirth,
    gender: patientGender,
    fullName: patientFullName,
  } = useAppSelector(selectPatient);

  const {
    isSameSession,
    selectedProcedures,
    isSaveDisabled,
    handleOnSameSessionToogle,

    itemExists,
    toggleSelection,
    scheduledProcedures,
    listOfProcedures,
  } = formProps;

  return (
    <AppContentSheet
      contentHeight={772}
      containerStyle={styles.sheetContainer}
      sheetRef={sheetRef}
      headerTitle={headerTitle}>
      <PatientInfoCard
        fullName={patientFullName}
        code={patientCode}
        dateOfBirth={patientDateOfBirth}
        gender={patientGender}
      />
      <ScrollView
        nestedScrollEnabled
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sheetChildrenContainer}>
        <ProceduresInput
          itemExists={itemExists}
          toggleSelection={toggleSelection}
          listOfProcedures={listOfProcedures}
          scheduledProcedures={scheduledProcedures}
        />
        {AnaesthetistView}
        {selectedProcedures.length > 1 && (
          <AppRow>
            <AppText
              type={'body_1_medium'}
              color={'text300'}
              text={'Are the procedures in the same session'}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{flex: 1}}
            />

            <AppToggleSwitch
              isOn={isSameSession}
              onToggle={handleOnSameSessionToogle}
            />
          </AppRow>
        )}

        <ProceduresSessionForm formProps={formProps} />
        <AppButton
          width={80}
          text={'Save'}
          isLoading={isSaving}
          isDisabled={isSaveDisabled()}
          onPress={onSave}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{alignSelf: 'flex-end'}}
        />
      </ScrollView>
    </AppContentSheet>
  );
};

export default ProceduresSessionBottomSheetView;

const ProceduresInput = ({
  itemExists,
  toggleSelection,
  listOfProcedures,
  scheduledProcedures,
}: {
  scheduledProcedures: string;
  itemExists: (item: SelectedProcedureType) => boolean;
  toggleSelection: (item: SelectedProcedureType) => void;
  listOfProcedures: SelectItemOptionsProp<SelectedProcedureType>;
}) => {
  const {colors} = useColors();
  const {openSheet: openSelectProcedureSheet, sheetRef: selectProcedureSheet} =
    useSheet();
  return (
    <>
      <AppButtonInput
        isFocused={false}
        placeholder={'Procedure(s)'}
        label={'Procedure(s)'}
        value={scheduledProcedures}
        onPress={openSelectProcedureSheet}
        RightContent={<DownCaretIcon stroke={colors.text400} />}
      />
      <AppSelectItemSheet
        sheetRef={selectProcedureSheet}
        isMultiSelect={true}
        selectOptions={listOfProcedures}
        onChanged={value => {
          if (value.item.data) {
            toggleSelection(value.item.data);
          }
        }}
        isOptionSelected={option => {
          return itemExists(option.item.data as SelectedProcedureType);
        }}
      />
    </>
  );
};

const ProceduresSessionForm = ({
  formProps: {
    selectedProcedures,
    listOfOperatingRooms,
    isSameSession,
    scheduledProcedures,
    onDateSelected,
    onTimeSelected,
    onLocationSelected,
    onChangeDurationLength,
    onChangeDuration,
    isFetchingOperatingRooms,
  },
}: {
  formProps: useProcedureSessionFormType;
}) => {
  return isSameSession ? (
    <SchedulingForm
      data={selectedProcedures[0]}
      listOfOperatingRooms={listOfOperatingRooms}
      isSameSession={true}
      scheduledProcedures={scheduledProcedures}
      isFetchingOperatingRooms={isFetchingOperatingRooms}
      onDateSelected={date => {
        onDateSelected(date, 0);
      }}
      onTimeSelected={time => {
        onTimeSelected(time, 0);
      }}
      onLocationSelected={location => {
        onLocationSelected(location, 0);
      }}
      onChangeDuration={duration => {
        onChangeDuration(duration, 0);
      }}
      onChangeDurationLength={length => {
        onChangeDurationLength(length, 0);
      }}
    />
  ) : (
    <>
      {selectedProcedures.map((data, index) => (
        <SchedulingForm
          key={index}
          data={data}
          isFetchingOperatingRooms={isFetchingOperatingRooms}
          listOfOperatingRooms={listOfOperatingRooms}
          onDateSelected={date => {
            onDateSelected(date, index);
          }}
          onTimeSelected={time => {
            onTimeSelected(time, index);
          }}
          onLocationSelected={location => {
            onLocationSelected(location, index);
          }}
          onChangeDuration={duration => {
            onChangeDuration(duration, index);
          }}
          onChangeDurationLength={length => {
            onChangeDurationLength(length, index);
          }}
        />
      ))}
    </>
  );
};

const SchedulingForm = ({
  data,
  listOfOperatingRooms,
  onDateSelected,
  onTimeSelected,
  onLocationSelected,
  onChangeDurationLength,
  onChangeDuration,
  isSameSession = false,
  scheduledProcedures = EMPTY_STRING,
  isFetchingOperatingRooms,
}: {
  data: ScheduleProcedureDataType;
  listOfOperatingRooms: SelectItemOptionsProp<OperatingRoomDto>;
  onDateSelected: (date: Date) => void;
  onTimeSelected: (time: Date) => void;
  onLocationSelected: (location: SelectItem<OperatingRoomDto>) => void;
  onChangeDurationLength: (length: string) => void;
  onChangeDuration: (duration: string) => void;
  isSameSession?: boolean;
  scheduledProcedures?: string;
  isFetchingOperatingRooms: boolean;
}) => {
  const today = new Date();

  return (
    <>
      <AppText
        type={'subtitle_semibold'}
        text={
          isSameSession ? scheduledProcedures : data.procedure.procedureName
        }
      />
      <AppSelectInput
        label={'Location of the procedure'}
        placeholder={'Select location'}
        value={data.operatingRoom?.roomName ?? EMPTY_STRING}
        selectOptions={listOfOperatingRooms}
        isOptionsLoading={isFetchingOperatingRooms}
        onChange={onLocationSelected}
      />

      <SelectWithLeftInput
        leftValue={data.duration?.length}
        value={data.duration?.duration}
        label={'Duration of the procedure'}
        leftValuePlaceholder={'0'}
        placeholder={'Select unit'}
        selectOptions={procedureDuration}
        onChangeLeftValueText={onChangeDurationLength}
        onChange={item => {
          onChangeDuration(item.value);
        }}
      />
      <AppDateTimeInput
        mode={'date'}
        label={'Proposed date'}
        minimumDate={today}
        value={data.date}
        placeholder={'Select a date'}
        onChange={value => {
          if (value) {
            onDateSelected(value);
          }
        }}
      />
      <AppDateTimeInput
        mode={'time'}
        label={'Proposed time'}
        minimumDate={today}
        value={data.time}
        placeholder={'Select a time'}
        onChange={value => {
          if (value) {
            onTimeSelected(value);
          }
        }}
      />
    </>
  );
};
