import {optionalStringValidation} from '@/utils/schema';
import {z} from 'zod';

export const insuranceDetailsFormSchema = z.object({
  type: z
    .string({required_error: 'Insurance provider type is required'})
    .min(3),
  provider: z.string({required_error: 'Insurance provider is required'}).min(3),
  coverage: z.string({required_error: 'Insurance coverage is required'}).min(3),
  insuranceNumber: z
    .string({required_error: 'Insurance number is required'})
    .min(3),
  registrationType: z
    .string({required_error: 'registration type is required'})
    .min(3),
  startDate: z.date({required_error: 'Start date is required'}),
  endDate: z.date({required_error: 'End date is required'}),
  status: optionalStringValidation,
});

export type InsuranceDetailsFormSchema = z.infer<
  typeof insuranceDetailsFormSchema
>;
