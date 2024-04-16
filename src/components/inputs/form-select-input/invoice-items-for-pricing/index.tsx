/* eslint-disable react/no-unstable-nested-components */
import {FormFieldController} from '@/components/forms/form-field-controller';
import {
  GetInvoiceItemPricingResponse,
  useApiServicesAppInvoicesGetinvoiceitemsforpricingGetQuery,
} from '@/state/services/invoiceApi';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import React from 'react';
import {FieldValues} from 'react-hook-form';
import AppSelectInput from '../../app-select-input';
import {FormSelectInputProps} from '../type';

const InvoiceItemsForPricingSelectInput = <T extends FieldValues>({
  name,
  control,
  disabled,
}: FormSelectInputProps<T>) => {
  const {data: invoiceItemsResult, isFetching: isFetchingInvoiceItems} =
    useApiServicesAppInvoicesGetinvoiceitemsforpricingGetQuery({});

  const selectOptions = invoiceItemsResult?.items?.map(item => {
    return {
      item: {
        id: item.id,
        value: item.name,
        data: item,
      },
    };
  }) as SelectItemOptionsProp<GetInvoiceItemPricingResponse> | undefined;

  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value: selectedItem}) => {
        return (
          <AppSelectInput
            label="Item"
            placeholder="Select item"
            onChange={onChange}
            value={selectedItem?.value}
            disabled={disabled}
            isOptionsLoading={isFetchingInvoiceItems}
            selectOptions={selectOptions}
          />
        );
      }}
    />
  );
};

export default InvoiceItemsForPricingSelectInput;
