/* eslint-disable react/no-unstable-nested-components */
import {
  RelationshipSelectInput,
  TitleSelectInput,
} from '@/components/inputs/form-select-input';
import GovernmentIssuedidsSelectInput from '@/components/inputs/form-select-input/government-issued-ids';
import React, {FunctionComponent} from 'react';
import {Control, useFieldArray, useWatch} from 'react-hook-form';
import {View} from 'react-native';
import {InputFieldControls} from '../../../../types/formFieldsControls';
import AppTextInput from '../../../inputs/app-text-input';
import {FormFieldController} from '../../form-field-controller';
import AddressBtn from '../common/address-btn';
import {FormNestedFooter, FormNestedHeader} from '../common/nested-form';
import {
  defaultOtherIdNumberValues,
  defaultPatientRelativeValues,
} from '../defaultValues';
import {addNewPatientFormSchema} from '../schema';
import {formStyles} from '../styles';
import {stringToTileCase} from '@/utils/helpers';
import {EMPTY_STRING} from '@/utils/constants';

const OtherIdNumberForm: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
  fieldname: 'nextOfKinForm' | 'guardianForm';
  fieldindex: number;
}> = ({control, fieldname, fieldindex}) => {
  const name:
    | `nextOfKinForm.${number}.otherIdNumber`
    | `guardianForm.${number}.otherIdNumber` = `${fieldname}.${fieldindex}.otherIdNumber`;

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

const PatientRelativesForm: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
  name: 'nextOfKinForm' | 'guardianForm';
  ralativeTypeLabel: 'Next of kin' | 'Guardian';
}> = ({control, name, ralativeTypeLabel: formLabel}) => {
  const {fields, remove, insert} = useFieldArray({
    control,
    name,
  });
  const styles = formStyles();

  const patientDetailsAddress = useWatch({control, name: 'address'});

  return (
    <View style={styles.container}>
      {fields.map((field, index) => {
        const nameRef = `${name}.${index}` as const;

        return (
          <React.Fragment key={field.id}>
            <FormNestedHeader
              showSeperator={!!index}
              title={`${formLabel} ${
                fields.length > 1 ? index + 1 : EMPTY_STRING
              }`}
            />
            <TitleSelectInput control={control} name={`${nameRef}.title`} />
            <FormFieldController
              name={`${nameRef}.firstName`}
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
              name={`${nameRef}.middleName`}
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
              name={`${nameRef}.lastName`}
              control={control}
              Field={({onChange, value}: InputFieldControls) => {
                return (
                  <AppTextInput
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
              name={`${nameRef}.address`}
              control={control}
              Field={({onChange, value}: InputFieldControls) => {
                return (
                  <AppTextInput
                    label="Address"
                    placeholder="Enter address"
                    onChangeText={onChange}
                    RightContent={
                      <AddressBtn
                        onPress={() => {
                          if (patientDetailsAddress) {
                            onChange(patientDetailsAddress);
                          }
                        }}
                      />
                    }
                    value={value}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.phoneNumber`}
              control={control}
              Field={({onChange, value}: InputFieldControls) => {
                return (
                  <AppTextInput
                    label="Phone number"
                    placeholder="Enter phone number"
                    onChangeText={onChange}
                    textContentType="telephoneNumber"
                    value={value}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.email`}
              control={control}
              Field={({onChange, value}: InputFieldControls) => {
                return (
                  <AppTextInput
                    label="Email address"
                    textContentType="emailAddress"
                    keyboardType="numeric"
                    placeholder="Enter email address"
                    onChangeText={onChange}
                    value={value}
                  />
                );
              }}
            />

            <OtherIdNumberForm
              control={control}
              fieldname={name}
              fieldindex={index}
            />
            <RelationshipSelectInput
              control={control}
              name={`${nameRef}.relationship`}
            />
            <FormNestedFooter
              addBtnTitle={`Add ${formLabel}`}
              onAddPress={() => insert(index + 1, defaultPatientRelativeValues)}
              onRemovePress={() => remove(index)}
              removeDeleteBtn={!index}
            />
          </React.Fragment>
        );
      })}
    </View>
  );
};

const NextofKinDetails: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
}> = ({control}) => {
  return (
    <PatientRelativesForm
      control={control}
      name="nextOfKinForm"
      ralativeTypeLabel="Next of kin"
    />
  );
};

const GuardianDetails: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
}> = ({control}) => {
  return (
    <PatientRelativesForm
      control={control}
      name="guardianForm"
      ralativeTypeLabel="Guardian"
    />
  );
};

export {GuardianDetails, NextofKinDetails};
