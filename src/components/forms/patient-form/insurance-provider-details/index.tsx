import {InsuranceProviderTypeSelectInput} from '@/components/inputs/form-select-input';
import React, {FunctionComponent} from 'react';
import {Control, useFieldArray} from 'react-hook-form';
import {View} from 'react-native';
import {
  DateTimeFieldControls,
  InputFieldControls,
  SelectItemFieldControls,
} from '@/types/formFieldsControls';
import AppDateTimeInput from '../../../inputs/app-date-time-input';
import AppSelectInput from '../../../inputs/app-select-input';
import AppTextInput from '../../../inputs/app-text-input';
import {FormFieldController} from '../../form-field-controller';
import {FormNestedFooter, FormNestedHeader} from '../common/nested-form';
import {defaultInsuranceProviderValues} from '../defaultValues';
import {addNewPatientFormSchema} from '../schema';
import {formStyles} from '../styles';

const InsuranceProviderDetails: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
}> = ({control}) => {
  const name = 'insuranceForm';
  const {fields, insert, remove} = useFieldArray({
    control,
    name,
  });

  const styles = formStyles();

  return (
    <View style={styles.container}>
      {fields.map((field, index) => {
        const nameRef = `${name}.${index}` as const;

        return (
          <React.Fragment key={field.id}>
            <FormNestedHeader
              removeThumbBtn
              showSeperator={!!index}
              title={`Insurance provider ${fields.length > 1 ? index + 1 : ''}`}
            />
            <InsuranceProviderTypeSelectInput
              control={control}
              name={`${nameRef}.type`}
            />
            <FormFieldController
              name={`${nameRef}.provider`}
              control={control}
              // eslint-disable-next-line react/no-unstable-nested-components
              Field={({
                onChange,
                value: selectedItem,
              }: SelectItemFieldControls) => {
                return (
                  <AppSelectInput
                    label="Insurance provider"
                    placeholder="Select provider"
                    onChange={onChange}
                    value={selectedItem?.value}
                    selectOptions={[]}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.coverage`}
              control={control}
              // eslint-disable-next-line react/no-unstable-nested-components
              Field={({
                onChange,
                value: selectedItem,
              }: SelectItemFieldControls) => {
                return (
                  <AppSelectInput
                    label="Insurance coverage"
                    placeholder="Select coverage"
                    onChange={onChange}
                    value={selectedItem?.value}
                    selectOptions={[]}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.insuranceNumber`}
              control={control}
              // eslint-disable-next-line react/no-unstable-nested-components
              Field={({onChange, value}: InputFieldControls) => {
                return (
                  <AppTextInput
                    label="Insurance number"
                    placeholder="Enter insurance number "
                    onChangeText={onChange}
                    value={value}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.registrationType`}
              control={control}
              // eslint-disable-next-line react/no-unstable-nested-components
              Field={({
                onChange,
                value: selectedItem,
              }: SelectItemFieldControls) => {
                return (
                  <AppSelectInput
                    label="Registration type"
                    placeholder="Select registration type"
                    onChange={onChange}
                    value={selectedItem?.value}
                    selectOptions={[]}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.startDate`}
              control={control}
              // eslint-disable-next-line react/no-unstable-nested-components
              Field={({onChange, value}) => {
                return (
                  <AppDateTimeInput
                    label="Start date"
                    placeholder="Select start date"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />
            <FormFieldController
              name={`${nameRef}.endDate`}
              control={control}
              // eslint-disable-next-line react/no-unstable-nested-components
              Field={({onChange, value}: DateTimeFieldControls) => {
                return (
                  <AppDateTimeInput
                    label="End date"
                    placeholder="Select end date"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />

            <FormNestedFooter
              addBtnTitle={'Add Provider'}
              onAddPress={() =>
                insert(index + 1, defaultInsuranceProviderValues)
              }
              onRemovePress={() => remove(index)}
              removeDeleteBtn={!index}
            />
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default InsuranceProviderDetails;
