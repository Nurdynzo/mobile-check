/* eslint-disable react/no-unstable-nested-components */
import {AddIcon} from '@/assets/svg';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {InvoiceItemsForPricingSelectInput} from '@/components/inputs/form-select-input';
import {useColors} from '@/hooks/useColors';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent} from 'react';
import {useForm} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import {itemDefaultValues} from '../../defaultValues';
import {itemFormSchema} from '../../schema';
import PriceQualitySelectInput from '../price-quality-select-input';
import {addItemFormStyles} from './styles';

const AddItemForm: FunctionComponent<{
  onAddItemSubmit?: (values: itemFormSchema) => void;
}> = ({onAddItemSubmit = () => null}) => {
  const {handleSubmit, control, reset, watch} = useForm<itemFormSchema>({
    defaultValues: itemDefaultValues,
    resolver: zodResolver(itemFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const {colors} = useColors();

  const handleAdd = (data: itemFormSchema) => {
    onAddItemSubmit(data);
    reset();
  };

  const styles = addItemFormStyles({colors});

  return (
    <View style={styles.container}>
      <InvoiceItemsForPricingSelectInput name={'type'} control={control} />
      <FormFieldController
        name={'quantity'}
        control={control}
        Field={({onChange, value: selectedItem}) => {
          return (
            <View style={styles.quantitySubmitConatainer}>
              <View style={styles.quantityContainer}>
                <PriceQualitySelectInput
                  onChange={onChange}
                  value={selectedItem?.value}
                  price={
                    watch('type')?.data?.amount?.amount &&
                    selectedItem &&
                    `${Number(
                      watch('type')?.data?.amount?.amount * selectedItem.data,
                    ).toFixed(2)}`
                  }
                  selectTitle="Select quantity"
                />
              </View>
              <TouchableOpacity
                onPress={handleSubmit(handleAdd)}
                style={styles.submitBtn}>
                <AddIcon />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default AddItemForm;
