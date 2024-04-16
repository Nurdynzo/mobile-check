/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemValueFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldValues} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {useApiServicesAppMaritalstatusGetmaritalstatusesGetQuery} from '@/state/services/maritalStatusApi';

const MaritalStatusSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  const {data: maritalStatuses, isLoading: isMariatalStatusesLoading} =
    useApiServicesAppMaritalstatusGetmaritalstatusesGetQuery();
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: SelectItemValueFieldControls) => {
        return (
          <AppSelectInput
            label="Marital status"
            placeholder="Select marital status"
            onChange={item => onChange(item?.value)}
            value={value}
            isOptionsLoading={isMariatalStatusesLoading}
            selectOptions={maritalStatuses?.map(item => {
              return {item: {id: item, value: item}};
            })}
          />
        );
      }}
    />
  );
};

export default MaritalStatusSelectInput;
