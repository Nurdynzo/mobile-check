/* eslint-disable react/no-unstable-nested-components */
import {ReviewDetailedHistoryCard} from '@/components/cards';
import {AppLoading} from '@/components/common';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {AppDateTimeInput, AppTextInput} from '@/components/inputs';
import {
  BloodGroupSelectInput,
  GenderSelectInput,
  GenoTypeSelectInput,
  LocalGovtAreaSelectInput,
  MaritalStatusSelectInput,
  NationalitySelectInput,
  OccupationSelectInput,
  ReligionSelectInput,
  StateOfOrginSelectInput,
  TitleSelectInput,
} from '@/components/inputs/form-select-input';
import GovernmentIssuedidsSelectInput from '@/components/inputs/form-select-input/government-issued-ids';
import {useColors} from '@/hooks/useColors';
import {CreateOrEditPatientDto} from '@/state/services/patientApi';
import {
  DateTimeFieldControls,
  InputFieldControls,
} from '@/types/formFieldsControls';
import {EMPTY_STRING} from '@/utils/constants';
import {convertToReadableDate} from '@/utils/helpers/convertDateTime';
import {otherIdNumberFormSchema} from '@/utils/schema';
import React, {FunctionComponent} from 'react';
import {Control, useFieldArray} from 'react-hook-form';
import {View} from 'react-native';
import {DetailedHistoryHeader, EditFormFieldsContainer} from '../common';
import {EditPatientInfoFormSchema} from './schema';
import {patientInfoEditStyles} from './styles';
import {usePatientInfo} from './usePatientInfo';
import {stringToTileCase} from '@/utils/helpers';

const PatientInfo: FunctionComponent<{
  patientData: CreateOrEditPatientDto | undefined;
  onPressEdit?: () => void;
}> = ({patientData, onPressEdit}) => {
  return (
    <ReviewDetailedHistoryCard
      Header={
        <DetailedHistoryHeader
          buttonTitle="Edit"
          onButtonPress={onPressEdit}
          title="Patient info"
          lastEntered={{
            by: 'Mr Franklyn',
            day: '23 Nov 2023',
            time: '11: 23 PM',
          }}
        />
      }
      fullName={`${patientData?.firstName} ${patientData?.lastName}`}
      address={`${patientData?.address}`}
      dob={convertToReadableDate(patientData?.dateOfBirth)}
      gender={patientData?.genderType}
      phoneNumber={`${patientData?.phoneNumber}`}
      emailAddress={`${patientData?.emailAddress}`}
      maritalStatus={patientData?.maritalStatus}
      patientCode={`${patientData?.patientCode}`}
      countryId={patientData?.countryId}
      stateOfOriginId={patientData?.stateOfOriginId}
      lgaOfOriginId={patientData?.districtId}
      occupationId={
        patientData?.patientOccupations?.find(el => el.isCurrent)?.occupationId
      }
      otherDetails={{
        bloodGroup: patientData?.bloodGroup,
        ethnicity: patientData?.ethnicity,
        genoType: patientData?.bloodGenotype,
        religion: patientData?.religion,
        workLocation: patientData?.patientOccupations?.find(el => el.isCurrent)
          ?.location,
      }}
    />
  );
};

// TODO(Franklyn): Why do we have this exported from this file
export const defaultOtherIdNumberValues: otherIdNumberFormSchema = {
  type: EMPTY_STRING,
  number: EMPTY_STRING,
};

// TODO(Franklyn): Why do we have this exported from this file
export const OtherIdNumberForm: FunctionComponent<{
  control: Control<EditPatientInfoFormSchema>;
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

const PatientInfoEdit: FunctionComponent<{
  patientData: CreateOrEditPatientDto | undefined;
  onClose?: () => void;
}> = props => {
  const {colors} = useColors();
  const styles = patientInfoEditStyles({colors});
  const {_handleSubmit, control, isLoading} = usePatientInfo(props);
  return (
    <View style={[styles.container, styles.editContainer]}>
      <AppLoading isLoading={isLoading} />
      <DetailedHistoryHeader
        buttonTitle="Done"
        onButtonPress={_handleSubmit}
        title="Patient info"
      />
      <EditFormFieldsContainer>
        <FormFieldController
          name="firstName"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
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
                placeholder="Enter middleName"
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
                label="Last name"
                placeholder="Enter last name"
                onChangeText={onChange}
                value={stringToTileCase(value)}
              />
            );
          }}
        />
        <TitleSelectInput control={control} name="title" />
        <GenderSelectInput control={control} name="gender" />
        <FormFieldController
          name="dob"
          control={control}
          Field={({onChange, value}: DateTimeFieldControls) => {
            return (
              <AppDateTimeInput
                label="Date of birth"
                placeholder="Enter date of birth"
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
        <FormFieldController
          name="phoneNumber"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Phone number"
                placeholder="Enter number"
                onChangeText={onChange}
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
                value={value}
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
        <MaritalStatusSelectInput control={control} name="maritalStatus" />
        <OtherIdNumberForm control={control} />
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
        <LocalGovtAreaSelectInput
          control={control}
          name="lga"
          watchFieldNames={{nationality: 'nationality', stateOfOrigin: 'state'}}
        />
        <OccupationSelectInput control={control} name="occupation" />
        <FormFieldController
          name="officeLocation"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Where do you work?"
                placeholder="Enter work location"
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <BloodGroupSelectInput control={control} name="bloodGroup" />
        <GenoTypeSelectInput control={control} name="genotype" />
        <FormFieldController
          name="ethnicity"
          control={control}
          Field={({onChange, value}: InputFieldControls) => {
            return (
              <AppTextInput
                label="Ethnicity"
                placeholder="Enter ethnicity"
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <ReligionSelectInput control={control} name="religion" />
      </EditFormFieldsContainer>
    </View>
  );
};

export {PatientInfo, PatientInfoEdit};
