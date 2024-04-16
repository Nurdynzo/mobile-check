/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {SelectItemFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import AppSelectInput from '../../app-select-input';
import {FieldPath, FieldValues, useController, useWatch} from 'react-hook-form';
import {FormSelectInputProps} from '../type';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import {
  RegionDto,
  useApiServicesAppRegionsGetregionsbycountryidGetQuery,
} from '@/state/services/regionsApi';
import {EMPTY_STRING} from '@/utils/constants';

const StateOfOrginSelectInput = <T extends FieldValues>({
  name,
  control,
  controlFieldNames,
  watchFieldNames,
}: FormSelectInputProps<T> & {
  countryCode?: string;
  controlFieldNames: {lga: FieldPath<T>};
  watchFieldNames: {nationality: FieldPath<T>};
}) => {
  const seletedCountry = useWatch({control, name: watchFieldNames.nationality});
  const {
    field: {onChange: onLGAChange},
  } = useController({control, name: controlFieldNames.lga});

  const {data: regions = [], isFetching: isRegionLoading} =
    useApiServicesAppRegionsGetregionsbycountryidGetQuery(
      {
        input: seletedCountry?.data,
      },
      {
        skip:
          seletedCountry?.data === undefined ||
          seletedCountry?.data === EMPTY_STRING,
      },
    );

  const regionData = regions?.map(item => {
    return {
      item: {
        id: item?.id,
        value: item?.name,
        data: item?.id,
      },
    };
  }) as SelectItemOptionsProp<Pick<RegionDto, 'id'>> | undefined;

  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value: selectedItem}: SelectItemFieldControls) => {
        return (
          <AppSelectInput
            label="State of origin"
            placeholder="Select state of origin"
            onChange={item => {
              onChange(item);
              if (item?.value !== selectedItem?.value) {
                return onLGAChange(undefined);
              }
            }}
            disabled={
              (!isRegionLoading && !regionData?.length) || !seletedCountry
            }
            isOptionsLoading={isRegionLoading}
            value={selectedItem?.value}
            selectOptions={regionData}
          />
        );
      }}
    />
  );
};

export default StateOfOrginSelectInput;
