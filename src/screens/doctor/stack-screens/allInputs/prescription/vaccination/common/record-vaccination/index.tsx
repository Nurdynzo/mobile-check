import {ArrowRightIcon, CloseIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import AppActivityIndicator from '@/components/app-activity-indicator';
import {AllInputsPlusButton, AppButton} from '@/components/buttons';
import {AppRow, AppSeperator, AppText} from '@/components/common';
import {AllInputsSuggestionForm} from '@/components/forms';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {
  AppDateTimeInput,
  AppTextInput,
  AppToggleSwitch,
} from '@/components/inputs';
import {AppMenuSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {fs, wp} from '@/resources/config';
import {useApiServicesAppPatientsGetpatientdetailsGetQuery} from '@/state/services/patientApi';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {
  CreateVaccinationDto,
  VaccineScheduleDto,
} from '@/state/services/vaccineApi';
import {RootState} from '@/state/store';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING} from '@/utils/constants';
import {filterData} from '@/utils/helpers/filter-data';
import {
  generateVaccineMessage,
  getOrdinalNumber,
} from '@/utils/helpers/vaccine-util';
import React, {FunctionComponent} from 'react';
import {Control, useFieldArray} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {prescriptionStyles} from '../../../styles';
import {PatientVaccinationDto} from '../../../types';
import {VaccineScheduleDtoArray} from './schema';
import {useGetRecordedVaccinationHistory} from './use-get-recorded-vaccination-history';
import {useRecordVaccination} from './use-record-vaccination';

const RecordVaccination = ({encounterId}: {encounterId: number}) => {
  const {
    formProps,
    selectedItems,
    text,
    control,
    handleSubmit,
    apiVaccines,
    isCreatingVaccineRequest,
    apiSelectedVaccine,
    isFetchingSelectedVaccine,
    vaccination,
    handleSaveVaccination,
    handleClearVaccineForm,
    addSelectedVaccineForPreview,
    isFormValid,
    formatVaccineForPreview,
    allVaccines,
  } = useRecordVaccination({encounterId});

  const {id} = useSelector((state: RootState) => state.selectedPatient);
  const {handleRefetchRecordedVaccination} = useGetRecordedVaccinationHistory();

  const {data: patientDetails} =
    useApiServicesAppPatientsGetpatientdetailsGetQuery({patientId: id});

  const {colors} = useColors();
  const styles = prescriptionStyles({colors});
  const selectedItemName = selectedItems[0]?.name as string;
  return (
    <>
      <AllInputsSuggestionForm
        showRightView={false}
        extraBaseContainerStyle={{minHeight: undefined}}
        expandSheetHeaderTitle={EMPTY_STRING}
        showTextInput={selectedItems.length === 0}
        formProps={formProps}
        suggestions={
          (filterData(text, apiVaccines, 'name') ||
            []) as SnowstormSimpleResponseDto[]
        }
        isSingleSelect
      />
      {selectedItemName && (
        <View>
          <AppText
            type="subtitle_semibold"
            text={`${selectedItemName}`}
            style={{fontSize: fs(14)}}
          />
          <AppSeperator style={styles.divider} />
        </View>
      )}
      {isFetchingSelectedVaccine ? (
        <AppActivityIndicator />
      ) : (
        <>
          {apiSelectedVaccine?.schedules &&
            apiSelectedVaccine?.schedules?.length > 0 && (
              <ScrollView style={styles.vaccinesContainer}>
                <ArrayOfVaccines
                  title={selectedItemName}
                  control={control}
                  vaccines={apiSelectedVaccine?.schedules || []}
                />
              </ScrollView>
            )}
          <>
            {!isCreatingVaccineRequest &&
              apiSelectedVaccine?.schedules &&
              apiSelectedVaccine.schedules.length > 0 &&
              selectedItems && (
                <>
                  <AllInputsPlusButton
                    text={'Add vaccine'}
                    isDisabled={!isFormValid}
                    onPress={handleSubmit(data => {
                      addSelectedVaccineForPreview({
                        name: selectedItemName,
                        data: {
                          vaccines: data.vaccines.map(item => ({
                            ...item,
                            dueDate: item?.dueDate?.toLocaleString(),
                            dateAdministered:
                              item.dateAdministered?.toLocaleString(),
                          })),
                        },
                      });
                    })}
                    buttonStyle={styles.addVaccineContainer}
                  />

                  {vaccination.length > 0 && (
                    <AppButton
                      text={'Clear all'}
                      onPress={() => handleClearVaccineForm()}
                      textColor={'primary400'}
                      textType={'button_link_semibold'}
                      buttonColor={'transparent'}
                      height={16}
                      borderWidth={0}
                      // eslint-disable-next-line react-native/no-inline-styles
                      textStyle={{
                        textDecorationLine: 'underline',
                      }}
                      RightContent={
                        <CloseIcon
                          fill={colors.primary400}
                          width={wp(15)}
                          height={wp(15)}
                        />
                      }
                      containerStyle={styles.clearAllContainer}
                    />
                  )}
                </>
              )}

            {allVaccines.length > 0 &&
              allVaccines.map((vaccine, index) => {
                return (
                  <BriefSummary
                    key={index}
                    vaccineBatchNo={vaccine?.vaccineBatchNo}
                    vaccineBrand={vaccine?.vaccineBrand}
                    hasComplication={vaccine.hasComplication}
                    note={vaccine.note}
                    vaccine={formatVaccineForPreview(vaccine)}
                  />
                );
              })}
            <AppButton
              text="Save"
              isLoading={isCreatingVaccineRequest}
              onPress={() =>
                handleSaveVaccination(handleRefetchRecordedVaccination)
              }
              isDisabled={vaccination.length === 0}
            />
            <PatientVaccinationHistory
              patientFullName={patientDetails?.fullName as string}
            />
          </>
        </>
      )}
    </>
  );
};

export default RecordVaccination;

const BriefSummary = ({
  hasComplication,
  vaccineBrand,
  vaccineBatchNo,
  note,
  vaccine,
}: CreateVaccinationDto & {vaccine?: string}) => {
  return (
    <>
      <AllInputsHistoryTile
        time={EMPTY_STRING}
        date={EMPTY_STRING}
        hideTimeAndDate
        onPress={() => null}
        isLoading={false}
        textComponent={
          <>
            <AppText type="body_2_semibold" text={`${vaccine}`} />
            <AppText
              type="body_2_semibold"
              text={
                hasComplication
                  ? 'Complications experienced'
                  : 'No Complications experienced'
              }
            />
            <AppText type="body_2_semibold" text={`Brand: ${vaccineBrand}`} />
            <AppText
              type="body_2_semibold"
              text={`Batch number: ${vaccineBatchNo}`}
            />
            <AppText type="body_2_semibold" text={`Note: ${note}`} />
          </>
        }
      />
    </>
  );
};

export const ArrayOfVaccines: FunctionComponent<{
  control: Control<VaccineScheduleDtoArray>;
  vaccines?: VaccineScheduleDto[];
  showTitle?: boolean;
  title?: string;
}> = ({control, vaccines = [], showTitle = true, title}) => {
  const name = 'vaccines';
  const {fields} = useFieldArray({control, name});
  const {colors} = useColors();
  const styles = prescriptionStyles({colors});
  return (
    <>
      {fields.map((_, index: number) => {
        const nameRef = `${name}.${index}` as const;
        const vaccine = vaccines[index];
        return (
          <View key={index} style={{gap: wp(15)}}>
            {index > 0 && <AppSeperator style={styles.divider} />}
            {showTitle && (
              <AppText
                type="subtitle_semibold"
                text={`${title} ${getOrdinalNumber(index + 1)} dose`}
                style={{fontSize: fs(14)}}
              />
            )}

            <FormFieldController
              name={`${nameRef}.dueDate`}
              control={control}
              Field={({onChange, value}) => {
                return (
                  <AppDateTimeInput
                    mode={'date'}
                    label={
                      vaccine?.notes ||
                      `Due at ${
                        vaccine?.ageMin === 0 ? 'birth' : vaccine?.ageMin
                      } ${
                        vaccine?.ageMin !== 0
                          ? vaccine?.ageMinUnit
                          : EMPTY_STRING
                      }`
                    }
                    extraFontStyle={{fontSize: fs(12)}}
                    placeholder="12 Nov 2024"
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.isAdministered`}
              control={control}
              Field={({onChange, value}) => {
                return (
                  <VaccineToggle
                    isOn={value}
                    onChange={onChange}
                    label="Administered"
                  />
                );
              }}
            />

            <FormFieldController
              name={`${nameRef}.dateAdministered`}
              control={control}
              Field={({onChange, value}) => {
                return (
                  <AppDateTimeInput
                    mode={'date'}
                    label="Date administered"
                    extraFontStyle={{fontSize: fs(12)}}
                    placeholder="12 Nov 2024"
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />

            <FormFieldController
              name={`${nameRef}.hasComplication`}
              control={control}
              Field={({onChange, value}) => {
                return (
                  <VaccineToggle
                    isOn={value}
                    onChange={onChange}
                    label="Complications experienced"
                  />
                );
              }}
            />

            <FormFieldController
              name={`${nameRef}.vaccineBrand`}
              control={control}
              Field={({onChange, value}) => {
                return (
                  <AppTextInput
                    label="Brand"
                    placeholder="Enter brand"
                    value={value}
                    onChangeText={onChange}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.vaccineBatchNo`}
              control={control}
              Field={({onChange, value}) => {
                return (
                  <AppTextInput
                    label="Batch number"
                    placeholder="Enter batch number"
                    value={value}
                    onChangeText={onChange}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.note`}
              control={control}
              Field={({onChange, value}) => {
                return (
                  <AppTextInput
                    placeholder="Add notes"
                    height={80}
                    value={value}
                    onChangeText={onChange}
                    multiline
                  />
                );
              }}
            />
          </View>
        );
      })}
    </>
  );
};

const VaccineToggle = ({
  onChange,
  isOn,
  label,
}: {
  onChange: (text: boolean) => void;
  isOn: boolean;
  label: string;
}) => {
  return (
    <AppRow>
      <AppText type="body_1_medium" color="text300" text={label} />
      <AppToggleSwitch isOn={isOn} onToggle={onChange} />
    </AppRow>
  );
};

const PatientVaccinationHistory: FunctionComponent<{
  patientFullName: string;
}> = ({patientFullName}) => {
  const {colors} = useColors();
  const styles = prescriptionStyles({colors});

  const {apiVaccinationHistory} = useGetRecordedVaccinationHistory();
  if (!apiVaccinationHistory?.length) {
    return <></>;
  }

  return (
    <>
      <AppSeperator style={styles.seperator} />
      <AllInputsHistoryListView
        data={apiVaccinationHistory}
        renderItem={({item}) => (
          <PatientVaccinationHistoryCard
            key={item.id}
            patientFullName={patientFullName}
            item={item as PatientVaccinationDto}
          />
        )}
      />
    </>
  );
};

const PatientVaccinationHistoryCard: FunctionComponent<{
  item: PatientVaccinationDto;
  patientFullName: string;
}> = ({item}) => {
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Discontinue', onPress: () => null},
    {value: 'Kiv meds', onPress: () => null},
    {value: 'Alternate with', onPress: () => null},
    {value: 'Mark as administered', onPress: () => null},
  ];

  return (
    <>
      <AllInputsHistoryTile
        date={'Today'} //TODO(Zucci) Either confirm this endpoint is the actual EP or ask BE to put date and time props.
        time={'9:00 AM'}
        onPress={openSheet}
        isLoading={false}
        textComponent={
          <AppText
            text={generateVaccineMessage(item)}
            type="body_2_semibold"
            color="text400"
          />
        }
      />
      <AppMenuSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        removeHeader
        renderRightIcon={() => <ArrowRightIcon />}
        menuOptions={menuOptions}
      />
    </>
  );
};
