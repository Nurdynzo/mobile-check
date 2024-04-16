/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemValueFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldValues} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {useApiServicesAppInsuranceprovidersGetinsuranceprovidertypesGetQuery} from '@/state/services/insuranceProvidersApi';

const InsuranceProviderTypeSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  const {
    data: insuranceProviderTypes,
    isLoading: isInsuranceProviderTypesLoading,
  } = useApiServicesAppInsuranceprovidersGetinsuranceprovidertypesGetQuery();
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: SelectItemValueFieldControls) => {
        return (
          <AppSelectInput
            label="Insurance provider type"
            placeholder="Select provider type"
            value={value}
            onChange={item => onChange(item.value)}
            isOptionsLoading={isInsuranceProviderTypesLoading}
            selectOptions={insuranceProviderTypes?.map(item => {
              return {
                item: {id: item, value: item},
              };
            })}
          />
        );
      }}
    />
  );
};

export default InsuranceProviderTypeSelectInput;
