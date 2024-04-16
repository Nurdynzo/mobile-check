/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldPath, FieldValues, useWatch} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import {
  DistrictDto,
  useApiServicesAppDistrictGetallGetQuery,
} from '@/state/services/districtApi';

const LocalGovtAreaSelectInput = <T extends FieldValues>({
  name,
  control,
  watchFieldNames,
}: FormSelectInputProps<T> & {
  watchFieldNames: {nationality: FieldPath<T>; stateOfOrigin: FieldPath<T>};
  shouldSkip?: boolean;
  regionId?: number;
}) => {
  const seletedCountry = useWatch({control, name: watchFieldNames.nationality});
  const seletedRegion = useWatch({
    control,
    name: watchFieldNames.stateOfOrigin,
  });
  const {data: allLGA, isFetching: isAllLGAFetching} =
    useApiServicesAppDistrictGetallGetQuery(
      {regionIdFilter: Number(seletedRegion?.data)},
      {skip: !seletedCountry && !seletedRegion},
    );

  const lgaOfOriginData = allLGA?.items?.map(item => {
    return {
      item: {
        id: item.district?.id,
        value: item.district?.name,
        data: item.district?.regionId,
      },
    };
  }) as SelectItemOptionsProp<Pick<DistrictDto, 'regionId'>> | undefined;

  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value: selectedItem}: SelectItemFieldControls) => {
        return (
          <AppSelectInput
            label="Local government area"
            placeholder="Select LGA of origin"
            onChange={item => onChange(item)}
            value={selectedItem?.value}
            disabled={
              (!isAllLGAFetching && !lgaOfOriginData?.length) ||
              (!seletedCountry && !seletedRegion)
            }
            isOptionsLoading={isAllLGAFetching}
            selectOptions={lgaOfOriginData}
          />
        );
      }}
    />
  );
};

export default LocalGovtAreaSelectInput;
