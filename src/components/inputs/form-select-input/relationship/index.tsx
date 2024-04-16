/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemValueFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldValues} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {useApiServicesAppRelationshipGetrelationshipsGetQuery} from '@/state/services/relationshipApi';

const RelationshipSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  const {data: relationships, isLoading: isRelationshipsLoading} =
    useApiServicesAppRelationshipGetrelationshipsGetQuery();

  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: SelectItemValueFieldControls) => {
        return (
          <AppSelectInput
            label="Relationship"
            placeholder="Select relationship"
            value={value}
            isOptionsLoading={isRelationshipsLoading}
            onChange={item => onChange(item.value)}
            selectOptions={relationships?.map(item => {
              return {item: {id: item, value: item}};
            })}
          />
        );
      }}
    />
  );
};

export default RelationshipSelectInput;
