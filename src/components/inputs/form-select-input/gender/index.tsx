/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemValueFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldValues} from 'react-hook-form';
import {FormSelectInputProps} from '../type';

const genders = ['Male', 'Female', 'Others'];

const GenderSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: SelectItemValueFieldControls) => {
        return (
          <AppSelectInput
            showRequiredTag
            label="Gender"
            placeholder="Select gender"
            value={value}
            onChange={item => onChange(item.value)}
            selectOptions={genders.map(el => ({item: {id: el, value: el}}))}
          />
        );
      }}
    />
  );
};

export default GenderSelectInput;
