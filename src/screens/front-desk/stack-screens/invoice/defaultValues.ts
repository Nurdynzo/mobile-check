import {PaymentTypes} from '../../../../state/services/invoiceApi';
import {NO_SELECTED_ITEM} from '../../../../types/selectItemsheet';
import {createAppointmentSchema, itemFormSchema} from './schema';

export const quantities = [
  {item: {id: '1', value: '1x', data: 1}},
  {item: {id: '2', value: '2x', data: 2}},
  {item: {id: '3', value: '3x', data: 3}},
  {item: {id: '4', value: '4x', data: 4}},
  {item: {id: '5', value: '5x', data: 5}},
  {item: {id: '6', value: '6x', data: 6}},
];

export const itemDefaultValues: itemFormSchema = {
  type: NO_SELECTED_ITEM,
  quantity: quantities[0].item,
};

export const defaultValues: createAppointmentSchema = {
  items: [],
  paymentMode: 'Wallet' as PaymentTypes,
  isServiceOnCredit: false,
};
