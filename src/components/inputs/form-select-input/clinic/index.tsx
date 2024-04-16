/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {useSelectOptionsSearch} from '@/hooks/useSelectOptionsSearch';
import {
  ClinicListDto,
  useApiServicesAppOrganizationunitGetclinicsGetQuery,
} from '@/state/services/organizationUnit';
import {SelectItemFieldControls} from '@/types/formFieldsControls';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import React from 'react';
import {FieldValues} from 'react-hook-form';
import AppSelectInput from '../../app-select-input';
import {FormSelectInputProps} from '../type';

const ClinicSelectInput = <T extends FieldValues>({
  name,
  control,
  disabled,
}: FormSelectInputProps<T>) => {
  const {
    isLoading: isClinicsLoading,
    data: allClinics,
    isError: isClinicsError,
  } = useApiServicesAppOrganizationunitGetclinicsGetQuery();

  const allClinicsData = allClinics?.map(item => ({
    item: {
      id: item.id,
      value: item.displayName,
      data: item.isActive,
    },
  })) as SelectItemOptionsProp<Pick<ClinicListDto, 'id'>> | undefined;

  const {optionsData, query, setQuery} = useSelectOptionsSearch({
    selectOptions: allClinicsData || [],
  });
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value: selectedItem}: SelectItemFieldControls) => {
        return (
          <AppSelectInput
            label="Clinic"
            placeholder="Select clinic"
            onChange={item => onChange(item)}
            isOptionsLoading={isClinicsLoading}
            value={selectedItem?.value}
            onSearchInputChange={queryVal => setQuery(queryVal)}
            searchValue={query}
            error={{value: isClinicsError}}
            showSearchInput
            disabled={disabled}
            selectOptions={optionsData}
          />
        );
      }}
    />
  );
};

export default ClinicSelectInput;
