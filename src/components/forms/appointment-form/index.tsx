import {
  AppointmentTypeSelectInput,
  ClinicSelectInput,
  RepeatTypeSelectInput,
} from '@/components/inputs/form-select-input';
import {SearchPatientInput} from '@/components/inputs/search';
import {useSheet} from '@/hooks/useSheet';
import {useApiServicesAppPatientsGetpatientdetailsGetQuery} from '@/state/services/patientApi';
import {
  DateTimeFieldControls,
  ImageFieldControls,
} from '@/types/formFieldsControls';
import {NO_SELECTED_ITEM} from '@/types/selectItemsheet';
import {BaseSheetProps} from '@/types/sheet';
import {EMPTY_STRING} from '@/utils/constants';
import {getFileName} from '@/utils/helpers';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Control,
  FieldErrors,
  FieldPath,
  FieldValues,
  useController,
  useForm,
  useWatch,
} from 'react-hook-form';
import {View} from 'react-native';
import {CreateAppointmentSchema, createAppointmentSchema} from './schema';
import {addNewAppontmentStyles} from './styles';
import {AppointmentFormProps} from './types';
import {FormFieldController} from '../form-field-controller';
import {AppContentSheet} from '@/components/sheets';
import {AppButton, AppUploadButton} from '@/components/buttons';
import {AppDateTimeInput, AppTextInput, PdfInput} from '@/components/inputs';
import {AppText} from '@/components/common';

const styles = addNewAppontmentStyles;
const AttachReferralLetterFormSheet: FunctionComponent<
  {
    control: Control<CreateAppointmentSchema>;
    openSheet: () => void;
  } & Omit<BaseSheetProps, 'closeSheet'>
> = ({control, openSheet, sheetRef}) => {
  const [isFocused, setIsFocused] = useState(false);
  const appointmentType = useWatch({control, name: 'appointmentType'});
  const referralImage = useWatch({control, name: 'referralLetterImage'});

  if (appointmentType?.value !== 'Referral') {
    return <></>;
  }
  return (
    <>
      <AppUploadButton
        label={
          referralImage?.path
            ? getFileName(referralImage?.path)
            : 'Attach referral letter'
        }
        isUploaded={!!referralImage?.path}
        onPress={openSheet}
        isFocused={isFocused}
      />
      <AppContentSheet
        sheetRef={sheetRef}
        headerTitle="Attach referral letter"
        onOpen={() => setIsFocused(true)}
        onClose={() => setIsFocused(false)}>
        <View style={styles.formContainer}>
          <FormFieldController
            name={'referringHospital'}
            control={control}
            // eslint-disable-next-line react/no-unstable-nested-components
            Field={({onChange, value}) => {
              return (
                <AppTextInput
                  label="Referring hospital"
                  placeholder="Enter referring hospital"
                  onChangeText={onChange}
                  value={value}
                />
              );
            }}
          />
          <FormFieldController
            name={'diagonsis'}
            control={control}
            // eslint-disable-next-line react/no-unstable-nested-components
            Field={({onChange, value}) => {
              return (
                <AppTextInput
                  label="Diagnosis"
                  placeholder="Enter diagnosis"
                  onChangeText={onChange}
                  value={value}
                />
              );
            }}
          />
          <FormFieldController
            name={'referralLetterImage'}
            control={control}
            // eslint-disable-next-line react/no-unstable-nested-components
            Field={({
              onChange: onChangeImage,
              value: selectedPdf,
            }: ImageFieldControls) => {
              return (
                <PdfInput
                  onChangeImage={pdf => {
                    if (pdf?.uri) {
                      onChangeImage({
                        path: pdf?.uri,
                        type: pdf?.type,
                        name: pdf.name,
                      });
                    }
                  }}
                  imageSrc={selectedPdf?.path}
                />
              );
            }}
          />
        </View>
      </AppContentSheet>
    </>
  );
};

