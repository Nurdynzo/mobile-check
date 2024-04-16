/* eslint-disable react/no-unstable-nested-components */
import {HealthShieldIcon, MoreVerticalIcon, PlusCircleIcon} from '@/assets/svg';
import AnimatedBubble from '@/components/animated-bubble';
import {AppButton} from '@/components/buttons';
import {LabelValueText} from '@/components/cards';
import {AppAlert, AppRow, AppSeperator} from '@/components/common';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {AppDateTimeInput, AppTextInput} from '@/components/inputs';
import {InsuranceProviderTypeSelectInput} from '@/components/inputs/form-select-input';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {detectTouch} from '@/resources/config';
import {CreateOrEditPatientDto} from '@/state/services/patientApi';
import {
  DateTimeFieldControls,
  InputFieldControls,
} from '@/types/formFieldsControls';
import {BaseSheetProps} from '@/types/sheet';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent} from 'react';
import {useForm} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import {
  DetailedHistoryHeader,
  EditFormFieldsContainer,
  OptionsSheet,
} from '../common';
import {InsuranceDetailsFormSchema, insuranceDetailsFormSchema} from './schema';
import {
  insuranceFormSheetStyles,
  insuranceHistoryCardStyles,
  insuranceHistoryStyles,
} from './styles';
import AlertBubbleIconWrapper from '@/components/alert-bubble-icon-wrapper';

