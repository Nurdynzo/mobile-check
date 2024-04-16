/* eslint-disable react/no-unstable-nested-components */
import {DoubleFormFieldController} from '@/components/forms/form-field-controller';
import {FormNestedFooter} from '@/components/forms/patient-form/common/nested-form';
import {useApiServicesAppIdentificationtypeGetidentificationtypesGetQuery} from '@/state/services/identificationTypeApi';
import React from 'react';
import {Control, FieldPath, FieldValues} from 'react-hook-form';
import {View} from 'react-native';
import AppSelectTextInput from '../../app-select-text-input';
import {governmentIssuedIdsStyles} from './styles';
import {EMPTY_STRING} from '@/utils/constants';
import {otherIdNumberFormSchema} from '@/utils/schema';

export const defaultOtherIdNumberValues: otherIdNumberFormSchema = {
  type: EMPTY_STRING,
  number: EMPTY_STRING,
};

export type FormSelectInputProps<T extends FieldValues> = {
  control: Control<T>;
  names: {type: FieldPath<T>; number: FieldPath<T>};
  onAddPress?: () => void;
  onRemovePress?: () => void;
  removeDeleteBtn?: boolean;
};

export const GovernmentIssuedidsSelectInput = <T extends FieldValues>({
  control,
  names,
  onAddPress,
  onRemovePress,
  removeDeleteBtn,
}: FormSelectInputProps<T>) => {
  const otherIdStyles = governmentIssuedIdsStyles();

  const {data: idTypes = []} =
    useApiServicesAppIdentificationtypeGetidentificationtypesGetQuery();

  return (
    <View style={otherIdStyles.container}>
      <DoubleFormFieldController
        names={{name1: names.type, name2: names.number}}
        control={control}
        Fields={({field1, field2}) => {
          return (
            <AppSelectTextInput
              label="Government issued ID"
              placeholder={{
                select: 'Select ID type',
                text: 'Enter number',
              }}
              inputKeyboardType="numeric"
              selectOptions={idTypes.map(idType => {
                return {item: {id: idType, value: idType}};
              })}
              value={{select: field1.value, text: field2.value}}
              onChange={{
                select: item => field1.onChange(item?.value),
                text: text => field2.onChange(text),
              }}
            />
          );
        }}
      />

      <FormNestedFooter
        addBtnTitle={'Add another'}
        onAddPress={onAddPress}
        onRemovePress={onRemovePress}
        removeDeleteBtn={removeDeleteBtn}
      />
    </View>
  );
};

export default GovernmentIssuedidsSelectInput;
