/* eslint-disable react/no-unstable-nested-components */
import {
  BloodGroupSelectInput,
  GenoTypeSelectInput,
  LocalGovtAreaSelectInput,
  MaritalStatusSelectInput,
  OccupationSelectInput,
  ReligionSelectInput,
} from '@/components/inputs/form-select-input';
import React, {FunctionComponent} from 'react';
import {Control} from 'react-hook-form';
import {View} from 'react-native';
import {InputFieldControls} from '@/types/formFieldsControls';
import AppTextInput from '../../../inputs/app-text-input';
import {FormFieldController} from '../../form-field-controller';
import {addNewPatientFormSchema} from '../schema';
import {formStyles} from '../styles';

const OtherPersonalDetails: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
}> = ({control}) => {
  const styles = formStyles();

  return (
    <View style={styles.container}>
      <LocalGovtAreaSelectInput
        control={control}
        name="lga"
        watchFieldNames={{nationality: 'nationality', stateOfOrigin: 'state'}}
      />

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
      <MaritalStatusSelectInput control={control} name="maritalStatus" />
      <FormFieldController
        name="noOfSpouse"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Spouse(s)"
              placeholder="Enter number of spouse(s)"
              onChangeText={onChange}
              keyboardType="numeric"
              value={value}
            />
          );
        }}
      />
      <BloodGroupSelectInput control={control} name="bloodGroup" />
      <GenoTypeSelectInput control={control} name="genotype" />
      <FormFieldController
        name="noOfSiblings"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Sibling(s)"
              placeholder="Enter number of sibling(s)"
              onChangeText={onChange}
              keyboardType="numeric"
              value={value}
            />
          );
        }}
      />
      <FormFieldController
        name="positionInFamily"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Position in family"
              placeholder="Enter position in family"
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />
      <FormFieldController
        name="noOfChildren"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Children"
              placeholder="Enter number of children"
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />
      <FormFieldController
        name="nuclearFamilySize"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Nuclear family size"
              placeholder="Quantify nuclear family size"
              onChangeText={onChange}
              keyboardType="numeric"
              value={value}
            />
          );
        }}
      />
      <OccupationSelectInput control={control} name="occupation" />
      <FormFieldController
        name="officeLocation"
        control={control}
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Workplace location"
              placeholder="Enter workplace location"
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />
    </View>
  );
};

export default OtherPersonalDetails;
