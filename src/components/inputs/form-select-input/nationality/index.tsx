/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldPath, FieldValues, useController} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {
  CountryDto,
  useApiServicesAppCountriesGetallGetQuery,
} from '@/state/services/countriesApi';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';

const NationalitySelectInput = <T extends FieldValues>({
  name,
  control,
  controlFieldNames,
}: FormSelectInputProps<T> & {
  controlFieldNames: {lga: FieldPath<T>; stateOfOrigin: FieldPath<T>};
}) => {
  const {
    field: {onChange: onStateChange},
  } = useController({control, name: controlFieldNames.stateOfOrigin});
  const {
    field: {onChange: onLGAChange},
  } = useController({control, name: controlFieldNames.lga});

  const {data: {items: countries = []} = {}, isLoading: isCountriesLoading} =
    useApiServicesAppCountriesGetallGetQuery({});

  const countryData = countries?.map(item => {
    return {
      item: {
        id: item?.country?.id,
        value: item?.country?.name,
        data: item?.country?.id,
      },
    };
  }) as SelectItemOptionsProp<Pick<CountryDto, 'id'>> | undefined;

  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value: selectedItem}: SelectItemFieldControls) => {
        return (
          <AppSelectInput
            label="Nationatility"
            placeholder="Select nationatility"
            onChange={item => {
              onChange(item);
              if (item?.value !== selectedItem?.value) {
                onStateChange(undefined);
                onLGAChange(undefined);
                return;
              }
            }}
            disabled={isCountriesLoading}
            value={selectedItem?.value}
            isOptionsLoading={isCountriesLoading}
            selectOptions={countryData}
          />
        );
      }}
    />
  );
};

export default NationalitySelectInput;
