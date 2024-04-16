/* eslint-disable react/no-unstable-nested-components */
import {DownCaretIcon, InfoCircleIcon} from '@/assets/svg';
import {
  GenderSelectInput,
  NationalitySelectInput,
  StateOfOrginSelectInput,
  TitleSelectInput,
} from '@/components/inputs/form-select-input';
import GovernmentIssuedidsSelectInput from '@/components/inputs/form-select-input/government-issued-ids';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {useApiServicesAppPatientsGetnewpatientcodeGetQuery} from '@/state/services/patientApi';
import {
  DateTimeFieldControls,
  ImageFieldControls,
  InputFieldControls,
  ToggleSwitchFieldControls,
} from '@/types/formFieldsControls';
import {imageFileSchema} from '@/utils/schema';
import React, {FunctionComponent, useEffect} from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
  useFieldArray,
} from 'react-hook-form';
import {AppButton} from '@/components/buttons';
import {AppText} from '@/components/common';
import DisplayImage from '@/components/common/display-image';
import {
  AppDateTimeInput,
  AppTextInput,
  AppToggleSwitch,
} from '@/components/inputs';
import {AppImageUploadSheet, AppMenuSheet} from '@/components/sheets';
import {FormFieldController} from '../../form-field-controller';
import {defaultOtherIdNumberValues} from '../defaultValues';
import {addNewPatientFormSchema} from '../schema';
import {formStyles} from '../styles';
import {imageUploadStyles} from './styles';
import AppActivityIndicator from '@/components/app-activity-indicator';
import {View} from 'react-native';
import {stringToTileCase} from '@/utils/helpers';

const PersonalDetails: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
  isCreateForm: boolean;
}> = ({control, isCreateForm}) => {
  const styles = formStyles();

  return (
    <View style={styles.container}>
      <FormFieldController
        name="image"
        control={control}
        Field={({onChange, value: image}: ImageFieldControls) => {
          return <ImageUpload onChangeImage={onChange} image={image?.path} />;
        }}
      />

      <PatientCodeInput
        control={control}
        name={'patientId'}
        isCreateForm={isCreateForm}
      />
      <TitleSelectInput control={control} name="title" />

      <FormFieldController
        name="firstName"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              showRequiredTag
              label="First name"
              placeholder="Enter first name"
              onChangeText={onChange}
              value={stringToTileCase(value)}
            />
          );
        }}
      />
      <FormFieldController
        name="middleName"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Middle name"
              placeholder="Enter middle name"
              onChangeText={onChange}
              value={stringToTileCase(value)}
            />
          );
        }}
      />
      <FormFieldController
        name="lastName"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              showRequiredTag
              label="Last name"
              autoCapitalize={'sentences'}
              placeholder="Enter last name"
              onChangeText={onChange}
              value={stringToTileCase(value)}
            />
          );
        }}
      />
      <FormFieldController
        name="dob"
        control={control}
        Field={({onChange, value}: DateTimeFieldControls) => {
          return (
            <AppDateTimeInput
              showRequiredTag
              label="Date of birth"
              placeholder="Select date of birth"
              onChange={onChange}
              maximumDate={new Date()}
              value={value}
            />
          );
        }}
      />
      <GenderSelectInput control={control} name="gender" />
      <FormFieldController
        name="phoneNumber"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              showRequiredTag
              label="Phone number"
              placeholder="Enter phone number"
              onChangeText={onChange}
              keyboardType="phone-pad"
              value={value}
            />
          );
        }}
      />
      <FormFieldController
        name="email"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Email address"
              placeholder="Enter email address"
              onChangeText={onChange}
              keyboardType="email-address"
              value={value}
            />
          );
        }}
      />

      <OtherIdNumberForm control={control} />
      <FormFieldController
        name="isNew"
        control={control}
        Field={({onChange, value}: ToggleSwitchFieldControls) => {
          return (
            <AppToggleSwitch
              isOn={value}
              labelPosition="left"
              onColor={'primary400'}
              label="Is patient new to the hospital?"
              useNativeDriver={true}
              labelStyle={styles.flex1}
              offColor="neutral100"
              onToggle={isOn => onChange(isOn)}
            />
          );
        }}
      />
      <FormFieldController
        name="address"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Address"
              placeholder="Enter address"
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />
      <NationalitySelectInput
        control={control}
        name="nationality"
        controlFieldNames={{lga: 'lga', stateOfOrigin: 'state'}}
      />
      <StateOfOrginSelectInput
        control={control}
        name="state"
        watchFieldNames={{nationality: 'nationality'}}
        controlFieldNames={{lga: 'lga'}}
      />
    </View>
  );
};
export default PersonalDetails;

