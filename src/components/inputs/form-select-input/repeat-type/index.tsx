/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import * as Constants from '@/constants/index';
import {SelectItemFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import {FieldValues} from 'react-hook-form';
import AppSelectInput from '../../app-select-input';
import {FormSelectInputProps} from '../type';

const RepeatTypeSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value: selectedItem}: SelectItemFieldControls) => {
        return (
          <AppSelectInput
            label="Repeat type"
            placeholder="Select repeat type"
            onChange={item => onChange(item)}
            value={selectedItem?.value}
            selectOptions={Constants.repeatTypeOptions}
          />
        );
      }}
    />
  );
};

export default RepeatTypeSelectInput;
