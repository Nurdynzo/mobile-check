import React, {FunctionComponent} from 'react';
import {FieldArrayWithId} from 'react-hook-form';
import {View} from 'react-native';
import {AppText} from '../../../../../../components/common';
import {createAppointmentSchema} from '../../schema';
import BillItemCard from '../../../../../../components/cards/bill-item-card';
import {selectedItemsStyles} from './styles';

const SelectedItems: FunctionComponent<{
  fields: FieldArrayWithId<createAppointmentSchema, 'items', 'id'>[];
  onRemove: (index: number) => void;
}> = ({fields, onRemove}) => {
  const styles = selectedItemsStyles();

  return (
    <View style={styles.container}>
      <AppText
        text={`Selected items (${fields.length})`}
        type="label_semibold"
        color="text300"
      />
      {fields.map((item, index) => {
        return (
          <BillItemCard
            discountName={item?.type?.data?.discountName}
            onDelete={() => onRemove(index)}
            key={item?.id}
            name={item?.type?.value?.toString()}
            price={
              item?.type &&
              item?.quantity &&
              `₦${(
                Number(item?.type?.data?.amount?.amount) *
                Number(item?.quantity?.data)
              ).toFixed(2)}`
            }
            quality={item?.quantity?.data}
          />
        );
      })}
    </View>
  );
};

export default SelectedItems;
