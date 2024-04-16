/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemValueFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldValues} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {useApiServicesAppGenotypeGetgenotypesGetQuery} from '@/state/services/genoTypeApi';

const GenoTypeSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  const {data: genoTypes, isLoading: isGenoTypesLoading} =
    useApiServicesAppGenotypeGetgenotypesGetQuery();
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: SelectItemValueFieldControls) => {
        return (
          <AppSelectInput
            label="Genotype"
            placeholder="Select genotype"
            isOptionsLoading={isGenoTypesLoading}
            value={value}
            onChange={item => onChange(item.value)}
            selectOptions={genoTypes?.map(item => {
              return {item: {id: item, value: item}};
            })}
          />
        );
      }}
    />
  );
};

export default GenoTypeSelectInput;