const InsuranceHistory: FunctionComponent<{
  patientData: CreateOrEditPatientDto | undefined;
  onPressEdit?: () => void;
}> = ({onPressEdit}) => {
  const {colors} = useColors();
  const styles = insuranceHistoryStyles({colors});
  return (
    <View style={styles.container}>
      <DetailedHistoryHeader
        buttonTitle="Edit"
        onButtonPress={onPressEdit}
        title="Insurance Info"
        lastEntered={
          false
            ? {
                by: 'Mr Franklyn',
                day: '23 Nov 2023',
                time: '11: 23 PM',
              }
            : undefined
        }
      />
      {false ? (
        <>
          <InsuranceHistoryCard />
        </>
      ) : (
        <AppAlert
          title="Insurance Info"
          description="No insurance info has been saved"
          showButton={false}
          icon={
            <AnimatedBubble
              bgColor="primary25"
              size={90}
              Icon={
                <AlertBubbleIconWrapper
                  icon={
                    <HealthShieldIcon
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
      )}
    </View>
  );
};

const InsuranceHistoryEdit: FunctionComponent<{
  patientData: CreateOrEditPatientDto | undefined;
  onClose?: () => void;
}> = ({onClose}) => {
  const {colors} = useColors();
  const styles = insuranceHistoryStyles({colors});
  const {
    closeSheet: closeAddInsuranceSheet,
    openSheet: openAddInsuranceSheet,
    sheetRef: addInsuranceSheetRef,
  } = useSheet();
  return (
    <View style={[styles.container, styles.editContainer]}>
      <DetailedHistoryHeader
        buttonTitle="Done"
        onButtonPress={onClose}
        title="Insurance Info"
      />
      <EditFormFieldsContainer>
        <AppButton
          onPress={openAddInsuranceSheet}
          text={'Add new'}
          buttonColor="white"
          borderColor="primary400"
          textColor="primary400"
          borderWidth={1}
          LeftContent={<PlusCircleIcon fill={colors.primary400} />}
          containerStyle={styles.btn}
        />
        <InsuranceHistoryCard />
        <AppSeperator />
        <InsuranceHistoryCard />
      </EditFormFieldsContainer>
      <InsuranceDetailsFormSheet
        headerTitle="Add member details"
        sheetRef={addInsuranceSheetRef}
        closeSheet={closeAddInsuranceSheet}
        submitBtnTitle={'Save'}
      />
    </View>
  );
};

const InsuranceHistoryCard: FunctionComponent = () => {
  const styles = insuranceHistoryCardStyles;
  const {
    closeSheet: closeOptionsSheet,
    openSheet: openOptionsSheet,
    sheetRef: optionsSheetRef,
  } = useSheet();
  const {
    closeSheet: closeEditInsuranceSheet,
    openSheet: openEditInsuranceSheet,
    sheetRef: editInsuranceSheetRef,
  } = useSheet();
  const {colors} = useColors();
  return (
    <View>
      <View style={styles.container}>
        <AppRow alignItems="flex-start">
          <LabelValueText label={'Insurance provider type'} value={'probs'} />
          <LabelValueText label={'Status'} value={'probs'} />
        </AppRow>
        <AppRow alignItems="flex-start">
          <LabelValueText label={'Insurance provider'} value={'probs'} />
          <LabelValueText label={'Insurance number'} value={'probs'} />
        </AppRow>
        <AppRow alignItems="flex-start">
          <LabelValueText label={'Insurance coverage'} value={'probs'} />
          <LabelValueText label={'Registration type'} value={'probs'} />
        </AppRow>
        <AppRow alignItems="flex-start">
          <LabelValueText label={'Start date'} value={'probs'} />
          <LabelValueText label={'End date'} value={'probs'} />
        </AppRow>
      </View>
      <TouchableOpacity
        onPress={openOptionsSheet}
        hitSlop={detectTouch}
        style={styles.optionBtn}>
        <MoreVerticalIcon stroke={colors.black} />
      </TouchableOpacity>
      <OptionsSheet
        closeSheet={closeOptionsSheet}
        sheetRef={optionsSheetRef}
        onDeletePress={() => null}
        onEditPress={openEditInsuranceSheet}
      />
      <InsuranceDetailsFormSheet
        headerTitle="Edit insurance details"
        sheetRef={editInsuranceSheetRef}
        closeSheet={closeEditInsuranceSheet}
        submitBtnTitle={'Update'}
      />
    </View>
  );
};

const InsuranceDetailsFormSheet: FunctionComponent<
  {
    defaultValues?: InsuranceDetailsFormSchema;
    onSubmit?: (props: {
      values: InsuranceDetailsFormSchema;
      reset: () => void;
    }) => void;
    headerTitle: string;
    submitBtnTitle: string;
  } & BaseSheetProps
> = ({
  closeSheet,
  sheetRef,
  defaultValues,
  onSubmit = () => null,
  headerTitle,
  submitBtnTitle,
}) => {
  const styles = insuranceFormSheetStyles;
  const {control, handleSubmit, reset} = useForm<InsuranceDetailsFormSchema>({
    defaultValues,
    resolver: zodResolver(insuranceDetailsFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  return (
    <AppContentSheet
      headerTitle={headerTitle}
      closeSheet={closeSheet}
      FooterComponent={
        <View style={styles.footerContainer}>
          <AppButton
            text={submitBtnTitle}
            onPress={handleSubmit(values => onSubmit({values, reset}))}
          />
        </View>
      }
      sheetRef={sheetRef}>
      <View style={styles.container}>
        <InsuranceProviderTypeSelectInput control={control} name="type" />

        <FormFieldController
          name="provider"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Insurance provider"
                placeholder="Select provider"
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name="coverage"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Insurance coverage"
                placeholder="Select insurance coverage"
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name="insuranceNumber"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Insurance number"
                placeholder="Enter insurance number"
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name="registrationType"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Registration type"
                placeholder="Select registration type"
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />

        <FormFieldController
          name="startDate"
          control={control}
          Field={({onChange, value}: DateTimeFieldControls) => {
            return (
              <AppDateTimeInput
                label="Start date"
                placeholder="Select start date"
                mode="date"
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name="endDate"
          control={control}
          Field={({onChange, value}: DateTimeFieldControls) => {
            return (
              <AppDateTimeInput
                label="End date"
                placeholder="Select end date"
                mode="date"
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
      </View>
    </AppContentSheet>
  );
};

export {InsuranceHistory, InsuranceHistoryEdit};
