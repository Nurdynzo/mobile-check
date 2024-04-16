import * as z from 'zod';
import {selectedItemValidation} from '../../../../utils/schema';

export const itemFormSchema = z.object({
  type: selectedItemValidation({
    params: {required_error: 'Please select an item'},
  }),
  quantity: selectedItemValidation({
    params: {required_error: 'Quantity is required'},
  }),
});

export const createAppointmentSchema = z.object({
  paymentMode: z.string().min(1, {message: 'Payment mode is required'}),
  items: z
    .array(itemFormSchema)
    .min(1, {message: 'Please add atleast one item'}),
  isServiceOnCredit: z.boolean().optional(),
});

export type itemFormSchema = z.infer<typeof itemFormSchema>;

export type createAppointmentSchema = z.infer<typeof createAppointmentSchema>;
