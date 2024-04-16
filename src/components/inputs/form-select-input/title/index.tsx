/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemValueFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldValues} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {useApiServicesAppTitlesGettitlesGetQuery} from '@/state/services/titlesApi';

const TitleSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  const {data: title = [], isLoading: isTitleLoading} =
    useApiServicesAppTitlesGettitlesGetQuery();
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value}: SelectItemValueFieldControls) => {
        return (
          <AppSelectInput
            label="Title"
            placeholder="Select title"
            isOptionsLoading={isTitleLoading}
            onChange={item => {
              onChange(item?.value);
            }}
            value={value}
            selectOptions={title.map(el => {
              return {
                item: {id: el, value: el},
              };
            })}
          />
        );
      }}
    />
  );
};

export default TitleSelectInput;
