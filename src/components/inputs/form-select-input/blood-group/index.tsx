/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemValueFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldValues} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {useApiServicesAppBloodgroupGetbloodgroupsGetQuery} from '@/state/services/bloodGroupApi';

const BloodGroupSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  const {data: bloodGroups, isLoading: isBloodGroupsLoading} =
    useApiServicesAppBloodgroupGetbloodgroupsGetQuery();
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: SelectItemValueFieldControls) => {
        return (
          <AppSelectInput
            label="Blood group"
            placeholder="Select blood group"
            isOptionsLoading={isBloodGroupsLoading}
            value={value}
            onChange={item => onChange(item.value)}
            selectOptions={bloodGroups?.map(item => {
              return {item: {id: item, value: item}};
            })}
          />
        );
      }}
    />
  );
};

export default BloodGroupSelectInput;