const ImageUpload: FunctionComponent<{
  image?: string;
  onChangeImage?: (image?: imageFileSchema) => void;
}> = ({image, onChangeImage = () => null}) => {
  const styles = imageUploadStyles();
  const {colors} = useColors();

  const {
    closeSheet: closeBiometricSheet,
    openSheet: openBiometricSheet,
    sheetRef: biometricSheetRef,
  } = useSheet();
  const {
    closeSheet: closeUploadSheet,
    openSheet: openUploadSheet,
    sheetRef: uploadSheetRef,
  } = useSheet();

  return (
    <>
      <View>
        <View style={styles.container}>
          <DisplayImage uri={image} size={50} borderRadius={30} />
          <AppButton
            text="Take biometrics"
            containerStyle={styles.takeBiometrics}
            onPress={openBiometricSheet}
            RightContent={
              <DownCaretIcon
                stroke={colors.white}
                style={styles.dropDownIcon}
              />
            }
          />
        </View>
        <View>
          <AppText
            type="subtitle_medium"
            text="Patient picture should be updated by reception personnel"
            style={styles.subTitle}
            color="text300"
          />
        </View>
      </View>

      <AppMenuSheet
        title="Take biometrics"
        sheetRef={biometricSheetRef}
        closeSheet={closeBiometricSheet}
        menuOptions={[
          {
            value: "Take patient's picture",
            onPress: openUploadSheet,
          },
          {
            value: 'Add fingerprint',
            onPress: () => null,
          },
        ]}
      />
      <AppImageUploadSheet
        sheetRef={uploadSheetRef}
        closeSheet={closeUploadSheet}
        onUplaodImage={img => {
          if (img?.path) {
            onChangeImage({
              path: img?.path,
              type: img?.mime,
              name: img.filename,
            });
          }
        }}
      />
    </>
  );
};

const OtherIdNumberForm: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
}> = ({control}) => {
  const name = 'otherIdNumber';
  const {fields, remove, insert} = useFieldArray({
    control,
    name,
  });

  return (
    <>
      {fields.map((field, index) => {
        const nameRef = `${name}.${index}` as const;
        return (
          <GovernmentIssuedidsSelectInput
            key={field.id}
            control={control}
            names={{type: `${nameRef}.type`, number: `${nameRef}.number`}}
            onAddPress={() => insert(index + 1, defaultOtherIdNumberValues)}
            onRemovePress={() => remove(index)}
            removeDeleteBtn={!index}
          />
        );
      })}
    </>
  );
};

export const PatientCodeInput = <T extends FieldValues>({
  control,
  name,
  isCreateForm,
}: {
  control: Control<T>;
  name: FieldPath<T>;
  isCreateForm: boolean;
}) => {
  const {colors} = useColors();
  const {
    field: {onChange: onChangePatientID},
  } = useController({name, control});

  const {data: generatedPatientCode, isFetching} =
    useApiServicesAppPatientsGetnewpatientcodeGetQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });

  useEffect(() => {
    if (generatedPatientCode && isCreateForm) {
      onChangePatientID(generatedPatientCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generatedPatientCode, isCreateForm]);
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: InputFieldControls) => {
        return (
          <AppTextInput
            label="Patient ID"
            placeholder="Patient ID"
            RightContent={
              isFetching ? (
                <AppActivityIndicator />
              ) : (
                <InfoCircleIcon fill={colors.text50} />
              )
            }
            onChangeText={onChange}
            value={value}
          />
        );
      }}
    />
  );
};
