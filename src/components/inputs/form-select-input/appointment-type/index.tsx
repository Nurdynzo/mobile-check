/* eslint-disable react/no-unstable-nested-components */
import {RadioBtnEmptyIcon, RadioBtnFilledIcon} from '@/assets/svg';
import {FormFieldController} from '@/components/forms/form-field-controller';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useSheet} from '@/hooks/useSheet';
import {SelectItemFieldControls} from '@/types/formFieldsControls';
import React from 'react';
import {FieldValues} from 'react-hook-form';
import AppSelectInput from '../../app-select-input';
import {FormSelectInputProps} from '../type';
import * as Constants from '@/constants/index';

const AppointmentTypeSelectInput = <T extends FieldValues>({
  name,
  control,
}: FormSelectInputProps<T>) => {
  const {
    closeSheet: closeConsultSheet,
    openSheet: openConsultSheet,
    sheetRef: consultSheetRef,
  } = useSheet();
  return (
    <FormFieldController
      name={name}
      control={control}
      Field={({onChange, value: selectedItem}: SelectItemFieldControls) => {
        return (
          <>
            <AppSelectInput
              label="Appointment type"
              placeholder="Select appointment type"
              onChange={item => {
                if (item.value === 'Consult') {
                  return openConsultSheet();
                }
                onChange(item);
              }}
              value={selectedItem?.value}
              selectOptions={Constants.appointmentTypeOptions}
            />
            <AppSelectItemSheet
              title="Appointment type | Consult"
              sheetRef={consultSheetRef}
              selectOptions={Constants.consultAppointmentTypeOptions}
              renderRightIcon={({isSelected}) =>
                isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
              }
              onSelectItem={option => {
                onChange(option.item);
                closeConsultSheet();
              }}
              selectedValue={selectedItem?.value}
              showSearchInput
            />
          </>
        );
      }}
    />
  );
};

export default AppointmentTypeSelectInput;
