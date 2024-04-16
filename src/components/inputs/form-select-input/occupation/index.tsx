/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldValues} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import {useApiServicesAppOccupationGetoccupationsGetQuery} from '@/state/services/occupationApi';

const OccupationSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  const {data: occupations, isLoading: isOccupationsLoading} =
    useApiServicesAppOccupationGetoccupationsGetQuery();
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value: seletedItem}: SelectItemFieldControls) => {
        return (
          <AppSelectInput
            label="Occupation"
            placeholder="Select occupation"
            isOptionsLoading={isOccupationsLoading}
            onChange={item => onChange(item)}
            value={seletedItem?.value}
            selectOptions={
              occupations?.map(item => {
                return {
                  item: {id: item.id, value: item.name},
                };
              }) as SelectItemOptionsProp<void> | undefined
            }
          />
        );
      }}
    />
  );
};

export default OccupationSelectInput;