const PatientInput = <T extends FieldValues>({
  control,
  name,
  disabled,
  patientId,
}: {
  control: Control<T>;
  name: FieldPath<T>;
  disabled: boolean;
  patientId: number | undefined;
}) => {
  const {
    field: {onChange: onPatientChange},
  } = useController({control, name});

  const {data: patientDetails, isLoading: isPatientDetailsLoading} =
    useApiServicesAppPatientsGetpatientdetailsGetQuery({patientId});

  useEffect(() => {
    if (patientDetails) {
      onPatientChange({
        id: patientDetails?.id,
        fullname: patientDetails?.fullName,
        code: patientDetails?.patientCode,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientDetails]);

  return (
    <FormFieldController
      name={name}
      control={control}
      // eslint-disable-next-line react/no-unstable-nested-components
      Field={({onChange, value}) => {
        return (
          <SearchPatientInput
            placeholder="Find patient"
            disabled={disabled}
            value={
              value?.code && value?.fullname
                ? [
                    <AppText
                      key={1}
                      text={value.fullname}
                      color="text400"
                      type="body_1_semibold"
                    />,
                    <AppText key={2} text={' - '} />,
                    <AppText
                      key={3}
                      text={value.code}
                      color="text300"
                      type="body_1_semibold"
                    />,
                  ]
                : undefined
            }
            isLoading={isPatientDetailsLoading}
            onSelectedItem={item => {
              onChange({
                id: item.id,
                fullname: item.fullname,
                code: item.patientCode,
              });
            }}
          />
        );
      }}
    />
  );
};

const AppointmentForm: FunctionComponent<AppointmentFormProps> = ({
  onSubmit,
  patientId,
  defaultValues,
  formType,
}) => {
  const appointmentDefaultDate = new Date(Date.now() + 0.25 * 60 * 60 * 1000);

  const createDefaultValues: Omit<CreateAppointmentSchema, 'patient'> = {
    clinic: NO_SELECTED_ITEM,
    appointmentType: NO_SELECTED_ITEM,
    referringHospital: EMPTY_STRING,
    diagonsis: EMPTY_STRING,
    appointmentDateTime: appointmentDefaultDate,
  };
  const isCreatingAppointment = formType !== 'edit';
  const initialValues = defaultValues ? defaultValues : createDefaultValues;
  const {handleSubmit, control, reset} = useForm<CreateAppointmentSchema>({
    defaultValues: initialValues,
    resolver: zodResolver(createAppointmentSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const {openSheet, sheetRef} = useSheet();

  const handleErrors = (errors: FieldErrors<CreateAppointmentSchema>) => {
    if (
      errors.referringHospital ||
      errors.diagonsis ||
      errors.referralLetterImage
    ) {
      openSheet();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <PatientInput
          control={control}
          name="patient"
          patientId={patientId}
          disabled={!isCreatingAppointment || !!patientId}
        />
        <ClinicSelectInput
          disabled={!isCreatingAppointment}
          control={control}
          name="clinic"
        />
        <AppointmentTypeSelectInput control={control} name="appointmentType" />
        <FormFieldController
          name={'appointmentDateTime'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={({onChange, value}: DateTimeFieldControls) => {
            return (
              <AppDateTimeInput
                label="Date"
                minimumDate={appointmentDefaultDate}
                placeholder="Select appointment date"
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name={'appointmentDateTime'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={({onChange, value}: DateTimeFieldControls) => {
            return (
              <AppDateTimeInput
                mode="time"
                label="Time"
                minimumDate={appointmentDefaultDate}
                placeholder="Select appointment time"
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
        <AttachReferralLetterFormSheet
          openSheet={openSheet}
          sheetRef={sheetRef}
          control={control}
        />
        <RepeatTypeSelectInput control={control} name="repeatType" />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          text={isCreatingAppointment ? 'Create Invoice' : 'Update'}
          onPress={handleSubmit(
            data =>
              onSubmit({
                data,
                reset,
                type: isCreatingAppointment ? 'create_invoice' : 'update',
              }),
            handleErrors,
          )}
          containerStyle={styles.createAppointBtn}
        />
        {isCreatingAppointment && (
          <AppButton
            text={'Save & close'}
            borderWidth={1}
            buttonColor={'white'}
            textColor="primary400"
            onPress={handleSubmit(
              data => onSubmit({data, reset, type: 'save_and_close'}),
              handleErrors,
            )}
          />
        )}
      </View>
    </View>
  );
};

export default AppointmentForm;
